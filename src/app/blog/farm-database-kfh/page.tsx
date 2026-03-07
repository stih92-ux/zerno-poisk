"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function FarmDatabaseKFHArticle() {
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
      slug: "find-grain-buyer",
      title: "Как найти покупателя зерна: пошаговое руководство",
      preview: "Полное руководство по поиску покупателей и организации безопасных сделок.",
    },
    {
      slug: "grain-declarations",
      title: "Зерновые декларации: что это и как получить",
      preview: "Все о процессе получения декларации качества для торговли зерном.",
    },
    {
      slug: "wheat-prices-2026",
      title: "Цены на пшеницу в России 2026: обзор рынка",
      preview: "Анализ текущих котировок и факторов, влияющих на цены пшеницы в России.",
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
        <span className="text-gray-600 dark:text-gray-400">База КФХ России: как найти фермера для закупки зерна</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              База КФХ России: как найти фермера для закупки зерна
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 1 марта 2026</span>
              <span>•</span>
              <span>7 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              В России работает более 27 000 крестьянских фермерских хозяйств (КФХ) и сельскохозяйственных предприятий, которые производят зерно. Для трейдеров и переработчиков это огромная база потенциальных поставщиков с конкурентными ценами и большими объёмами. Но как найти нужного фермера в этом море предложений? В этой статье мы разберём, как работает база КФХ, как её использовать, и почему прямые покупки у фермеров часто выгоднее, чем покупки у посредников.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Почему важна база КФХ
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Традиционно покупатели зерна работают с:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Элеваторами и зернохранилищами</strong> — берут маржу 500-2000 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Трейдерами</strong> — берут маржу 300-1500 ₽/т</li>
              <li className="text-base leading-relaxed"><strong>Дилерами</strong> — берут маржу 200-800 ₽/т</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Когда вы покупаете напрямую у фермера, вы исключаете всех этих посредников и экономите 1000-3500 ₽ за тонну! При закупке 1000 тонн это огромная сумма.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Именно для этого и создаётся база КФХ — чтобы соединить производителей и покупателей напрямую.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что такое база КФХ ЗерноПоиск
            </h2>
            <p className="text-base leading-relaxed mb-6">
              База КФХ на платформе <Link href="/farmers" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link> содержит информацию более чем о 27 000 крестьянских фермерских хозяйств и сельскохозяйственных компаний в России. Для каждого хозяйства в базе имеется:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Полное название</strong> и организационная форма (ИП, ООО, ОАО)</li>
              <li className="text-base leading-relaxed"><strong>Регион и район</strong> расположения</li>
              <li className="text-base leading-relaxed"><strong>Культуры</strong> которые они производят</li>
              <li className="text-base leading-relaxed"><strong>Посевная площадь</strong> (примерная)</li>
              <li className="text-base leading-relaxed"><strong>Контактные данные:</strong> телефон, электронная почта, адрес</li>
              <li className="text-base leading-relaxed"><strong>ФИО руководителя</strong> и бухгалтера</li>
              <li className="text-base leading-relaxed"><strong>Рейтинг надёжности</strong> (если доступен)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как работает алгоритм поиска
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 1: Определите параметры поиска
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Перед тем как начать поиск, чётко определите:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Культуру:</strong> пшеница, ячмень, кукуруза, рожь, подсолнечник и т.д.</li>
              <li className="text-base leading-relaxed"><strong>Требуемый объём:</strong> 100 тонн, 500 тонн, 1000 тонн?</li>
              <li className="text-base leading-relaxed"><strong>Требуемый класс качества:</strong> 3-й, 2-й или 1-й класс</li>
              <li className="text-base leading-relaxed"><strong>Географическую зону:</strong> конкретный регион или несколько регионов</li>
              <li className="text-base leading-relaxed"><strong>Сезон поставки:</strong> сразу после уборки или зимой</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 2: Используйте фильтры в базе
            </h3>
            <p className="text-base leading-relaxed mb-6">
              На <Link href="/farmers" className="text-[#2d7a2d] hover:underline">странице поиска КФХ</Link> используйте фильтры для сужения поиска:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>По культуре:</strong> выберите интересующую культуру</li>
              <li className="text-base leading-relaxed"><strong>По региону:</strong> Краснодарский край, Тамбовская область, Саратовская область и т.д.</li>
              <li className="text-base leading-relaxed"><strong>По размеру хозяйства:</strong> малые (< 100 га), средние (100-1000 га), крупные (> 1000 га)</li>
              <li className="text-base leading-relaxed"><strong>По надёжности:</strong> если доступна информация о проверенных партнёрах</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 3: Анализируйте результаты
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Сортируйте результаты по:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Размеру посевной площади</strong> — больше площадь = больше потенциальный объём зерна</li>
              <li className="text-base leading-relaxed"><strong>Расстоянию от логистических центров</strong> — это влияет на стоимость доставки</li>
              <li className="text-base leading-relaxed"><strong>Наличию хранилищ</strong> — если хозяйство имеет свои хранилища, они могут предложить гибкость по датам поставки</li>
              <li className="text-base leading-relaxed"><strong>Рейтингу и отзывам</strong> — если вы нашли несколько подходящих кандидатов</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 4: Сравните с декларациями
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Одна мощная фишка ЗерноПоиск — это интеграция с базой деклараций. После того как вы нашли интересующее вас хозяйство в базе КФХ, вы можете:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Посмотреть, <Link href="/search" className="text-[#2d7a2d] hover:underline">какие декларации они выставляли в прошлом</Link></li>
              <li className="text-base leading-relaxed">Проверить качество их зерна (класс, влажность, примеси)</li>
              <li className="text-base leading-relaxed">Узнать, с какими лабораториями они работают</li>
              <li className="text-base leading-relaxed">Убедиться в стабильности качества</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 5: Установите контакт
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Свяжитесь с фермером или его представителем:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Позвоните по телефону из базы</li>
              <li className="text-base leading-relaxed">Отправьте электронное письмо с предложением</li>
              <li className="text-base leading-relaxed">Посетите хозяйство и встретитесь лично (это создаёт доверие)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Различия между КФХ, СХП и другими формами хозяйств
            </h2>
            <p className="text-base leading-relaxed mb-6">
              В базе вы найдёте разные типы хозяйств. Понимание их различий поможет вам выбрать подходящего партнёра:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>КФХ (Крестьянское Фермерское Хозяйство)</strong> — семейное хозяйство, обычно размер 100-500 га, часто специализируются на одной культуре</li>
              <li className="text-base leading-relaxed"><strong>ИП (Индивидуальный Предприниматель)</strong> — фермер, зарегистрированный как ИП, обычно небольшие объёмы</li>
              <li className="text-base leading-relaxed"><strong>ООО (Общество с Ограниченной Ответственностью)</strong> — компания, часто среднего размера (500-5000 га)</li>
              <li className="text-base leading-relaxed"><strong>ОАО/ПАО (Открытое/Публичное Акционерное Общество)</strong> — крупные агрохолдинги (> 5000 га), стабильные и надёжные партнёры</li>
              <li className="text-base leading-relaxed"><strong>Муниципальные предприятия</strong> — государственные или муниципальные хозяйства (редко производят зерно на продажу)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Пошаговая инструкция поиска поставщика
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Давайте разберёмся на конкретном примере. Допустим, вам нужна пшеница 2-го класса объёмом 500 тонн из Тамбовской области.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Ваши действия:</strong>
            </p>
            <ol className="pl-6 list-decimal space-y-2 mb-6">
              <li className="text-base leading-relaxed">Открываете <Link href="/farmers" className="text-[#2d7a2d] hover:underline">базу КФХ на ЗерноПоиск</Link></li>
              <li className="text-base leading-relaxed">Фильтруете по культуре: "Пшеница"</li>
              <li className="text-base leading-relaxed">Фильтруете по регионам: "Тамбовская область"</li>
              <li className="text-base leading-relaxed">Сортируете по размеру хозяйства (выбираете хозяйства площадью 200-1000 га, так как они способны дать 500+ тонн)</li>
              <li className="text-base leading-relaxed">Получаете список из 50-100 хозяйств</li>
              <li className="text-base leading-relaxed">Переходите к каждому хозяйству и смотрите контакты</li>
              <li className="text-base leading-relaxed">Дополнительно: выбираете несколько хозяйств и <Link href="/search" className="text-[#2d7a2d] hover:underline">проверяете их декларации</Link> (если они были выставлены в прошлом)</li>
              <li className="text-base leading-relaxed">Связываетесь с 5-10 фермерами и уточняете наличие, качество и цену</li>
              <li className="text-base leading-relaxed">Выбираете 2-3 лучших вариантов и переговариваетесь на условиях</li>
              <li className="text-base leading-relaxed">Заключаете контракт и организуете покупку</li>
            </ol>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Преимущества прямых покупок у фермеров
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Лучшие цены:</strong> экономия 1000-3500 ₽/т за счёт исключения посредников</li>
              <li className="text-base leading-relaxed"><strong>Большие объёмы:</strong> крупные фермы могут поставлять сотни и тысячи тонн</li>
              <li className="text-base leading-relaxed"><strong>Свежее зерно:</strong> вы получаете зерно сразу после уборки и сушки, без долгого хранения</li>
              <li className="text-base leading-relaxed"><strong>Гибкость:</strong> можно договориться на индивидуальные условия</li>
              <li className="text-base leading-relaxed"><strong>Долгосрочные отношения:</strong> фермер заинтересован в постоянном покупателе и готов помочь</li>
              <li className="text-base leading-relaxed"><strong>Информация о производстве:</strong> вы можете узнать о технологии выращивания и качестве</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Рисками и как их избежать
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Риск:</strong> фермер не имеет нужного объёма. <strong>Решение:</strong> свяжитесь с несколькими фермерами и договоритесь на множественные поставки.</li>
              <li className="text-base leading-relaxed"><strong>Риск:</strong> качество не соответствует объявленному. <strong>Решение:</strong> требуйте декларацию качества и проведите свои тесты перед приёмкой.</li>
              <li className="text-base leading-relaxed"><strong>Риск:</strong> задержка с поставкой. <strong>Решение:</strong> включите штрафные санкции в контракт.</li>
              <li className="text-base leading-relaxed"><strong>Риск:</strong> фермер может быть ненадёжным. <strong>Решение:</strong> проверьте его <Link href="/search" className="text-[#2d7a2d] hover:underline">историю деклараций</Link> и репутацию.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Практический совет: как выбрать лучшего поставщика
            </h2>
            <p className="text-base leading-relaxed mb-6">
              <strong>1. Размер хозяйства</strong> — чем больше, тем надёжнее. Крупные хозяйства (> 500 га) обычно более организованы и имеют системы контроля качества.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>2. История работы</strong> — проверьте деклараций, которые они выставляли. Если хозяйство постоянно выставляет декларации одного и того же класса, это признак стабильности.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>3. Наличие хранилищ</strong> — если у хозяйства есть собственные хранилища, это значит, они могут гибко управлять сроками поставки и не спешат продавать после уборки.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>4. Расположение</strong> — выбирайте хозяйства в регионах с хорошей логистикой (близко к портам, железным дорогам или вашим производственным мощностям).
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>5. Репутация</strong> — спросите рекомендации у других покупателей или посмотрите в <Link href="/search" className="text-[#2d7a2d] hover:underline">базе деклараций</Link>, кто покупал их зерно.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Дополнительная информация: сочетание с другими инструментами
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На ЗерноПоиск база КФХ работает в единой системе с другими инструментами:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Базы деклараций</strong> — видите, какие партии выставляло хозяйство</li>
              <li className="text-base leading-relaxed"><strong>Текущие цены</strong> — <Link href="/prices" className="text-[#2d7a2d] hover:underline">знаете рыночную цену</Link> и можете договориться на справедливых условиях</li>
              <li className="text-base leading-relaxed"><strong>Данные Comtrade</strong> — <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">смотрите, сколько зерна экспортируется</Link> и какова мировая цена</li>
              <li className="text-base leading-relaxed"><strong>Информация о GACC</strong> — если планируете экспорт, проверяете, аккредитована ли компания фермера</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              База КФХ ЗерноПоиск — это мощный инструмент для всех, кто хочет покупать зерно напрямую у производителя. Экономия на посредниках может составить 1000-3500 ₽/т, что при больших объёмах означает огромную прибыль.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Главный совет: используйте базу КФХ в сочетании с информацией о декларациях, ценах и мировой торговле. Это даст вам полную картину рынка и поможет найти самых надёжных поставщиков на лучших условиях.
            </p>
            <p className="text-base leading-relaxed">
              Начните прямо сейчас — <Link href="/farmers" className="text-[#2d7a2d] hover:underline">откройте базу КФХ</Link>, найдите несколько интересующих хозяйств, проверьте их декларации и свяжитесь с ними. Вы удивитесь, насколько быстро и выгодно можно найти качественное зерно по справедливой цене!
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
