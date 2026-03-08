"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";

const articles = [
  {
    slug: "wheat-quality-gost",
    title: "Классы пшеницы по ГОСТ — как определить качество зерна",
    readingTime: 11,
    preview: "Подробный разбор классификации пшеницы по ГОСТ 9353-2016: 5 классов, параметры качества, влияние на цену и советы для покупателей.",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "grain-logistics",
    title: "Логистика зерна в России — элеваторы, перевозка и хранение",
    readingTime: 12,
    preview: "Обзор инфраструктуры зерновой логистики: типы элеваторов, ЖД и автоперевозки, портовые терминалы, стоимость и сезонные нюансы.",
    img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "kfh-registration",
    title: "КФХ — что это такое и как зарегистрировать фермерское хозяйство",
    readingTime: 12,
    preview: "Полный гид по регистрации КФХ: правовые формы, пошаговый процесс, налоговые режимы, сравнение с ООО и доступные субсидии.",
    img: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "farmer-subsidies-2026",
    title: "Субсидии для фермеров на зерно в 2026 году — полный гид",
    readingTime: 11,
    preview: "7 видов субсидий для зерновых фермеров: Агростартап, единая субсидия, гранты, компенсации семян и техники. Как подать заявку.",
    img: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "wheat-export-russia",
    title: "Экспорт пшеницы из России — статистика и ключевые рынки",
    readingTime: 9,
    preview: "Россия — крупнейший экспортёр пшеницы в мире. Статистика, страны-покупатели, порты отгрузки, пошлины и прогноз на 2026 год.",
    img: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "grain-export-guide",
    title: "Как экспортировать зерно из России — пошаговая инструкция",
    readingTime: 10,
    preview: "8 шагов экспорта зерна: от регистрации компании и поиска покупателя до таможенного оформления и получения оплаты.",
    img: "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "barley-prices-2026",
    title: "Цены на ячмень в России 2026 — обзор и прогноз рынка",
    readingTime: 8,
    preview: "Анализ цен на кормовой и пивоваренный ячмень в 2026 году: региональные различия, факторы влияния и прогноз.",
    img: "https://images.unsplash.com/photo-1471532027614-63cc5e18efd3?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "moex-grain-quotes",
    title: "Биржевые котировки зерна на MOEX — как торговать зерном на бирже",
    readingTime: 9,
    preview: "Как работает зерновой рынок Московской биржи: типы контрактов, как читать котировки и начать торговать.",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "tr-ts-015-2011",
    title: "ТР ТС 015/2011 — технический регламент на зерно",
    readingTime: 10,
    preview: "Разбор технического регламента Таможенного союза о безопасности зерна: требования, маркировка, оценка соответствия и штрафы.",
    img: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "proverit-deklaraciyu-fgis",
    title: "Как проверить декларацию на зерно в ФГИС Росаккредитации",
    readingTime: 8,
    preview: "Пошаговая инструкция по проверке декларации в ФГИС: на что обращать внимание, признаки подделки и что делать при обнаружении.",
    img: "https://images.unsplash.com/photo-1450101499163-c8848e968f90?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "grain-declarations",
    title: "Зерновые декларации: что это и как получить",
    readingTime: 8,
    preview: "Узнайте, что такое зерновые декларации, кто обязан их получать и как пройти процесс регистрации. Подробный гайд для фермеров и трейдеров.",
    img: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "wheat-prices-2026",
    title: "Цены на пшеницу в России 2026: обзор рынка",
    readingTime: 7,
    preview: "Анализ текущих котировок пшеницы, факторов, влияющих на цены, и прогноз развития рынка на 2026 год.",
    img: "https://images.unsplash.com/photo-1595855759920-86582396756a?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "find-grain-buyer",
    title: "Как найти покупателя зерна: пошаговое руководство",
    readingTime: 9,
    preview: "Полное руководство по поиску покупателей зерна. От подготовки продукции до безопасного заключения сделки.",
    img: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "export-china-gacc-2026",
    title: "Экспорт зерна в Китай: требования GACC 2026",
    readingTime: 10,
    preview: "Разбираемся в требованиях GACC для экспорта зерна в Китай. Пошаговая инструкция и расчет экономики сделки.",
    img: "https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&h=300&fit=crop&q=80",
  },
  {
    slug: "farm-database-kfh",
    title: "База КФХ России: как найти фермера для закупки зерна",
    readingTime: 7,
    preview: "Как эффективно использовать базу крестьянских фермерских хозяйств для поиска поставщиков. Алгоритм поиска и фильтрации.",
    img: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=300&fit=crop&q=80",
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
                  className="group bg-white dark:bg-[#112211] rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all"
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={article.img}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[11px] font-medium px-2 py-0.5 rounded-full">
                      {article.readingTime} мин
                    </div>
                  </div>
                  <div className="p-5 flex flex-col">
                    <h3 className="text-base font-bold text-[#1c1c1c] dark:text-white mb-2 group-hover:text-[#2d7a2d] dark:group-hover:text-emerald-400 transition-colors leading-snug">
                      {article.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">
                      {article.preview}
                    </p>
                    <div className="text-[#2d7a2d] dark:text-emerald-400 font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
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
