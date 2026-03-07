"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

const articles = [
  {
    slug: "grain-declarations",
    title: "Зерновые декларации: что это и как получить",
    date: "2026-03-05",
    readingTime: 8,
    preview: "Узнайте, что такое зерновые декларации, кто обязан их получать и как пройти процесс регистрации. Подробный гайд для фермеров и трейдеров.",
  },
  {
    slug: "wheat-prices-2026",
    title: "Цены на пшеницу в России 2026: обзор рынка",
    date: "2026-03-04",
    readingTime: 7,
    preview: "Анализ текущих котировок пшеницы, факторов, влияющих на цены, и прогноз развития рынка на 2026 год.",
  },
  {
    slug: "find-grain-buyer",
    title: "Как найти покупателя зерна: пошаговое руководство",
    date: "2026-03-03",
    readingTime: 9,
    preview: "Полное руководство по поиску покупателей зерна. От подготовки продукции до безопасного заключения сделки.",
  },
  {
    slug: "export-china-gacc-2026",
    title: "Экспорт зерна в Китай: требования GACC 2026",
    date: "2026-03-02",
    readingTime: 10,
    preview: "Разбираемся в требованиях GACC для экспорта зерна в Китай. Пошаговая инструкция и расчет экономики сделки.",
  },
  {
    slug: "farm-database-kfh",
    title: "База КФХ России: как найти фермера для закупки зерна",
    date: "2026-03-01",
    readingTime: 7,
    preview: "Как эффективно использовать базу крестьянских фермерских хозяйств для поиска поставщиков. Алгоритм поиска и фильтрации.",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#1a2e1a' }}>
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-bold text-white">ЗерноПоиск</span>
          </Link>
          <nav className="flex items-center gap-4 flex-wrap">
            <Link href="/search" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Декларации</Link>
            <Link href="/prices" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Цены</Link>
            <Link href="/comtrade" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Comtrade</Link>
            <Link href="/gacc" className="text-sm font-medium text-white/70 hover:text-white transition-colors">GACC</Link>
            <Link href="/farmers" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Фермеры</Link>
            <Link href="/blog" className="text-sm font-medium text-white hover:text-white transition-colors">Блог</Link>
            <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Бот</a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow">
        <section className="bg-gradient-to-b from-[#f8f9f6] to-white py-12">
          <div className="mx-auto max-w-7xl px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1c1c1c] mb-4">
              Блог ЗерноПоиск
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Аналитика зернового рынка России, советы по декларациям, поиску покупателей и экспорту. Актуальная информация каждый день.
            </p>
          </div>
        </section>

        {/* Articles Grid */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="p-6 flex flex-col h-full">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-3 text-sm text-gray-500">
                      <span>{new Date(article.date).toLocaleDateString("ru-RU", { year: "numeric", month: "long", day: "numeric" })}</span>
                      <span>•</span>
                      <span>{article.readingTime} мин</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-[#1c1c1c] mb-3 group-hover:text-[#2d7a2d] transition-colors">
                      {article.title}
                    </h3>

                    {/* Preview */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-grow line-clamp-3">
                      {article.preview}
                    </p>

                    {/* Read More */}
                    <div className="text-[#2d7a2d] font-semibold text-sm group-hover:gap-2 flex items-center gap-1 transition-all">
                      Читать →
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a2e1a' }} className="py-12 mt-auto">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-8 justify-between mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌾</span>
                <span className="text-lg font-bold text-white">ЗерноПоиск</span>
              </div>
              <p className="text-white/60 text-sm">Поиск зерновых деклараций<br/>и аналитика рынка</p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <Link href="/search" className="text-sm text-white/70 hover:text-white transition-colors">Декларации</Link>
                <Link href="/prices" className="text-sm text-white/70 hover:text-white transition-colors">Цены</Link>
                <Link href="/comtrade" className="text-sm text-white/70 hover:text-white transition-colors">Comtrade</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/gacc" className="text-sm text-white/70 hover:text-white transition-colors">GACC</Link>
                <Link href="/farmers" className="text-sm text-white/70 hover:text-white transition-colors">Фермеры</Link>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white transition-colors">Блог</Link>
              </div>
            </div>
            <div>
              <p className="text-sm text-white/70">Telegram: <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">@agro_analizbot</a></p>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
            © 2026 ЗерноПоиск
          </div>
        </div>
      </footer>
    </div>
  );
}
