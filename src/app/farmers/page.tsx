"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";
import { FEDERAL_DISTRICTS, PRODUCT_ICONS } from "@/lib/data-refs";

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

interface SearchResponse {
  farmers: Farmer[];
  total: number;
  message?: string;
}

const PRODUCTS = [
  { code: "wheat", name: "Пшеница", icon: "🌾" },
  { code: "barley", name: "Ячмень", icon: "🌾" },
  { code: "corn", name: "Кукуруза", icon: "🌽" },
  { code: "sunflower", name: "Подсолнечник", icon: "🌻" },
  { code: "soy", name: "Соя", icon: "🌾" },
];

const DISTRICT_NAMES: Record<string, string> = {
  DFO: "ДФО",
  PFO: "ПФО",
  SZFO: "СЗФО",
  SKFO: "СКФО",
  SFO: "СФО",
  URFO: "УФО",
  CFO: "ЦФО",
  UFO: "ЮФО",
};

export default function FarmersPage() {
  const [searchText, setSearchText] = useState("");
  const [selectedProducts, setSelectedProducts] = useState<string[]>([]);
  const [selectedDistricts, setSelectedDistricts] = useState<string[]>([]);
  const [minArea, setMinArea] = useState("");
  const [results, setResults] = useState<Farmer[]>([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);
  const [databaseNotLoaded, setDatabaseNotLoaded] = useState(false);

  const toggle = (list: string[], setList: (v: string[]) => void, code: string) => {
    setList(list.includes(code) ? list.filter((c) => c !== code) : [...list, code]);
  };

  const doSearch = useCallback(
    async (searchPage = 0) => {
      setLoading(true);
      setError(null);
      setSearched(true);
      setDatabaseNotLoaded(false);

      try {
        const params = new URLSearchParams();
        if (searchText.trim()) params.append("q", searchText);
        if (selectedProducts.length > 0) params.append("products", selectedProducts.join(","));
        if (selectedDistricts.length > 0) params.append("fo", selectedDistricts.join(","));
        if (minArea) params.append("minArea", minArea);
        params.append("page", searchPage.toString());
        params.append("limit", "20");

        const resp = await fetch(`/api/farmers?${params.toString()}`);
        const data: SearchResponse = await resp.json();

        if (data.message) {
          // Database not loaded
          setDatabaseNotLoaded(true);
          setResults([]);
          setTotal(0);
          setError(data.message);
        } else {
          setResults(data.farmers || []);
          setTotal(data.total || 0);
          setPage(searchPage);
          if (data.farmers.length === 0 && !data.message) {
            setError("Никого не найдено. Попробуйте изменить фильтры.");
          }
        }
      } catch (e: any) {
        setError("Ошибка сети. Попробуйте ещё раз.");
      } finally {
        setLoading(false);
      }
    },
    [searchText, selectedProducts, selectedDistricts, minArea]
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
            <ThemeToggle />
            <UserMenu />
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-[380px_1fr]">
          {/* ===== ФИЛЬТРЫ ===== */}
          <aside className="space-y-6">
            {/* Текстовый поиск */}
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Поиск
              </h3>
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Название, регион, специализация..."
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>

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
                    {p.icon} {p.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Федеральные округа */}
            <div className="card">
              <h3 className="text-sm font-semibold text-slate-900 mb-3">
                Федеральные округа {selectedDistricts.length > 0 && <span className="badge-green ml-2">{selectedDistricts.length}</span>}
              </h3>
              <div className="flex flex-wrap gap-2">
                {FEDERAL_DISTRICTS.map((f) => (
                  <button
                    key={f.code}
                    onClick={() => toggle(selectedDistricts, setSelectedDistricts, f.code)}
                    className={selectedDistricts.includes(f.code) ? "chip-active" : "chip-inactive"}
                  >
                    {DISTRICT_NAMES[f.code] || f.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Минимальная площадь */}
            <div className="card">
              <label className="block text-sm font-semibold text-slate-900 mb-3">
                Минимальная площадь (га)
              </label>
              <input
                type="number"
                value={minArea}
                onChange={(e) => setMinArea(e.target.value)}
                placeholder="0"
                className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
              />
            </div>

            {/* Кнопка поиска */}
            <button
              onClick={() => doSearch(0)}
              disabled={loading}
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-green-800 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600 active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" /><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" /></svg>
                  Поиск...
                </span>
              ) : (
                "🔍 Найти фермеров"
              )}
            </button>
          </aside>

          {/* ===== РЕЗУЛЬТАТЫ ===== */}
          <main>
            {error && !databaseNotLoaded && (
              <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                {error}
              </div>
            )}

            {databaseNotLoaded && (
              <div className="mb-6 rounded-xl bg-amber-50 border border-amber-200 px-4 py-3">
                <p className="text-sm text-amber-700 font-medium mb-2">База данных фермеров не загружена</p>
                <p className="text-sm text-amber-600 mb-3">
                  Для использования поиска фермеров требуется загрузить JSON файл с данными о фермерах в папку <code className="bg-amber-100 px-2 py-1 rounded">public/data/farmers.json</code>.
                </p>
                <p className="text-sm text-amber-600">
                  Ожидаемый формат JSON: массив фермеров с полями: name, district, region, rayon, address, contact1, phone1, phone2, email, holding, land_total, wheat_winter, wheat_spring, barley_winter, barley_spring, corn_grain, sunflower, soy, specialization.
                </p>
              </div>
            )}

            {!searched && !loading && (
              <div className="text-center py-20 text-slate-400">
                <div className="text-5xl mb-4">🌾</div>
                <p className="text-lg">Используйте фильтры слева и нажмите «Найти фермеров»</p>
              </div>
            )}

            {searched && !loading && results.length === 0 && !databaseNotLoaded && error && (
              <div className="text-center py-20 text-slate-400">
                <div className="text-5xl mb-4">🔍</div>
                <p className="text-lg">{error}</p>
              </div>
            )}

            {results.length > 0 && (
              <>
                <div className="flex items-center justify-between mb-6">
                  <p className="text-sm text-slate-500">
                    Найдено: <span className="font-semibold text-slate-900">{total.toLocaleString("ru-RU")}</span> фермеров
                  </p>
                  <p className="text-xs text-slate-400">
                    Страница {page + 1}
                  </p>
                </div>

                <div className="space-y-4">
                  {results.map((farmer, idx) => (
                    <FarmerCard key={idx} farmer={farmer} />
                  ))}
                </div>

                {/* Пагинация */}
                <div className="mt-8 flex items-center justify-center gap-4">
                  <button
                    onClick={() => doSearch(page - 1)}
                    disabled={page === 0 || loading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:shadow-md active:scale-[0.98] disabled:opacity-30"
                  >
                    ← Назад
                  </button>
                  <span className="text-sm text-slate-500">Страница {page + 1}</span>
                  <button
                    onClick={() => doSearch(page + 1)}
                    disabled={results.length < 20 || loading}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-700 shadow-sm ring-1 ring-inset ring-slate-200 transition-all hover:bg-slate-50 hover:shadow-md active:scale-[0.98] disabled:opacity-30"
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
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1c1c1c' }}>База фермеров России: 27 000+ КФХ с контактами и объёмами производства</h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: '#444' }}>
            <p>База фермеров — это подробная информация о более чем 27 000 крестьянско-фермерских хозяйств (КФХ) и сельскохозяйственных предприятий России. Для каждого хозяйства указаны: название, федеральный округ и регион, контактное лицо с телефоном и email, специализация и посевные площади по культурам (пшеница озимая и яровая, ячмень, кукуруза, подсолнечник, соя).</p>
            <p>Поиск работает по названию хозяйства, названию контактного лица, названию региона или специализации. Вы можете фильтровать по культурам и минимальной площади посева. Например, найдите всех производителей пшеницы в Воронежской области с площадью более 100 гектаров.</p>
            <p>База полезна для трейдеров, переработчиков и логистов, которые ищут надёжных поставщиков и хотят связаться с ними напрямую. Сравните предложения от разных хозяйств и проверьте их декларации соответствия на странице <a href="/search" style={{ color: '#2e7d32', textDecoration: 'underline' }}>Декларации</a> перед покупкой.</p>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4" style={{ color: '#1c1c1c' }}>Часто задаваемые вопросы</h3>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Откуда берутся данные о фермерах?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>База составлена на основе открытых данных ЕГРЮЛ/ЕГРИП (ФНС), Росстата и отраслевых справочников. Для каждого КФХ собраны: юридическое название, ФИО главы, контакты (телефон, email), регион, специализация и посевные площади по основным культурам.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Как связаться с фермером напрямую?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>Нажмите на карточку хозяйства — откроются контактные данные: телефон и email главы КФХ. Вы можете позвонить или написать напрямую. Перед обращением рекомендуем проверить декларации поставщика через <a href="/search" style={{ color: '#2e7d32', textDecoration: 'underline' }}>поиск деклараций</a> и сравнить <a href="/prices" style={{ color: '#2e7d32', textDecoration: 'underline' }}>актуальные цены</a> на рынке.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Можно ли фильтровать фермеров по культуре и площади?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>Да, доступна фильтрация по зерновым культурам (пшеница озимая и яровая, ячмень, кукуруза, подсолнечник, соя) и минимальной площади посева в гектарах. Также можно искать по названию хозяйства, ФИО главы или региону.</p>
            </details>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/blog/farm-database-kfh" className="block rounded-lg p-4" style={{ backgroundColor: '#e8ede3' }}>
              <span className="text-sm font-medium" style={{ color: '#2e7d32' }}>Статья в блоге</span>
              <p className="mt-1 text-sm font-semibold" style={{ color: '#1c1c1c' }}>База КФХ: как найти фермера для закупки</p>
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

// ==================== Карточка фермера ====================
function FarmerCard({ farmer }: { farmer: Farmer }) {
  const [expanded, setExpanded] = useState(false);

  // Calculate total crop area
  const cropsData = [
    { name: "Пшеница (озимая)", value: farmer.wheat_winter },
    { name: "Пшеница (яровая)", value: farmer.wheat_spring },
    { name: "Ячмень (озимый)", value: farmer.barley_winter },
    { name: "Ячмень (яровой)", value: farmer.barley_spring },
    { name: "Кукуруза", value: farmer.corn_grain },
    { name: "Подсолнечник", value: farmer.sunflower },
    { name: "Соя", value: farmer.soy },
  ].filter((c) => c.value > 0);

  return (
    <div className="card cursor-pointer" onClick={() => setExpanded(!expanded)}>
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Название и общая площадь */}
          <div className="flex items-center gap-2 mb-2">
            <p className="text-sm font-semibold text-slate-900 truncate">{farmer.name}</p>
            {farmer.land_total > 0 && (
              <span className="badge-green whitespace-nowrap">📍 {farmer.land_total.toLocaleString("ru-RU")} га</span>
            )}
          </div>

          {/* Локация */}
          <p className="text-sm text-slate-600 mb-1">
            {farmer.region && <span>{farmer.region}</span>}
            {farmer.region && farmer.rayon && <span>, </span>}
            {farmer.rayon && <span>{farmer.rayon}</span>}
          </p>

          {/* Контактное лицо и телефон */}
          <div className="text-sm text-slate-600 mb-2">
            {farmer.contact1 && <p>👤 {farmer.contact1}</p>}
            {(farmer.phone1 || farmer.phone2) && (
              <p>
                📞{" "}
                {[farmer.phone1, farmer.phone2]
                  .filter(Boolean)
                  .map((phone) => (
                    <a
                      key={phone}
                      href={`tel:${phone}`}
                      className="text-green-700 hover:underline"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {phone}
                    </a>
                  ))
                  .reduce((acc, el, idx, arr) => (idx < arr.length - 1 ? [...acc, el, ", "] : [...acc, el]), [] as any[])}
              </p>
            )}
          </div>

          {/* Основные культуры (свёрнутый вид) */}
          {cropsData.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {cropsData.slice(0, 2).map((crop) => (
                <span key={crop.name} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded">
                  {crop.name.split("(")[0].trim()} {crop.value}га
                </span>
              ))}
              {cropsData.length > 2 && (
                <span className="text-xs text-slate-500 px-2 py-1">+{cropsData.length - 2} ещё</span>
              )}
            </div>
          )}

          {/* Специализация */}
          {farmer.specialization && (
            <p className="mt-2 text-xs text-slate-500">
              <span className="text-slate-400">Специализация:</span> {farmer.specialization}
            </p>
          )}
        </div>

        <svg
          className={`w-5 h-5 text-slate-300 flex-shrink-0 transition-transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>

      {/* Развёрнутые детали */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3">
          {/* Полные контакты */}
          <div>
            {farmer.email && (
              <p className="text-sm">
                <span className="text-slate-400">Email:</span>{" "}
                <a href={`mailto:${farmer.email}`} className="text-green-700 hover:underline" onClick={(e) => e.stopPropagation()}>
                  {farmer.email}
                </a>
              </p>
            )}
            {farmer.address && (
              <p className="text-sm mt-1">
                <span className="text-slate-400">Адрес:</span> {farmer.address}
              </p>
            )}
            {farmer.holding && (
              <p className="text-sm mt-1">
                <span className="text-slate-400">Хозяйство:</span> {farmer.holding}
              </p>
            )}
          </div>

          {/* Детальный разбор площадей */}
          {cropsData.length > 0 && (
            <div>
              <p className="text-xs font-semibold text-slate-600 mb-2">Посевные площади:</p>
              <div className="grid grid-cols-1 gap-1.5">
                {cropsData.map((crop) => (
                  <div key={crop.name} className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">{crop.name}</span>
                    <span className="font-medium text-slate-900">{crop.value.toLocaleString("ru-RU")} га</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Общая информация */}
          <div className="pt-2 border-t border-slate-100">
            <p className="text-xs text-slate-500">
              <span className="text-slate-400">Общая площадь:</span> {farmer.land_total.toLocaleString("ru-RU")} га
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
