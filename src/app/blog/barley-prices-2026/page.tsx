"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";
import { useState, useEffect } from "react";

export default function BarleyPrices2026Article() {
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
      slug: "wheat-prices-2026",
      title: "Цены на пшеницу 2026 — котировки, обзор и прогноз рынка",
      preview: "Анализ цен на пшеницу, факторы влияния, региональные различия.",
    },
    {
      slug: "moex-grain-quotes",
      title: "Биржевые котировки зерна на MOEX — как торговать зерном на бирже",
      preview: "Торговля зерном на Московской бирже, типы контрактов, инструменты.",
    },
    {
      slug: "find-grain-buyer",
      title: "Как найти покупателя зерна: пошаговое руководство",
      preview: "Методы поиска покупателей и безопасного заключения сделок по зерну.",
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
        <span className="text-gray-600 dark:text-gray-400">Цены на ячмень в России 2026</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Цены на ячмень в России 2026: обзор и прогноз рынка
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 7 марта 2026</span>
              <span>•</span>
              <span>8 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Ячмень занимает важное место в структуре российского зернового производства. Эта культура используется для двух основных целей: производства кормов для животноводства и производства солода для пивоваренной промышленности. Рынок ячменя имеет свои особенности, отличающие его от рынка пшеницы. В этой статье мы подробно разберём цены на ячмень в 2026 году, типы ячменя, региональные различия и факторы, влияющие на стоимость этой культуры.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Текущие цены на ячмень в 2026 году
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На рынке России различают два основных вида ячменя: кормовой ячмень и пивоваренный ячмень. Цены на них существенно отличаются.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Кормовой ячмень (стандартный):</strong> 9 800 - 10 800 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Пивоваренный ячмень (премиум качество):</strong> 12 500 - 14 200 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Экспортный ячмень:</strong> 11 000 - 12 500 ₽/тонна</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              По сравнению с пшеницей, цены на ячмень ниже примерно на 20-30%. На бирже MOEX (Московской Бирже) контракты на ячмень торговались в диапазоне <strong>10 200 - 10 900 ₽/т</strong>. Цена кормового ячменя обычно на 2-3 тысячи рублей ниже цены пивоваренного, так как к пивоваренному ячменю предъявляются более строгие требования по качеству.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Кормовой ячмень и пивоваренный ячмень: различия и цены
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Важно понимать различия между типами ячменя, так как это напрямую влияет на цену за тонну.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Кормовой ячмень
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Кормовой ячмень используется в животноводстве как основной компонент комбикормов. Он идёт на корм крупному рогатому скоту, свиньям, птице и другим животным. К кормовому ячменю предъявляются более мягкие требования по качеству. Допускается наличие заболеваний, некоторого процента повреждённых зёрен. Цены на кормовой ячмень в 2026 году держались на уровне <strong>9 800 - 10 800 ₽/т</strong>, в зависимости от региона и конкретного качества. На мировом рынке кормовой ячмень оценивается дешевле, чем пивоваренный, поэтому экспортные котировки не давили на внутренние цены.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Пивоваренный ячмень
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Пивоваренный ячмень должен соответствовать строгим стандартам качества. К нему предъявляются требования по содержанию белка (10-12%), влажности, проращиваемости и другим параметрам. Он используется для производства солода, из которого потом варят пиво. Российское пивоваренное производство в 2026 году выделяло этот тип ячменя, платя за него на 25-30% дороже, чем за кормовой. Цены на пивоваренный ячмень цена за тонну составляла <strong>12 500 - 14 200 ₽/т</strong>. Качественный пивоваренный ячмень российского производства пользовался спросом как на внутреннем рынке, так и на экспорте.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Региональные различия цен на ячмень
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Как и другие зерновые культуры, ячмень имеет существенные региональные различия в ценах. Это зависит от близости к потребителям, логистических затрат и местного спроса.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Кубань (Краснодарский край):</strong> 9 500 - 10 300 ₽/т (основной регион производства, близость к портам)</li>
              <li className="text-base leading-relaxed"><strong>Центральная Россия (Чувашия, Башкортостан, Татарстан):</strong> 10 200 - 11 000 ₽/т (основное производство кормового ячменя)</li>
              <li className="text-base leading-relaxed"><strong>Черноземная зона (Тамбовская, Орловская области):</strong> 10 000 - 10 700 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Волго-Вятский регион (Нижегородская область):</strong> 10 500 - 11 200 ₽/т (спрос от пивоварен)</li>
              <li className="text-base leading-relaxed"><strong>Сибирь (Алтайский край, Новосибирская область):</strong> 11 000 - 11 800 ₽/т (удаленность от портов)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Факторы, влияющие на цены ячменя
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Спрос от животноводческого сектора
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Кормовой ячмень на 70-80% идёт на нужды животноводства. Когда скотоводческие, свиноводческие и птицефабрики нуждаются в больших объёмах кормов, спрос на кормовой ячмень растёт, и это поднимает цены. В первом квартале 2026 года спрос от животноводства находился на среднем уровне, так как животные переходили на летние корма. Ожидается рост спроса с осени 2026 года, когда животноводческие хозяйства начнут готовить запасы кормов на зиму.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Спрос пивоваренной промышленности
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Российские пивоварни в 2026 году работали с переменной активностью. Спрос на солод, производимый из пивоваренного ячменя, зависит от потребления пива населением и объёмов экспорта. В первой половине года спрос был слабоват (сезон открытых баров только начинается), но ко второй половине ожидается рост. Высокое качество требует от производителей пивоваренного ячменя, что поддерживает премиум-цены на эту категорию.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Экспортные пошлины и мировые цены
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Мировая цена на ячмень в марте 2026 года составляла примерно <strong>180-210 USD/т</strong> (примерно 15 000-17 500 ₽/т). Российское правительство применяло экспортные пошлины на ячмень, чтобы сдерживать вывоз и поддерживать внутренние цены. На начало 2026 года экспортная пошлина на ячмень составляла около 35-45 ₽/т, что было ниже, чем для пшеницы. Это сделано потому, что ячмень менее критичен для российской экономики, и его можно экспортировать в большем объёме без ущерба для животноводства.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Урожайность и запасы
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Урожай ячменя в 2025 году составил около 9-10 млн тонн. Это немного ниже среднего показателя за последние 5 лет, что создаёт умеренный дефицит и поддерживает цены. На начало 2026 года в стране имелись достаточные запасы ячменя с прошлых урожаев, поэтому цены не были завышены. Прогноз урожая ячменя на 2026 год составляет 9-11 млн тонн, что является нормальным уровнем.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Сезонность и характер спроса
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Цены на ячмень имеют сезонный паттерн, хотя и менее выраженный, чем у пшеницы. Весной (март-май) цены обычно растут, так как запасы прошлого урожая истощаются. Летом (июль-август) цены падают в период уборки нового урожая. Осенью и зимой цены стабилизируются, но остаются зависимы от текущего спроса.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Сравнение цен ячменя и пшеницы
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Важно понимать соотношение цен между ячменем и пшеницей, так как это влияет на решения фермеров о выборе культур для посева.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Пшеница 3-го класса:</strong> 13 500 - 14 200 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Ячмень кормовой:</strong> 9 800 - 10 800 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Ячмень пивоваренный:</strong> 12 500 - 14 200 ₽/т</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Пшеница обычно дороже кормового ячменя на 25-30%, но пивоваренный ячмень может конкурировать по цене с пшеницей. Это означает, что фермеры, способные выращивать качественный пивоваренный ячмень, получают таких же или выше доходы, как и при выращивании пшеницы, но с более стабильным спросом от пивоварен.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Сезонные паттерны цен на ячмень
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Цены на ячмень цена за тонну в течение года следуют определённым паттернам:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Январь-март:</strong> цены стабильны, фермеры активно продают ячмень с прошлого урожая</li>
              <li className="text-base leading-relaxed"><strong>Апрель-май:</strong> цены начинают расти, остатки старого урожая иссякают</li>
              <li className="text-base leading-relaxed"><strong>Июнь-август:</strong> максимальное падение цен, на рынок поступает новый ячмень; кормовой ячмень может упасть до 8 500 - 9 500 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Сентябрь-декабрь:</strong> цены восстанавливаются, держатся на среднем уровне 10 000-10 800 ₽/т</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Прогноз цен на ячмень в 2026 году
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На основе текущих тенденций и факторов можно дать следующий прогноз:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Весна (март-май 2026):</strong> цены на кормовой ячмень вырастут до 10 500-11 200 ₽/т, пивоваренный ячмень останется в диапазоне 12 800-14 000 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Лето (июль-август 2026):</strong> цены упадут после уборки до 8 500-9 800 ₽/т для кормового ячменя и 11 500-12 500 ₽/т для пивоваренного</li>
              <li className="text-base leading-relaxed"><strong>Осень-зима (сентябрь-декабрь 2026):</strong> цены восстановятся до 10 000-10 800 ₽/т для кормового и 12 500-13 500 ₽/т для пивоваренного</li>
              <li className="text-base leading-relaxed"><strong>Среднегодовая цена:</strong> примерно 10 200 ₽/т для кормового ячменя и 12 800 ₽/т для пивоваренного</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Риски и факторы неопределённости
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Несколько факторов могут изменить прогноз:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Засуха или наводнения летом 2026 года могут снизить урожай ячменя и поднять цены</li>
              <li className="text-base leading-relaxed">Изменение экспортных пошлин правительством может повлиять на мировые и внутренние цены</li>
              <li className="text-base leading-relaxed">Развитие животноводства в России может увеличить спрос на кормовой ячмень</li>
              <li className="text-base leading-relaxed">Колебания мировых цен на ячмень и другие зерновые</li>
              <li className="text-base leading-relaxed">Изменения в работе пивоваренной промышленности</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как отслеживать цены и торговать ячменем
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Для фермеров и трейдеров важно постоянно мониторить цены на ячмень и понимать тренды рынка. На платформе ЗерноПоиск вы можете:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Проверять <Link href="/prices" className="text-[#2d7a2d] hover:underline">актуальные цены на ячмень</Link> и следить за тенденциями</li>
              <li className="text-base leading-relaxed">Смотреть <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">данные о мировой торговле ячменем</Link> через Comtrade</li>
              <li className="text-base leading-relaxed">Найти прямых <Link href="/farmers" className="text-[#2d7a2d] hover:underline">покупателей ячменя</Link> без посредников</li>
              <li className="text-base leading-relaxed">Отслеживать предложения в системе <Link href="/search" className="text-[#2d7a2d] hover:underline">поиска деклараций</Link></li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Рекомендации для производителей и трейдеров
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Если вы производитель ячменя или работаете в торговле зерном, вот несколько советов для максимизации прибыли:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Диверсифицируйте посевы.</strong> Если вы в состоянии выращивать пивоваренный ячмень высокого качества, это даст вам лучшие цены</li>
              <li className="text-base leading-relaxed"><strong>Заранее найдите покупателей.</strong> Пивоварни и животноводческие комплексы часто заключают контракты на всю партию заранее</li>
              <li className="text-base leading-relaxed"><strong>Следите за ценами весной.</strong> Март-май — это лучшее время для продажи ячменя, цены в это время выше</li>
              <li className="text-base leading-relaxed"><strong>Используйте хранилища.</strong> Если у вас есть возможность хранить ячмень, дождитесь лучших цен осенью и зимой</li>
              <li className="text-base leading-relaxed"><strong>Мониторьте мировые цены.</strong> Это поможет вам предсказать тренды на российском рынке</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Цены на ячмень в 2026 году остаются привлекательными как для производителей кормового, так и пивоваренного ячменя. Рынок ячменя отличается от рынка пшеницы большей стабильностью благодаря специализированному спросу от животноводства и пивоварен. Кормовой ячмень торгуется дешевле пшеницы (на 20-30%), но пивоваренный ячмень может быть конкурентен по стоимости с пшеницей высокого класса.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Успех в торговле ячменем зависит от постоянного мониторинга цен, понимания различий между типами ячменя и умения находить надёжных покупателей. Используйте инструменты ЗерноПоиска, чтобы отслеживать <Link href="/prices" className="text-[#2d7a2d] hover:underline">котировки ячменя</Link>, анализировать <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">международную торговлю</Link> и находить прямых <Link href="/farmers" className="text-[#2d7a2d] hover:underline">покупателей на платформе</Link>.
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
