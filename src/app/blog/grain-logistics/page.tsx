"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";
import { useState, useEffect } from "react";

export default function GrainLogisticsArticle() {
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
      slug: "wheat-export-russia",
      title: "Экспорт пшеницы из России: порты, страны, условия",
      preview: "Полное руководство по экспорту пшеницы из России: требования и рынки.",
    },
    {
      slug: "grain-export-guide",
      title: "Экспорт зерна: полное руководство для продавцов",
      preview: "Пошаговое описание процесса экспорта зерна и необходимых документов.",
    },
    {
      slug: "wheat-prices-2026",
      title: "Цены на пшеницу 2026 — котировки, обзор и прогноз рынка",
      preview: "Анализ текущих цен на пшеницу в России и факторы их формирования.",
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
        <span className="text-gray-600 dark:text-gray-400">Логистика зерна в России</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Логистика зерна в России: элеваторы, перевозка и хранение
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 10 марта 2026</span>
              <span>•</span>
              <span>12 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Логистика зерна — это один из самых важных аспектов российского агропромышленного комплекса. От момента сбора урожая до доставки зерна на элеватор, в портовый терминал или на мукомольный завод задействованы сотни компаний и миллионы тонн грузов. Понимание логистической инфраструктуры критически важно для фермеров, трейдеров и экспортёров. В этой статье мы рассмотрим структуру зерновой логистики в России, типы объектов хранения и перевозки, расходы на логистику и современные решения для оптимизации цепочки поставок.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Значение логистики для зернового рынка
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Россия производит 85-90 млн тонн зерна в год. Чтобы переместить такой объём от полей к местам переработки и экспорта, требуется мощная логистическая система. Логистика зерна включает несколько компонентов: хранение (элеваторы), перевозку (транспорт), обработку (очистка, сушка) и портовое обслуживание.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Расходы на логистику обычно составляют 15-25% от стоимости экспортируемого зерна. Это означает, что оптимизация логистических процессов может значительно повысить прибыль и конкурентоспособность на мировом рынке.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Типы зерновых элеваторов
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Элеватор — это специализированное сооружение для хранения, сушки, очистки и погрузки зерна. В России существует несколько типов элеваторов, каждый из которых выполняет различные функции в логистической цепочке.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Линейные элеваторы (в полях)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Линейные элеваторы расположены непосредственно в полях или рядом с ними. Они предназначены для сбора зерна у производителей, его первичной обработки (сушки, очистки) и хранения. Мощность линейных элеваторов обычно составляет 5 000-20 000 тонн.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Преимущества:</strong> быстрая приёмка урожая, снижение логистических расходов за счёт сокращения расстояний, работа с фермерами.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Недостатки:</strong> ограниченная мощность, нет возможности долгосрочного хранения больших объёмов.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Районные элеваторы
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Районные элеваторы расположены в районных центрах и предназначены для сбора зерна у нескольких хозяйств, его обработки и хранения в течение сезона. Мощность обычно составляет 20 000-100 000 тонн.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Функции:</strong> централизованное хранение, сушка, очистка, отправка зерна на дальние расстояния.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Портовые зерновые терминалы
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Портовые терминалы — это крупнейшие объекты зерновой логистики, расположенные в портах. Они получают зерно из внутренних регионов и готовят его для экспорта (погрузка на корабли). Мощность портовых терминалов может достигать 500 000-1 000 000 тонн.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Функции:</strong> хранение крупных объёмов, смешивание партий разных производителей, окончательная очистка, инспекция качества, погрузка на суда.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Производственные элеваторы (мукомольные, кормовые заводы)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Производственные элеваторы при мукомольных и кормовых заводах предназначены для приёма зерна непосредственно в производство. Мощность зависит от объёма производства и может варьироваться от 10 000 до 100 000 тонн.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Правила хранения зерна
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Правильное хранение зерна — ключ к сохранению его качества. Влажность зерна во время хранения должна быть не более 14% (для пшеницы), иначе оно может заплесневеть или начать гнить. Температура хранилища также важна: оптимальная температура составляет 10-15°C.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Элеваторы оборудованы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Сушильными установками:</strong> для снижения влажности зерна перед хранением</li>
              <li className="text-base leading-relaxed"><strong>Системами вентиляции:</strong> для предотвращения образования плесени и регулирования температуры</li>
              <li className="text-base leading-relaxed"><strong>Зерновыми хранилищами:</strong> специальные помещения или бункеры для хранения зерна</li>
              <li className="text-base leading-relaxed"><strong>Фумигационными системами:</strong> для защиты от вредителей (насекомых, грызунов)</li>
              <li className="text-base leading-relaxed"><strong>Системами контроля качества:</strong> датчики влажности, температуры и влажности воздуха</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Методы транспортировки зерна
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Железнодорожная перевозка
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Железнодорожная перевозка — это основной способ доставки зерна на дальние расстояния в России. Зерно перевозится в специальных вагонах-хопперах (саморазгружающихся вагонах) с вместимостью 60-80 тонн. Полный поезд может состоять из 60-80 вагонов, что позволяет перевезти 3 600-6 400 тонн зерна за один рейс.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Стоимость железнодорожной перевозки:</strong> примерно 800-1 500 ₽/тонна на расстояние 1 000 км (в зависимости от направления и сезона). Из Краснодара в Москву (примерно 1 500 км) стоимость доставки составляет около 1 200-1 500 ₽/тонна.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Преимущества:</strong> большой объём, экономичность на дальние расстояния, надежность.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Недостатки:</strong> зависимость от расписания поездов, требуется инфраструктура (железнодорожные пути), медленнее, чем автотранспорт.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Автомобильная перевозка
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Автомобильная перевозка используется для доставки зерна на короткие и средние расстояния. Зерновозы (большегрузные грузовики) могут перевозить 20-30 тонн зерна за раз. На дальние расстояния часто используются комбинированные схемы: сначала доставка автотранспортом до железной дороги, затем — поездом.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Стоимость автомобильной перевозки:</strong> примерно 25-40 ₽/тонна/км (в зависимости от условий дороги и сезона). На расстояние 300 км стоимость доставки составляет 7 500-12 000 ₽/тонна.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Преимущества:</strong> гибкость (отправка в любое время), быстрота, прямая доставка.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Недостатки:</strong> дороговизна на дальние расстояния, зависимость от состояния дорог, сезонные ограничения (весной и осенью слякоть может затруднить доставку).
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Речная и морская перевозка
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Речная перевозка используется для доставки зерна из центральной России в портовые города. Специальные речные суда (баржи) могут перевозить 1 000-2 000 тонн зерна. Морская перевозка применяется при экспорте: зерно доставляется крупногрузными кораблями (30 000-100 000 тонн) в порты-назначения.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Стоимость водной перевозки:</strong> наиболее экономична, особенно при экспорте (примерно 200-500 ₽/тонна на дальние расстояния).
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Главные портовые терминалы России
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Россия экспортирует зерно через несколько портов. Основные портовые терминалы для экспорта зерна находятся в:
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Новороссийск (Краснодарский край)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Новороссийск — крупнейший портовый центр зерна в России. Через этот порт экспортируется около 30-40% российского зерна. Несколько крупных терминалов (в том числе Ultraterminal, Мегаконтейнер, Феодосия-Мебель) имеют общую пропускную способность 20-25 млн тонн в год.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Море Азовского (Ростов-на-Дону, Таганрог)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Ростов-на-Дону и Таганрог в Азовском море также являются важными портами для экспорта зерна. Расположение ближе к центральным и северным регионам зерновой России делает эти порты привлекательными. Пропускная способность — 10-15 млн тонн в год.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Крым (Феодосия, Керчь)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Терминалы в Крыму (Феодосия, Керчь) раньше обрабатывали значительные объёмы зерна, однако с 2022 года их роль сократилась.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Батуми (Грузия)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Батуми является альтернативным портом для экспорта российского зерна через Чёрное море с доступом к Средиземному морю.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Сезонные вызовы в логистике зерна
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Логистика зерна в России сталкивается с серьезными сезонными вызовами:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Летняя уборка:</strong> в июле-сентябре объём перевозок зерна максимален. Все элеваторы и порты работают на пределе мощности. Нехватка транспорта и временных задержек неизбежна.</li>
              <li className="text-base leading-relaxed"><strong>Весенняя распутица:</strong> в апреле-мае дороги размокают, особенно в центральных и северных регионах. Автомобильная доставка становится невозможной, растёт спрос на железные дороги.</li>
              <li className="text-base leading-relaxed"><strong>Зимние морозы:</strong> в январе-феврале реки замерзают, речная логистика прерывается. Растёт нагрузка на железные дороги и автотранспорт.</li>
              <li className="text-base leading-relaxed"><strong>Портовые пробки:</strong> в разгар сезона порты переполнены кораблями, ожидающими погрузки. Время ожидания корабля может составлять 15-30 дней, что существенно увеличивает стоимость доставки.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Расчёт стоимости логистики зерна
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Давайте рассчитаем общую стоимость доставки пшеницы из Кубани в Европу:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Доставка на элеватор (50 км на грузовике):</strong> 50 км × 30 ₽/т/км = 1 500 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Услуги элеватора (сушка, очистка, хранение):</strong> 300-500 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Доставка на порт (150 км, поезд):</strong> примерно 1 000 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Портовые услуги (погрузка, инспекция):</strong> 500-800 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>Морская доставка (например, в Роттердам):</strong> 30-50 USD/тонна = 3 000-5 000 ₽/тонна</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              <strong>Итого:</strong> примерно 6 300-8 800 ₽/тонна, или около 10-14% от стоимости пшеницы (если пшеница стоит 14 000 ₽/тонна).
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Цифровые инструменты для оптимизации логистики
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Современные технологии помогают оптимизировать зерновую логистику:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Системы отслеживания GPS:</strong> отслеживание положения грузовиков и поездов в реальном времени</li>
              <li className="text-base leading-relaxed"><strong>Программное обеспечение маршрутизации:</strong> расчёт оптимальных маршрутов доставки</li>
              <li className="text-base leading-relaxed"><strong>Электронные торговые площадки:</strong> поиск лучших цен на перевозку и услуги элеваторов</li>
              <li className="text-base leading-relaxed"><strong>Системы управления складами:</strong> автоматизация приёма и отпуска зерна</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              На платформе <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">ЗерноПоиск Comtrade</Link> вы можете видеть, какие объёмы зерна экспортируются через различные порты, что помогает понять логистические потоки и выбрать оптимальный маршрут доставки.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Типичные проблемы в логистике зерна
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Недостаток вагонов в сезон:</strong> в период уборки спрос на железнодорожные вагоны превышает предложение на 30-40%, что ведёт к задержкам и повышению цен на перевозку</li>
              <li className="text-base leading-relaxed"><strong>Нехватка емкостей на элеваторах:</strong> в разгар уборки элеваторы могут работать переполненными, замедляя процесс приёма зерна</li>
              <li className="text-base leading-relaxed"><strong>Некачественные дороги:</strong> в весенний период качество дорог резко ухудшается, что замедляет автомобильные перевозки</li>
              <li className="text-base leading-relaxed"><strong>Портовые пробки:</strong> скопление кораблей в портах может задержать отправку на неделю-две</li>
              <li className="text-base leading-relaxed"><strong>Потери при хранении:</strong> неправильное хранение зерна может привести к потерям 1-5% объёма из-за плесени, вредителей и окисления</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как ЗерноПоиск помогает с логистикой
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Платформа ЗерноПоиск предоставляет инструменты для оптимизации логистических решений:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong><Link href="/search" className="text-[#2d7a2d] hover:underline">Поиск партий зерна</Link>:</strong> найдите ближайшие партии зерна, чтобы минимизировать расстояния доставки</li>
              <li className="text-base leading-relaxed"><strong><Link href="/prices" className="text-[#2d7a2d] hover:underline">Аналитика цен</Link>:</strong> отслеживайте цены в разных регионах, учитывая стоимость логистики</li>
              <li className="text-base leading-relaxed"><strong><Link href="/comtrade" className="text-[#2d7a2d] hover:underline">Данные Comtrade</Link>:</strong> смотрите, через какие порты и в какие страны экспортируется зерно, чтобы выбрать оптимальный маршрут</li>
              <li className="text-base leading-relaxed"><strong>Возможность найти прямых покупателей:</strong> исключите посредников и сэкономьте на логистических расходах, договорившись о доставке напрямую</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Практические рекомендации
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Для производителей (фермеров)
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Планируйте доставку заранее: заказывайте транспорт и место на элеваторе до начала уборки</li>
              <li className="text-base leading-relaxed">Сотрудничайте с ближайшим элеватором: минимизируйте расстояния доставки</li>
              <li className="text-base leading-relaxed">Правильно подготавливайте зерно: сушите его до необходимой влажности перед хранением</li>
              <li className="text-base leading-relaxed">Рассчитывайте цену с учётом логистики: не забудьте прибавить стоимость доставки к цене зерна</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Для переработчиков и экспортёров
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Оптимизируйте маршруты поставок: используйте систему планирования и отслеживания логистики</li>
              <li className="text-base leading-relaxed">Работайте с портами до сезона: договоритесь о выделении причалов и погрузочного оборудования</li>
              <li className="text-base leading-relaxed">Используйте контейнеры и специальное оборудование для минимизации потерь зерна</li>
              <li className="text-base leading-relaxed">Анализируйте данные Comtrade: смотрите, какие торговые потоки существуют, и планируйте закупки в соответствии с ними</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Будущее логистики зерна
            </h2>
            <p className="text-base leading-relaxed mb-6">
              В ближайшие годы логистика зерна будет трансформироваться под влиянием цифровых технологий, автоматизации и климатических изменений. Ожидается внедрение более совершённых систем отслеживания, автоматических элеваторов и оптимизированных маршрутов доставки. Это позволит снизить стоимость логистики и повысить эффективность всей цепочки поставок.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Логистика зерна — это сложная и многоуровневая система, которая обеспечивает движение миллионов тонн зерна от полей России к мировым рынкам. От выбора элеватора до выбора портовой инфраструктуры, каждое решение влияет на итоговую стоимость и эффективность. Стоимость логистики может составлять 10-25% от цены зерна, поэтому оптимизация логистических процессов критически важна для повышения прибыльности.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Используйте инструменты <Link href="/" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link>, чтобы планировать логистику более эффективно. Изучайте <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">торговые потоки</Link>, отслеживайте <Link href="/prices" className="text-[#2d7a2d] hover:underline">цены в разных регионах</Link> и <Link href="/search" className="text-[#2d7a2d] hover:underline">ищите партии зерна</Link>, учитывая расстояния доставки. Правильно спланированная логистика поможет вам сэкономить тысячи рублей и получить максимальную прибыль от продажи зерна.
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
