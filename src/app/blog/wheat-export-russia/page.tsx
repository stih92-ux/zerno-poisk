"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function WheatExportRussiaArticle() {
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
      slug: "export-china-gacc-2026",
      title: "Экспорт зерна в Китай: требования GACC 2026",
      preview: "Требования и процесс экспорта зерна в Китай через GACC.",
    },
    {
      slug: "grain-export-guide",
      title: "Как экспортировать зерно из России — пошаговая инструкция",
      preview: "Полный гайд по экспорту: документы, логистика, таможенное оформление.",
    },
    {
      slug: "wheat-prices-2026",
      title: "Цены на пшеницу 2026 — котировки, обзор и прогноз рынка",
      preview: "Анализ текущих цен на пшеницу, факторы влияния и прогноз на год.",
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
            <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Бот</a>
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
        <span className="text-gray-600 dark:text-gray-400">Экспорт пшеницы из России</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Экспорт пшеницы из России — статистика и ключевые рынки
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 8 марта 2026</span>
              <span>•</span>
              <span>9 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Россия занимает позицию крупнейшего экспортёра пшеницы в мире. На её долю приходится примерно 20-22% от мирового экспорта зерна. Пшеница — это не только важный источник валютных доходов для страны, но и стратегический ресурс, который поддерживает отношения с десятками стран-импортёров. В этой статье мы проанализируем объёмы экспорта пшеницы из России за последние годы, определим крупнейших покупателей, разберём экспортные каналы и рассмотрим, как использовать данные UN Comtrade для анализа рынка.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Россия как крупнейший экспортёр пшеницы в мире
            </h2>
            <p className="text-base leading-relaxed mb-6">
              По данным ФАО и UN Comtrade, Россия является глобальным лидером по экспорту пшеницы. В 2024-2025 сельскохозяйственном году Россия экспортировала более 30-32 млн тонн пшеницы и других зерновых культур, из которых на долю пшеницы пришлось примерно 21-23 млн тонн. Это огромный объём, который значительно превышает экспорт других крупных производителей: США, Европейского союза, Канады и Украины.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Такие масштабы экспорта пшеницы из России объясняются несколькими факторами:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Огромные посевные площади:</strong> в России ежегодно засевается более 27-30 млн гектаров пшеницы</li>
              <li className="text-base leading-relaxed"><strong>Высокая урожайность:</strong> средняя урожайность составляет 45-50 ц/га, в хорошие годы превышает 55 ц/га</li>
              <li className="text-base leading-relaxed"><strong>Благоприятная география:</strong> России хватает зерна для внутреннего потребления и значительной части идёт на экспорт</li>
              <li className="text-base leading-relaxed"><strong>Развитая инфраструктура:</strong> система портов, железных дорог и элеваторов позволяет эффективно экспортировать зерно</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Динамика экспорта пшеницы: статистика 2020-2026
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Рассмотрим, как изменялся экспорт пшеницы из России за последние годы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>2020 год:</strong> 37.3 млн тонн (побивший рекорд год благодаря богатому урожаю)</li>
              <li className="text-base leading-relaxed"><strong>2021 год:</strong> 29.4 млн тонн (снижение из-за введения экспортных пошлин с февраля 2021)</li>
              <li className="text-base leading-relaxed"><strong>2022 год:</strong> 19.7 млн тонн (самый низкий показатель за последние годы из-за санкций и ограничений)</li>
              <li className="text-base leading-relaxed"><strong>2023 год:</strong> 24.5 млн тонн (частичное восстановление, адаптация к новым условиям)</li>
              <li className="text-base leading-relaxed"><strong>2024 год:</strong> 28.2 млн тонн (возрастание благодаря созданию альтернативных маршрутов логистики)</li>
              <li className="text-base leading-relaxed"><strong>2025-2026 год:</strong> прогнозируется около 30-32 млн тонн экспорта зерна (из них 21-23 млн пшеницы)</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Эта статистика показывает, что несмотря на внешние вызовы и санкции, Россия сохраняет способность экспортировать огромные объёмы пшеницы, адаптируясь к новым условиям и находя альтернативные рынки и каналы поставок.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Крупнейшие импортёры пшеницы из России
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Пшеница из России экспортируется в более чем 100 стран по всему миру. Однако основная часть приходится на несколько ключевых рынков:
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Египет
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Египет — крупнейший импортёр пшеницы из России. В 2024-2025 году Египет закупил примерно 4.5-5.0 млн тонн пшеницы у России. Это объясняется огромным населением Египта (более 100 млн человек) и недостаточностью собственного производства зерна. Пшеница — это стратегический продукт для Египта, поскольку хлеб является основной пищей для большей части населения.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Турция
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Турция закупила примерно 3.5-4.0 млн тонн пшеницы из России в 2024-2025 году. Турция — важный производитель пшеницы сама по себе, но внутреннего производства недостаточно, поэтому приходится импортировать. Географическая близость России облегчает логистику и снижает стоимость доставки.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Бангладеш
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Бангладеш импортировала примерно 2.0-2.5 млн тонн пшеницы из России. Бангладеш — развивающаяся страна с быстрорастущим населением и растущим спросом на зерно для производства муки и хлеба.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Алжир
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Алжир закупил примерно 2.0-2.3 млн тонн пшеницы из России. Как и Египет, Алжир полагается на импорт для обеспечения продовольственной безопасности с населением более 40 млн человек.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Саудовская Аравия
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Саудовская Аравия импортировала примерно 1.5-2.0 млн тонн пшеницы из России. Саудовская Аравия полностью зависит от импорта зерна и использует его как для производства хлеба, так и для кормления животных.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Экспортные порты России
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Основная часть экспорта пшеницы из России проходит через морские порты на берегу Чёрного и Азовского морей:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Новороссийск (порт Черноморский):</strong> крупнейший зерновой терминал России, пропускная способность более 8-10 млн тонн в год</li>
              <li className="text-base leading-relaxed"><strong>Кавказ (Краснодарский край):</strong> зерновой терминал на берегу Чёрного моря, мощность 3-4 млн тонн в год</li>
              <li className="text-base leading-relaxed"><strong>Тамань (Таманский полуостров):</strong> современные элеваторы и терминалы с пропускной способностью 5-7 млн тонн</li>
              <li className="text-base leading-relaxed"><strong>Ростов-на-Дону (река Дон):</strong> речные терминалы для экспорта через Азовское море</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Эти три основных порта обрабатывают примерно 85-90% всего экспорта пшеницы из России. Остальная часть идёт через сухопутные маршруты в соседние страны или через речные порты.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Экспортные пошлины и регулирование
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Российское правительство использует экспортные пошлины как инструмент регулирования зернового рынка. Это сделано для того, чтобы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Защитить внутреннее производство:</strong> пошлины снижают стимулы для экспорта, оставляя больше зерна на внутреннем рынке</li>
              <li className="text-base leading-relaxed"><strong>Стабилизировать цены:</strong> задерживая экспорт, государство предотвращает резкий рост цен на зерно</li>
              <li className="text-base leading-relativness"><strong>Пополнить бюджет:</strong> экспортные пошлины генерируют доходы для государства</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              На начало 2026 года экспортная пошлина на пшеницу варьировалась в зависимости от цены на мировом рынке:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>При мировой цене ниже $200/т:</strong> пошлина составляет 0 ₽/т (льгота)</li>
              <li className="text-base leading-relaxed"><strong>При цене $200-300/т:</strong> пошлина 40-60 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>При цене выше $300/т:</strong> пошлина может быть 60-100 ₽/т или даже выше</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Классы и качество экспортируемой пшеницы
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Россия экспортирует пшеницу различных классов качества в зависимости от требований конкретного рынка:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Экспортная пшеница (Grade Кубань):</strong> высокое качество для требовательных рынков, белок более 12%, порошистость низкая</li>
              <li className="text-base leading-relaxed"><strong>Пшеница 1-го класса:</strong> хорошее качество, белок 11-12%, для производства хлеба</li>
              <li className="text-base leading-relaxed"><strong>Пшеница 2-3-го классов:</strong> среднее качество, используется в основном в развивающихся странах или на кормовые цели</li>
              <li className="text-base leading-relaxed"><strong>Фуражная пшеница:</strong> низкое качество, используется исключительно как животноводческий корм</li>
            </ul>
            <p className="text-base leading-relativness mb-6">
              Примерно 60% экспорта приходится на пшеницу 2-3-го классов, 35% на экспортную и 1-го классов, и 5% на фуражную.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Сезонность экспорта пшеницы
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Экспорт пшеницы из России имеет ярко выраженный сезонный характер:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Сентябрь-ноябрь (осень):</strong> пик экспорта (35-40% годового объёма), так как урожай собран и поступает на портовые терминалы</li>
              <li className="text-base leading-relativness"><strong>Декабрь-февраль (зима):</strong> экспорт продолжается на хорошем уровне (30-35% годового объёма), но уже замедляется</li>
              <li className="text-base leading-relaxed"><strong>Март-май (весна):</strong> экспорт снижается (15-20% годового объёма), так как остатки прошлого урожая заканчиваются</li>
              <li className="text-base leading-relativness"><strong>Июнь-август (лето):</strong> минимальный экспорт (5-10% годового объёма), новый урожай ещё не созрел</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Эта сезонность важна для экспортёров и импортёров, так как позволяет планировать закупки и логистику.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Использование данных UN Comtrade для анализа экспорта пшеницы
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На платформе <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">ЗерноПоиск Comtrade</Link> вы можете найти детальные данные о всех экспортах пшеницы из России в каждую страну мира. Это позволяет:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Отследить тренды:</strong> увидеть, как меняются объёмы экспорта в каждую страну год от года</li>
              <li className="text-base leading-relaxed"><strong>Найти новые рынки:</strong> выявить растущий спрос в развивающихся странах</li>
              <li className="text-base leading-relaxed"><strong>Оценить конкуренцию:</strong> сравнить объёмы экспорта пшеницы из разных стран в один и тот же рынок</li>
              <li className="text-base leading-relaxed"><strong>Прогнозировать цены:</strong> понять, как изменение спроса в крупных странах влияет на мировые цены</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Например, данные Comtrade показывают, что Египет и Турция ежегодно увеличивают импорт пшеницы из России, что говорит о надёжности этих рынков и стабильности спроса.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Прогноз экспорта пшеницы из России на 2026-2027
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На основе текущих тенденций и доступных данных можно выдвинуть следующие прогнозы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Объём экспорта:</strong> ожидается 30-33 млн тонн зерна (из них 21-24 млн тонн пшеницы) в 2026 году</li>
              <li className="text-base leading-relaxed"><strong>Ключевые рынки:</strong> Египет, Турция и страны Африки останутся основными покупателями</li>
              <li className="text-base leading-relativness"><strong>Азиатские рынки:</strong> Индия и Вьетнам могут увеличить импорт вследствие растущего спроса на кормовое зерно</li>
              <li className="text-base leading-relativness"><strong>Цены:</strong> цены на пшеницу во внешней торговле ожидаются на уровне $250-290/т</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Риски и вызовы для экспорта пшеницы
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Несмотря на сильные позиции России на мировом рынке пшеницы, существуют факторы, которые могут негативно повлиять на экспорт:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Геополитические ограничения:</strong> санкции могут усложнить логистику и доступ на некоторые рынки</li>
              <li className="text-base leading-relaxed"><strong>Конкуренция:</strong> США, ЕС и другие экспортёры активно расширяют свою долю на рынке</li>
              <li className="text-base leading-relaxed"><strong>Климатические риски:</strong> засуха или другие стихийные бедствия могут сократить урожай</li>
              <li className="text-base leading-relaxed"><strong>Колебания мировых цен:</strong> слабые мировые цены на пшеницу снижают доходы экспортёров</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Практические рекомендации для экспортёров
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Если вы занимаетесь экспортом пшеницы из России, вот несколько советов:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Следите за <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">данными Comtrade</Link></strong> — анализируйте спрос в разных странах и выявляйте новые возможности</li>
              <li className="text-base leading-relaxed"><strong>Диверсифицируйте рынки</strong> — не полагайтесь на один-два крупных импортёра</li>
              <li className="text-base leading-relaxed"><strong>Поддерживайте качество</strong> — экспортная пшеница высокого качества получит премию на рынке</li>
              <li className="text-base leading-relaxed"><strong>Мониторьте <Link href="/prices" className="text-[#2d7a2d] hover:underline">мировые цены</Link></strong> — продавайте пшеницу на пике цен, избегайте экспорта при низких котировках</li>
              <li className="text-base leading-relaxed"><strong>Найдите прямого покупателя</strong> — используйте <Link href="/farmers" className="text-[#2d7a2d] hover:underline">платформу ЗерноПоиск</Link> для прямых контактов с импортёрами</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relativness mb-6">
              Экспорт пшеницы из России — это один из столпов аграрной экономики страны. Россия по-прежнему остаётся крупнейшим мировым экспортёром пшеницы, несмотря на различные вызовы. Основные покупатели (Египет, Турция, Бангладеш, Алжир) обеспечивают стабильный спрос на российскую пшеницу.
            </p>
            <p className="text-base leading-relaxed">
              Для тех, кто занимается экспортом или торговлей пшеницей, важно иметь доступ к актуальным данным. Платформа ЗерноПоиск предоставляет <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">полные данные Comtrade</Link>, <Link href="/prices" className="text-[#2d7a2d] hover:underline">мировые цены</Link> и инструменты для анализа рынка. Используйте эти ресурсы, чтобы принимать обоснованные решения и максимизировать прибыль от экспорта пшеницы.
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
