"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { PRODUCTS, PRODUCT_ICONS, COUNTRIES } from "@/lib/data-refs";

interface ComtradeRecord {
  refYear: number;
  reporterDesc: string;
  partnerDesc: string;
  cmdDesc: string;
  flowDesc: string;
  primaryValue: number;
  netWgt?: number;
  _from?: string;
  _to?: string;
  _mirror?: boolean;
}

interface SearchResult {
  records: ComtradeRecord[];
  total: number;
  error?: string;
}

const formatNumber = (value: number): string => {
  if (value === 0) return "0";
  if (value >= 1_000_000) {
    return `${(value / 1_000_000).toFixed(1)}${String.fromCharCode(160)}млн`;
  }
  if (value >= 1_000) {
    return `${(value / 1_000).toFixed(1)}${String.fromCharCode(160)}тыс.`;
  }
  return value.toString();
};

export default function ComtradePage() {
  const [selectedProducts, setSelectedProducts] = useState<string[]>(["wheat"]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>(["RU"]);
  const [flow, setFlow] = useState<"import" | "export" | "both">("both");
  const [results, setResults] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    if (selectedProducts.length === 0 || selectedCountries.length === 0) {
      setError("Выберите хотя бы один товар и одну страну");
      return;
    }

    setLoading(true);
    setError(null);
    setResults(null);

    try {
      const productsParam = selectedProducts.join(",");
      const countriesParam = selectedCountries.join(",");

      const url = new URL("/api/comtrade", window.location.origin);
      url.searchParams.set("products", productsParam);
      url.searchParams.set("countries", countriesParam);
      url.searchParams.set("flow", flow);

      const response = await fetch(url.toString());
      const data = (await response.json()) as SearchResult;

      if (response.ok) {
        setResults(data);
      } else {
        setError(data.error || "Ошибка при загрузке данных");
      }
    } catch {
      setError("Не удалось подключиться к API");
    } finally {
      setLoading(false);
    }
  };

  const toggleProduct = (code: string) => {
    setSelectedProducts((prev) =>
      prev.includes(code) ? prev.filter((p) => p !== code) : [...prev, code]
    );
  };

  const toggleCountry = (code: string) => {
    setSelectedCountries((prev) =>
      prev.includes(code) ? prev.filter((c) => c !== code) : [...prev, code]
    );
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#1a2e1a' }}>
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-bold text-white">ЗерноПоиск</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/search" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Декларации</Link>
            <Link href="/prices" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Цены</Link>
            <Link href="/comtrade" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Comtrade</Link>
            <Link href="/gacc" className="text-sm font-medium text-white/70 hover:text-white transition-colors">GACC</Link>
            <Link href="/farmers" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Фермеры</Link>
            <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Блог</Link>
            <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Бот</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <h1 className="text-3xl font-bold text-slate-900 mb-2">📊 Экспорт и импорт зерна</h1>
        <p className="text-slate-600 mb-8">
          Данные ООН Comtrade о торговле зерновыми культурами между странами
        </p>

        {/* Filters Card */}
        <div className="card mb-6 space-y-6">
          {/* Products Selection */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900 mb-3">Выберите товары</h2>
            <div className="flex flex-wrap gap-2">
              {PRODUCTS.filter(
                (p) =>
                  ["wheat", "rye", "barley", "oats", "corn", "rice", "buckwheat", "soy", "sunflower", "peas"].includes(
                    p.code
                  )
              ).map((product) => (
                <button
                  key={product.code}
                  onClick={() => toggleProduct(product.code)}
                  className={
                    selectedProducts.includes(product.code)
                      ? "chip-active"
                      : "chip-inactive"
                  }
                >
                  <span>{PRODUCT_ICONS[product.code as keyof typeof PRODUCT_ICONS] || "🌾"}</span>
                  <span>{product.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Countries Selection */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900 mb-3">Выберите страны</h2>
            <div className="flex flex-wrap gap-2">
              {COUNTRIES.map((country) => (
                <button
                  key={country.code}
                  onClick={() => toggleCountry(country.code)}
                  className={
                    selectedCountries.includes(country.code)
                      ? "chip-active"
                      : "chip-inactive"
                  }
                >
                  <span>{country.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Flow Selection */}
          <div>
            <h2 className="text-sm font-semibold text-slate-900 mb-3">Направление торговли</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setFlow("import")}
                className={
                  flow === "import"
                    ? "chip-active"
                    : "chip-inactive"
                }
              >
                📥 Импорт
              </button>
              <button
                onClick={() => setFlow("export")}
                className={
                  flow === "export"
                    ? "chip-active"
                    : "chip-inactive"
                }
              >
                📤 Экспорт
              </button>
              <button
                onClick={() => setFlow("both")}
                className={flow === "both" ? "chip-active" : "chip-inactive"}
              >
                ↔️ Всё
              </button>
            </div>
          </div>

          {/* Search Button */}
          <button onClick={handleSearch} disabled={loading} className="btn-primary w-full">
            {loading ? "⏳ Загружаем данные..." : "🔍 Поиск"}
          </button>
        </div>

        {/* Error Message */}
        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 mb-6">
            {error}
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="text-center py-20">
            <div className="animate-spin text-4xl mb-4">⏳</div>
            <p className="text-slate-600">Загружаем данные из ООН Comtrade...</p>
          </div>
        )}

        {/* Results */}
        {results && !loading && (
          <div className="card space-y-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-4">
              <h2 className="text-lg font-semibold text-slate-900">
                Результаты: {results.total} записей
              </h2>
              <span className="text-xs text-slate-500">Последние 4 года, отсортировано по объёму</span>
            </div>

            {results.total === 0 ? (
              <p className="text-center py-8 text-slate-400">Нет данных по выбранным критериям</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left text-xs font-semibold text-slate-600 border-b border-slate-200">
                      <th className="pb-3 pr-4">Год</th>
                      <th className="pb-3 pr-4">От → К</th>
                      <th className="pb-3 pr-4">Товар</th>
                      <th className="pb-3 pr-4 text-right">Объём (тонны)</th>
                      <th className="pb-3 text-right">Стоимость ($)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {results.records.map((record, idx) => (
                      <tr
                        key={idx}
                        className="border-b border-slate-100 hover:bg-primary-50 transition-colors"
                      >
                        <td className="py-3 pr-4 font-semibold text-slate-900">
                          {record.refYear}
                        </td>
                        <td className="py-3 pr-4">
                          <div className="text-sm">
                            <span className="font-medium text-slate-900">{record._from || record.reporterDesc}</span>
                            <span className="text-slate-400 mx-1">→</span>
                            <span className="text-slate-700">{record._to || record.partnerDesc}</span>
                          </div>
                          {record._mirror && (
                            <span className="text-xs text-slate-400 italic">(зеркальные данные)</span>
                          )}
                        </td>
                        <td className="py-3 pr-4">
                          <div>
                            <span className="font-medium text-slate-900">{record.cmdDesc}</span>
                            <div className="text-xs text-slate-500 capitalize">
                              {record.flowDesc === "Import" ? "Импорт" : "Экспорт"}
                            </div>
                          </div>
                        </td>
                        <td className="py-3 pr-4 text-right">
                          {record.netWgt ? (
                            <div>
                              <div className="font-semibold text-slate-900">
                                {formatNumber(record.netWgt)}
                              </div>
                              <div className="text-xs text-slate-500">тонн</div>
                            </div>
                          ) : (
                            <span className="text-slate-400">—</span>
                          )}
                        </td>
                        <td className="py-3 text-right">
                          <div className="font-semibold text-slate-900">
                            ${formatNumber(record.primaryValue)}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* No Results Yet */}
        {!results && !loading && (
          <div className="text-center py-16">
            <p className="text-slate-400 text-lg">Нажмите кнопку поиска, чтобы загрузить данные</p>
          </div>
        )}
      </div>

      {/* SEO Text */}
      <section className="py-16 mt-8" style={{ backgroundColor: '#f0f2ed' }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1c1c1c' }}>Данные Comtrade: статистика мировой торговли зерном</h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: '#444' }}>
            <p>UN Comtrade — это официальная база данных ООН по международной торговле товарами. Она содержит информацию об экспорте и импорте зерна более чем 200 стран. Вы можете проследить объёмы и стоимость торговли пшеницей, ячменём, кукурузой и другими культурами между странами за последние 4 года.</p>
            <p>Данные полезны для аналитиков рынка, экспортёров и импортёров, которым нужно понять глобальные тренды. Например, вы можете увидеть, сколько пшеницы Россия экспортирует в Европу и Азию, или как меняются мировые цены на фоне экспортных объёмов.</p>
            <p>На этой странице вы выбираете интересующие культуры и страны, а затем получаете таблицу с объёмами в тоннах и стоимостью в долларах. Сочетайте эти данные с локальными ценами на странице <a href="/prices" style={{ color: '#2e7d32', textDecoration: 'underline' }}>Цены</a> для полной картины рынка.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a2e1a' }} className="py-12 mt-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-8 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌾</span>
                <span className="text-lg font-bold text-white">ЗерноПоиск</span>
              </div>
              <p className="text-white/60 text-sm">Поиск зерновых деклараций<br/>и аналитика рынка</p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <Link href="/search" className="text-sm text-white/70 hover:text-white">Декларации</Link>
                <Link href="/prices" className="text-sm text-white/70 hover:text-white">Цены</Link>
                <Link href="/comtrade" className="text-sm text-white/70 hover:text-white">Comtrade</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/gacc" className="text-sm text-white/70 hover:text-white">GACC</Link>
                <Link href="/farmers" className="text-sm text-white/70 hover:text-white">Фермеры</Link>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white">Блог</Link>
              </div>
            </div>
            <div>
              <p className="text-sm text-white/70">Telegram: <a href="https://t.me/agro_analizbot" className="text-white hover:underline">@agro_analizbot</a></p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            © 2026 ЗерноПоиск
          </div>
        </div>
      </footer>
    </div>
  );
}
