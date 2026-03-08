"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function GrainExportGuideArticle() {
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
      title: "Экспорт пшеницы из России — статистика и ключевые рынки",
      preview: "Анализ объёмов экспорта, крупнейшие покупатели, порты и пошлины.",
    },
    {
      slug: "export-china-gacc-2026",
      title: "Экспорт зерна в Китай: требования GACC 2026",
      preview: "Требования и процесс экспорта зерна в Китай через GACC.",
    },
    {
      slug: "tr-ts-015-2011",
      title: "Стандарт ТР ТС 015/2011 для зерна: основные требования",
      preview: "Технический регламент Таможенного союза для зерновых культур.",
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
        <span className="text-gray-600 dark:text-gray-400">Как экспортировать зерно из России</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Как экспортировать зерно из России — пошаговая инструкция
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 8 марта 2026</span>
              <span>•</span>
              <span>10 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Экспорт зерна из России — это сложный, но очень прибыльный бизнес. Для того чтобы успешно экспортировать зерно, необходимо понимать весь процесс: от подготовки компании и документов до таможенного оформления и получения платежа. В этом пошаговом руководстве мы рассмотрим все этапы экспорта зерна из России, помогающие новичкам и опытным экспортёрам разобраться во всех тонкостях.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Шаг 1: Подготовка компании и получение необходимых регистраций
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Перед тем как начать экспортировать зерно, ваша компания должна быть правильно зарегистрирована и иметь все необходимые лицензии и квалификации.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Регистрация ООО или ИП
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Во-первых, ваша компания должна быть зарегистрирована как Общество с ограниченной ответственностью (ООО) или Индивидуальный предприниматель (ИП) в России. Зарегистрируйтесь в налоговой инспекции и получите ИНН (Идентификационный номер налогоплательщика). Код вида деятельности должен включать "ОКВЭД 01.15 — Выращивание зерновых культур (кроме риса), зернобобовых культур и семян масличных культур" или "ОКВЭД 46.21 — Оптовая торговля зерном и семенами".
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Регистрация в системе ФГИС (Федеральной государственной информационной системе)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Для экспорта зерна требуется регистрация в ФГИС (Федеральной государственной информационной системе). Это система отслеживания зерна в России. Вам нужно:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Зарегистрироваться как участник системы:</strong> подайте заявку в центр аккредитации</li>
              <li className="text-base leading-relaxed"><strong>Получить доступ к системе:</strong> вам выдадут логин и пароль для ввода данных о зерне</li>
              <li className="text-base leading-relaxed"><strong>Заключить договор с аккредитованными лабораториями:</strong> для проведения анализа качества зерна</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Без регистрации в ФГИС вы не сможете оформить декларацию о соответствии зерна и получить допуск на экспорт.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Получение статуса экспортёра
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Приготовьтесь к проверкам налоговой инспекции и таможни. Экспортёры подвергаются повышенному контролю. Убедитесь, что ваша компания прозрачна в плане налогов и всех деклараций о доходах.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Шаг 2: Поиск и выбор покупателя для вашего зерна
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Как только ваша компания готова к экспорту, нужно найти покупателя. Существуют несколько способов:
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Через зерновых брокеров и трейдеров
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Брокеры — это посредники, которые соединяют продавцов и покупателей зерна. Они берут комиссию (обычно 1-3% от стоимости контракта), но находят покупателей очень быстро. Известные компании: ООО "ЭКОМ", "АО Русинформ", "SGC Commodity".
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Через международные торговые платформы
            </h3>
            <p className="text-base leading-relaxed mb-6">
              На платформах вроде <Link href="/farmers" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link>, TradeKey, Alibaba вы можете разместить свои предложения зерна и получить прямые предложения от иностранных покупателей. Это уменьшает роль посредников.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Через участие в тендерах
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Крупные импортёры (например, правительство Египта или компании в Саудовской Аравии) регулярно проводят закрытые и открытые тендеры на покупку зерна. Мониторьте сайты таможни, импортозависимых стран и международные торговые площадки.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Прямое сотрудничество с переработчиками
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Мукомольные заводы, пивоварни и кормовые комбинаты иногда экспортируют зерно через дочерние компании или имеют прямых иностранных партнёров.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Шаг 3: Заключение контракта купли-продажи
            </h2>
            <p className="text-base leading-relaxed mb-6">
              После того как вы нашли покупателя, необходимо заключить контракт купли-продажи зерна. Контракт должен содержать следующие элементы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Наименование и детали товара:</strong> тип зерна (пшеница, ячмень, кукуруза и т.д.), сорт, класс, количество</li>
              <li className="text-base leading-relaxed"><strong>Цена:</strong> обычно в USD за тонну, включая условия поставки (FOB, CIF, CFR и т.д.)</li>
              <li className="text-base leading-relaxed"><strong>Условия платежа:</strong> авансовый платёж (обычно 10-30%), остальное при отгрузке или по документам</li>
              <li className="text-base leading-relaxed"><strong>Сроки поставки:</strong> дата отгрузки с портового терминала</li>
              <li className="text-base leading-relaxed"><strong>Спецификация товара:</strong> результаты анализа зерна (влажность, белок, порошистость и т.д.)</li>
              <li className="text-base leading-relaxed"><strong>Условия проверки качества:</strong> когда и где будет проверяться качество зерна</li>
              <li className="text-base leading-relaxed"><strong>Штрафы и пенальти:</strong> за несоблюдение сроков или параметров качества</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Лучше всего привлечь опытного юриста для составления или проверки контракта. В России есть специализированные юридические фирмы, которые занимаются экспортными контрактами.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Шаг 4: Оформление необходимых документов
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Экспорт зерна требует множества документов. Вот полный список:
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Контракт купли-продажи
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Уже обсудили выше. Должен быть подписан обеими сторонами и заверен печатями компаний.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Фитосанитарный сертификат
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Это документ подтверждающий, что зерно не заражено вредителями и болезнями. Выдаётся Федеральной службой по фитосанитарному надзору (Россельхозфедерация). Для получения:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Подайте заявку в местное отделение Россельхозфедерации</li>
              <li className="text-base leading-relaxed">Проведите осмотр партии зерна фитосанитарным инспектором</li>
              <li className="text-base leading-relaxed">Получите сертификат (обычно в течение 2-5 рабочих дней)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Декларация соответствия (ГОСТ и ТР ТС)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Декларация подтверждает, что ваше зерно соответствует стандартам качества. <Link href="/search" className="text-[#2d7a2d] hover:underline">Зерновые декларации получаются через ФГИС</Link>. Требуется:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Проведение лабораторного анализа в аккредитованной лаборатории</li>
              <li className="text-base leading-relaxed">Заполнение формы декларации в ФГИС</li>
              <li className="text-base leading-relaxed">Отправка документов в центр аккредитации</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Счёт-фактура (Invoice)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Выставляется покупателю для оплаты. Содержит:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Описание товара и количество</li>
              <li className="text-base leading-relaxed">Цену за единицу и общую стоимость</li>
              <li className="text-base leading-relaxed">Условия поставки (FOB, CIF и т.д.)</li>
              <li className="text-base leading-relaxed">Реквизиты для платежа</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Таможенная декларация (ДТ-Э)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Декларация товаров для экспорта, заполняется по форме, установленной таможней. Обычно это делает таможенный брокер за компанию.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              6. Расчётные документы (Bill of Lading)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Коносамент выдаётся судоходной компанией и подтверждает, что товар загружен на корабль. Служит доказательством отправки товара.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              7. Страховой полис (опционально)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Если условие поставки CIF или другие, требуется страховка груза от перевозчика до конечного пункта.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Шаг 5: Логистика и транспортировка зерна
            </h2>
            <p className="text-base leading-relaxed mb-6">
              После оформления документов нужно организовать доставку зерна до портового терминала (или граничной таможни).
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Доставка на портовой терминал
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Основные пути доставки:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Железнодорожный транспорт:</strong> самый дешёвый вариант для дальних расстояний, поезда везут в вагонах (обычно 60-70 тонн в вагоне)</li>
              <li className="text-base leading-relaxed"><strong>Автомобильный транспорт:</strong> быстрее, но дороже, используется для близких расстояний</li>
              <li className="text-base leading-relaxed"><strong>Комбинированная доставка:</strong> сначала по железной дороге до близлежащего города, затем на грузовике до порта</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Выбор портового терминала
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Основные зерновые портовые терминалы России:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Новороссийск (Черноморский порт):</strong> крупнейший, пропускная способность 8-10 млн тонн/год</li>
              <li className="text-base leading-relaxed"><strong>Кавказ (Темрюк):</strong> современные терминалы, вместимость 3-4 млн тонн</li>
              <li className="text-base leading-relaxed"><strong>Тамань (Анапа):</strong> быстрорастущие мощности, 5-7 млн тонн</li>
              <li className="text-base leading-relaxed"><strong>Ростов-на-Дону (порт на Дону):</strong> речные суда, мощность 2-3 млн тонн</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Складское хранилище и подготовка
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Если зерно прибыло раньше времени, может потребоваться складское хранилище. Портовые терминалы обычно предоставляют услуги хранения по следующим ставкам:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Хранение в амбарах:</strong> 0.5-1.0 ₽/т в день</li>
              <li className="text-base leading-relaxed"><strong>Хранение в силосах:</strong> 0.2-0.5 ₽/т в день (более экономично)</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Перед отгрузкой зерно проходит повторный анализ качества на терминале.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Шаг 6: Таможенное оформление и процедуры
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Это один из самых важных и сложных этапов. Рекомендуется нанять профессионального таможенного брокера, так как процесс чрезвычайно запутанный.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Выбор таможенного брокера
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Таможенный брокер — это специалист, зарегистрированный в таможне и имеющий право представлять ваши интересы. Брокер обычно берёт комиссию 3-5% от стоимости контракта или фиксированную сумму.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Подготовка к таможенному оформлению
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Брокер подготовит следующие документы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Декларацию товаров (ДТ-Э)</li>
              <li className="text-base leading-relaxed">Комерческие документы (контракт, счёт-фактуру)</li>
              <li className="text-base leading-relaxed">Упаковочный лист (если требуется)</li>
              <li className="text-base leading-relaxed">Сертификаты и декларации качества</li>
              <li className="text-base leading-relaxed">Доверенность от вашей компании</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Расчёт таможенных платежей
            </h3>
            <p className="text-base leading-relaxed mb-6">
              На экспорт зерна распространяются следующие платежи:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Экспортная пошлина:</strong> на начало 2026 года для пшеницы 40-60 ₽/т (зависит от цены)</li>
              <li className="text-base leading-relaxed"><strong>НДС:</strong> 0% (экспорт освобождён от НДС)</li>
              <li className="text-base leading-relaxed"><strong>Таможенный сбор:</strong> зависит от таможни, обычно 750 ₽ - 1500 ₽ за декларацию</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Процедура таможенного оформления
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Процесс обычно занимает 1-3 дня:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Брокер подаёт декларацию в электронную систему таможни</li>
              <li className="text-base leading-relaxed">Таможня проводит документарную проверку</li>
              <li className="text-base leading-relaxed">Возможна физическая проверка груза (выборочно)</li>
              <li className="text-base leading-relaxed">Таможня выдаёт разрешение на вывоз (таможенное свидетельство)</li>
              <li className="text-base leading-relaxed">Груз загружается на корабль</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Шаг 7: Отгрузка, платёж и страховка
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Загрузка на корабль
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После таможенного оформления зерно загружается на корабль. Процесс погрузки занимает 1-3 дня в зависимости от объёма.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Получение коносамента (Bill of Lading)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Судоходная компания выдаёт коносамент, подтверждающий факт загрузки товара. Это важный финансовый документ.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Условия платежа
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Оплата обычно осуществляется по одному из следующих условий:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>FOB (Free on Board):</strong> покупатель платит после загрузки, весь риск переходит на него</li>
              <li className="text-base leading-relaxed"><strong>CIF (Cost, Insurance and Freight):</strong> вы платите за доставку, покупатель платит после получения документов</li>
              <li className="text-base leading-relaxed"><strong>L/C (Letter of Credit):</strong> безопасный способ с участием банков</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Страховка (если требуется)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              При условии CIF или CFR вы несёте ответственность за страховку груза. Стоимость страховки обычно 1-3% от стоимости товара.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Шаг 8: Получение платежа и завершение сделки
            </h2>
            <p className="text-base leading-relaxed mb-6">
              После отправки документов покупателю (особенно коносамента) он обычно имеет 10-30 дней для осуществления платежа.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Процесс платежа
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Платёж часто осуществляется через:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Аккредитив:</strong> самый безопасный способ через банки</li>
              <li className="text-base leading-relaxed"><strong>Банковский перевод (SWIFT):</strong> стандартный способ</li>
              <li className="text-base leading-relaxed"><strong>Чек:</strong> реже используется в международной торговле</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Репатриация валюты
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После получения платежа в иностранной валюте (обычно USD) вы можете обменять её на рубли в банке или оставить в иностранной валюте на счёте. Убедитесь, что проделана правильная бухгалтерская отчётность.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Типичные ошибки экспортёров и как их избежать
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Неправильное оформление документов
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Даже малейшие ошибки в декларации или контракте могут привести к задержкам. Всегда проверяйте все документы дважды.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Выбор ненадёжного покупателя
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Перед заключением контракта проверьте репутацию покупателя через интернет, запросите рекомендации от других экспортёров.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Недостаточное качество зерна
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Если качество зерна не соответствует контракту, покупатель может отказаться платить. Убедитесь, что спецификация в контракте совпадает с реальным качеством.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Игнорирование требований <Link href="/gacc" className="text-[#2d7a2d] hover:underline">GACC</Link> при экспорте в Китай
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Китай имеет очень строгие требования к качеству. Все партии зерна, предназначенные для Китая, должны быть сертифицированы через GACC.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Неправильный расчёт цены
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Убедитесь, что цена включает все расходы: комиссии брокеров, таможенные пошлины, страховку, логистику. Не забудьте оставить прибыль для себя.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              6. Использование ненадёжного таможенного брокера
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Найдите опытного брокера с хорошей репутацией. Неопытный брокер может стоить вам потери груза.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение: ключевые моменты экспорта зерна
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Экспорт зерна из России — это прибыльный, но требующий внимания и знаний процесс. Чтобы успешно экспортировать зерно:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Правильно зарегистрируйте компанию и получите все необходимые лицензии (ФГИС)</li>
              <li className="text-base leading-relaxed">Найдите надёжного покупателя через <Link href="/farmers" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link> или брокеров</li>
              <li className="text-base leading-relaxed">Заключите детальный контракт, охватывающий все аспекты сделки</li>
              <li className="text-base leading-relaxed">Соберите все необходимые документы (фитосанитарный сертификат, декларацию соответствия, счёт-фактуру)</li>
              <li className="text-base leading-relaxed">Организуйте логистику до портового терминала</li>
              <li className="text-base leading-relaxed">Нанимите опытного таможенного брокера для таможенного оформления</li>
              <li className="text-base leading-relaxed">Убедитесь в безопасности условий платежа</li>
            </ul>
            <p className="text-base leading-relaxed">
              Используйте ресурсы <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">ЗерноПоиск Comtrade</Link>, чтобы анализировать спрос на разных рынках, <Link href="/prices" className="text-[#2d7a2d] hover:underline">отслеживайте цены</Link>, и находите лучшие возможности для вашего экспорта. Успеха вам в экспортном бизнесе!
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
