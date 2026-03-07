"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-bold text-slate-900">ЗерноПоиск</span>
          </div>
          <nav className="flex items-center gap-6">
            <Link href="/search" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Поиск деклараций
            </Link>
            <Link href="/prices" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Цены
            </Link>
            <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener" className="text-sm font-medium text-slate-600 hover:text-primary-600 transition-colors">
              Telegram-бот
            </a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE4YzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02ek0xMiA0OGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"></div>
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              Поиск зерновых деклараций
            </h1>
            <p className="mt-6 text-lg text-primary-100 max-w-2xl">
              Более 500 000 деклараций из ФГИС Росаккредитации.
              Находите поставщиков и покупателей зерна с контактами компаний.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/search" className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-primary-700 shadow-lg hover:shadow-xl transition-all hover:scale-[1.02] active:scale-[0.98]">
                Начать поиск
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" /></svg>
              </Link>
              <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener" className="inline-flex items-center gap-2 rounded-xl bg-primary-500/20 px-8 py-4 text-base font-semibold text-white ring-1 ring-white/20 hover:bg-primary-500/30 transition-all">
                Telegram-бот
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-slate-900">Возможности платформы</h2>
          <p className="mt-4 text-center text-slate-500 max-w-2xl mx-auto">
            Используйте сайт или Telegram-бот — данные одни и те же
          </p>
          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { icon: "🔍", title: "Поиск деклараций", desc: "13 культур, 68 регионов, 5 сегментов. Фильтрация по объёму и датам." },
              { icon: "📊", title: "Цены на зерно", desc: "Биржевые цены MOEX, региональные цены ZOL.RU, объявления IDK.RU." },
              { icon: "🌏", title: "Comtrade", desc: "Международная торговля зерном. Данные UN Comtrade по импорту/экспорту." },
              { icon: "🇨🇳", title: "GACC Китай", desc: "Проверка аккредитации компаний для экспорта зерна в Китай." },
              { icon: "🌾", title: "База фермеров", desc: "27 000+ КФХ и сельхозкомпаний с контактами и площадями." },
              { icon: "📥", title: "Экспорт CSV", desc: "Выгрузка результатов поиска с группировкой по компаниям." },
            ].map((f, i) => (
              <div key={i} className="card">
                <div className="text-3xl mb-4">{f.icon}</div>
                <h3 className="text-lg font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-2 text-sm text-slate-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 text-center text-sm text-slate-500">
          <p>ЗерноПоиск — поиск зерновых деклараций ФГИС Росаккредитации</p>
          <p className="mt-2">
            Telegram: <a href="https://t.me/agro_analizbot" className="text-primary-600 hover:underline">@agro_analizbot</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
