"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";

const articles = [
  {
    slug: "wheat-quality-gost",
    title: "Классы пшеницы по ГОСТ — как определить качество зерна",
    date: "2026-03-10",
    readingTime: 11,
    preview: "Подробный разбор классификации пшеницы по ГОСТ 9353-2016: 5 классов, параметры качества, влияние на цену и советы для покупателей.",
  },
  {
    slug: "grain-logistics",
    title: "Логистика зерна в России — элеваторы, перевозка и хранение",
    date: "2026-03-10",
    readingTime: 12,
    preview: "Обзор инфраструктуры зерновой логистики: типы элеваторов, ЖД и автоперевозки, портовые терминалы, стоимость и сезонные нюансы.",
  },
  {
    slug: "kfh-registration",
    title: "КФХ — что это такое и как зарегистрировать фермерское хозяйство",
    date: "2026-03-09",
    readingTime: 12,
    preview: "Полный гид по регистрации КФХ: правовые формы, пошаговый процесс, налоговые режимы, сравнение с ООО и доступные субсидии.",
  },
  {
    slug: "farmer-subsidies-2026",
    title: "Субсидии для фермеров на зерно в 2026 году — полный гид",
    date: "2026-03-09",
    readingTime: 11,
    preview: "7 видов субсидий для зерновых фермеров: Агростартап, единая субсидия, гранты, компенсации семян и техники. Как подать заявку.",
  },
  {
    slug: "wheat-export-russia",
    title: "Экспорт пшеницы из России — статистика и ключевые рынки",
    date: "2026-03-08",
    readingTime: 9,
    preview: "Россия — крупнейший экспортёр пшеницы в мире. Статистика, страны-покупатели, порты отгрузки, пошлины и прогноз на 2026 год.",
  },
  {
    slug: "grain-export-guide",
    title: "Как экспортировать зерно из России — пошаговая инструкция",
    date: "2026-03-08",
    readingTime: 10,
    preview: "8 шагов экспорта зерна: от регистрации компании и поиска покупателя до таможенного оформления и получения оплаты.",
  },
  {
    slug: "barley-prices-2026",
    title: "Цены на ячмень в России 2026 — обзор и прогноз рынка",
    date: "2026-03-07",
    readingTime: 8,
    preview: "Анализ цен на кормовой и пивоваренный ячмень в 2026 году: региональные различия, факторы влияния и прогноз.",
  },
  {
    slug: "moex-grain-quotes",
    title: "Биржевые котировки зерна на MOEX — как торговать зерном на бирже",
    date: "2026-03-07",
    readingTime: 9,
    preview: "Как работает зерновой рынок Московской биржи: типы контрактов, как читать котировки и начать торговать.",
  },
  {
    slug: "tr-ts-015-2011",
    title: "ТР ТС 015/2011 — технический регламент на зерно",
    date: "2026-03-06",
    readingTime: 10,
    preview: "Разбор технического регламента Таможенного союза о безопасности зерна: требования, маркировка, оценка соответствия и штрафы.",
  },
  {
    slug: "proverit-deklaraciyu-fgis",
    title: "Как проверить декларацию на зерно в ФГИС Росаккредитации",
    date: "2026-03-06",
    readingTime: 8,
    preview: "Пошаговая инструкция по проверке декларации в ФГИС: на что обращать внимание, признаки подделки и что делать при обнаружении.",
  },
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
            <UserMenu />
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
