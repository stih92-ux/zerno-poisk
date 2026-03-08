"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function TrTs015Article() {
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
      title: "Зерновые декларации: что это, как получить и проверить",
      preview: "Полное руководство по декларациям соответствия на зерно: требования ТР ТС, процесс получения, штрафы.",
    },
    {
      slug: "wheat-quality-gost",
      title: "Стандарты качества пшеницы ГОСТ: полный справочник",
      preview: "Классификация пшеницы по ГОСТам, параметры качества, требования к влажности и чистоте.",
    },
    {
      slug: "find-grain-buyer",
      title: "Как найти покупателя зерна: пошаговое руководство",
      preview: "Полное руководство по поиску покупателей зерна и безопасного заключения сделок.",
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
        <span className="text-gray-600 dark:text-gray-400">ТР ТС 015/2011 — технический регламент на зерно</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              ТР ТС 015/2011 — технический регламент на зерно
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 6 марта 2026</span>
              <span>•</span>
              <span>10 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              ТР ТС 015/2011 — это основной технический регламент Таможенного союза, который регулирует безопасность зерна и продуктов его переработки на территории России, Беларуси и Казахстана. Этот документ — фундамент всей зерновой отрасли в странах Таможенного союза, и его знание обязательно для любого производителя, трейдера или переработчика зерна. В этой статье мы разберёмся, что означает ТР ТС 015/2011, какие требования он устанавливает, и как его соблюдение влияет на вашу деятельность.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что такое ТР ТС 015/2011 и почему это важно
            </h2>
            <p className="text-base leading-relaxed mb-6">
              ТР ТС 015/2011 — это сокращённое обозначение «Технического регламента Таможенного союза о безопасности зерна и продуктов его переработки». Регламент был принят совместно странами Таможенного союза 9 декабря 2011 года и вступил в силу 1 июля 2012 года.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Основная цель регламента — обеспечить безопасность зерна и зернопродуктов для конечного потребителя, предотвратить загрязнение продукции опасными веществами, микотоксинами, пестицидами и микроорганизмами. Знание и соблюдение требований этого документа необходимо для:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Производства и реализации зерна на внутреннем рынке</li>
              <li className="text-base leading-relaxed">Экспорта зернопродуктов в страны ЕАЭС</li>
              <li className="text-base leading-relaxed">Переработки зерна (мукомольные, крупяные заводы)</li>
              <li className="text-base leading-relaxed">Получения деклараций соответствия и сертификатов</li>
              <li className="text-base leading-relaxed">Прохождения таможенного контроля</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Область применения ТР ТС 015/2011
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Регламент распространяется на следующие виды зерна и зернопродуктов, которые производятся, обращаются и используются в странах Таможенного союза:
            </p>
            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Виды зерна
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Зерновые культуры:</strong> пшеница (яровая и озимая), рожь, ячмень, овёс, кукуруза, рис, просо</li>
              <li className="text-base leading-relaxed"><strong>Зернобобовые культуры:</strong> горох, нут, чечевица, фасоль, люпин</li>
              <li className="text-base leading-relaxed"><strong>Специальные культуры:</strong> гречиха, семена подсолнечника, семена льна (в части требований безопасности)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Продукты переработки
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Мука (всех видов и сортов)</li>
              <li className="text-base leading-relaxed">Крупы (гречневая, рисовая, перловая и т.д.)</li>
              <li className="text-base leading-relaxed">Хлеб и хлебобулочные изделия</li>
              <li className="text-base leading-relaxed">Макаронные изделия</li>
              <li className="text-base leading-relaxed">Кормовые смеси (в части требований безопасности)</li>
              <li className="text-base leading-relaxed">Крахмал и крахмалопродукты</li>
            </ul>

            <p className="text-base leading-relaxed mb-6">
              Регламент применяется на всех этапах оборота — от производства и хранения до транспортировки, розничной реализации и потребления.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Основные требования ТР ТС 015/2011
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Требования к безопасности
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Регламент устанавливает максимально допустимые уровни опасных веществ в зерне и зернопродуктах:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Микотоксины:</strong> максимальные уровни для афлатоксинов (в т.ч. афлатоксина B1), дезоксиниваленола, зеараленона</li>
              <li className="text-base leading-relaxed"><strong>Остатки пестицидов:</strong> уровни не должны превышать установленные пределы</li>
              <li className="text-base leading-relaxed"><strong>Тяжёлые металлы:</strong> кадмий, свинец, ртуть (в некоторых видах зерна)</li>
              <li className="text-base leading-relaxed"><strong>Радионуклиды:</strong> цезий-137, стронций-90</li>
              <li className="text-base leading-relaxed"><strong>Микроорганизмы:</strong> отсутствие патогенных микроорганизмов (Salmonella, E. coli и т.д.)</li>
              <li className="text-base leading-relaxed"><strong>Чужеродные вещества:</strong> почва, камни, насекомые, примеси других культур</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Требования к информации (маркировке)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Зерно и зернопродукты, поступающие в оборот на внутреннем рынке и на экспорт, должны быть надлежащим образом маркированы. Маркировка должна содержать:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Наименование товара (культура, сорт, класс)</li>
              <li className="text-base leading-relaxed">Информацию о производителе или поставщике (название, адрес, контакты)</li>
              <li className="text-base leading-relaxed">Количество (масса, объём)</li>
              <li className="text-base leading-relaxed">Дату производства и срок годности</li>
              <li className="text-base leading-relaxed">Обозначение нормативного документа (ГОСТ, техусловия)</li>
              <li className="text-base leading-relaxed">Номер партии или партии изготовления</li>
              <li className="text-base leading-relaxed">Информацию об алергенах (если есть)</li>
              <li className="text-base leading-relaxed">Условия хранения (температура, влажность)</li>
            </ul>

            <p className="text-base leading-relaxed mb-6">
              Маркировка должна быть на русском языке (или в стране потребления) и размещена на упаковке так, чтобы была видна потребителю.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Процедуры оценки соответствия
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Декларирование соответствия
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Основной способ подтверждения соответствия требованиям ТР ТС 015/2011 — это <strong>декларирование соответствия</strong>. Производитель или поставщик зерна самостоятельно проводит необходимые испытания через аккредитованную лабораторию и выдаёт декларацию о соответствии.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Процесс включает:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Отбор и подготовку образца зерна</li>
              <li className="text-base leading-relaxed">Проведение лабораторного анализа (по НИР ТР ТС 015/2011)</li>
              <li className="text-base leading-relaxed">Получение протокола испытаний</li>
              <li className="text-base leading-relaxed">Составление и регистрацию декларации</li>
              <li className="text-base leading-relaxed">Занесение данных в Реестр деклараций ФГИС</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Обязательная сертификация
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Для некоторых особых случаев (например, при выявлении нарушений, при импорте) может потребоваться <strong>обязательная сертификация</strong> через органы по сертификации.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Штрафы за нарушение требований ТР ТС 015/2011
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Нарушение требований технического регламента влечёт серьёзные административные санкции. Согласно КоАП РФ и законодательству других стран ЕАЭС:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Для физических лиц (фермеров, индивидуальных предпринимателей):</strong> штрафы от 20 000 до 300 000 рублей</li>
              <li className="text-base leading-relaxed"><strong>Для должностных лиц:</strong> штрафы от 50 000 до 500 000 рублей</li>
              <li className="text-base leading-relaxed"><strong>Для юридических лиц (компаний):</strong> штрафы от 100 000 до 1 000 000 рублей (или более)</li>
              <li className="text-base leading-relaxed"><strong>Дополнительные наказания:</strong> конфискация товара, приостановка деятельности, занесение в реестр нарушителей</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Размер штрафа зависит от характера нарушения, его тяжести, размера партии и других факторов. Повторные нарушения влекут более крупные штрафы.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как ЗерноПоиск помогает найти сертифицированных поставщиков
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На платформе ЗерноПоиск вы найдёте полную информацию о всех зерновых партиях, поступающих на рынок с надлежащими декларациями о соответствии ТР ТС 015/2011:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Поиск по 500 000+ деклараций</strong> — найдите поставщиков зерна, прошедших все требования регламента</li>
              <li className="text-base leading-relaxed"><strong>Проверка подлинности</strong> — все декларации верифицированы и зарегистрированы в ФГИС</li>
              <li className="text-base leading-relaxed"><strong>Параметры качества</strong> — информация о результатах анализа (влажность, белок, микотоксины)</li>
              <li className="text-base leading-relaxed"><strong>Профили компаний</strong> — история поставок, надёжность, репутация</li>
              <li className="text-base leading-relaxed"><strong>Расширенный поиск</strong> — фильтры по <Link href="/search" className="text-[#2d7a2d] hover:underline">культуре, регионам, объёмам и параметрам зерна</Link></li>
              <li className="text-base leading-relaxed"><strong>Актуальные цены</strong> — <Link href="/prices" className="text-[#2d7a2d] hover:underline">котировки от MOEX, ZOL.RU и других источников</Link></li>
            </ul>

            <p className="text-base leading-relaxed mb-6">
              Используя нашу платформу, вы можете быть уверены, что работаете с надёжными поставщиками, которые соблюдают все требования ТР ТС 015/2011 и не привлекут вас неприятностями с контролирующими органами.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Типичные вопросы и ответы
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Нужна ли мне декларация, если я продаю зерно напрямую фермерам?
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Если вы продаёте <strong>более 20 тонн</strong> партии, то декларация обязательна, даже если это розничная продажа. Если менее 20 тонн, декларация не требуется.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Как долго действует декларация?
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Декларация действует <strong>12 месяцев</strong> с даты выдачи. После этого она теряет силу и требуется новая.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Чем отличается декларация от сертификата?
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Декларация — это самостоятельное подтверждение производителем соответствия своего товара. Сертификат выдаётся органом по сертификации после проверки. Для большинства зерна достаточно декларации.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              ТР ТС 015/2011 — это не просто формальность, а реальная система защиты потребителей от опасного зерна. Несоблюдение требований регламента грозит серьёзными штрафами, конфискацией товара и потерей репутации. Поэтому всегда требуйте от поставщиков надлежащие декларации, проверяйте их подлинность через <strong>ФГИС Росаккредитации</strong>, и используйте проверенные источники поиска, такие как <Link href="/search" className="text-[#2d7a2d] hover:underline">платформа ЗерноПоиск</Link>.
            </p>
            <p className="text-base leading-relaxed">
              Начните с <Link href="/search" className="text-[#2d7a2d] hover:underline">поиска надежных поставщиков</Link> прямо сейчас — все партии верифицированы на соответствие техническому регламенту.
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
