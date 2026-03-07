"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-[#1a2e1a] backdrop-blur">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-bold text-white">ЗерноПоиск</span>
          </div>
          <nav className="flex items-center gap-8">
            <Link href="/search" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Декларации</Link>
            <Link href="/prices" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Цены</Link>
            <Link href="/comtrade" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Comtrade</Link>
            <Link href="/gacc" className="text-sm font-medium text-white/70 hover:text-white transition-colors">GACC</Link>
            <Link href="/farmers" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Фермеры</Link>
            <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Блог</Link>
            <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Telegram</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-[#f8f9f6] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center">
            <h1 className="text-5xl sm:text-6xl font-bold text-[#1c1c1c] leading-tight">
              ЗерноПоиск: декларации, цены и база фермеров России в одном сервисе
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Зерновой рынок России генерирует десятки миллионов тонн продукции ежегодно. Находите поставщиков, проверяйте декларации и отслеживайте цены.
            </p>
            <div className="mt-10 flex flex-wrap gap-4 justify-center">
              <Link
                href="/search"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2d7a2d] px-8 py-3 text-base font-semibold text-white hover:bg-[#245c24] transition-colors"
              >
                Начать поиск
              </Link>
              <a
                href="https://t.me/agro_analizbot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border-2 border-[#2d7a2d] px-8 py-3 text-base font-semibold text-[#2d7a2d] bg-transparent hover:bg-[#f0f8f0] transition-colors"
              >
                Открыть бот
              </a>
            </div>

            {/* Counter Tiles */}
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-4xl font-bold text-[#2d7a2d]">500 000+</div>
                <div className="text-gray-600 mt-2">деклараций</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-4xl font-bold text-[#2d7a2d]">27 000+</div>
                <div className="text-gray-600 mt-2">фермеров</div>
              </div>
              <div className="bg-white rounded-lg shadow-sm p-8">
                <div className="text-4xl font-bold text-[#2d7a2d]">3</div>
                <div className="text-gray-600 mt-2">источника котировок</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="text-center text-3xl font-bold text-[#1c1c1c] mb-16">Возможности платформы</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: "🔍",
                title: "Поиск деклараций",
                desc: "13 культур, 68 регионов, 5 сегментов. Фильтрация по объёму и датам.",
                href: "/search"
              },
              {
                icon: "📊",
                title: "Цены на зерно",
                desc: "Биржевые цены MOEX, региональные цены ZOL.RU, объявления IDK.RU.",
                href: "/prices"
              },
              {
                icon: "🌏",
                title: "Comtrade",
                desc: "Международная торговля зерном. Данные UN Comtrade по импорту/экспорту.",
                href: "/comtrade"
              },
              {
                icon: "🇨🇳",
                title: "GACC Китай",
                desc: "Проверка аккредитации компаний для экспорта зерна в Китай.",
                href: "/gacc"
              },
              {
                icon: "🌾",
                title: "База фермеров",
                desc: "27 000+ КФХ и сельхозкомпаний с контактами и площадями.",
                href: "/farmers"
              },
              {
                icon: "📥",
                title: "Экспорт CSV",
                desc: "Выгрузка результатов поиска с группировкой по компаниям.",
                href: "/search"
              },
            ].map((feature, i) => (
              <Link
                key={i}
                href={feature.href}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-[#1c1c1c]">{feature.title}</h3>
                <p className="text-gray-600 text-sm mt-3 leading-relaxed">{feature.desc}</p>
                <div className="mt-4 text-[#2d7a2d] font-medium text-sm">Подробнее →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Block */}
      <section className="bg-[#1a2e1a] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-white">500 000+</div>
              <div className="text-white/70 text-sm mt-2">деклараций</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">27 000+</div>
              <div className="text-white/70 text-sm mt-2">КФХ</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">170+</div>
              <div className="text-white/70 text-sm mt-2">стран Comtrade</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-white">Ежедневно</div>
              <div className="text-white/70 text-sm mt-2">обновление</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Block */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h2 className="text-3xl font-bold text-[#1c1c1c]">Начните работу бесплатно</h2>
          <p className="text-gray-600 text-lg mt-4 mb-8">Доступ ко всем инструментам без оплаты</p>
          <Link
            href="/search"
            className="inline-flex items-center gap-2 rounded-lg bg-[#2d7a2d] px-8 py-3 text-base font-semibold text-white hover:bg-[#245c24] transition-colors"
          >
            Начать →
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a2e1a] text-white py-12">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/search" className="hover:text-white transition-colors">Декларации</Link></li>
                <li><Link href="/prices" className="hover:text-white transition-colors">Цены</Link></li>
                <li><Link href="/comtrade" className="hover:text-white transition-colors">Comtrade</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Сервисы</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li><Link href="/gacc" className="hover:text-white transition-colors">GACC</Link></li>
                <li><Link href="/farmers" className="hover:text-white transition-colors">Фермеры</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Блог</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-sm text-white/70">
                <li>
                  <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                    Telegram: @agro_analizbot
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">О сервисе</h3>
              <p className="text-sm text-white/70">Поиск деклараций, цены и база фермеров России</p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/70">
            <p>© 2026 ЗерноПоиск</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
