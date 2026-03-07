"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function GrainDeclarationsArticle() {
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
      preview: "Полное руководство по поиску покупателей зерна и безопасного заключения сделок.",
    },
    {
      slug: "wheat-prices-2026",
      title: "Цены на пшеницу в России 2026: обзор рынка",
      preview: "Анализ текущих котировок и факторов, влияющих на цены пшеницы.",
    },
    {
      slug: "farm-database-kfh",
      title: "База КФХ России: как найти фермера для закупки зерна",
      preview: "Эффективный поиск поставщиков через базу крестьянских фермерских хозяйств.",
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
        <span className="text-gray-600 dark:text-gray-400">Зерновые декларации: что это и как получить</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Зерновые декларации: что это и как получить
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 5 марта 2026</span>
              <span>•</span>
              <span>8 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Зерновая декларация — это один из важнейших документов в России для любого производителя, трейдера или переработчика зерна. Без неё продать зерно оптом невозможно, а попытка продажи без декларации грозит серьёзными штрафами. В этой статье мы разберёмся, что это такое, кто её должен получать, и как пройти весь процесс от начала до конца.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что такое зерновая декларация
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Зерновая декларация (или свидетельство о качестве) — это официальный документ, подтверждающий соответствие зерна определённым стандартам качества и безопасности. Она выдаётся органами аккредитованного испытательного центра после проведения лабораторного анализа образца зерна.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Декларация необходима для:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Оптовой продажи зерна (от 20 тонн и выше)</li>
              <li className="text-base leading-relaxed">Экспорта зерна за границу</li>
              <li className="text-base leading-relaxed">Переработки зерна (муки, крупы, хлеба)</li>
              <li className="text-base leading-relaxed">Кормового зерна для животноводства</li>
              <li className="text-base leading-relaxed">Участия в конкурсах и выставках</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Кто обязан получать декларацию
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Основной закон, регулирующий декларации в России — это Технический регламент Таможенного союза «О безопасности зерна и продуктов его переработки» (ТР ТС 015/2011). В соответствии с этим документом, декларацию должны получать:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Производители зерна</strong> (крестьянские фермерские хозяйства, сельскохозяйственные предприятия) при продаже более 20 тонн</li>
              <li className="text-base leading-relaxed"><strong>Зернотрейдеры и дилеры</strong> при покупке и перепродаже зерна</li>
              <li className="text-base leading-relaxed"><strong>Компании, занимающиеся переработкой</strong> (мукомольные, крупяные, кормовые заводы)</li>
              <li className="text-base leading-relaxed"><strong>Экспортеры зерна</strong> (в обязательном порядке)</li>
              <li className="text-base leading-relaxed"><strong>Импортеры зерна</strong> (для таможенного оформления)</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Исключение: фермеры, продающие зерно в розницу (чаще всего — соседям или местным жителям в объёмах до 20 тонн), не обязаны получать декларацию.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Пошаговый процесс получения декларации
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 1: Подготовка партии и отбор образца
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Перед отправкой зерна в лабораторию необходимо подготовить партию. Зерно должно быть однородным по качеству, чистоте и влажности. Обычно требуется минимум 500 грамм зерна для анализа (в зависимости от типа зерна и культуры).
            </p>
            <p className="text-base leading-relaxed mb-6">
              Образец берётся при помощи специального зерновробника (прибор для отбора проб) из разных точек партии, чтобы быть репрезентативным. Неправильный отбор образца может привести к отказу в выдаче декларации.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 2: Лабораторный анализ
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Образец передаётся в аккредитованный испытательный центр. Лаборатория проводит следующие анализы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Определение влажности</li>
              <li className="text-base leading-relaxed">Содержание белка и клейковины (для пшеницы)</li>
              <li className="text-base leading-relaxed">Падающее число (для пшеницы и ржи)</li>
              <li className="text-base leading-relaxed">Массовая доля жира</li>
              <li className="text-base leading-relaxed">Примеси и посторонние вещества</li>
              <li className="text-base leading-relaxed">Микотоксины и остатки пестицидов</li>
              <li className="text-base leading-relaxed">Плотность и зёрнистость</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Анализ обычно занимает 3-5 дней в зависимости от сложности и загруженности лаборатории. Стоимость анализа варьируется от 8 000 до 15 000 рублей для базового пакета.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 3: Регистрация и выдача декларации
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После получения результатов анализа испытательный центр выдаёт декларацию на качество или <strong>свидетельство о соответствии</strong>. Декларация содержит:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Наименование и класс зерна</li>
              <li className="text-base leading-relaxed">Результаты лабораторного анализа</li>
              <li className="text-base leading-relaxed">Номер и дату выдачи</li>
              <li className="text-base leading-relaxed">Срок действия (обычно от 6 месяцев до 1 года)</li>
              <li className="text-base leading-relaxed">Подпись и печать испытательного центра</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Декларация регистрируется в реестре и получает уникальный номер. Копия документа часто отправляется в электронном виде или распечатывается на специальной бумаге с защитными элементами.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 4: Маркировка и отправка товара
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После получения декларации все мешки или контейнеры с зерном должны быть помечены этикетками с информацией о партии, классе зерна и номере декларации. Это требование обязательно для оптовой торговли.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Копия декларации должна сопровождать товар при транспортировке и передаче покупателю. Без неё покупатель не сможет принять товар и перепродать его.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Стоимость получения декларации
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Полная стоимость получения декларации обычно составляет <strong>8 000 - 45 000 рублей</strong>, в зависимости от:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Тип лаборатории:</strong> государственные центры дешевле (8-15 тыс. руб.), частные лаборатории дороже (15-25 тыс. руб.)</li>
              <li className="text-base leading-relaxed"><strong>Объём анализов:</strong> базовый пакет — 8-12 тыс., расширенный — 20-45 тыс. руб.</li>
              <li className="text-base leading-relaxed"><strong>Срочность:</strong> стандартный анализ 3-5 дней, срочный — 1-2 дня (доплата +20-50%)</li>
              <li className="text-base leading-relaxed"><strong>Регион:</strong> в Москве и регионах цены различаются</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Дополнительные расходы могут быть на доставку образца (если лаборатория находится далеко) и на регистрацию (если требуется).
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Штрафы за продажу без декларации
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Попытка продать зерно оптом без надлежащей декларации грозит серьёзными штрафами. Согласно Кодексу об административных нарушениях РФ (КоАП), размеры штрафов следующие:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Для граждан (фермеров):</strong> 20 000 - 100 000 рублей</li>
              <li className="text-base leading-relaxed"><strong>Для должностных лиц:</strong> 50 000 - 150 000 рублей</li>
              <li className="text-base leading-relaxed"><strong>Для юридических лиц (компаний):</strong> 100 000 - 300 000 рублей</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Кроме того, товар может быть конфискован, а компания — внесена в реестр нарушителей, что помешает ей участвовать в государственных закупках.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как ЗерноПоиск помогает с декларациями
            </h2>
            <p className="text-base leading-relaxed mb-6">
              На платформе ЗерноПоиск вы найдёте:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Поиск по 500 000+ деклараций</strong> — найдите поставщика с нужной партией зерна</li>
              <li className="text-base leading-relaxed"><strong>Информация о компании</strong> — название, регион, объём и класс зерна</li>
              <li className="text-base leading-relaxed"><strong>Контактные данные</strong> — свяжитесь напрямую с продавцом</li>
              <li className="text-base leading-relaxed"><strong>Фильтрация по параметрам</strong> — выберите зерно нужного класса, культуры и объёма</li>
              <li className="text-base leading-relaxed"><strong>Выгрузка в CSV</strong> — экспортируйте список контактов для дальнейшей работы</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Помимо этого, на нашей платформе вы можете найти:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><Link href="/farmers" className="text-[#2d7a2d] hover:underline">Базу 27 000+ фермеров</Link> — если вам нужны розничные поставщики</li>
              <li className="text-base leading-relaxed"><Link href="/prices" className="text-[#2d7a2d] hover:underline">Актуальные цены</Link> — котировки MOEX, ZOL.RU, IDK.RU</li>
              <li className="text-base leading-relaxed"><Link href="/search" className="text-[#2d7a2d] hover:underline">Расширенный поиск деклараций</Link> — по культуре, региону, сегменту и объёму</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Важные советы
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Всегда проверяйте сроки действия декларации</strong> — использованная декларация больше не действует</li>
              <li className="text-base leading-relaxed"><strong>Требуйте оригинал</strong> — копия не является подтверждением качества</li>
              <li className="text-base leading-relaxed"><strong>Проверяйте номер лаборатории</strong> — она должна быть аккредитована</li>
              <li className="text-base leading-relaxed"><strong>Сохраняйте копии</strong> — документы могут потребоваться при таможенном оформлении или проверке</li>
              <li className="text-base leading-relaxed"><strong>Планируйте время</strong> — процесс занимает 1-2 недели, не оставляйте всё на последний момент</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Зерновая декларация — это не просто бюрократический документ, а гарантия качества и безопасности продукции для покупателя. Её получение требует времени и денег, но без неё невозможна оптовая торговля зерном в России.
            </p>
            <p className="text-base leading-relaxed">
              Начните с поиска надёжной лаборатории, правильно подготовьте образец, и не откладывайте процесс на последний момент. Если вы ищете поставщика или покупателя зерна, используйте <Link href="/search" className="text-[#2d7a2d] hover:underline">базу деклараций ЗерноПоиск</Link> — здесь вы найдёте всё необходимое для успешной сделки.
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
