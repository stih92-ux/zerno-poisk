"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface PriceData {
  moex: any[];
  zol: any[];
  idk: any[];
  error?: string;
}

export default function PricesPage() {
  const [data, setData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchPrices = async () => {
    setLoading(true);
    try {
      const resp = await fetch("/api/prices");
      const json = await resp.json();
      setData(json);
    } catch {
      setData({ moex: [], zol: [], idk: [], error: "Ошибка загрузки цен" });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchPrices(); }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-bold text-slate-900">ЗерноПоиск</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/search" className="text-sm font-medium text-slate-600 hover:text-primary-600">Поиск</Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-slate-900">📊 Цены на зерно</h1>
          <button onClick={fetchPrices} disabled={loading} className="btn-secondary text-sm">
            {loading ? "Загрузка..." : "🔄 Обновить"}
          </button>
        </div>

        {loading && (
          <div className="text-center py-20 text-slate-400">
            <div className="animate-spin text-4xl mb-4">⏳</div>
            <p>Загружаем цены из MOEX, ZOL.RU и IDK.RU...</p>
          </div>
        )}

        {data?.error && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 mb-6">{data.error}</div>
        )}

        {data && !loading && (
          <div className="grid gap-8 lg:grid-cols-2">
            {/* MOEX */}
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">🏛 Биржа MOEX</h2>
              {data.moex.length === 0 ? (
                <p className="text-sm text-slate-400">Нет данных</p>
              ) : (
                <div className="space-y-3">
                  {data.moex.map((p: any, i: number) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm font-medium text-slate-700">{p.name}</span>
                      <span className="text-sm font-semibold text-slate-900">{p.price ? `${p.price} ₽/т` : "—"}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* ZOL */}
            <div className="card">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">📈 Региональные цены (ZOL.RU)</h2>
              {data.zol.length === 0 ? (
                <p className="text-sm text-slate-400">Нет данных</p>
              ) : (
                <div className="space-y-3">
                  {data.zol.map((p: any, i: number) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                      <span className="text-sm font-medium text-slate-700">{p.name}</span>
                      <div className="text-right">
                        <span className="text-sm font-semibold text-slate-900">{p.price ? `${p.price} ₽/т` : "—"}</span>
                        {p.trend && <span className={`ml-2 text-xs ${p.trend > 0 ? "text-green-600" : "text-red-600"}`}>{p.trend > 0 ? "+" : ""}{p.trend}%</span>}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* IDK */}
            <div className="card lg:col-span-2">
              <h2 className="text-lg font-semibold text-slate-900 mb-4">💰 Объявления (IDK.RU)</h2>
              {data.idk.length === 0 ? (
                <p className="text-sm text-slate-400">Нет данных</p>
              ) : (
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="text-left text-xs text-slate-500 border-b border-slate-200">
                        <th className="pb-2 pr-4">Тип</th>
                        <th className="pb-2 pr-4">Культура</th>
                        <th className="pb-2 pr-4">Цена</th>
                        <th className="pb-2">Регион</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.idk.map((p: any, i: number) => (
                        <tr key={i} className="border-b border-slate-50">
                          <td className="py-2 pr-4">{p.type === "buy" ? "🟢 Покупка" : "🔴 Продажа"}</td>
                          <td className="py-2 pr-4 font-medium">{p.product}</td>
                          <td className="py-2 pr-4 font-semibold">{p.price ? `${p.price} ₽/т` : "—"}</td>
                          <td className="py-2 text-slate-500">{p.region || "—"}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
