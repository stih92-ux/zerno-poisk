"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";
import NewsWidget from "@/components/NewsWidget";

const features = [
  {
    title: "Поиск деклараций",
    desc: "500 000+ деклараций из ФГИС. 13 культур, 68 регионов, фильтрация по объёму.",
    href: "/search",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "Цены на зерно",
    desc: "Котировки MOEX, региональные цены ZOL.RU, объявления IDK.RU в реальном времени.",
    href: "/prices",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13h2v8H3zM9 8h2v13H9zM15 11h2v10h-2zM21 4h2v17h-2z" />
      </svg>
    ),
  },
  {
    title: "Comtrade",
    desc: "Международная торговля зерном. Данные UN Comtrade по 170+ странам.",
    href: "/comtrade",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "GACC Китай",
    desc: "Проверка аккредитации компаний для экспорта зерна в Китай.",
    href: "/gacc",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: "База фермеров",
    desc: "27 000+ КФХ и сельхозкомпаний с контактами, площадями и регионами.",
    href: "/farmers",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: "Блог и аналитика",
    desc: "Статьи о зерновом рынке, ценах, экспорте и субсидиях для фермеров.",
    href: "/blog",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "500K+", label: "деклараций" },
  { value: "27K+", label: "фермеров" },
  { value: "170+", label: "стран" },
  { value: "24/7", label: "доступ" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1a0a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a1a0a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg">🌾</span>
            <span className="text-base font-semibold text-gray-900 dark:text-white">ЗерноПоиск</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/search" className="text-[13px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Декларации</Link>
            <Link href="/prices" className="text-[13px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Цены</Link>
            <Link href="/comtrade" className="text-[13px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Comtrade</Link>
            <Link href="/gacc" className="text-[13px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">GACC</Link>
            <Link href="/farmers" className="text-[13px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Фермеры</Link>
            <Link href="/blog" className="text-[13px] text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">Блог</Link>
          </nav>
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <UserMenu />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-emerald-700 dark:text-emerald-400">Данные обновляются ежедневно</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            Аналитика зернового рынка России
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-500 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Декларации, цены, экспорт и база фермеров — всё в одном сервисе. 2 дня бесплатно.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <a
              href="https://t.me/agro_analizbot"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gray-900 dark:bg-white px-6 py-2.5 text-sm font-medium text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            >
              Попробовать 2 дня бесплатно →
            </a>
            <Link
              href="/search"
              className="rounded-full bg-gray-100 dark:bg-gray-800 px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              Смотреть инструменты
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mx-auto max-w-2xl px-4 mt-16">
          <div className="grid grid-cols-4 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">{s.value}</div>
                <div className="text-xs text-gray-400 dark:text-gray-500 mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-6xl px-4">
        <div className="border-t border-gray-100 dark:border-gray-800" />
      </div>

      {/* Features */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Инструменты</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">Всё, что нужно для работы с зерновым рынком</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f) => (
              <Link
                key={f.title}
                href={f.href}
                className="group rounded-xl border border-gray-100 dark:border-gray-800 p-5 hover:border-gray-200 dark:hover:border-gray-700 hover:bg-gray-50/50 dark:hover:bg-gray-800/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400">
                    {f.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{f.title}</h3>
                </div>
                <p className="text-[13px] text-gray-500 dark:text-gray-400 leading-relaxed">{f.desc}</p>
                <div className="mt-3 text-xs font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                  Открыть →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* News Widget */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <NewsWidget />
        </div>
      </section>

      {/* Latest Blog Articles */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Блог</h2>
              <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Статьи о зерновом рынке</p>
            </div>
            <Link href="/blog" className="text-sm font-medium text-emerald-600 dark:text-emerald-400 hover:underline">
              Все статьи →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { slug: "wheat-quality-gost", title: "Классы пшеницы по ГОСТ — как определить качество зерна", img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=300&fit=crop&q=80" },
              { slug: "kfh-registration", title: "КФХ — что это и как зарегистрировать фермерское хозяйство", img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=300&fit=crop&q=80" },
              { slug: "grain-export-guide", title: "Как экспортировать зерно из России — пошаговая инструкция", img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=300&fit=crop&q=80" },
              { slug: "farmer-subsidies-2026", title: "Субсидии для фермеров на зерно в 2026 году", img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=300&fit=crop&q=80" },
              { slug: "moex-grain-quotes", title: "Биржевые котировки зерна на MOEX", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop&q=80" },
              { slug: "tr-ts-015-2011", title: "ТР ТС 015/2011 — технический регламент на зерно", img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=300&fit=crop&q=80" },
            ].map((a) => (
              <Link
                key={a.slug}
                href={`/blog/${a.slug}`}
                className="group rounded-xl border border-gray-100 dark:border-gray-800 overflow-hidden hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-md transition-all"
              >
                <div className="relative h-36 overflow-hidden">
                  <img
                    src={a.img}
                    alt={a.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                    {a.title}
                  </h3>
                  <span className="mt-2 inline-block text-xs font-medium text-emerald-600 dark:text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    Читать →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing / Trial */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">Начните с пробного периода</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">2 дня полного доступа — бесплатно, без ограничений</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* Trial */}
            <div className="rounded-2xl border-2 border-emerald-500 dark:border-emerald-400 p-6 sm:p-8 relative flex flex-col">
              <div className="absolute -top-3 left-6 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                ПРОБНЫЙ
              </div>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-2">2 дня бесплатно</h3>
              <p className="text-3xl font-bold text-gray-900 dark:text-white mt-3">0 ₽</p>
              <ul className="mt-5 space-y-2.5 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Поиск по 500 000+ деклараций</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Котировки зерна в реальном времени</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Данные UN Comtrade и GACC</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>База 27 000+ фермеров</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Полный доступ на 2 дня</li>
              </ul>
              <a
                href="https://t.me/agro_analizbot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-emerald-600 hover:bg-emerald-700 px-6 py-2.5 text-sm font-medium text-white transition-colors"
              >
                Активировать в Telegram →
              </a>
            </div>
            {/* Paid */}
            <div className="rounded-2xl border border-gray-200 dark:border-gray-700 p-6 sm:p-8 flex flex-col">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Полный доступ</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">После пробного периода</p>
              <ul className="mt-5 space-y-2.5 text-sm text-gray-600 dark:text-gray-400 flex-grow">
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Все инструменты без ограничений</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Уведомления о новых декларациях</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Контакты фермеров и компаний</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Приоритетная поддержка</li>
                <li className="flex items-start gap-2"><span className="text-emerald-500 mt-0.5">✓</span>Ежедневные обновления данных</li>
              </ul>
              <a
                href="https://t.me/agro_analizbot"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-gray-900 dark:bg-white hover:bg-gray-700 dark:hover:bg-gray-200 px-6 py-2.5 text-sm font-medium text-white dark:text-gray-900 transition-colors"
              >
                Подробнее в Telegram →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl bg-gray-50 dark:bg-gray-900/50 border border-gray-100 dark:border-gray-800 p-8 sm:p-12 text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">Готовы попробовать?</h2>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-md mx-auto">
              Активируйте пробный период в Telegram-боте и получите 2 дня полного доступа ко всем инструментам.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <a
                href="https://t.me/agro_analizbot"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-gray-900 dark:bg-white px-6 py-2.5 text-sm font-medium text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
              >
                Начать пробный период →
              </a>
              <Link
                href="/blog"
                className="rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-6 py-2.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                Читать блог
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-100 dark:border-gray-800 py-10">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm">🌾</span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">ЗерноПоиск</span>
              <span className="text-xs text-gray-400 dark:text-gray-500 ml-2">© 2026</span>
            </div>
            <nav className="flex flex-wrap items-center gap-4 text-xs text-gray-400 dark:text-gray-500">
              <Link href="/search" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Декларации</Link>
              <Link href="/prices" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Цены</Link>
              <Link href="/comtrade" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Comtrade</Link>
              <Link href="/gacc" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">GACC</Link>
              <Link href="/farmers" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Фермеры</Link>
              <Link href="/blog" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Блог</Link>
              <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600 dark:hover:text-gray-300 transition-colors">Telegram</a>
            </nav>
          </div>
        </div>
      </footer>
    </div>
  );
}
