"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import {
  PRODUCTS,
  SEGMENTS,
  COUNTRIES,
  FEDERAL_DISTRICTS,
  REGIONS_DOPUSKA,
  DETAILED_REGIONS,
  PRODUCT_ICONS,
  REGIONS_PER_PAGE,
} from "@/lib/data-refs";
import type { Declaration } from "@/lib/fsa";

type GeoTab = "countries" | "fo" | "rd" | "regions";

export default function SearchPage() {
  // Фильтры
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedSegments, setSelectedSegments] = useState<string[]>([]);
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedFo, setSelectedFo] = useState<string[]>([]);
  const [selectedRd, setSelectedRd] = useState<string[]>([]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>([]);
  const [minVolume, setMinVolume] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  // Гео-панель
  const [geoTab, setGeoTab] = useState<GeoTab>("regions");
  const [geoOpen, setGeoOpen] = useState(false);
  const [regionPage, setRegionPage] = useState(0);

  // Результаты
  const [results, setResults] = useState<Declaration[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);



  // Toggle helper
  const toggle = (list: string[], setList: (v: string[]) => void, code: string) => {
    setList(list.includes(code) ? list.filter((c) => c !== code) : [...list, code]);
  };

  // Подсчёт гео-фильтров
  const geoCount = selectedCountries.length + selectedFo.length + selectedRd.length + selectedRegions.length;

  // Пагинация регионов
  const totalRegionPages = Math.ceil(DETAILED_REGIONS.length / REGIONS_PER_PAGE);
  const pagedRegions = DETAILED_REGIONS.slice(
    regionPage * REGIONS_PER_PAGE,
    (regionPage + 1) * REGIONS_PER_PAGE
  );

  // Поиск
  const doSearch = useCallback(
    async (searchPage = 0) => {
      if (selectedProducts.length === 0) {
        setError("Выберите хотя бы одну культуру");
        return;
      }
      setLoading(true);
      setError(null);
      setSearched(true);

      try {
        const resp = await fetch("/api/fsa/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            products: selectedProducts,
            regions: selectedRegions,
            segments: selectedSegments,
            minVolume: minVolume ? Number(minVolume) : undefined,
            dateFrom: dateFrom || undefined,
            dateTo: dateTo || undefined,
            page: searchPage,
            size: 10,
          }),
        });

        const data = await resp.json();
        if (data.error) {
          setError(translateError(data.error));
          if (data.items?.length) {
            setResults(data.items);
            setTotal(data.total || 0);
          }
        } else {
          setResults(data.items || []);
          setTotal(data.total || 0);
          setPage(searchPage);
        }
      } catch (e: any) {
        setError("Ошибка сети. Попробуйте ещё раз.");
      } finally {
        setLoading(false);
      }
    },
    [selectedProducts, selectedRegions, selectedSegments, minVolume, dateFrom, dateTo]
  );



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
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* ===== ФИЛЬТРЫ ===== */}
          <aside className="space-y-6">
            {/* Культуры */}
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Культуры {selectedProducts.length > 0 && <span className="badge-green ml-2">{selectedProducts.length}</span>}
              </h3>
              <div className="flex flex-wrap gap-2">
                {PRODUCTS.map((p) => (
                  <button
                    key={p.code}
                    onClick={() => toggle(selectedProducts, setSelectedProducts, p.code)}
                    className={selectedProducts.includes(p.code) ? "chip-active" : "chip-inactive"}
                  >
                    {PRODUCT_ICONS[p.code] || "🌾"} {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Сегменты */}
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Сегменты {selectedSegments.length > 0 && <span className="badge-blue ml-2">{selectedSegments.length}</span>}
              </h3>
              <div className="flex flex-wrap gap-2">
                {SEGMENTS.map((s) => (
                  <button
                    key={s.code}
                    onClick={() => toggle(selectedSegments, setSelectedSegments, s.code)}
                    className={selectedSegments.includes(s.code) ? "chip-active" : "chip-inactive"}
                  >
                    {s.name}
                  </button>
                ))}
              </div>
            </div>

            {/* География */}
            <div className="card">
              <button
                onClick={() => setGeoOpen(!geoOpen)}
                className="w-full flex items-center justify-between text-sm font-semibold text-slate-900"
              >
                <span>
                  География {geoCount > 0 && <span className="badge-amber ml-2">{geoCount}</span>}
                </span>
                <svg className={`w-5 h-5 text-slate-400 transition-transform ${geoOpen ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>
              </button>

              {geoOpen && (
                <div className="mt-4">
                  {/* Табы */}
                  <div className="flex gap-1 mb-4 bg-slate-100 rounded-lg p-1">
                    {([
                      { key: "regions" as GeoTab, label: "Регионы" },
                      { key: "fo" as GeoTab, label: "ФО" },
                      { key: "rd" as GeoTab, label: "Допуск" },
                      { key: "countries" as GeoTab, label: "Страны" },
                    ]).map((tab) => (
                      <button
                        key={tab.key}
                        onClick={() => setGeoTab(tab.key)}
                        className={`flex-1 rounded-md px-3 py-1.5 text-xs font-medium transition-all ${
                          geoTab === tab.key ? "bg-white text-slate-900 shadow-sm" : "text-slate-500 hover:text-slate-700"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {/* Страны */}
                  {geoTab === "countries" && (
                    <div className="flex flex-wrap gap-2">
                      {COUNTRIES.map((c) => (
                        <button key={c.code} onClick={() => toggle(selectedCountries, setSelectedCountries, c.code)}
                          className={selectedCountries.includes(c.code) ? "chip-active" : "chip-inactive"}>
                          {c.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Федеральные округа */}
                  {geoTab === "fo" && (
                    <div className="flex flex-wrap gap-2">
                      {FEDERAL_DISTRICTS.map((f) => (
                        <button key={f.code} onClick={() => toggle(selectedFo, setSelectedFo, f.code)}
                          className={selectedFo.includes(f.code) ? "chip-active" : "chip-inactive"}>
                          {f.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Регионы допуска */}
                  {geoTab === "rd" && (
                    <div className="flex flex-wrap gap-2">
                      {REGIONS_DOPUSKA.map((r) => (
                        <button key={r.code} onClick={() => toggle(selectedRd, setSelectedRd, r.code)}
                          className={selectedRd.includes(r.code) ? "chip-active" : "chip-inactive"}>
                          {r.name}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Субъекты РФ с пагинацией */}
                  {geoTab === "regions" && (
                    <>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {pagedRegions.map((r) => (
                          <button key={r.code} onClick={() => toggle(selectedRegions, setSelectedRegions, r.code)}
                            className={selectedRegions.includes(r.code) ? "chip-active" : "chip-inactive"}>
                            {r.name}
                          </button>
                        ))}
                      </div>
                      <div className="flex items-center justify-between">
                        <button
                          onClick={() => setRegionPage(Math.max(0, regionPage - 1))}
                          disabled={regionPage === 0}
                          className="text-xs font-medium text-primary-600 disabled:text-slate-300"
                        >
                          ← Назад
                        </button>
                        <span className="text-xs text-slate-400">{regionPage + 1} / {totalRegionPages}</span>
                        <button
                          onClick={() => setRegionPage(Math.min(totalRegionPages - 1, regionPage + 1))}
                          disabled={regionPage >= totalRegionPages - 1}
                          className="text-xs font-medium text-primary-600 disabled:text-slate-300"
                        >
                          Далее →
                        </button>
                      </div>
                    </>
                  )}

                  {/* Очистить */}
                  {geoCount > 0 && (
                    <button
                      onClick={() => {
                        setSelectedCountries([]);
                        setSelectedFo([]);
                        setSelectedRd([]);
                        setSelectedRegions([]);
                      }}
                      className="mt-3 text-xs text-red-500 hover:text-red-700"
                    >
                      Очистить географию
                    </button>
                  )}
                </div>
              )}
            </div>

            {/* Объём и даты */}
            <div className="card space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-500 mb-1">Мин. объём (тонн)</label>
                <input
                  type="number"
                  value={minVolume}
                  onChange={(e) => setMinVolume(e.target.value)}
                  placeholder="0"
                  className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Дата от</label>
                  <input type="date" value={dateFrom} onChange={(e) => setDateFrom(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-medium text-slate-500 mb-1">Дата до</label>
                  <input type="date" value={dateTo} onChange={(e) => setDateTo(e.target.value)}
                    className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none" />
                </div>
              </div>
            </div>

            {/* Кнопки */}
            <button
              onClick={() => doSearch(0)}
              disabled={loading || selectedProducts.length === 0}
              className="btn-primary w-full"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Поиск...
                </span>
              ) : (
                "🔍 Найти декларации"
              )}
            </button>

          </aside>

          {/* ===== РЕЗУЛЬТАТЫ ===== */}
          <main>
            {error && (
              <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {!searched && !loading && (
              <div className="text-center py-20 text-slate-400">
                <div className="text-5xl mb-4">🌾</div>
                <p className="text-lg">Выберите культуры и нажмите «Найти декларации»</p>
              </div>
            )}

            {searched && !loading && results.length === 0 && !error && (
              <div className="text-center py-20 text-slate-400">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg">Ничего не найдено. Попробуйте изменить фильтры.</p>
              </div>
            )}

            {results.length > 0 && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-slate-500">
                    Найдено: <span className="font-semibold text-slate-900">{total.toLocaleString("ru-RU")}</span> деклараций
                  </p>
                  <p className="text-xs text-slate-400">
                    Страница {page + 1}
                  </p>
                </div>

                <div className="space-y-4">
                  {results.map((item, idx) => (
                    <DeclarationCard key={item.id || idx} item={item} />
                  ))}
                </div>

                {/* Пагинация */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    onClick={() => doSearch(page - 1)}
                    disabled={page === 0 || loading}
                    className="btn-secondary text-sm disabled:opacity-30"
                  >
                    ← Назад
                  </button>
                  <span className="text-sm text-slate-500">Страница {page + 1}</span>
                  <button
                    onClick={() => doSearch(page + 1)}
                    disabled={results.length < 10 || loading}
                    className="btn-secondary text-sm disabled:opacity-30"
                  >
                    Далее →
                  </button>
                </div>
              </>
            )}
          </main>
        </div>
      </div>

      {/* SEO Text */}
      <section className="py-16 mt-8" style={{ backgroundColor: '#f0f2ed' }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1c1c1c' }}>Поиск зерновых деклараций: 500 000+ документов из реестра Росаккредитации</h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: '#444' }}>
            <p>Декларация соответствия — это документ, подтверждающий, что зерновая продукция соответствует требованиям ГОСТ и техническим регламентам. Наша база содержит более 500 000 деклараций из официального реестра Росаккредитации, которые можно мгновенно найти по номеру, ИНН компании, названию культуры или географическому регину.</p>
            <p>Поиск занимает всего 10 секунд. Выберите интересующие вас культуры (пшеница, ячмень, кукуруза и др.), укажите регион или компанию — и получите полный список деклараций с контактными данными производителя, объёмами и датами действия. Каждая декларация ссылается на оригинальный документ в ФГИС.</p>
            <p>Поиск деклараций полезен для торговцев, переработчиков и логистических компаний, которым нужно быстро проверить статус поставщика. Сравните цены найденных компаний на странице <a href="/prices" style={{ color: '#2e7d32', textDecoration: 'underline' }}>Цены</a> или найдите фермеров напрямую в <a href="/farmers" style={{ color: '#2e7d32', textDecoration: 'underline' }}>базе фермеров</a>.</p>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4" style={{ color: '#1c1c1c' }}>Часто задаваемые вопросы</h3>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Что такое декларация соответствия на зерно?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>Декларация соответствия — это документ, подтверждающий, что партия зерна соответствует требованиям технического регламента ТР ТС 015/2011 «О безопасности зерна». Она содержит данные о заявителе, изготовителе, объёме партии, результатах испытаний (клейковина, ИДК, влажность, натура) и сроке действия. Декларация регистрируется в ФГИС Росаккредитации.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Как часто обновляется база деклараций?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>База синхронизируется с реестром Росаккредитации ежедневно. Новые декларации появляются в системе в течение 24 часов после регистрации в ФГИС. На данный момент база содержит более 500 000 документов за период 2020–2026 годов.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Какие культуры доступны для поиска?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>В системе доступны 13 зерновых культур: пшеница, ячмень, кукуруза, рожь, овёс, рис, просо, гречиха, тритикале, сорго, а также соя, подсолнечник и рапс. Фильтрация по культуре позволяет быстро найти нужные декларации среди полумиллиона документов.</p>
            </details>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/blog/grain-declarations" className="block rounded-lg p-4" style={{ backgroundColor: '#e8ede3' }}>
              <span className="text-sm font-medium" style={{ color: '#2e7d32' }}>Статья в блоге</span>
              <p className="mt-1 text-sm font-semibold" style={{ color: '#1c1c1c' }}>Зерновые декларации: что это и как получить</p>
            </a>
            <a href="/blog/find-grain-buyer" className="block rounded-lg p-4" style={{ backgroundColor: '#e8ede3' }}>
              <span className="text-sm font-medium" style={{ color: '#2e7d32' }}>Статья в блоге</span>
              <p className="mt-1 text-sm font-semibold" style={{ color: '#1c1c1c' }}>Как найти покупателя зерна: руководство</p>
            </a>
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

// ==================== Карточка декларации ====================
function DeclarationCard({ item }: { item: Declaration }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card cursor-pointer" onClick={() => setExpanded(!expanded)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Дата и статус */}
          <div className="flex items-center gap-3 mb-2">
            <span className="text-xs text-slate-400">📅 {item.reg_date}</span>
            <span className="badge-green">{item.status}</span>
            {item.volume_tons > 0 && (
              <span className="badge-amber">📦 {item.volume_tons.toLocaleString("ru-RU")} т</span>
            )}
          </div>

          {/* Продукция */}
          <p className="text-sm font-medium text-slate-900 truncate">{item.product_name}</p>

          {/* Компания */}
          <p className="mt-1 text-sm text-slate-600 truncate">🏢 {item.applicant_name}</p>

          {/* Сегмент и регион */}
          <div className="mt-2 flex flex-wrap gap-2">
            {item.applicant_segment && (
              <span className="badge-blue">{item.applicant_segment}</span>
            )}
            {item.applicant_address && (
              <span className="text-xs text-slate-400 truncate max-w-[200px]">📍 {item.applicant_address}</span>
            )}
          </div>
        </div>

        <svg className={`w-5 h-5 text-slate-300 flex-shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {expanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2 text-sm">
          {item.number && <p><span className="text-slate-400">Номер:</span> {item.number}</p>}
          {item.end_date && <p><span className="text-slate-400">Действует до:</span> {item.end_date}</p>}
          {item.applicant_inn && <p><span className="text-slate-400">ИНН:</span> {item.applicant_inn}</p>}
          {item.applicant_phone && <p><span className="text-slate-400">Телефон:</span> <a href={`tel:${item.applicant_phone}`} className="text-primary-600 hover:underline" onClick={(e) => e.stopPropagation()}>{item.applicant_phone}</a></p>}
          {item.applicant_email && <p><span className="text-slate-400">Email:</span> <a href={`mailto:${item.applicant_email}`} className="text-primary-600 hover:underline" onClick={(e) => e.stopPropagation()}>{item.applicant_email}</a></p>}
          {item.applicant_director && <p><span className="text-slate-400">Руководитель:</span> {item.applicant_director}</p>}
          {item.manufacturer_name && <p><span className="text-slate-400">Изготовитель:</span> {item.manufacturer_name}</p>}
          {item.applicant_address && <p><span className="text-slate-400">Адрес:</span> {item.applicant_address}</p>}
          {item.url && (
            <a href={item.url} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-primary-600 hover:underline" onClick={(e) => e.stopPropagation()}>
              Открыть на ФГИС →
            </a>
          )}
        </div>
      )}
    </div>
  );
}

// ==================== Перевод ошибок ====================
function translateError(err: string): string {
  const map: Record<string, string> = {
    api_blocked_cooldown: "API ФГИС временно заблокирован. Попробуйте через несколько минут.",
    api_blocked: "API ФГИС заблокировал запросы. Попробуйте позже.",
    api_timeout: "API ФГИС не отвечает. Попробуйте ещё раз.",
    api_error: "Ошибка API ФГИС. Попробуйте ещё раз.",
  };
  return map[err] || err;
}
