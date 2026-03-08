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
  if (diff < 60) return "сейчас";
  if (diff < 3600) return `${Math.floor(diff / 60)}м`;
  if (diff < 86400) return `${Math.floor(diff / 3600)}ч`;
  const d = Math.floor(diff / 86400);
  return `${d}д`;
}

export default function NewsWidget() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchNews = useCallback(async () => {
    try {
      const res = await fetch("/api/news");
      if (!res.ok) return;
      const data = await res.json();
      if (data.items?.length) setNews(data.items);
    } catch {
      /* silent */
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchNews();
    const id = setInterval(fetchNews, 15 * 60 * 1000);
    return () => clearInterval(id);
  }, [fetchNews]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
      {/* News feed — 3 columns */}
      <div className="lg:col-span-3 rounded-xl border border-gray-100 dark:border-gray-800 p-4">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Новости АПК</h3>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="animate-pulse h-4 bg-gray-100 dark:bg-gray-800 rounded" />
            ))}
          </div>
        ) : news.length === 0 ? (
          <p className="text-xs text-gray-400">Загрузка новостей...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5">
            {news.slice(0, 10).map((item, i) => (
              <a
                key={`${item.link}-${i}`}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-baseline gap-1.5 py-1 group min-w-0"
              >
                <span className="flex-shrink-0 text-[10px] text-gray-300 dark:text-gray-600 tabular-nums">
                  {timeAgo(item.pubDate)}
                </span>
                <span className="text-[12px] text-gray-700 dark:text-gray-300 leading-tight truncate group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Telegram channel promo — 1 column */}
      <div className="lg:col-span-1 rounded-xl bg-gradient-to-b from-blue-50 to-blue-100/50 dark:from-blue-900/20 dark:to-blue-900/10 border border-blue-100 dark:border-blue-800/30 p-4 flex flex-col items-center justify-center text-center">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center mb-3">
          <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
          </svg>
        </div>
        <p className="text-sm font-semibold text-gray-900 dark:text-white mb-1">@agro_vestnik</p>
        <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-3 leading-tight">
          Новости зернового рынка, аналитика и цены каждый день
        </p>
        <a
          href="https://t.me/agro_vestnik"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-blue-500 hover:bg-blue-600 px-4 py-1.5 text-[12px] font-medium text-white transition-colors"
        >
          Подписаться
        </a>
      </div>
    </div>
  );
}
