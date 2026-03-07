"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function FindGrainBuyerArticle() {
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
      preview: "Подробный гайд по получению декларации на зерно перед продажей.",
    },
    {
      slug: "farm-database-kfh",
      title: "База КФХ России: как найти фермера для закупки зерна",
      preview: "Использование базы крестьянских хозяйств для поиска поставщиков.",
    },
    {
      slug: "wheat-prices-2026",
      title: "Цены на пшеницу в России 2026: обзор рынка",
      preview: "Анализ текущих котировок и динамики цен на пшеницу.",
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
        <span className="text-gray-600 dark:text-gray-400">Как найти покупателя зерна: пошаговое руководство</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Как найти покупателя зерна: пошаговое руководство
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 3 марта 2026</span>
              <span>•</span>
              <span>9 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Для любого фермера или производителя зерна главный вопрос после уборки — как выгодно продать собранный урожай. Найти хорошего покупателя, который предложит справедливую цену и обеспечит надёжную сделку, — это настоящее искусство. В этой статье мы разберём, какие типы покупателей существуют, где их можно найти, и как провести сделку без риска.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Типы покупателей зерна
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Зерноуборочные комплексы (элеваторы и склады)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Элеваторы — это специализированные учреждения для приёма, хранения и переработки зерна. Они закупают зерно объёмом от 50-100 тонн и выше. Преимущества продажи элеватору:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Надёжность — это официальные организации с лицензиями</li>
              <li className="text-base leading-relaxed">Быстрая разгрузка и приёмка товара (обычно в тот же день)</li>
              <li className="text-base leading-relaxed">Оплата часто производится в тот же день или на следующий</li>
              <li className="text-base leading-relaxed">Возможность хранения зерна на элеваторе за дополнительную плату</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Минусы: цены обычно немного ниже, чем на открытом рынке, так как элеватор берёт маржу на хранение и переработку.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Зернотрейдеры и дилеры
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Трейдеры — это компании, которые закупают зерно у производителей и перепродают его перерабатывающим предприятиям, экспортёрам или другим покупателям. Объёмы закупок обычно крупные (от 100-500 тонн).
            </p>
            <p className="text-base leading-relaxed mb-6">
              Преимущества:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Могут предложить конкурентные цены, так как работают на больших объёмах</li>
              <li className="text-base leading-relaxed">Часто заключают долгосрочные контракты</li>
              <li className="text-base leading-relaxed">Берут на себя логистику и оформление документов</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Минусы: требуют наличие деклараций на зерно, могут требовать скидку при оплате "на расчёт".
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Мукомольные и крупяные заводы
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Перерабатывающие предприятия закупают зерно непосредственно для переработки в муку, крупу, хлопья и другую продукцию. Они часто ищут зерно определённого качества и класса.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Особенности:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Стабильный спрос круглый год</li>
              <li className="text-base leading-relaxed">Требуют высокое качество (1-й и 2-й классы)</li>
              <li className="text-base leading-relaxed">Объёмы закупок средние (100-300 тонн в месяц)</li>
              <li className="text-base leading-relaxed">Готовы платить премии за качество</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Животноводческие комплексы и кормовые предприятия
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Большие животноводческие комплексы (свинофермы, птицефабрики, молочные фермы) покупают зерно для кормления животных. Кормовые заводы производят смешанные корма на основе зерна.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Особенности:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Крупные регулярные объёмы (500-1000 тонн в месяц)</li>
              <li className="text-base leading-relaxed">Готовы платить хорошие цены за объёмы</li>
              <li className="text-base leading-relaxed">Спрос зависит от сезона (больше зимой)</li>
              <li className="text-base leading-relaxed">Часто требуют долгосрочные контракты</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Экспортные компании
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Компании, занимающиеся экспортом зерна, закупают зерно оптом (от 1000 тонн и выше) для продажи на иностранные рынки. Это крупные сделки с высокими требованиями к качеству.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Они требуют экспортную декларацию, фитосанитарный сертификат и часто делают дополнительные тесты. Цены обычно определяются мировыми котировками.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Где найти покупателей
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. ЗерноПоиск — база покупателей
            </h3>
            <p className="text-base leading-relaxed mb-6">
              На платформе ЗерноПоиск вы найдёте не только 500 000+ деклараций поставщиков, но и сможете использовать интегрированную базу покупателей. Через <Link href="/farmers" className="text-[#2d7a2d] hover:underline">раздел поиска фермеров</Link>, вы можете найти контакты компаний-покупателей зерна в вашем регионе.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Региональные биржи и торговые площадки
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Работают в крупных зерновых регионах:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>ZOL.RU</strong> — крупнейшая национальная биржа зерна, здесь торгуют все крупные дилеры</li>
              <li className="text-base leading-relaxed"><strong>Региональные торги</strong> — в Краснодарском крае, Тамбовской области и других</li>
              <li className="text-base leading-relaxed"><strong>MOEX (Московская биржа)</strong> — фьючерсные контракты на зерно</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Telegram-каналы и сообщества
            </h3>
            <p className="text-base leading-relaxed mb-6">
              В интернете есть множество Telegram-групп, где торгуют зерном. Здесь можно напрямую связаться с покупателями и трейдерами. Однако будьте осторожны — проверяйте репутацию перед сделкой.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Выставки и конференции
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Регулярно проводятся региональные сельскохозяйственные выставки, где присутствуют крупные покупатели и трейдеры. Это хорошая возможность лично встретиться и договориться на лучших условиях.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Прямые контакты и рекомендации
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Спросите у соседних фермеров и знакомых, с кем они работают. Рекомендация от проверенного источника часто стоит больше, чем объявления в интернете.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Подготовка товара к продаже
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Перед тем как искать покупателя, убедитесь в следующем:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Получена декларация качества</strong> — <Link href="/blog/grain-declarations" className="text-[#2d7a2d] hover:underline">подробнее о деклараций</Link>. Это обязательно для оптовой продажи.</li>
              <li className="text-base leading-relaxed"><strong>Зерно правильно хранится</strong> — в чистых сухих хранилищах, без контаминации</li>
              <li className="text-base leading-relaxed"><strong>Мешки в хорошем состоянии</strong> — целые, чистые, без запаха</li>
              <li className="text-base leading-relaxed"><strong>Знаете точный объём</strong> — взвесьте партию и имейте документ о весе</li>
              <li className="text-base leading-relaxed"><strong>Подготовлены документы</strong> — хозяйственный договор, счёт-фактура, накладная</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Пошаговый процесс продажи
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 1: Определите тип покупателя
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Решите, кому вы хотите продать: элеватору (быстро и надёжно, но дешевле), трейдеру (средние цены и объёмы) или напрямую переработчику (выше цены, но сложнее договориться).
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 2: Соберите информацию о ценах
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Проверьте <Link href="/prices" className="text-[#2d7a2d] hover:underline">котировки на нашей платформе</Link>, посмотрите, по какой цене торгуется ваш класс зерна в вашем регионе. Это поможет вам не согласиться на слишком низкую цену.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 3: Свяжитесь с потенциальными покупателями
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Позвоните, отправьте письмо или встретьтесь лично. Предоставьте информацию:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Тип и класс зерна</li>
              <li className="text-base leading-relaxed">Объём (в тоннах)</li>
              <li className="text-base leading-relaxed">Основные показатели качества</li>
              <li className="text-base leading-relaxed">Дата доступности товара</li>
              <li className="text-base leading-relaxed">Место расположения зерна</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 4: Договоритесь на цену и условиях
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Не принимайте первое предложение. Обсудите:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Цену (за тонну, всего)</li>
              <li className="text-base leading-relaxed">Способ оплаты (авансом, при доставке, на расчёт)</li>
              <li className="text-base leading-relaxed">Логистику (кто платит за доставку)</li>
              <li className="text-base leading-relaxed">Условия приёмки (кто проверяет качество)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 5: Подпишите договор
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Всегда требуйте письменный договор с указанием цены, объёма, качества товара, способа оплаты и всех условий. Это ваша защита при споре.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 6: Доставка и приёмка
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Организуйте доставку в согласованное время. При приёмке покупатель проверит качество (может потребовать свой анализ). Убедитесь, что вес и количество совпадают с договором.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 7: Получение оплаты
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Убедитесь, что оплата поступила в полном объёме и на счёт указанный в договоре. Получите акт о сдаче-приёмке товара — это подтверждение, что сделка завершена.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Типичные ошибки при продаже зерна
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Продажа без декларации.</strong> Это запрещено и грозит штрафом до 300 000 рублей для компаний.</li>
              <li className="text-base leading-relaxed"><strong>Согласие на слишком низкую цену.</strong> Всегда проверяйте котировки перед переговорами.</li>
              <li className="text-base leading-relaxed"><strong>Доверие на слово.</strong> Требуйте письменный договор и предоплату от незнакомых покупателей.</li>
              <li className="text-base leading-relaxed"><strong>Продажа всего товара одному покупателю.</strong> Риск: если сделка сорвётся, у вас нет плана B.</li>
              <li className="text-base leading-relaxed"><strong>Отправка товара раньше оплаты.</strong> Дождитесь хотя бы частичной оплаты перед отправкой.</li>
              <li className="text-base leading-relaxed"><strong>Игнорирование качества упаковки.</strong> Плохо упакованное зерно при доставке может потерять в цене.</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Чек-лист для успешной продажи
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">✓ Получена актуальная декларация качества</li>
              <li className="text-base leading-relaxed">✓ Проверены <Link href="/prices" className="text-[#2d7a2d] hover:underline">текущие цены</Link> на зерно в вашем регионе</li>
              <li className="text-base leading-relaxed">✓ Найдены 3-5 потенциальных покупателей</li>
              <li className="text-base leading-relaxed">✓ Согласована цена и условия оплаты</li>
              <li className="text-base leading-relaxed">✓ Подписан письменный договор</li>
              <li className="text-base leading-relaxed">✓ Организована доставка</li>
              <li className="text-base leading-relaxed">✓ Получена полная оплата и акт приёмки</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Найти хорошего покупателя зерна — это комбинация подготовки, информированности и везения. Главное: всегда знайте рыночные цены, требуйте документы и никогда не продавайте без декларации.
            </p>
            <p className="text-base leading-relaxed">
              Используйте ЗерноПоиск, чтобы <Link href="/prices" className="text-[#2d7a2d] hover:underline">следить за ценами</Link> и <Link href="/search" className="text-[#2d7a2d] hover:underline">видеть спрос на рынке</Link>. Это даст вам конкурентное преимущество при переговорах и поможет получить максимальную прибыль от продажи урожая.
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
