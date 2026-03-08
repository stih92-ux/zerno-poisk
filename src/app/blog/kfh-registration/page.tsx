"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function KFHRegistrationArticle() {
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
      slug: "farm-database-kfh",
      title: "База данных КФХ: как найти фермерское хозяйство по зерну",
      preview: "Поиск контактов фермеров и КФХ через базу данных ЗерноПоиск.",
    },
    {
      slug: "farmer-subsidies-2026",
      title: "Субсидии для фермеров на зерно в 2026 году — полный гид",
      preview: "Виды субсидий, гранты и государственная поддержка для КФХ.",
    },
    {
      slug: "find-grain-buyer",
      title: "Как найти покупателя зерна: пошаговое руководство",
      preview: "Методы поиска прямых покупателей и заключения сделок по зерну.",
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
        <span className="text-gray-600 dark:text-gray-400">КФХ — регистрация и документы</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              КФХ — что это такое и как зарегистрировать фермерское хозяйство
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 9 марта 2026</span>
              <span>•</span>
              <span>12 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Если вы планируете заняться производством зерна или другим видом сельскохозяйственной деятельности, регистрация КФХ (крестьянского фермерского хозяйства) часто является оптимальным выбором. В этой статье разберём, что такое КФХ, какие правовые формы существуют, как правильно зарегистрировать хозяйство, какие налоговые режимы доступны, и чем КФХ отличается от других организационно-правовых форм.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что такое КФХ: определение и суть
            </h2>
            <p className="text-base leading-relaxed mb-6">
              КФХ (крестьянское фермерское хозяйство) — это коммерческая организация, основанная на личном трудовом участии граждан в производстве сельскохозяйственной продукции. КФХ создаётся на основе земли, находящейся в собственности или в аренде, с целью производства и реализации продукции растениеводства и животноводства.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Главные особенности КФХ:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Члены КФХ должны лично участвовать в производстве</li>
              <li className="text-base leading-relaxed">КФХ может быть создано на основе земли, находящейся в собственности или аренде</li>
              <li className="text-base leading-relaxed">Членов КФХ может быть от одного до неограниченного числа</li>
              <li className="text-base leading-relaxed">Ответственность членов перед кредиторами — согласно договору</li>
              <li className="text-base leading-relaxed">Возможна регистрация без образования юридического лица (как индивидуальный предприниматель)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Правовые формы регистрации КФХ
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Существует два способа официально зарегистрировать хозяйство как КФХ:
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. КФХ как индивидуальный предприниматель (ИП-КФХ)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Это форма регистрации одного лица как главы хозяйства. Глава КФХ регистрируется как индивидуальный предприниматель со специальным статусом КФХ. При регистрации КФХ как ИП не требуется:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Устав и учредительные документы</li>
              <li className="text-base leading-relaxed">Регистрация в государственном реестре как юридического лица</li>
              <li className="text-base leading-relaxed">Ежегодная сдача упрощённой бухгалтерской отчётности (если выручка до определённого размера)</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              <strong>Преимущества ИП-КФХ:</strong> упрощённая регистрация, меньше документации, ниже налоги на начальном этапе.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Недостатки:</strong> полная личная ответственность, сложнее привлечь инвестиции и кредиты, ограниченный размер выручки для некоторых льгот.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. КФХ на основе договора между членами
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Это форма КФХ, когда несколько граждан (обычно члены семьи) совместно создают хозяйство на основе договора. При такой форме КФХ регистрируется как юридическое лицо и получает самостоятельный статус.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Преимущества договорной КФХ:</strong> возможность привлечения инвестиций и кредитов, самостоятельный статус юридического лица, большей доверие банков и партнёров.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Недостатки:</strong> больше документации при регистрации, необходимость договора между членами, ежегодная сдача отчётности как юридического лица.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Пошаговая регистрация КФХ
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Рассмотрим процедуру регистрации КФХ как индивидуального предпринимателя, так как это более распространённый вариант для зерновых фермеров.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 1: Подготовка документов
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Для регистрации КФХ потребуются следующие документы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Паспорт гражданина РФ (оригинал и копия)</li>
              <li className="text-base leading-relaxed">ИНН (если уже есть) или заявление о выдаче</li>
              <li className="text-base leading-relaxed">Заявление по форме Р21001 (для ИП или главы КФХ)</li>
              <li className="text-base leading-relaxed">Документы на земельный участок (свидетельство о собственности, договор аренды, свидетельство о праве пользования)</li>
              <li className="text-base leading-relaxed">Согласие собственника земли или уполномоченного лица (если земля в аренде)</li>
              <li className="text-base leading-relaxed">Квитанция об уплате государственной пошлины (160 рублей на 2026 год)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 2: Определение кодов ОКVED
            </h3>
            <p className="text-base leading-relaxed mb-6">
              ОКVED (Общероссийский классификатор видов экономической деятельности) — это коды, определяющие, чем занимается ваше хозяйство. Для производства зерна используются следующие коды:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>01.11</strong> — Выращивание зерновых культур (кроме риса)</li>
              <li className="text-base leading-relaxed"><strong>01.19</strong> — Выращивание прочих зерновых культур</li>
              <li className="text-base leading-relaxed"><strong>01.20</strong> — Выращивание культур сахаросодержащих</li>
              <li className="text-base leading-relaxed"><strong>01.61</strong> — Производство зерна</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Выбирайте основной ОКVED, соответствующий вашей основной деятельности. Для зерновых фермеров это обычно 01.11 или 01.19. Можно указать несколько кодов, но один из них должен быть основным.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 3: Подача документов в ФНС
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Документы можно подать одним из следующих способов:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Лично в налоговую инспекцию</strong> — по месту вашего проживания</li>
              <li className="text-base leading-relaxed"><strong>Через почту заказным письмом</strong> — с уведомлением о вручении</li>
              <li className="text-base leading-relaxed"><strong>Через МФЦ</strong> (многофункциональные центры) — выполняет посредническую роль</li>
              <li className="text-base leading-relaxed"><strong>Онлайн через портал ФНС</strong> (nalog.gov.ru) — с помощью электронной подписи</li>
              <li className="text-base leading-relaxed"><strong>Через нотариуса</strong> — если подаёте иностранец или хотите удостоверить документы</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 4: Получение свидетельства о регистрации
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Свидетельство о регистрации КФХ выдаётся в течение 5 рабочих дней. Вместе со свидетельством вы получите:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Основной государственный реестр записей (ОГРН) — уникальный номер</li>
              <li className="text-base leading-relaxed">Выписку из реестра индивидуальных предпринимателей</li>
              <li className="text-base leading-relaxed">ИНН (если его ещё не было)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 5: Встать на учёт в региональных органах
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После регистрации в ФНС необходимо встать на учёт в:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Пенсионном фонде России (ПФР) — как страхователь</li>
              <li className="text-base leading-relaxed">Фонде социального страхования (ФСС) — если планируете нанимать работников</li>
              <li className="text-base leading-relaxed">Органах статистики — для ведения статистики</li>
              <li className="text-base leading-relaxed">Органах земельного кадастра — если земля в собственности</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Налоговые режимы для КФХ
            </h2>
            <p className="text-base leading-relaxed mb-6">
              В зависимости от размера и специфики вашего хозяйства, вы можете выбрать один из следующих налоговых режимов:
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. ЕСХН (Единый сельскохозяйственный налог)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              ЕСХН — это специальный налоговый режим для сельскохозяйственных производителей, включая КФХ. Это оптимальный выбор для большинства зерновых фермеров.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Налоговая ставка:</strong> 6% от прибыли (доход минус расходы)</li>
              <li className="text-base leading-relaxed"><strong>Требования:</strong> минимум 70% доходов от сельскохозяйственной деятельности</li>
              <li className="text-base leading-relaxed"><strong>Преимущества:</strong> низкая ставка, отсутствие НДС (кроме специальных случаев), возможность вычета убытков</li>
              <li className="text-base leading-relaxed"><strong>Недостатки:</strong> нужно вести бухгалтерский учёт, требуется соблюдение условий по доходам</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. УСН (Упрощённая система налогообложения)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              УСН может быть выбрана, если хозяйство не соответствует условиям ЕСХН или вы хотите упрощённый учёт.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>УСН 6% (от дохода):</strong> платите 6% налога от всех поступлений</li>
              <li className="text-base leading-relaxed"><strong>УСН 15% (от прибыли):</strong> платите 15% налога от прибыли (доход минус расходы)</li>
              <li className="text-base leading-relaxed"><strong>Преимущества:</strong> упрощённый учёт, низкие налоговые ставки</li>
              <li className="text-base leading-relaxed"><strong>Недостатки:</strong> ограничение по доходам (60 млн рублей в год), не все расходы учитываются</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Патентная система (ПСН)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Это специальный режим для малых форм хозяйствования. Вместо налога на прибыль вы покупаете патент.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Стоимость патента:</strong> от 1500 до 20 000 рублей в месяц (в зависимости от региона и вида деятельности)</li>
              <li className="text-base leading-relaxed"><strong>Ограничения:</strong> патент действует на период от 1 до 12 месяцев</li>
              <li className="text-base leading-relaxed"><strong>Преимущества:</strong> фиксированные платежи, простой учёт</li>
              <li className="text-base leading-relaxed"><strong>Недостатки:</strong> ограничения по доходам и масштабам, невозможно нанимать много работников</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              КФХ vs ООО: что выбрать для зерновой фермы
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Многие начинающие фермеры задаются вопросом: КФХ или ООО? Вот сравнение:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>КФХ:</strong> личное трудовое участие обязательно, налоги ниже, регистрация проще, хороший вариант для семейных ферм</li>
              <li className="text-base leading-relaxed"><strong>ООО:</strong> можно отделить себя от операций, привлечь инвесторов, ограниченная ответственность участников, но регистрация сложнее и налоги выше</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              <strong>Вывод:</strong> если вы планируете производить зерно на семейной ферме и хотите минимальные налоги, выбирайте КФХ с ЕСХН. Если нужны инвесторы или сложная структура управления, ООО может быть лучше.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Требования к земле для КФХ
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Для регистрации КФХ необходимо иметь право на землю. Это может быть:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Земля в собственности:</strong> участок, купленный или полученный в наследство</li>
              <li className="text-base leading-relaxed"><strong>Аренда земли:</strong> договор аренды на установленный срок (не менее 1 года)</li>
              <li className="text-base leading-relaxed"><strong>Земля из государственного земельного фонда:</strong> предоставляется на условиях безвозмездного пользования или долгосрочной аренды</li>
              <li className="text-base leading-relaxed"><strong>Земля, выделенная начинающему фермеру:</strong> государственная программа поддержки новых хозяйств</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Минимальный размер земли КФХ не установлен в федеральном законе, но региональные органы могут установить собственные ограничения. Обычно минимум составляет от 0,5 до 2 гектаров в зависимости от региона.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Преимущества и недостатки КФХ
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Преимущества КФХ:
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Низкие налоги при ЕСХН (6% от прибыли)</li>
              <li className="text-base leading-relaxed">Упрощённая регистрация (как ИП-КФХ)</li>
              <li className="text-base leading-relaxed">Минимальные требования к документации на начальном этапе</li>
              <li className="text-base leading-relaxed">Государственная поддержка и субсидии для КФХ</li>
              <li className="text-base leading-relaxed">Льготное страхование через ФСС</li>
              <li className="text-base leading-relaxed">Возможность самостоятельно управлять хозяйством</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Недостатки КФХ:
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Обязательное личное трудовое участие (для ИП-КФХ)</li>
              <li className="text-base leading-relaxed">Полная личная ответственность перед кредиторами (для ИП-КФХ)</li>
              <li className="text-base leading-relaxed">Сложнее привлечь инвесторов (для ИП-КФХ)</li>
              <li className="text-base leading-relaxed">Ограничения по ЕСХН (минимум 70% доходов от с/х деятельности)</li>
              <li className="text-base leading-relaxed">Необходимость ведения бухгалтерского учёта при ЕСХН</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Государственные субсидии и поддержка для КФХ
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Российское государство активно поддерживает крестьянские фермерские хозяйства. Вот основные виды поддержки:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Прямые дотации на га земли:</strong> 8000-12 000 рублей в год на гектар</li>
              <li className="text-base leading-relaxed"><strong>Гранты для начинающих фермеров:</strong> до 1-3 млн рублей на развитие</li>
              <li className="text-base leading-relaxed"><strong>Компенсация за элитные семена:</strong> возврат до 50% стоимости</li>
              <li className="text-base leading-relaxed"><strong>Субсидии на машины и оборудование:</strong> компенсация до 40% стоимости</li>
              <li className="text-base leading-relaxed"><strong>Программа "Агростартап":</strong> грант до 700 тысяч рублей для новых хозяйств</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Подробнее о субсидиях читайте в нашей статье «<Link href="/blog/farmer-subsidies-2026" className="text-[#2d7a2d] hover:underline">Субсидии для фермеров на зерно в 2026 году</Link>».
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как найти контакты КФХ и покупателей зерна
            </h2>
            <p className="text-base leading-relaxed mb-6">
              После регистрации вашего КФХ вам нужно начать продавать зерно. На платформе ЗерноПоиск вы можете:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Найти других фермеров и КФХ через <Link href="/farmers" className="text-[#2d7a2d] hover:underline">базу данных КФХ</Link> для сотрудничества</li>
              <li className="text-base leading-relaxed">Найти прямых покупателей зерна (мукомолы, животноводческие комплексы, трейдеры)</li>
              <li className="text-base leading-relaxed">Отслеживать текущие <Link href="/prices" className="text-[#2d7a2d] hover:underline">цены на зерно</Link> на разных рынках</li>
              <li className="text-base leading-relaxed">Изучать данные о <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">международной торговле зерном</Link></li>
              <li className="text-base leading-relaxed">Публиковать декларации на зерно и привлекать покупателей</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Практические советы по регистрации и ведению КФХ
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Начните с консультации:</strong> посоветуйтесь с бухгалтером или юристом перед регистрацией, чтобы выбрать оптимальную форму</li>
              <li className="text-base leading-relaxed"><strong>Выберите правильный ОКVED:</strong> это определяет, какие субсидии вы сможете получать</li>
              <li className="text-base leading-relaxed"><strong>Встаньте на учёт в ПФР:</strong> это необходимо для получения субсидий и льгот</li>
              <li className="text-base leading-relaxed"><strong>Ведите учёт:</strong> даже при ЕСХН нужна документация по расходам и доходам</li>
              <li className="text-base leading-relaxed"><strong>Подавайте налоговые декларации:</strong> сроки сдачи — обычно до 15 апреля для КФХ с ЕСХН</li>
              <li className="text-base leading-relaxed"><strong>Используйте льготы:</strong> КФХ имеют право на страховые взносы со скидкой на ЕСХН</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              КФХ — это оптимальная организационно-правовая форма для сельскохозяйственных производителей, включая зерновых фермеров. Регистрация КФХ как ИП с налоговым режимом ЕСХН позволяет минимизировать налоговую нагрузку, получать государственную поддержку и оставаться гибким в управлении хозяйством.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Главное — правильно подготовить документы, выбрать оптимальный налоговый режим и постоянно развивать свой бизнес. А поиск покупателей и мониторинг цен будет проще с помощью платформы <Link href="/search" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link>.
            </p>
            <p className="text-base leading-relaxed">
              Помните: регистрация КФХ — это только первый шаг. Успех вашего хозяйства зависит от грамотного ведения, постоянного мониторинга рынка и поиска прямых покупателей. На <Link href="/farmers" className="text-[#2d7a2d] hover:underline">странице "Фермеры"</Link> вы найдёте все необходимые контакты и информацию для развития вашего бизнеса.
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
