"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function FarmerSubsidies2026Article() {
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
      slug: "kfh-registration",
      title: "КФХ — что это такое и как зарегистрировать фермерское хозяйство",
      preview: "Пошаговое руководство по регистрации КФХ и выбору налогового режима.",
    },
    {
      slug: "farm-database-kfh",
      title: "База данных КФХ: как найти фермерское хозяйство по зерну",
      preview: "Поиск контактов фермеров и расширение бизнеса через сеть.",
    },
    {
      slug: "find-grain-buyer",
      title: "Как найти покупателя зерна: пошаговое руководство",
      preview: "Методы поиска прямых покупателей и заключения выгодных сделок.",
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
        <span className="text-gray-600 dark:text-gray-400">Субсидии для фермеров 2026</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Субсидии для фермеров на зерно в 2026 году — полный гид
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 9 марта 2026</span>
              <span>•</span>
              <span>11 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Государство активно поддерживает сельскохозяйственных производителей, включая зерновых фермеров. В 2026 году на субсидирование АПК выделено около 300 миллиардов рублей. Если вы владеете КФХ или ООО, производящим зерно, это руководство поможет вам разобраться, какие субсидии и гранты вам доступны, как их получить и какие типичные ошибки приводят к отказу.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Виды государственных субсидий для фермеров в 2026 году
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Единая субсидия на гектар земли (прямые выплаты)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Это основная форма государственной поддержки для КФХ и сельхозпроизводителей. Прямые выплаты выделяются на каждый гектар сельскохозяйственной земли, используемой для производства зерна или других культур.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Размер субсидии:</strong> 8000-12 000 рублей за гектар в год (в зависимости от региона)</li>
              <li className="text-base leading-relaxed"><strong>Условия получения:</strong> земля должна быть в собственности или долгосрочной аренде, нужна регистрация КФХ</li>
              <li className="text-base leading-relaxed"><strong>Сроки подачи:</strong> обычно январь-март каждого года</li>
              <li className="text-base leading-relaxed"><strong>Выплаты:</strong> два раза в год (весна и осень)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Грант "Агростартап" для начинающих фермеров
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Это программа поддержки молодых и начинающих фермеров, которые регистрируют КФХ первый раз. Грант можно использовать для покупки оборудования, семян и развития хозяйства.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Размер гранта:</strong> 700 000 - 1 500 000 рублей (в зависимости от региона и направления)</li>
              <li className="text-base leading-relaxed"><strong>Условия:</strong> возраст до 35-40 лет, КФХ создано не позднее 2 лет назад, наличие земельного участка не менее 1 га</li>
              <li className="text-base leading-relaxed"><strong>На что потратить:</strong> покупка техники, семян, удобрений, строительство хранилищ</li>
              <li className="text-base leading-relaxed"><strong>Сроки подачи:</strong> конкурс обычно проводится один раз в год (весна)</li>
              <li className="text-base leading-relaxed"><strong>Количество мест:</strong> ограничено, зависит от бюджета региона</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Грант для семейных ферм и малых КФХ
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Отдельная программа для малых и семейных хозяйств, которые производят зерно и другую продукцию на ограниченной площади.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Размер гранта:</strong> 300 000 - 1 000 000 рублей</li>
              <li className="text-base leading-relaxed"><strong>Условия:</strong> КФХ должно иметь от 1 до 10 гектаров земли, количество членов КФХ — 1-5 человек</li>
              <li className="text-base leading-relaxed"><strong>Приоритет:</strong> молодые фермеры, семьи с детьми, регионы с низким агропроизводством</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Компенсация затрат на элитные семена и посадочный материал
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Государство возмещает часть расходов на покупку высокопродуктивных семян зерновых культур.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Размер компенсации:</strong> 30-50% от стоимости семян (в зависимости от программы)</li>
              <li className="text-base leading-relaxed"><strong>Условия:</strong> семена должны быть сертифицированы и включены в Реестр селекционных достижений</li>
              <li className="text-base leading-relaxed"><strong>Лимит:</strong> обычно до 200 тысяч рублей на одно хозяйство в год</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Субсидии на покупку сельхозмашин и оборудования
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Государство компенсирует часть расходов на приобретение техники для производства и переработки зерна.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Размер компенсации:</strong> 15-40% от стоимости техники</li>
              <li className="text-base leading-relaxed"><strong>Лимит:</strong> обычно до 2-5 млн рублей на одно хозяйство</li>
              <li className="text-base leading-relaxed"><strong>Техника:</strong> тракторы, комбайны, культиваторы, сеялки и другие машины, включённые в специальный реестр</li>
              <li className="text-base leading-relaxed"><strong>Условия:</strong> техника должна быть российского производства или импортная, но прошедшая таможенное оформление</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              6. Субсидии на страховки урожая и скота
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Государство субсидирует часть взносов по сельскохозяйственному страхованию, защищая фермеров от рисков неурожая.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Размер компенсации:</strong> 50-70% от стоимости страховки</li>
              <li className="text-base leading-relaxed"><strong>Условия:</strong> страховка должна быть в уполномоченной страховой компании, включённой в реестр СКР</li>
              <li className="text-base leading-relaxed"><strong>Риски, покрываемые:</strong> засуха, град, наводнение, потеря урожая от болезней</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              7. Льготные кредиты и субсидирование процентных ставок
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Для развития хозяйства можно получить кредит с государственной субсидией на процентные ставки.
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Процентная ставка:</strong> от 3-5% годовых (вместо рыночных 10-15%)</li>
              <li className="text-base leading-reiched"><strong>Размер кредита:</strong> от 100 000 до 5 млн рублей</li>
              <li className="text-base leading-relaxed"><strong>Сроки кредита:</strong> 1-5 лет</li>
              <li className="text-base leading-relaxed"><strong>Условия:</strong> кредит выдаётся аккредитованными банками (Сбербанк, ВТБ, АЛТ-инвест и другие)</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Региональные различия в субсидировании
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Размер и типы субсидий значительно отличаются по регионам. Вот примеры:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Краснодарский край:</strong> высокие дотации на зерно (до 12 000 ₽/га), конкурсы на гранты проводятся часто</li>
              <li className="text-base leading-relaxed"><strong>Ростовская область:</strong> субсидии на семена и удобрения, страховки урожая</li>
              <li className="text-base leading-relaxed"><strong>Воронежская область:</strong> гранты на развитие, льготное кредитование</li>
              <li className="text-base leading-relaxed"><strong>Омская, Алтайская области:</strong> поддержка малых ферм, компенсация затрат на технику</li>
              <li className="text-base leading-relaxed"><strong>Московская область:</strong> гранты для начинающих фермеров, субсидии на хранилища</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Для уточнения размеров субсидий в вашем регионе обратитесь в Министерство сельского хозяйства вашей области или на портал поддержки АПК.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Пошаговая инструкция по подаче заявки на субсидию
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 1: Проверьте соответствие условиям
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Перед подачей заявки убедитесь, что вы соответствуете требованиям:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">КФХ зарегистрировано и получило свидетельство из ФНС</li>
              <li className="text-base leading-relaxed">У вас есть земельный участок в собственности или аренде (договор должен быть заверен)</li>
              <li className="text-base leading-relaxed">Вы производите зерно или указанные культуры</li>
              <li className="text-base leading-relaxed">Для молодых фермеров — возраст в пределах требуемого (обычно до 35-40 лет)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 2: Соберите необходимые документы
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Стандартный набор документов для подачи заявки:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Копия свидетельства о регистрации КФХ (ОГРН)</li>
              <li className="text-base leading-relaxed">Копия выписки из ЕГРИП</li>
              <li className="text-base leading-relaxed">Документы на земельный участок (свидетельство о собственности или договор аренды)</li>
              <li className="text-base leading-relaxed">Копия паспорта главы КФХ</li>
              <li className="text-base leading-relaxed">ИНН КФХ</li>
              <li className="text-base leading-relaxed">Банковские реквизиты (счёт КФХ)</li>
              <li className="text-base leading-relaxed">Бизнес-план (для грантов и конкурсов)</li>
              <li className="text-base leading-relaxed">Свидетельства о качестве и сертификаты (если требуется)</li>
              <li className="text-base leading-relaxed">Справки из налоговой и ПФР о наличии задолженности</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 3: Найдите актуальную программу поддержки
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Каждый год программы обновляются, поэтому нужно проверить:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">На сайте Министерства сельского хозяйства вашего региона</li>
              <li className="text-base leading-relaxed">На портале поддержки АПК (http://asp.rf.gov.ru)</li>
              <li className="text-base leading-relaxed">В местном офисе МСХ по месту расположения КФХ</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 4: Заполните анкету или заявку
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Заявка обычно включает:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Информацию о КФХ (название, регистрационные номера)</li>
              <li className="text-base leading-relaxed">Информацию о земельных участках (площадь, местоположение, тип культур)</li>
              <li className="text-base leading-relaxed">Финансовую информацию (бюджет на развитие, объёмы производства)</li>
              <li className="text-base leading-relaxed">План использования средств (для грантов)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 5: Подайте заявку
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Способы подачи:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Лично:</strong> в аграрный отдел администрации вашего района или область</li>
              <li className="text-base leading-relaxed"><strong>Через МФЦ:</strong> многофункциональный центр вашего района</li>
              <li className="text-base leading-relaxed"><strong>Онлайн:</strong> через портал госуслуг или портал поддержки АПК</li>
              <li className="text-base leading-relaxed"><strong>Почтой:</strong> заказное письмо с уведомлением</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 6: Ждите рассмотрения
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Сроки рассмотрения заявки обычно:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Для прямых субсидий на га:</strong> 15-30 дней</li>
              <li className="text-base leading-relaxed"><strong>Для грантов конкурсных:</strong> 30-60 дней (проверка документов, конкурс, подведение итогов)</li>
              <li className="text-base leading-relaxed"><strong>Для возмещения затрат:</strong> 20-45 дней после предоставления чеков и счёт-фактур</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 7: Получите деньги
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После одобрения заявки средства перечисляются на счёт КФХ, указанный в документах. Проверьте правильность реквизитов при подаче заявки!
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Типичные ошибки, приводящие к отказу в субсидии
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Чтобы избежать отказа, обратите внимание на следующие частые ошибки:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Неправильные документы на землю:</strong> договор аренды должен быть оформлен правильно и зарегистрирован в земельном кадастре</li>
              <li className="text-base leading-relaxed"><strong>Просроченные документы:</strong> справки из налоговой и ПФР не должны быть старше 30 дней</li>
              <li className="text-base leading-relaxed"><strong>Задолженность:</strong> наличие задолженности перед бюджетом, налоговой или пенсионным фондом — автоматический отказ</li>
              <li className="text-base leading-relaxed"><strong>Нарушение сроков подачи:</strong> заявки принимаются только в установленный период</li>
              <li className="text-base leading-relaxed"><strong>Низкое качество документов:</strong> нечитаемые копии, ошибки в заполнении форм</li>
              <li className="text-base leading-relaxed"><strong>Неправильный реквизиты счёта:</strong> деньги не поступят, если счёт указан неправильно</li>
              <li className="text-base leading-relaxed"><strong>Несоответствие программе:</strong> ваше хозяйство не соответствует условиям программы (например, слишком большая площадь для малых ферм)</li>
              <li className="text-base leading-relaxed"><strong>Отсутствие расходных документов:</strong> для возмещения затрат нужны оригиналы чеков и счёт-фактур</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Сроки и графики подачи заявок в 2026 году
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Общие сроки для различных видов поддержки:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Единые субсидии на га:</strong> январь - 15 марта (весенний период)</li>
              <li className="text-base leading-relaxed"><strong>Гранты "Агростартап":</strong> май - июнь (весенний конкурс), реже - осенний конкурс</li>
              <li className="text-base leading-relaxed"><strong>Субсидии на технику:</strong> в течение всего года, но в зависимости от бюджета региона</li>
              <li className="text-base leading-relaxed"><strong>Компенсация за семена:</strong> после покупки семян, до 30 ноября текущего года</li>
              <li className="text-base leading-relaxed"><strong>Льготные кредиты:</strong> доступны в течение всего года через аккредитованные банки</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Уточняйте сроки в вашем регионе, так как они могут отличаться.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Советы по успешному получению субсидии
            </h2>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Подайте заявку заранее:</strong> не ждите последнего дня, это повышает риск ошибок</li>
              <li className="text-base leading-relaxed"><strong>Обратитесь за консультацией:</strong> сотрудники администрации помогут заполнить форму правильно</li>
              <li className="text-base leading-relaxed"><strong>Ведите бухгалтерский учёт:</strong> это необходимо для любых программ поддержки</li>
              <li className="text-base leading-relaxed"><strong>Сохраняйте все документы:</strong> чеки, счёт-фактуры, акты приёмки-передачи</li>
              <li className="text-base leading-relaxed"><strong>Выполняйте условия программы:</strong> после получения денег нужно потратить их в соответствии с целями программы</li>
              <li className="text-base leading-relaxed"><strong>Мониторьте рынок зерна:</strong> через <Link href="/prices" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link> для планирования доходов</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как использовать субсидии эффективно
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Полученные субсидии следует использовать стратегически:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Инвестируйте в технику:</strong> грант на "Агростартап" хорошо потратить на трактор или комбайн</li>
              <li className="text-base leading-relaxed"><strong>Улучшайте семена:</strong> сорта сертифицированных семян дают выше урожаи</li>
              <li className="text-base leading-relaxed"><strong>Страхуйте урожай:</strong> компенсация на страховку защитит вас от потерь</li>
              <li className="text-base leading-relaxed"><strong>Займитесь хранением:</strong> хранилище позволит продавать зерно в нужный момент по лучшей цене</li>
              <li className="text-base leading-relaxed"><strong>Развивайте почву:</strong> субсидии на удобрения и мелиорацию повышают плодородие</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Где получить дополнительную информацию
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Для более подробной информации о субсидиях в вашем регионе:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Министерство сельского хозяйства вашего региона</strong> — найдите в поиске, обычно есть сайт с актуальной информацией</li>
              <li className="text-base leading-relaxed"><strong>Портал поддержки АПК России</strong> (asp.rf.gov.ru) — справочник всех программ</li>
              <li className="text-base leading-relaxed"><strong>Aграрный отдел администрации района</strong> — консультации и помощь в подаче</li>
              <li className="text-base leading-relaxed"><strong>МФЦ вашего района</strong> — приём документов и консультации</li>
              <li className="text-base leading-relaxed"><strong>Аккредитованные банки</strong> (Сбербанк, ВТБ) — информация о льготных кредитах</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Связь субсидий с регистрацией КФХ
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Чтобы получать субсидии, необходимо правильно зарегистрировать своё КФХ. Процесс регистрации описан в нашей статье «<Link href="/blog/kfh-registration" className="text-[#2d7a2d] hover:underline">КФХ — что это такое и как зарегистрировать фермерское хозяйство</Link>». Убедитесь, что:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">КФХ зарегистрировано с правильными кодами ОКVED для зерна</li>
              <li className="text-base leading-relaxed">Налоговый режим выбран правильно (ЕСХН даёт доступ к большему числу программ)</li>
              <li className="text-base leading-relaxed">Вы стоите на учёте в ПФР как страхователь</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Поиск покупателей для продажи вашего урожая
            </h2>
            <p className="text-base leading-relaxed mb-6">
              После получения субсидий и увеличения производства зерна вам нужно найти надёжных покупателей. На платформе <Link href="/search" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link> вы сможете:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Публиковать свои предложения зерна потенциальным покупателям</li>
              <li className="text-base leading-relaxed">Найти <Link href="/farmers" className="text-[#2d7a2d] hover:underline">других фермеров и КФХ</Link> для кооперации</li>
              <li className="text-base leading-relaxed">Отслеживать <Link href="/prices" className="text-[#2d7a2d] hover:underline">цены на рынке</Link> для оптимальной продажи</li>
              <li className="text-base leading-relaxed">Изучать спрос через <Link href="/comtrade" className="text-[#2d7a2d] hover:underline">данные о международной торговле</Link></li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Субсидии и государственная поддержка — это реальная возможность развить своё фермерское хозяйство. В 2026 году объём поддержки не снизился, и конкурсные гранты остаются доступны для активных фермеров.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Главное — своевременно подать заявку, подготовить правильные документы и выбрать программу, подходящую вашему хозяйству. Если у вас есть вопросы, обратитесь в региональное Министерство сельского хозяйства или используйте консультации на портале поддержки АПК.
            </p>
            <p className="text-base leading-relaxed">
              Удачи в развитии вашего фермерского хозяйства! Вместе с правильной регистрацией КФХ, получением субсидий и использованием платформы ЗерноПоиск для поиска покупателей, вы создадите успешный и стабильный бизнес по производству зерна.
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
