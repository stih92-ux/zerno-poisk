import { NextResponse } from "next/server";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

// RSS feeds to aggregate
const RSS_FEEDS = [
  {
    url: "https://www.agroinvestor.ru/feed/public-agronews.xml",
    source: "Агроинвестор",
  },
  {
    url: "https://www.zol.ru/n/rss/",
    source: "Зерно Онлайн",
  },
  {
    url: "https://agrovesti.net/feed",
    source: "АгроВести",
  },
];

// In-memory cache
let cachedNews: NewsItem[] = [];
let cacheTime = 0;
const CACHE_TTL = 15 * 60 * 1000; // 15 minutes

function extractItems(xml: string, source: string): NewsItem[] {
  const items: NewsItem[] = [];

  // Match <item>...</item> blocks
  const itemRegex = /<item[^>]*>([\s\S]*?)<\/item>/gi;
  let match;

  while ((match = itemRegex.exec(xml)) !== null) {
    const block = match[1];

    const titleMatch = block.match(/<title[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/title>/i);
    const linkMatch = block.match(/<link[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/link>/i);
    const dateMatch = block.match(/<pubDate[^>]*>(?:<!\[CDATA\[)?([\s\S]*?)(?:\]\]>)?<\/pubDate>/i);

    if (titleMatch && linkMatch) {
      items.push({
        title: titleMatch[1].trim().replace(/<[^>]+>/g, ""),
        link: linkMatch[1].trim().replace(/<[^>]+>/g, ""),
        pubDate: dateMatch ? dateMatch[1].trim() : new Date().toISOString(),
        source,
      });
    }
  }

  return items;
}

async function fetchFeed(feedUrl: string, source: string): Promise<NewsItem[]> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 8000);

    const res = await fetch(feedUrl, {
      signal: controller.signal,
      headers: {
        "User-Agent": "ZernoPoisk/1.0 RSS Reader",
        Accept: "application/rss+xml, application/xml, text/xml",
      },
    });

    clearTimeout(timeout);

    if (!res.ok) return [];

    const xml = await res.text();
    return extractItems(xml, source);
  } catch {
    console.warn(`Failed to fetch RSS: ${feedUrl}`);
    return [];
  }
}

async function getAllNews(): Promise<NewsItem[]> {
  const now = Date.now();

  // Return cached data if fresh
  if (cachedNews.length > 0 && now - cacheTime < CACHE_TTL) {
    return cachedNews;
  }

  // Fetch all feeds in parallel
  const results = await Promise.allSettled(
    RSS_FEEDS.map((f) => fetchFeed(f.url, f.source))
  );

  const allItems: NewsItem[] = [];
  for (const r of results) {
    if (r.status === "fulfilled") {
      allItems.push(...r.value);
    }
  }

  // Sort by date (newest first)
  allItems.sort((a, b) => {
    const da = new Date(a.pubDate).getTime() || 0;
    const db = new Date(b.pubDate).getTime() || 0;
    return db - da;
  });

  // Keep top 30
  const top = allItems.slice(0, 30);

  if (top.length > 0) {
    cachedNews = top;
    cacheTime = now;
  }

  return top.length > 0 ? top : cachedNews;
}

export async function GET() {
  try {
    const news = await getAllNews();
    return NextResponse.json(
      { items: news, updatedAt: new Date(cacheTime).toISOString() },
      {
        headers: {
          "Cache-Control": "public, s-maxage=900, stale-while-revalidate=1800",
        },
      }
    );
  } catch (e) {
    console.error("News API error:", e);
    return NextResponse.json({ items: [], updatedAt: null }, { status: 500 });
  }
}
