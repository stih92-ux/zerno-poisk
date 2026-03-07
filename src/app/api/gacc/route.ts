import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60;

// ==================== Types ====================

interface GACCRow {
  corpNameMo: string;
  corpNameEn: string;
  corpAddrNameMo: string;
  chinaRegNo: string;
  overseasOfficialRegNo: string;
  prodNameCn: string;
  prodNameEn: string;
  validFrom: string;
  validTo: string;
  corpTypeNameEn: string;
  corpContactTel: string;
  corpContactEmail: string;
}

interface GACCResponse {
  code: number;
  data?: {
    rows: GACCRow[];
    total: number;
  };
}

interface CacheEntry {
  data: GACCRow[];
  timestamp: number;
}

// ==================== Cache ====================

const cache = new Map<string, CacheEntry>();
const CACHE_TTL = 60 * 60 * 1000; // 1 hour

function getCacheKey(query?: string): string {
  return query ? `gacc:${query.toLowerCase()}` : "gacc:all";
}

function isCacheValid(entry: CacheEntry): boolean {
  return Date.now() - entry.timestamp < CACHE_TTL;
}

// ==================== Helpers ====================

function cleanCompanyName(name: string): string {
  // Remove common Russian legal entity prefixes
  const prefixes = ["ООО", "АО", "ПАО", "ЗАО", "ИП", "СПК", "КФХ"];
  let cleaned = name.trim();

  for (const prefix of prefixes) {
    const regex = new RegExp(`^${prefix}\\s+`, "i");
    cleaned = cleaned.replace(regex, "").trim();
  }

  return cleaned;
}

async function fetchFromChina(
  pageSize: number,
  pageNum: number,
  corpNameMo?: string
): Promise<GACCRow[]> {
  const url = "https://scintl.chinaport.gov.cn/aprwebserver/publicity/list";

  const headers = {
    "Content-Type": "application/json",
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    "Origin": "https://scintl.chinaport.gov.cn",
    "Referer":
      "https://scintl.chinaport.gov.cn/aprwebserver/pages/apr/public/html/companyList.html",
  };

  const body = {
    pageSize,
    pageNum,
    countryCode: "643", // Russia
    prodTypeCode: "08", // Grain
    corpNameMo: corpNameMo || "%",
  };

  let lastError: Error | null = null;
  const maxRetries = 2;
  const retryDelay = 2000; // 2 seconds

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      let finalUrl = url;
      const proxyUrl = process.env.SITE_FSA_PROXY_URL;

      const fetchOptions: RequestInit = {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      };

      if (proxyUrl) {
        // If proxy is configured, we can't use it directly in fetch
        // But we can pass it to the request. This is a limitation of Node.js fetch.
        // For production, consider using a proxy service or request library.
      }

      const response = await fetch(finalUrl, fetchOptions);

      if (!response.ok) {
        throw new Error(
          `China API returned ${response.status}: ${response.statusText}`
        );
      }

      const data: GACCResponse = await response.json();

      if (!data.data || !Array.isArray(data.data.rows)) {
        throw new Error("Invalid response format from China API");
      }

      return data.data.rows;
    } catch (e: any) {
      lastError = e;

      if (attempt < maxRetries) {
        await new Promise((resolve) => setTimeout(resolve, retryDelay));
      }
    }
  }

  throw lastError || new Error("Failed to fetch from China API after retries");
}

// ==================== Main Handler ====================

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get("query");
    const allParam = searchParams.get("all");

    const cacheKey = getCacheKey(query || (allParam ? "" : undefined));
    const cached = cache.get(cacheKey);

    if (cached && isCacheValid(cached)) {
      return NextResponse.json({
        success: true,
        data: cached.data,
        total: cached.data.length,
        fromCache: true,
      });
    }

    let rows: GACCRow[] = [];

    if (allParam === "true") {
      // Fetch all Russian grain companies with pagination
      let pageNum = 1;
      const pageSize = 100;
      let hasMore = true;

      while (hasMore && pageNum <= 10) {
        // Safety limit: max 1000 records
        try {
          const pageData = await fetchFromChina(pageSize, pageNum);
          if (!pageData || pageData.length === 0) {
            hasMore = false;
          } else {
            rows = rows.concat(pageData);
            pageNum++;
          }
        } catch (e) {
          // Continue with partial data if one page fails
          hasMore = false;
        }
      }
    } else if (query) {
      // Search by company name
      const searchTerm = `%${query}%`;
      const pageData = await fetchFromChina(100, 1, searchTerm);
      rows = pageData || [];
    } else {
      return NextResponse.json(
        { error: "Specify ?query=NAME or ?all=true" },
        { status: 400 }
      );
    }

    // Cache the results
    cache.set(cacheKey, {
      data: rows,
      timestamp: Date.now(),
    });

    return NextResponse.json({
      success: true,
      data: rows,
      total: rows.length,
      fromCache: false,
    });
  } catch (e: any) {
    console.error("GACC API error:", e);
    return NextResponse.json(
      {
        error: e.message || "Failed to fetch GACC data",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      query,
      pageNum = 1,
      pageSize = 20,
    } = body;

    if (!query) {
      return NextResponse.json(
        { error: "Specify query parameter", items: [] },
        { status: 400 }
      );
    }

    const cacheKey = getCacheKey(query);
    const cached = cache.get(cacheKey);

    if (cached && isCacheValid(cached)) {
      const start = (pageNum - 1) * pageSize;
      const end = start + pageSize;
      const paged = cached.data.slice(start, end);

      return NextResponse.json({
        items: paged,
        total: cached.data.length,
        page: pageNum,
        pageSize,
        fromCache: true,
      });
    }

    const searchTerm = `%${query}%`;
    const rows = await fetchFromChina(pageSize, pageNum, searchTerm);

    // Cache full results
    cache.set(cacheKey, {
      data: rows,
      timestamp: Date.now(),
    });

    return NextResponse.json({
      items: rows,
      total: rows.length,
      page: pageNum,
      pageSize,
      fromCache: false,
    });
  } catch (e: any) {
    console.error("GACC API error:", e);
    return NextResponse.json(
      {
        error: e.message || "Failed to fetch GACC data",
        items: [],
      },
      { status: 500 }
    );
  }
}
