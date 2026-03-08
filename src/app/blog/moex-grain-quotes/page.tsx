"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";
import { useState, useEffect } from "react";

export default function MOEXGrainQuotesArticle() {
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
      slug: "barley-prices-2026",
      title: "Цены на ячмень в России 2026 — обзор и прогноз рынка",
      preview: "Цены кормового и пивоваренного ячменя, рынок и прогноз.",
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
        <span className="text-gray-600 dark:text-gray-400">Торговля зерном на MOEX</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Биржевые котировки зерна на MOEX: как торговать зерном на бирже
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 7 марта 2026</span>
              <span>•</span>
              <span>9 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Московская биржа (MOEX) является ключевым местом торговли зерном в России. На бирже ежедневно торгуются тысячи тонн пшеницы, ячменя, кукурузы и других зерновых культур. Биржевые котировки зерна на MOEX отражают спрос и предложение на российском рынке и влияют на цены, которые фермеры получают за свою продукцию. Если вы хотите торговать зерном на бирже или просто понять, как работают биржевые цены, эта статья для вас.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что такое MOEX и зачем нужна биржевая торговля зерном
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Московская биржа (Moscow Exchange, MOEX) — это ведущая российская биржа, где торгуются акции, облигации, валюта, товары и производные инструменты. На сегменте MOEX Commodities (Товарный сегмент) торгуются фьючерсы и опционы на зерно, металлы, энергоносители и другие товары.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Биржевая торговля зерном нужна для:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Обнаружения цены:</strong> Биржа создаёт прозрачный рынок, где спрос и предложение встречаются, формируя справедливую цену</li>
              <li className="text-base leading-relaxed"><strong>Хеджирования рисков:</strong> Производители и покупатели могут заключать контракты на будущие поставки и защищать себя от колебаний цен</li>
              <li className="text-base leading-relaxed"><strong>Спекуляции и инвестиций:</strong> Трейдеры могут зарабатывать на разнице цен, обеспечивая ликвидность рынка</li>
              <li className="text-base leading-relaxed"><strong>Планирования бизнеса:</strong> Фермеры, переработчики и экспортёры используют биржевые котировки для принятия деловых решений</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как работает рынок зерна на MOEX
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Спот-рынок и фьючерсы
            </h3>
            <p className="text-base leading-relaxed mb-6">
              На MOEX существует два основных сегмента торговли зерном:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Спот-сегмент:</strong> здесь торгуются контракты на физическое зерно с поставкой в ближайшем будущем (обычно в течение месяца). Цена спота отражает текущие рыночные условия</li>
              <li className="text-base leading-relaxed"><strong>Фьючерсный сегмент:</strong> здесь торгуются фьючерсы — контракты на поставку зерна в будущих месяцах (например, июль, сентябрь, декабрь). Цена фьючерса отражает ожидания рынка о будущих ценах</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Типы контрактов на зерно
            </h3>
            <p className="text-base leading-relaxed mb-6">
              На MOEX Commodities торгуются различные контракты на зерно:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Si (Пшеница):</strong> основной контракт на мягкую пшеницу, размер контракта 60 тонн, цена котируется в ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Ed (Ячмень):</strong> контракт на кормовой ячмень, размер контракта 40 тонн</li>
              <li className="text-base leading-relaxed"><strong>Кукуруза:</strong> контракты на фуражную кукурузу, размер 40-60 тонн</li>
              <li className="text-base leading-relaxed"><strong>Подсолнечник:</strong> контракты на семена подсолнечника, размер 40 тонн</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Примеры текущих котировок MOEX
            </h3>
            <p className="text-base leading-relaxed mb-6">
              На начало марта 2026 года биржевые котировки зерна на MOEX были следующими:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Пшеница (спот):</strong> 14 200 - 14 500 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Пшеница (май 2026):</strong> 14 800 - 15 100 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Пшеница (июль 2026):</strong> 13 500 - 13 900 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Ячмень (спот):</strong> 10 200 - 10 500 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Ячмень (май 2026):</strong> 10 800 - 11 100 ₽/т</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Обратите внимание: на спот цены обычно ниже, чем на весенние контракты, что отражает сезонность и ожидания дефицита зерна в апреле-мае. Летние контракты (июль) дешевле, так как ожидается новый урожай.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как читать биржевые котировки
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Когда вы смотрите на котировки на MOEX, вы видите следующую информацию:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Название контракта:</strong> например, Si (пшеница), Ed (ячмень)</li>
              <li className="text-base leading-relaxed"><strong>Месяц и год поставки:</strong> например, H26 = март 2026, M26 = май 2026</li>
              <li className="text-base leading-relaxed"><strong>Последняя цена (Last):</strong> цена последней сделки</li>
              <li className="text-base leading-relaxed"><strong>Цена покупки (Bid):</strong> цена, по которой покупатели готовы покупать прямо сейчас</li>
              <li className="text-base leading-relaxed"><strong>Цена продажи (Ask):</strong> цена, по которой продавцы готовы продавать прямо сейчас</li>
              <li className="text-base leading-relaxed"><strong>Объём торговли:</strong> сколько контрактов торговалось за день (в штуках контрактов)</li>
              <li className="text-base leading-relaxed"><strong>Открытый интерес (Open Interest):</strong> сколько контрактов остаются открытыми в конце дня</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Кто может торговать зерном на MOEX
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Торговать на MOEX могут:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Производители зерна (фермеры, ООО, АО):</strong> могут зарегистрироваться как участники торговли и продавать свою продукцию на бирже</li>
              <li className="text-base leading-relaxed"><strong>Трейдеры и экспортёры:</strong> могут покупать и продавать зерно для перепродажи</li>
              <li className="text-base leading-relaxed"><strong>Переработчики (мукомольные, животноводческие предприятия):</strong> могут заключать контракты на нужное им зерно</li>
              <li className="text-base leading-relaxed"><strong>Инвесторы и спекулянты:</strong> могут торговать контрактами на зерно для получения прибыли</li>
              <li className="text-base leading-relaxed"><strong>Физические лица:</strong> могут открыть счёт у брокера и торговать через платформу брокера</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как начать торговать зерном на MOEX
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 1: Выберите брокера
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Чтобы торговать на MOEX, вам нужен брокер — посредник между вами и биржей. MOEX имеет список аккредитованных брокеров. Выбирайте брокера по критериям: наличие торгово-клирингового подтверждения (НККЦ), комиссии, удобство платформы, поддержка клиентов.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 2: Откройте счёт и зарегистрируйтесь в Национальном клиринговом центре
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Чтобы торговать на товарном рынке MOEX, вам нужно зарегистрироваться в Национальном клиринговом центре (НКЦ), который гарантирует исполнение сделок. Брокер поможет вам с этим процессом. Вам потребуется паспорт, ИНН и реквизиты. Регистрация обычно занимает 1-3 дня.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 3: Пополните торговый счёт
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После регистрации пополните счёт необходимой суммой. Требования к минимальному уровню средств (маржа) зависят от типа контракта. Для пшеничного контракта на MOEX минимальная маржа составляет примерно 50 000-100 000 ₽. Это деньги, которые вы блокируете как гарантию при открытии позиции.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 4: Начните торговлю
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Теперь вы можете выставлять заявки на покупку или продажу контрактов. Например, если вы фермер, вы можете выставить заявку на продажу контракта Si (пшеница) за 14 500 ₽/т. Когда найдётся покупатель по этой цене, сделка совершится автоматически.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Преимущества биржевой торговли зерном
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Прозрачность цен:</strong> Вы видите реальную рыночную цену, а не цену предложенную одним трейдером</li>
              <li className="text-base leading-relaxed"><strong>Защита прав:</strong> Все сделки гарантированы НКЦ, что защищает от махинаций контрагентов</li>
              <li className="text-base leading-relaxed"><strong>Ликвидность:</strong> Большой объём торговли означает, что вы можете быстро купить или продать контракт</li>
              <li className="text-base leading-relaxed"><strong>Стандартизированные условия:</strong> Контракты стандартизированы, что упрощает торговлю и сравнение цен</li>
              <li className="text-base leading-relaxed"><strong>Возможность хеджирования:</strong> Вы можете защитить себя от неблагоприятных изменений цен</li>
              <li className="text-base leading-relaxed"><strong>Избежание посредников:</strong> Прямая торговля на бирже часто дешевле, чем через посредников на OTC рынке</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Недостатки и риски биржевой торговли
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Маржа и плечо:</strong> Биржа позволяет торговать с плечом, что увеличивает как прибыль, так и убытки</li>
              <li className="text-base leading-relaxed"><strong>Волатильность:</strong> Цены на зерно могут резко меняться, что создаёт риски</li>
              <li className="text-base leading-relaxed"><strong>Комиссии брокера:</strong> Вы платите комиссию брокеру за каждую сделку</li>
              <li className="text-base leading-relaxed"><strong>Требования к знаниям:</strong> Для успешной торговли нужно понимать рынок и риск-менеджмент</li>
              <li className="text-base leading-relaxed"><strong>Требования НКЦ:</strong> Нужно соблюдать требования по маржинальным уровням, иначе позиция будет закрыта</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Чем отличается биржевая торговля от OTC
            </h2>
            <p className="text-base leading-relaxed mb-6">
              OTC (Over-The-Counter) означает «внебиржевую» торговлю между двумя сторонами напрямую. Это может быть, например, когда фермер продаёт зерно трейдеру по цене, которую они согласовали.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Биржа:</strong> Прозрачные цены, гарантии НКЦ, стандартные контракты, но требуются знания и маржа</li>
              <li className="text-base leading-relaxed"><strong>OTC:</strong> Гибкие условия, прямое общение с контрагентом, но риск махинаций, отсутствие гарантий</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              На платформе ЗерноПоиск вы можете одновременно отслеживать <Link href="/prices" className="text-[#2d7a2d] hover:underline">биржевые цены MOEX</Link> и находить покупателей на OTC рынке.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Основные зерновые инструменты на MOEX
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Пшеница (Si)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Основной контракт на мягкую пшеницу. Размер контракта 60 тонн. Цена в ₽/т. Основные месяцы поставки: март, май, июль, сентябрь, декабрь.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Ячмень (Ed)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Контракт на кормовой ячмень. Размер контракта 40 тонн. Менее ликвидный, чем пшеничный контракт, но важен для животноводства.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Кукуруза (Кк)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Контракт на фуражную кукурузу. Используется в кормовом производстве. Размер контракта 40-60 тонн.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как мониторить MOEX котировки
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Есть несколько способов следить за котировками зерна на MOEX:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Веб-сайт MOEX:</strong> moex.com — официальный сайт с котировками в реальном времени</li>
              <li className="text-base leading-relaxed"><strong>Мобильные приложения брокеров:</strong> большинство брокеров имеют приложения для смартфонов</li>
              <li className="text-base leading-relaxed"><strong>Платформа ЗерноПоиск:</strong> мы собираем <Link href="/prices" className="text-[#2d7a2d] hover:underline">котировки MOEX на одной странице</Link>, чтобы вам было удобнее</li>
              <li className="text-base leading-relaxed"><strong>Информационные сайты:</strong> RBC, Interfax и другие финансовые сайты отслеживают котировки</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Стратегии торговли зерном на MOEX
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Хеджирование (защита от риска)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Фермер выращивает пшеницу и боится, что к моменту урожая цены упадут. Он может продать фьючерсный контракт на май заранее, зафиксировав цену 15 000 ₽/т. Если цена упадёт до 14 000 ₽/т, он всё равно получит 15 000 ₽/т благодаря фьючерсу.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Спекуляция (получение прибыли на разнице цен)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Трейдер видит, что июльский контракт дешевле (13 500 ₽/т) чем майский (15 000 ₽/т). Он покупает июльский и продаёт майский, рассчитывая на сужение разницы в цене.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Торговля на основе фундаментальных данных
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Вы изучаете прогнозы урожая, мировые цены, объёмы экспорта (см. <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">данные Comtrade</Link>) и принимаете решение о направлении торговли.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как ЗерноПоиск помогает в торговле на MOEX
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На платформе ЗерноПоиск вы можете:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Смотреть <Link href="/prices" className="text-[#2d7a2d] hover:underline">актуальные биржевые котировки MOEX</Link> для пшеницы, ячменя, кукурузы и других культур</li>
              <li className="text-base leading-relaxed">Анализировать <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">международную торговлю зерном</Link> через Comtrade, чтобы понимать мировый спрос</li>
              <li className="text-base leading-relaxed">Находить <Link href="/farmers" className="text-[#2d7a2d] hover:underline">прямых покупателей</Link> для стратегии хеджирования</li>
              <li className="text-base leading-relaxed">Отслеживать <Link href="/search" className="text-[#2d7a2d] hover:underline">предложения зерна</Link> на рынке и видеть объёмы предложения</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Важные рекомендации для начинающих трейдеров
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Начните с малого.</strong> Не торгуйте сразу с большими объёмами. Начните с 1-2 контрактов и учитесь</li>
              <li className="text-base leading-relaxed"><strong>Изучайте рынок.</strong> Читайте анализы, смотрите исторические данные, понимайте фундаментальные факторы</li>
              <li className="text-base leading-relaxed"><strong>Используйте стоп-лоссы.</strong> Всегда устанавливайте уровни убытков, при которых вы выйдете из сделки</li>
              <li className="text-base leading-relaxed"><strong>Диверсифицируйте.</strong> Не ставьте всё на один контракт. Торгуйте разными культурами и месяцами поставки</li>
              <li className="text-base leading-relaxed"><strong>Не используйте максимальное плечо.</strong> Плечо увеличивает прибыль, но и убытки. Используйте умеренное плечо</li>
              <li className="text-base leading-relaxed"><strong>Учитесь на практике в демо-счёте.</strong> Многие брокеры предоставляют тренировочные счета с виртуальными деньгами</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Биржевые котировки зерна на MOEX являются центром российского рынка зерна. Торговля на бирже предоставляет прозрачные цены, защиту прав и возможность эффективного управления рисками. Для фермеров, трейдеров и переработчиков понимание того, как работает MOEX, критично для принятия правильных деловых решений.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Если вы хотите начать торговать зерном на бирже, выберите надежного брокера, пройдите регистрацию в НКЦ, и начните с малых объёмов. Используйте данные ЗерноПоиска для анализа <Link href="/prices" className="text-[#2d7a2d] hover:underline">котировок MOEX</Link>, <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">мировой торговли</Link> и <Link href="/search" className="text-[#2d7a2d] hover:underline">рыночных предложений</Link>, чтобы делать информированные торговые решения.
            </p>
            <p className="text-base leading-relaxed">
              Удачи в торговле зерном на MOEX!
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
