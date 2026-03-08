"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function WheatQualityGostArticle() {
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
      preview: "Полное руководство по получению декларации качества на зерно.",
    },
    {
      slug: "tr-ts-015-2011",
      title: "Требования ТР ТС 015/2011 к зерну и зернопродуктам",
      preview: "Стандарты качества и безопасности для зерна в России и странах ЕАЭС.",
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
        <span className="text-gray-600 dark:text-gray-400">Классы пшеницы по ГОСТ</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Классы пшеницы по ГОСТ: как определить качество зерна
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 10 марта 2026</span>
              <span>•</span>
              <span>11 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Качество пшеницы — это один из ключевых факторов, определяющих цену и возможность использования зерна. В России система классификации пшеницы строго регламентирована ГОСТ 9353-2016, который устанавливает пять классов качества: от первого (самого высокого) до пятого (кормового). Понимание этой классификации критически важно для фермеров, трейдеров, переработчиков и всех участников зернового рынка. В этой статье мы разберём, что означает каждый класс пшеницы по ГОСТ, какие параметры их определяют, и как это влияет на цену.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что такое ГОСТ 9353-2016 и почему он важен
            </h2>
            <p className="text-base leading-relaxed mb-6">
              ГОСТ 9353-2016 (Пшеница. Технические условия) — это российский государственный стандарт, который определяет требования к качеству пшеницы и методам её испытаний. Этот стандарт был разработан для обеспечения единых критериев оценки качества пшеницы по всей стране и для защиты интересов как производителей, так и потребителей.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Классификация пшеницы по ГОСТ 9353 основана на комплексной оценке физико-химических параметров зерна. Класс пшеницы непосредственно влияет на её цену, возможность экспорта, использование в пищевой промышленности и применение в кормовых целях. Например, пшеница 1-го класса может быть использована для производства хлеба и макаронных изделий, а пшеница 5-го класса (кормовая) подходит только для производства кормов для животных.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Пять классов пшеницы: характеристика каждого
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1-й класс (1. класс): Пшеница наивысшего качества
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Пшеница 1-го класса — это зерно наивысшего качества, которое соответствует самым строгим требованиям ГОСТ 9353. Это пшеница используется преимущественно в пищевой промышленности для производства хлебопродуктов, муки высокого качества и является основным экспортным продуктом России.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Основные характеристики пшеницы 1-го класса:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Содержание белка:</strong> минимум 14% (для мягкой пшеницы 1-го класса) или 15% (для твёрдой пшеницы)</li>
              <li className="text-base leading-relaxed"><strong>Клейковина (глютен):</strong> не менее 28% (первой группы качества — стабильная, очень хорошо эластична)</li>
              <li className="text-base leading-relaxed"><strong>Число падения (Falling Number):</strong> не менее 250 сек (показатель ферментативной активности)</li>
              <li className="text-base leading-relaxed"><strong>Влажность:</strong> не более 14% (при расчёте цены)</li>
              <li className="text-base leading-relaxed"><strong>Иностранные примеси:</strong> не более 0,2% по массе</li>
              <li className="text-base leading-relaxed"><strong>Зерновые примеси:</strong> не более 1% по массе</li>
              <li className="text-base leading-relaxed"><strong>Повреждённые зёрна:</strong> не более 2% по массе</li>
              <li className="text-base leading-relaxed"><strong>Стекловидность (витреозность):</strong> не менее 70% (показатель твёрдости зерна)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2-й класс: Пшеница хорошего качества
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Пшеница 2-го класса — это качественное зерно, которое также может использоваться в пищевой промышленности, но с некоторыми ограничениями. Такая пшеница часто экспортируется и хорошо продаётся на мировом рынке. Спрос на пшеницу 2-го класса очень высокий.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Основные характеристики пшеницы 2-го класса:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Содержание белка:</strong> минимум 13% (для мягкой пшеницы) или 14% (для твёрдой пшеницы)</li>
              <li className="text-base leading-relaxed"><strong>Клейковина:</strong> не менее 25% (первой или второй группы качества)</li>
              <li className="text-base leading-relaxed"><strong>Число падения:</strong> не менее 220 сек</li>
              <li className="text-base leading-relaxed"><strong>Влажность:</strong> не более 14%</li>
              <li className="text-base leading-relaxed"><strong>Иностранные примеси:</strong> не более 0,3% по массе</li>
              <li className="text-base leading-relaxed"><strong>Зерновые примеси:</strong> не более 2% по массе</li>
              <li className="text-base leading-relaxed"><strong>Повреждённые зёрна:</strong> не более 3% по массе</li>
              <li className="text-base leading-relaxed"><strong>Стекловидность:</strong> не менее 60%</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3-й класс: Пшеница удовлетворительного качества
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Пшеница 3-го класса по ГОСТ — это наиболее распространённый класс на российском рынке. Он считается стандартным качеством для массового производства муки, кормов и других переработанных продуктов. Эта пшеница имеет приемлемые параметры для большинства промышленных применений.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Основные характеристики пшеницы 3-го класса:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Содержание белка:</strong> минимум 12% (для мягкой пшеницы) или 13% (для твёрдой пшеницы)</li>
              <li className="text-base leading-relaxed"><strong>Клейковина:</strong> не менее 20% (любой группы качества)</li>
              <li className="text-base leading-relaxed"><strong>Число падения:</strong> не менее 180 сек</li>
              <li className="text-base leading-relaxed"><strong>Влажность:</strong> не более 14%</li>
              <li className="text-base leading-relaxed"><strong>Иностранные примеси:</strong> не более 0,5% по массе</li>
              <li className="text-base leading-relaxed"><strong>Зерновые примеси:</strong> не более 3% по массе</li>
              <li className="text-base leading-relaxed"><strong>Повреждённые зёрна:</strong> не более 5% по массе</li>
              <li className="text-base leading-relaxed"><strong>Стекловидность:</strong> не менее 50%</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4-й класс: Пшеница низкого качества
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Пшеница 4-го класса — это зерно, которое имеет значительные отклонения от требований более высоких классов. Такая пшеница используется преимущественно для производства кормов для животных или переработки в крупы с предварительной очисткой. Цена на пшеницу 4-го класса значительно ниже, чем на 3-й класс и выше.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Основные характеристики пшеницы 4-го класса:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Содержание белка:</strong> от 9% и выше (без верхнего ограничения)</li>
              <li className="text-base leading-relaxed"><strong>Клейковина:</strong> от 15% и выше</li>
              <li className="text-base leading-relaxed"><strong>Число падения:</strong> не менее 100 сек</li>
              <li className="text-base leading-relaxed"><strong>Влажность:</strong> не более 14%</li>
              <li className="text-base leading-relaxed"><strong>Иностранные примеси:</strong> не более 1% по массе</li>
              <li className="text-base leading-relaxed"><strong>Зерновые примеси:</strong> не более 5% по массе</li>
              <li className="text-base leading-relaxed"><strong>Повреждённые зёрна:</strong> не более 8% по массе</li>
              <li className="text-base leading-relaxed"><strong>Стекловидность:</strong> не менее 30%</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5-й класс: Кормовая пшеница
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Пшеница 5-го класса — это кормовое зерно, которое не соответствует требованиям 4-го класса. Такая пшеница может быть повреждена, содержать много примесей, иметь низкое содержание белка и клейковины. Основное применение — производство комбикормов и кормовых смесей для животных. Цена на кормовую пшеницу минимальна.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Основные характеристики пшеницы 5-го класса:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Содержание белка:</strong> менее 9% (как правило)</li>
              <li className="text-base leading-relaxed"><strong>Клейковина:</strong> менее 15%</li>
              <li className="text-base leading-relaxed"><strong>Число падения:</strong> менее 100 сек (признак высокой ферментативной активности)</li>
              <li className="text-base leading-relaxed"><strong>Влажность:</strong> более 14% или сыроватая пшеница</li>
              <li className="text-base leading-relaxed"><strong>Иностранные примеси:</strong> более 1% по массе</li>
              <li className="text-base leading-relaxed"><strong>Зерновые примеси:</strong> более 5% по массе</li>
              <li className="text-base leading-relaxed"><strong>Повреждённые зёрна:</strong> более 8% по массе</li>
              <li className="text-base leading-relaxed"><strong>Стекловидность:</strong> менее 30%</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Ключевые параметры качества пшеницы
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Содержание белка и клейковины
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Содержание белка (протеина) в пшенице — это один из главных показателей качества. Белок в пшенице на 80% состоит из глютена (клейковины), который формирует структуру теста и влияет на свойства хлеба. Чем выше содержание белка и клейковины, тем лучше хлебопекарные свойства пшеницы.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Глютен классифицируется по качеству на группы:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Первая группа:</strong> глютен стабильный, очень хорошо эластичный — для пшеницы 1-2 класса</li>
              <li className="text-base leading-relaxed"><strong>Вторая группа:</strong> глютен хорошо эластичный, хорошо растяжимый — для пшеницы 2-3 класса</li>
              <li className="text-base leading-relaxed"><strong>Третья группа:</strong> глютен слабо эластичный, хорошо растяжимый — для пшеницы 3-4 класса</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Число падения (Falling Number)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Число падения — это параметр, который показывает ферментативную активность зерна, особенно активность амилазы (фермента, расщепляющего крахмал). Измеряется в секундах. Чем выше число падения, тем лучше качество пшеницы. Низкое число падения указывает на проращивание зерна или воздействие высокой влажности, что негативно влияет на хлебопекарные свойства.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Влажность
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Влажность пшеницы важна для хранения, логистики и переработки. Стандартная влажность для пшеницы — не более 14%. При расчёте цены используется формула пересчёта на базовую влажность. Если пшеница сыровата (влажность выше 14%), цена снижается. Если пшеница очень сухая, это также может привести к потерям при обработке.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Примеси и повреждённые зёрна
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Пшеница оценивается по содержанию иностранных примесей (семена сорняков, камни, комки земли) и зерновых примесей (зёрна других культур, испорченная пшеница). Повреждённые зёрна включают треснувшие, больные и проросшие зёрна. Чем меньше примесей и повреждений, тем выше класс и цена пшеницы.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Стекловидность (витреозность)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Стекловидность — это показатель твёрдости зерна и содержания в нём стекловидного эндосперма (внутренней ткани зерна). Чем выше стекловидность, тем лучше хлебопекарные свойства пшеницы. Мягкая пшеница имеет низкую стекловидность, твёрдая — высокую.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Мягкая и твёрдая пшеница: в чём разница
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Существует два вида пшеницы: мягкая (обыкновенная) и твёрдая (дурум). Они различаются по структуре зерна, содержанию белка и применению.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Мягкая пшеница:</strong> содержит больше углеводов, менее стекловидна, имеет более низкое содержание белка. Используется для производства хлеба и кормов. Является основной культурой в России.
            </p>
            <p className="text-base leading-relaxed mb-6">
              <strong>Твёрдая пшеница (дурум):</strong> содержит больше белка (15-16%), очень стекловидна (более 80%), имеет более высокое содержание глютена. Используется для производства макаронных изделий и семолины. Более ценный и дорогой класс зерна.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как класс пшеницы влияет на цену
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Класс пшеницы по ГОСТ 9353 — это основной фактор, определяющий цену зерна. Вот примерная разница в ценах (на март 2026 года):
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>1-й класс:</strong> 15 800 - 16 500 ₽/тонна (премиальная цена)</li>
              <li className="text-base leading-relaxed"><strong>2-й класс:</strong> 14 500 - 15 300 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>3-й класс:</strong> 13 500 - 14 200 ₽/тонна (самый популярный)</li>
              <li className="text-base leading-relaxed"><strong>4-й класс:</strong> 12 000 - 13 200 ₽/тонна</li>
              <li className="text-base leading-relaxed"><strong>5-й класс (кормовая):</strong> 10 500 - 12 000 ₽/тонна (минимальная цена)</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Разница между 1-м и 3-м классом может составлять 2 000-3 000 ₽/тонну, а между 3-м и 5-м классом — еще на 1 500-2 000 ₽/тонну меньше. Именно поэтому фермеры и трейдеры максимально заинтересованы в повышении класса пшеницы.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как читать сертификат качества пшеницы
            </h2>
            <p className="text-base leading-relaxed mb-6">
              При покупке или продаже пшеницы важно внимательно изучить сертификат качества (декларацию). На <Link href="/search" className="text-[#2d7a2d] hover:underline">нашей платформе ЗерноПоиск</Link> вы можете найти и изучить тысячи сертификатов качества.
            </p>
            <p className="text-base leading-relaxed mb-6">
              В сертификате качества обычно указываются:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Класс пшеницы (1-5) и тип (мягкая или твёрдая)</li>
              <li className="text-base leading-relaxed">Содержание белка и клейковины (%)</li>
              <li className="text-base leading-relaxed">Число падения (сек)</li>
              <li className="text-base leading-relaxed">Влажность (%)</li>
              <li className="text-base leading-relaxed">Примеси (%) и повреждённые зёрна (%)</li>
              <li className="text-base leading-relaxed">Стекловидность (%)</li>
              <li className="text-base leading-relaxed">Дата анализа и название лаборатории</li>
              <li className="text-base leading-relaxed">Объём партии и её происхождение</li>
            </ul>
            <p className="text-base leading-relaxed mb-6">
              Перед покупкой партии пшеницы всегда требуйте оригинальный сертификат качества от аккредитованной лаборатории. Не доверяйте устным обещаниям о классе пшеницы.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Практические советы для покупателей и продавцов
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Для продавцов (фермеры, трейдеры)
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Повышайте качество урожая:</strong> используйте качественные семена, соблюдайте технологию возделывания, вовремя убирайте зерно, чтобы не допустить проращивания</li>
              <li className="text-base leading-relaxed"><strong>Правильно сушите и храните:</strong> пшеница должна быть просушена до 14% влажности и храниться в сухом месте, чтобы не было плесени</li>
              <li className="text-base leading-relaxed"><strong>Очищайте от примесей:</strong> используйте современное оборудование для очистки зерна перед продажей</li>
              <li className="text-base leading-relaxed"><strong>Получайте сертификаты:</strong> проверяйте класс пшеницы в аккредитованной лаборатории, имейте официальный сертификат качества</li>
              <li className="text-base leading-relaxed"><strong>Ищите покупателей через ЗерноПоиск:</strong> <Link href="/search" className="text-[#2d7a2d] hover:underline">разместите объявление о продаже</Link> и найдите прямых покупателей по лучшей цене</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Для покупателей (переработчики, экспортёры)
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Всегда требуйте сертификат:</strong> изучайте параметры, проверяйте, что класс соответствует цене</li>
              <li className="text-base leading-relaxed"><strong>Сравнивайте предложения:</strong> на <Link href="/search" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link> вы можете увидеть все доступные партии пшеницы с их параметрами</li>
              <li className="text-base leading-relaxed"><strong>Проверяйте по <Link href="/prices" className="text-[#2d7a2d] hover:underline">рыночным ценам</Link>:</strong> убедитесь, что цена справедлива для данного класса</li>
              <li className="text-base leading-relaxed"><strong>Учитывайте логистику:</strong> пшеница из разных регионов может иметь разные цены из-за стоимости доставки</li>
              <li className="text-base leading-relocateded"><strong>Заключайте контракты:</strong> фиксируйте параметры качества и цену в письменном виде</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Тренды на рынке пшеницы в 2026 году
            </h2>
            <p className="text-base leading-relaxed mb-6">
              В 2026 году наблюдается повышение спроса на пшеницу высокого качества (1-2 класс) как на внутреннем рынке, так и для экспорта. Одновременно спрос на кормовую пшеницу снижается из-за использования более дешёвых аналогов (ячмень, кукуруза).
            </p>
            <p className="text-base leading-relaxed mb-6">
              Это означает, что производителям выгодно вкладывать в повышение качества урожая, чтобы получить пшеницу более высокого класса и увеличить доход.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Классификация пшеницы по ГОСТ 9353-2016 — это фундамент российского зернового рынка. Пять классов качества (от 1-го высочайшего качества до 5-го кормового) определяют стоимость, применение и возможность экспорта пшеницы. Понимание параметров качества (содержание белка, клейковины, число падения, влажность, примеси) критически важно для всех участников рынка.
            </p>
            <p className="text-base leading-relaxed mb-6">
              Чтобы получать лучшие цены, фермерам необходимо повышать качество урожая и иметь документально оформленные сертификаты качества. Покупателям важно проверять документы и сравнивать предложения. Именно для этого была создана платформа <Link href="/" className="text-[#2d7a2d] hover:underline">ЗерноПоиск</Link> — здесь вы найдёте <Link href="/search" className="text-[#2d7a2d] hover:underline">декларации качества</Link>, <Link href="/prices" className="text-[#2d7a2d] hover:underline">актуальные цены</Link> и сможете прямо сравнить предложения пшеницы разных классов и параметров.
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
