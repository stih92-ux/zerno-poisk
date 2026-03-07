"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function ExportChinaGACCArticle() {
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
      preview: "Как получить декларацию качества — обязательный документ для торговли зерном.",
    },
    {
      slug: "wheat-prices-2026",
      title: "Цены на пшеницу в России 2026: обзор рынка",
      preview: "Актуальный анализ котировок и факторов, влияющих на цены пшеницы.",
    },
    {
      slug: "find-grain-buyer",
      title: "Как найти покупателя зерна: пошаговое руководство",
      preview: "Методы поиска и безопасная организация сделки по продаже зерна.",
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
        <span className="text-gray-600 dark:text-gray-400">Экспорт зерна в Китай: требования GACC 2026</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Экспорт зерна в Китай: требования GACC 2026
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 2 марта 2026</span>
              <span>•</span>
              <span>10 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Китай — один из крупнейших импортёров российского зерна. Ежегодно Россия экспортирует в Китай миллионы тонн пшеницы, ячменя, кукурузы и других культур. Однако экспорт в Китай требует соблюдения строгих требований GACC (General Administration of Customs and Tariffs / Генеральное управление таможни). В этой статье мы разберём, что такое GACC, какие требования предъявляются к российскому зерну, и как организовать успешный экспорт.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что такое GACC Китая
            </h2>
            <p className="text-base leading-relaxed mb-6">
              GACC (General Administration of Customs and Tariffs of the People's Republic of China) — это структура, которая контролирует качество и безопасность импортного продовольствия в Китае. GACC не только проверяет документы, но и аккредитует зарубежные предприятия, которые могут экспортировать в Китай.
            </p>
            <p className="text-base leading-relaxed mb-6">
              По существу, GACC — это система гарантии качества. Если ваша компания хочет экспортировать зерно в Китай, она должна быть зарегистрирована и аккредитована в базе GACC. На платформе <Link href="/gacc" className="text-[#2d7a2d] hover:underline">ЗерноПоиск вы можете проверить статус любой компании</Link> в этой базе.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Какие культуры можно экспортировать в Китай
            </h2>
            <p className="text-base leading-relaxed mb-6">
              GACC разрешает экспорт следующих культур из России:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Пшеница</strong> — самый популярный экспортный товар (сотни тысяч тонн в год)</li>
              <li className="text-base leading-relaxed"><strong>Ячмень</strong> — растёт спрос на фураж (корм для животных)</li>
              <li className="text-base leading-relaxed"><strong>Кукуруза</strong> — важный культурный экспорт</li>
              <li className="text-base leading-relaxed"><strong>Рожь</strong> — в меньших объёмах</li>
              <li className="text-base leading-relaxed"><strong>Подсолнечник</strong> — масло и семена</li>
              <li className="text-base leading-relaxed"><strong>Соя</strong> — растущий спрос</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Иные культуры либо не разрешены, либо требуют специального разрешения GACC. Перед экспортом новой культуры необходимо получить одобрение.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Процесс получения аккредитации GACC: 5 шагов
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 1: Подготовка и регистрация компании
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Сначала ваша компания должна быть зарегистрирована как экспортёр и иметь лицензию на внешнеэкономическую деятельность. Необходимо собрать пакет документов:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Свидетельство о регистрации компании</li>
              <li className="text-base leading-relaxed">Учредительные документы (устав)</li>
              <li className="text-base leading-relaxed">ИНН, КПП, ОГРН</li>
              <li className="text-base leading-relaxed">Данные об уполномоченном представителе</li>
              <li className="text-base leading-relaxed">Сведения о производственных мощностях (если собственное производство)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 2: Подача заявления на аккредитацию в GACC
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Заявление подаётся через официальный сайт GACC (english.gacc.gov.cn) или через китайское посольство/консульство в России. В заявлении указываются:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Полная информация о компании</li>
              <li className="text-base leading-relaxed">Список культур, которые вы хотите экспортировать</li>
              <li className="text-base leading-relaxed">Информация о складских и производственных помещениях</li>
              <li className="text-base leading-relaxed">Соответствие санитарно-фитосанитарным требованиям</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 3: Инспекция и аудит на месте
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Представители GACC (часто в лице аккредитованной фирмы) приезжают к вам и проверяют:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Состояние хранилищ и оборудования</li>
              <li className="text-base leading-relaxed">Системы контроля качества</li>
              <li className="text-base leading-relaxed">Наличие системы HACCP (анализ опасности и критические контрольные точки)</li>
              <li className="text-base leading-relaxed">Соблюдение гигиены и санитарии</li>
              <li className="text-base leading-relaxed">Документирование и записи</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Инспекция обычно занимает 1-2 дня. Если есть замечания, дают время на исправление (обычно 30 дней).
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 4: Соответствие требованиям и переинспекция
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После устранения замечаний проводится переинспекция. Если всё в порядке, GACC выносит положительное решение. Этот процесс может занять 2-4 месяца в целом.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 5: Регистрация и аккредитация
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Компания получает номер аккредитации и вносится в реестр GACC. Аккредитация обычно выдаётся на 5 лет, затем требуется переаккредитация. После этого вы можете начать экспорт.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Требования к качеству зерна для Китая
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Китай предъявляет очень строгие требования к качеству импортного зерна:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Влажность:</strong> не более 13-14% в зависимости от культуры</li>
              <li className="text-base leading-relaxed"><strong>Примеси:</strong> не более 1-2% (в зависимости от культуры)</li>
              <li className="text-base leading-relaxed"><strong>Фитосанитарные требования:</strong> зерно не должно содержать вредителей и болезней</li>
              <li className="text-base leading-relaxed"><strong>Микотоксины:</strong> очень низкие пределы (например, афлатоксин не более 10 ppb)</li>
              <li className="text-base leading-relaxed"><strong>Остатки пестицидов:</strong> практически нулевые (очень строго для Китая)</li>
              <li className="text-base leading-relaxed"><strong>Радиоактивные вещества:</strong> должны быть ниже пороговых значений</li>
              <li className="text-base leading-relaxed"><strong>ГМО:</strong> зерно не должно быть генетически модифицировано (для большинства культур)</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Перед каждой партией экспорта требуется:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Декларация качества (от аккредитованной лаборатории)</li>
              <li className="text-base leading-relaxed">Фитосанитарный сертификат (от Россельхознадзора)</li>
              <li className="text-base leading-relaxed">Сертификат происхождения</li>
              <li className="text-base leading-relaxed">Инспекция при погрузке на судно</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Логистика и доставка в Китай
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Вариант 1: Морская логистика (самый популярный)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Зерно доставляется грузовиками или поездом до портов на Дальнем Востоке (обычно Владивостоком или Петропавловск-Камчатским) и отправляется морем в китайские порты (Шанхай, Циндао, Тяньцзинь).
            </p>
            <p className="text-base leading-relaxed mb-6">
              Стоимость морской доставки: примерно $40-70 за тонну в зависимости от расстояния и волатильности рынка фрахта.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Время в пути: 20-30 дней
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Вариант 2: Железнодорожная логистика (более дорогая)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Зерно доставляется поездом через Казахстан, Монголию и прямо в Китай (маршруты в Чжоучжоу, Чэнду).
            </p>
            <p className="text-base leading-relaxed mb-6">
              Стоимость: примерно $60-120 за тонну (дороже, чем море, но быстрее)
            </p>
            <p className="text-base leading-relaxed mb-6">
              Время в пути: 15-25 дней (с учётом таможни)
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Экономика экспорта: расчёт прибыли
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Давайте рассчитаем, насколько прибыльна сделка по экспорту пшеницы в Китай на 2026 год:
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Допустим, вы экспортируете 1000 тонн пшеницы:</strong>
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Закупка в России: 14 000 ₽/т × 1000 т = 14 000 000 ₽ = примерно $165 000 (при курсе 85 ₽/USD)</li>
              <li className="text-base leading-relaxed">Транспортировка до порта: ~1500 ₽/т × 1000 т = 1 500 000 ₽ ≈ $18 000</li>
              <li className="text-base leading-relaxed">Расходы на GACC, сертификаты, инспекции: ~500 ₽/т × 1000 т = 500 000 ₽ ≈ $6 000</li>
              <li className="text-base leading-relaxed">Портовые сборы, упаковка: ~500 ₽/т × 1000 т = 500 000 ₽ ≈ $6 000</li>
              <li className="text-base leading-relaxed">Морская доставка: $55/т × 1000 т = $55 000</li>
              <li className="text-base leading-relaxed">Таможенное оформление в Китае: ~$5 000</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              <strong>Итого затраты:</strong> $165 000 + $18 000 + $6 000 + $6 000 + $55 000 + $5 000 = <strong>$255 000</strong>
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Цена в Китае на март 2026:</strong> примерно $280-320 за тонну
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Выручка:</strong> $300/т × 1000 т = $300 000
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Валовая прибыль:</strong> $300 000 - $255 000 = <strong>$45 000 (примерно 15% маржа)</strong>
            </p>
            <p className="text-base leading-relaxed mb-6">
              Это неплохо для торговли, но помните, что цены волатильны. При падении мировых цен ниже $280 сделка может быть убыточной.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Прогноз на 2026 год
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На 2026 год ожидается:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Спрос из Китая:</strong> Китай остаётся крупным импортёром зерна, особенно после неудачного урожая в 2025 году</li>
              <li className="text-base leading-relaxed"><strong>Цены:</strong> прогнозируются в диапазоне $280-350 за тонну в зависимости от сезона</li>
              <li className="text-base leading-relaxed"><strong>Требования GACC:</strong> вероятно, стандарты будут ещё строже, особенно по микотоксинам</li>
              <li className="text-base leading-relaxed"><strong>Конкуренция:</strong> ожидается усиление конкуренции от других экспортёров (Казахстан, Украина, Аргентина)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как проверить аккредитацию GACC
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На платформе <Link href="/gacc" className="text-[#2d7a2d] hover:underline">ЗерноПоиск вы можете проверить статус любой компании</Link> в реестре GACC. Это поможет вам:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Убедиться, что ваш партнёр имеет право экспортировать в Китай</li>
              <li className="text-base leading-relaxed">Проверить, какие культуры они аккредитованы экспортировать</li>
              <li className="text-base leading-relaxed">Узнать дату выдачи и истечения аккредитации</li>
              <li className="text-base leading-relaxed">Найти контакты компании для переговоров</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Типичные ошибки при экспорте в Китай
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Экспорт без GACC-аккредитации.</strong> Грузы будут отклонены на таможне Китая и вернёны.</li>
              <li className="text-base leading-relaxed"><strong>Несоответствие качеству.</strong> Строгие требования Китая означают, что даже небольшие отклонения приводят к отказу в приёмке.</li>
              <li className="text-base leading-relaxed"><strong>Неправильная документация.</strong> Отсутствие фитосанитарного сертификата или неверные данные приводят к задержкам.</li>
              <li className="text-base leading-relaxed"><strong>Недостаточное буферное количество.</strong> Китай может отклонить часть партии при анализе, поэтому отправляйте на 5-10% больше.</li>
              <li className="text-base leading-relaxed"><strong>Игнорирование волатильности цен.</strong> Заключайте контракты на фиксированную цену, а не на плавающую.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Экспорт зерна в Китай — это высокорентабельный, но требующий больших затрат и знаний процесс. Требования GACC строги, но они существуют для защиты китайского потребителя от некачественного зерна.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Если вы планируете экспортировать:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Начните с получения GACC-аккредитации (самый долгий процесс)</li>
              <li className="text-base leading-relaxed">Убедитесь, что ваше зерно соответствует строгим требованиям</li>
              <li className="text-base leading-relaxed">Используйте надёжных партнёров для логистики и таможни</li>
              <li className="text-base leading-relaxed">Отслеживайте <Link href="/prices" className="text-[#2d7a2d] hover:underline">мировые цены</Link> и заключайте контракты на выгодных условиях</li>
              <li className="text-base leading-relaxed">Проверяйте статус партнёров через <Link href="/gacc" className="text-[#2d7a2d] hover:underline">базу GACC на ЗерноПоиск</Link></li>
            </ul>
            <p className="text-base leading-relaxed">
              Успешный экспорт требует знания деталей и внимания. Если вы соблюдаете все требования и работаете с проверенными партнёрами, экспорт в Китай может быть очень прибыльным бизнесом.
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
