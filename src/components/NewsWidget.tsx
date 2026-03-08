"use client";

import { useEffect, useState, useCallback } from "react";

interface NewsItem {
  title: string;
  link: string;
  pubDate: string;
  source: string;
}

function timeAgo(dateStr: string): string {
  const now = Date.now();
  const date = new Date(dateStr).getTime();
  if (isNaN(date)) return "";

  const diff = Math.floor((now - date) / 1000);

  if (diff < 60) return "только что";
  if (diff < 3600) {
    const m = Math.floor(diff / 60);
    return `${m} мин назад`;
  }
  if (diff < 86400) {
    const h = Math.floor(diff / 3600);
    return `${h} ч назад`;
  }
  const d = Math.floor(diff / 86400);
  if (d === 1) return "вчера";
  return `${d} дн назад`;
}

const SOURCE_COLORS: Record<string, string> = {
  "Агроинвестор": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Зерно Онлайн": "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  "АгроВести": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
};

export default function NewsWidget() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  const fetchNews = useCallback(async () => {
    try {
      const res = await fetch("/api/news");
      if (!res.ok) return;
      const data = await res.json();
      if (data.items?.length) {
        setNews(data.items);
        setUpdatedAt(data.updatedAt);
      }
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    // Auto-refresh every 15 minutes
    const interval = setInterval(fetchNews, 15 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchNews]);

  if (loading) {
    return (
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Новости АПК</h3>
        </div>
        <div className="space-y-3">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="animate-pulse">
              <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-1.5" />
              <div className="h-2.5 bg-gray-100 dark:bg-gray-800 rounded w-1/2" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!news.length) {
    return (
      <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2 h-2 rounded-full bg-gray-400" />
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Новости АПК</h3>
        </div>
        <p className="text-sm text-gray-400 dark:text-gray-500">Новости загружаются...</p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          <h3 className="text-base font-semibold text-gray-900 dark:text-white">Новости АПК</h3>
        </div>
        {updatedAt && (
          <span className="text-[11px] text-gray-400 dark:text-gray-500">
            обновлено {timeAgo(updatedAt)}
          </span>
        )}
      </div>

      {/* News list */}
      <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1 scrollbar-thin">
        {news.slice(0, 10).map((item, i) => (
          <a
            key={`${item.link}-${i}`}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block group"
          >
            <div className="flex items-start gap-2">
              <span
                className={`flex-shrink-0 mt-0.5 text-[10px] font-medium px-1.5 py-0.5 rounded ${
                  SOURCE_COLORS[item.source] ||
                  "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}
              >
                {item.source}
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-[13px] text-gray-800 dark:text-gray-200 leading-snug group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors line-clamp-2">
                  {item.title}
                </p>
                <span className="text-[11px] text-gray-400 dark:text-gray-500 mt-0.5 block">
                  {timeAgo(item.pubDate)}
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-700 text-center">
        <span className="text-[11px] text-gray-400 dark:text-gray-500">
          Источники: Агроинвестор, Зерно Онлайн, АгроВести
        </span>
      </div>
    </div>
  );
}
