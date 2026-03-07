import { NextRequest, NextResponse } from "next/server";
import path from "path";
import fs from "fs";

export const dynamic = "force-dynamic";

// Type for farmer record
interface Farmer {
  name: string;
  district: string;
  region: string;
  rayon: string;
  address: string;
  contact1: string;
  phone1: string;
  phone2: string;
  email: string;
  holding: string;
  land_total: number;
  wheat_winter: number;
  wheat_spring: number;
  barley_winter: number;
  barley_spring: number;
  corn_grain: number;
  sunflower: number;
  soy: number;
  specialization: string;
}

// District name mapping
const DISTRICT_MAP: Record<string, string> = {
  DFO: "Дальневосточный",
  PFO: "Приволжский",
  SZFO: "Северо-Западный",
  SKFO: "Северо-Кавказский",
  SFO: "Сибирский",
  URFO: "Уральский",
  CFO: "Центральный",
  UFO: "Южный",
};

// Product field mapping
const PRODUCT_FIELDS: Record<string, keyof Farmer> = {
  wheat: "wheat_winter", // or wheat_spring
  barley: "barley_winter", // or barley_spring
  corn: "corn_grain",
  sunflower: "sunflower",
  soy: "soy",
};

async function loadFarmersData(): Promise<Farmer[]> {
  try {
    // Try to load from /data/farmers.json (public/data directory)
    const publicDataPath = path.join(process.cwd(), "public", "data", "farmers.json");

    if (fs.existsSync(publicDataPath)) {
      const data = fs.readFileSync(publicDataPath, "utf-8");
      return JSON.parse(data);
    }
  } catch (error) {
    console.error("Error loading farmers data:", error);
  }

  return [];
}

function searchFarmers(
  farmers: Farmer[],
  q?: string,
  products?: string[],
  federalDistricts?: string[],
  regions?: string[],
  minArea?: number
): Farmer[] {
  let filtered = farmers;

  // Text search
  if (q && q.trim()) {
    const searchLower = q.toLowerCase();
    filtered = filtered.filter((f) => {
      const searchableText = [
        f.name,
        f.region,
        f.rayon,
        f.specialization,
        f.contact1,
      ]
        .join(" ")
        .toLowerCase();
      return searchableText.includes(searchLower);
    });
  }

  // Filter by federal districts
  if (federalDistricts && federalDistricts.length > 0) {
    filtered = filtered.filter((f) =>
      federalDistricts.includes(f.district)
    );
  }

  // Filter by regions
  if (regions && regions.length > 0) {
    filtered = filtered.filter((f) => regions.includes(f.region));
  }

  // Filter by minimum land area
  if (minArea && minArea > 0) {
    filtered = filtered.filter((f) => f.land_total >= minArea);
  }

  // Filter by products (wheat, barley, corn, sunflower, soy)
  if (products && products.length > 0) {
    filtered = filtered.filter((f) => {
      return products.some((product) => {
        // Check if farmer grows any wheat variety
        if (product === "wheat") {
          return f.wheat_winter > 0 || f.wheat_spring > 0;
        }
        // Check if farmer grows any barley variety
        if (product === "barley") {
          return f.barley_winter > 0 || f.barley_spring > 0;
        }
        // Check direct product mapping
        const field = PRODUCT_FIELDS[product];
        if (field) {
          return (f[field] as number) > 0;
        }
        return false;
      });
    });
  }

  // Sort by land_total descending
  filtered.sort((a, b) => b.land_total - a.land_total);

  return filtered;
}

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  // Parse query parameters
  const q = searchParams.get("q") || "";
  const productsParam = searchParams.get("products") || "";
  const federalDistrictsParam = searchParams.get("fo") || "";
  const regionsParam = searchParams.get("regions") || "";
  const minAreaParam = searchParams.get("minArea");
  const pageParam = searchParams.get("page") || "0";
  const limitParam = searchParams.get("limit") || "20";

  const products = productsParam ? productsParam.split(",").filter(Boolean) : [];
  const federalDistricts = federalDistrictsParam
    ? federalDistrictsParam.split(",").filter(Boolean)
    : [];
  const regions = regionsParam ? regionsParam.split(",").filter(Boolean) : [];
  const minArea = minAreaParam ? parseInt(minAreaParam, 10) : undefined;
  const page = Math.max(0, parseInt(pageParam, 10));
  const limit = Math.max(1, Math.min(100, parseInt(limitParam, 10)));

  // Load farmers data
  const farmersData = await loadFarmersData();

  // Check if database is empty
  if (farmersData.length === 0) {
    return NextResponse.json(
      {
        farmers: [],
        total: 0,
        message: "База данных фермеров не загружена. Для использования требуется загрузить JSON файл в /public/data/farmers.json",
      },
      { status: 200 }
    );
  }

  // Search and filter
  const results = searchFarmers(
    farmersData,
    q,
    products,
    federalDistricts,
    regions,
    minArea
  );

  const total = results.length;
  const paginatedResults = results.slice(page * limit, (page + 1) * limit);

  return NextResponse.json({
    farmers: paginatedResults,
    total,
  });
}
