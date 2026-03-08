"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";
import { useState, useEffect } from "react";

export default function WheatPrices2026Article() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const relatedArticles = [
    {
      slug: "grain-declarations",
      title: "Зерновые декларации: что это и как получить",
      preview: "Полное руководство по получению декларации качества на зерно.",
    },
    {
      slug: "find-grain-buyer",
      title: "Как найти покупателя зерна: пошаговое руководство",
      preview: "Методы поиска покупателей и безопасного заключения сделок по зерну.",
    },
    {
      slug: "export-china-gacc-2026",
      title: "Экспорт зерна в Китай: требования GACC 2026",
      preview: "Требования и процесс экспорта зерна в Китай через GACC.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950">
      {/* Reading Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-[#2d7a2d] z-[60] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm border-b border-gray-200 dark:border-slate-800" style={{ backgroundColor: '#1a2e1a' }}>
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

      {/* Breadcrumbs */}
      <div className="mx-auto max-w-3xl px-4 py-6 text-sm">
        <Link href="/" className="text-[#2d7a2d] hover:underline">Главная</Link>
        <span className="text-gray-400 mx-2">›</span>
        <Link href="/blog" className="text-[#2d7a2d] hover:underline">Блог</Link>
        <span className="text-gray-400 mx-2">›</span>
        <span className="text-gray-600 dark:text-gray-400">Цены на пшеницу в России 2026: обзор рынка</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Цены на пшеницу в России 2026: обзор рынка
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 4 марта 2026</span>
              <span>•</span>
              <span>7 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Пшеница — это стратегическая культура российского зернового комплекса. На её долю приходится около 50% от всего производства зерна в стране. Цены на пшеницу колеблются ежедневно, влияя на решения фермеров, трейдеров и переработчиков. В этой статье мы разберём, какие цены сейчас на пшеницу в России, что их определяет, и как прогнозируется развитие рынка в 2026 году.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Текущие цены на пшеницу в 2026 году
            </h2>
            <p className="text-base leading-relaxed mb-6">
              По данным на март 2026 года, котировки пшеницы следующие:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Пшеница 3-го класса (мягкая):</strong> 13 500 - 14 200 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Пшеница 2-го класса (хлебная):</strong> 14 500 - 15 300 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Пшеница 1-го класса (первосортная):</strong> 15 800 - 16 500 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Экспортная пшеница:</strong> 14 800 - 15 800 ₽/тонна</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              На бирже MOEX (Московской Бирже) контракты на пшеницу торговались в диапазоне <strong>14 300 - 14 800 ₽/т</strong>. На региональных рынках (ZOL.RU) цены варьировались от 13 200 ₽/т в южных регионах до 15 500 ₽/т на Урале и в Сибири.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Факторы, влияющие на цены пшеницы
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Урожайность и объём предложения
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Урожай 2025 года составил примерно 85-90 млн тонн зерна, из них пшеницы было собрано около 45-48 млн тонн. Это немного ниже показателей 2024 года (50 млн тонн), что поддерживает цены на более высоком уровне. Если прогнозы на 2026 год подтвердятся, урожай должен быть стабильным.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Экспортные пошлины
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Российское правительство регулирует экспортные пошлины на зерно. На начало 2026 года экспортная пошлина составляла около 40-50 ₽/т для пшеницы. Эти пошлины снижают привлекательность экспорта, в результате увеличивается внутреннее предложение и давит на цены.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Мировые цены
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Мировая цена на пшеницу в марте 2026 года держалась на уровне <strong>260-280 USD/т</strong> (примерно 26 000-28 000 ₽/т). Когда мировые цены низкие, это снижает стимулы к экспорту, и пшеница скапливается на внутреннем рынке, что вызывает падение цен.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Курс рубля
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Ослабление рубля обычно поднимает цены на зерно, так как экспортёры получают больше рублей за доллары. В первом квартале 2026 года рубль был относительно стабилен на уровне 85-90 ₽/USD, что не оказывало сильного давления на цены.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Спрос от переработчиков
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Объём закупок мукомольными и кормовыми предприятиями напрямую влияет на цены. Весной 2026 года спрос от животноводческих комплексов находился на среднем уровне, так как животные переходили на летние корма.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Региональные различия в ценах
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Цены на пшеницу значительно отличаются по регионам в зависимости от расстояния до портов и крупных потребителей:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Южный федеральный округ (Краснодарский край, Ростовская область):</strong> 13 200 - 13 800 ₽/т (близость к портам)</li>
              <li className="text-base leading-relaxed"><strong>Черноземная зона (Тамбовская, Воронежская области):</strong> 13 800 - 14 400 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Центральная Россия (Московская область):</strong> 14 500 - 15 100 ₽/т (логистика, спрос)</li>
              <li className="text-base leading-relaxed"><strong>Приволжский округ (Саратовская, Пензенская области):</strong> 14 200 - 14 800 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Урал и Сибирь (Челябинская, Омская области):</strong> 15 200 - 15 800 ₽/т (удаленность)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Динамика цен в течение года
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Цены на пшеницу имеют сезонный характер:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Январь-март (зима):</strong> цены обычно стабильны, фермеры активно продают зерно с прошлого урожая</li>
              <li className="text-base leading-relaxed"><strong>Апрель-май (весна):</strong> цены растут, так как остатки прошлого урожая иссякают, а новый урожай ещё не появился</li>
              <li className="text-base leading-relaxed"><strong>Июнь-август (уборка):</strong> цены падают, так как на рынок поступает новая пшеница</li>
              <li className="text-base leading-relaxed"><strong>Сентябрь-декабрь (осень-зима):</strong> цены стабилизируются на среднем уровне, постепенно растут к концу года</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Прогноз на 2026 год
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На основе текущих данных и тенденций можно прогнозировать следующее:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>В весенний период (апрель-май):</strong> ожидаются повышение цен до 15 000-15 500 ₽/т, так как спрос превышает предложение</li>
              <li className="text-base leading-relaxed"><strong>Летний период (июль-август):</strong> цены упадут до 12 500-13 500 ₽/т из-за наступления уборочного сезона</li>
              <li className="text-base leading-relaxed"><strong>Осень-зима (сентябрь-декабрь):</strong> цены будут колебаться в диапазоне 13 500-14 500 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Среднегодовая цена:</strong> ожидается около 14 000 ₽/т для пшеницы 3-го класса</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Основные риски, которые могут изменить прогноз:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Неблагоприятные погодные условия летом 2026 года (засуха, град)</li>
              <li className="text-base leading-relaxed">Изменение экспортных пошлин правительством</li>
              <li className="text-base leading-relaxed">Санкции или открытие новых рынков для экспорта</li>
              <li className="text-base leading-relaxed">Резкие колебания мировых цен на зерно</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как фермер может защитить прибыль
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Если вы фермер или трейдер, вот несколько рекомендаций:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Следите за ценами</strong> — проверяйте <Link href="/prices" className="text-[#2d7a2d] hover:underline">котировки на нашей платформе</Link> ежедневно</li>
              <li className="text-base leading-relaxed"><strong>Диверсифицируйте продажи</strong> — продавайте партии понемногу в течение года, а не всё сразу после уборки</li>
              <li className="text-base leading-relaxed"><strong>Используйте хранилища</strong> — если цены низкие, храните зерно и дождитесь подъёма цен</li>
              <li className="text-base leading-relaxed"><strong>Заключайте форвардные контракты</strong> — договоритесь на цену заранее с переработчиком или трейдером</li>
              <li className="text-base leading-relaxed"><strong>Ищите покупателей через ЗерноПоиск</strong> — найдите <Link href="/farmers" className="text-[#2d7a2d] hover:underline">покупателей напрямую</Link> и избежите посредников</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Использование аналитики для торговли
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Важно отслеживать не только текущие цены, но и понимать, что их движет. На платформе ЗерноПоиск вы найдёте:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><Link href="/prices" className="text-[#2d7a2d] hover:underline">Биржевые цены MOEX</Link> — отслеживайте тренд на бирже</li>
              <li className="text-base leading-relaxed"><Link href="/comtrade" className="text-[#2d7a2d] hover:underline">Данные Comtrade</Link> — смотрите, сколько зерна экспортирует Россия в каждую страну</li>
              <li className="text-base leading-relaxed"><Link href="/search" className="text-[#2d7a2d] hover:underline">Поиск деклараций</Link> — видите, сколько партий зерна предлагается на рынке</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Цены на пшеницу в 2026 году держатся на относительно высоком уровне (13 500-15 800 ₽/т), что выгодно для производителей. Однако рынок остаётся волатильным и зависит от множества факторов.
            </p>
            <p className="text-base leading-relaxed">
              Лучший способ получить максимальную прибыль — это постоянно мониторить цены, отслеживать спрос и находить прямых покупателей. Именно для этого создана платформа ЗерноПоиск: здесь вы найдёте <Link href="/prices" className="text-[#2d7a2d] hover:underline">актуальные цены</Link>, <Link href="/search" className="text-[#2d7a2d] hover:underline">декларации</Link> и <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">данные о торговле</Link>, чтобы делать обоснованные решения.
            </p>
          </div>
        </article>

        {/* Related Articles */}
        <section className="bg-gradient-to-b from-[#f8f9f6] to-white dark:from-slate-900 dark:to-slate-950 py-12 mt-12">
          <div className="mx-auto max-w-3xl px-4">
            <h3 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mb-6">
              Читайте также
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {relatedArticles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/blog/${article.slug}`}
                  className="group bg-white dark:bg-slate-800 rounded-lg border border-gray-200 dark:border-slate-700 p-6 hover:shadow-md transition-shadow"
                >
                  <h4 className="text-lg font-semibold text-[#1c1c1c] dark:text-white mb-2 group-hover:text-[#2d7a2d] transition-colors">
                    {article.title}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    {article.preview}
                  </p>
                  <div className="text-[#2d7a2d] font-semibold text-sm">
                    Читать →
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
