"use client";

import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import { useState, useEffect } from "react";

export default function ProveritDeklaraciuFgisArticle() {
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
      slug: "tr-ts-015-2011",
      title: "ТР ТС 015/2011 — технический регламент на зерно",
      preview: "Основной технический регламент Таможенного союза: требования безопасности, маркировки и штрафы.",
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
        <span className="text-gray-600 dark:text-gray-400">Как проверить декларацию на зерно в ФГИС Росаккредитации</span>
      </div>

      {/* Article Content */}
      <main className="flex-grow">
        <article className="mx-auto max-w-3xl px-4 py-12">
          {/* Title and Meta */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-[#1c1c1c] dark:text-white mb-4">
              Как проверить декларацию на зерно в ФГИС Росаккредитации
            </h1>
            <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <span>Опубликовано 6 марта 2026</span>
              <span>•</span>
              <span>9 минут чтения</span>
            </div>
          </div>

          {/* Article Body */}
          <div className="prose prose-lg dark:prose-invert max-w-none text-[#1c1c1c] dark:text-gray-300">
            <p className="text-base leading-relaxed mb-6">
              Проверка подлинности декларации на зерно — это критически важный этап перед заключением любой сделки. К сожалению, на рынке циркулирует немало поддельных документов, которые используют мошенники для получения авансов или введения в заблуждение покупателей. В этой статье мы дадим вам полный набор инструментов и знаний, чтобы вы могли самостоятельно проверить подлинность любой декларации через систему ФГИС Росаккредитации и избежать мошеннических схем.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что такое ФГИС Росаккредитации и почему это важно
            </h2>
            <p className="text-base leading-relaxed mb-6">
              ФГИС (Федеральная государственная информационная система) Росаккредитации — это официальная государственная база данных, в которой регистрируются все декларации соответствия на продукцию, прошедшие через аккредитованные лаборатории и испытательные центры. Эта система находится под контролем Федерального агентства по техническому регулированию и метрологии (Росстандарт).
            </p>
            <p className="text-base leading-relaxed mb-6">
              Каждая официально выданная декларация на зерно должна быть зарегистрирована в этой системе. Если декларация есть в ФГИС — она подлинная. Если её там нет — это либо поддельный документ, либо бланк, полученный незаконным путём.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Пошаговая инструкция по проверке в ФГИС Росаккредитации
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 1: Перейдите на официальный сайт ФГИС
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Откройте браузер и введите в адресную строку: <strong>fgis.gost.ru</strong> (или перейдите через поисковик по запросу "ФГИС Росаккредитации"). Это единственный официальный сайт системы. Обращайте внимание на адрес в адресной строке — мошенники часто создают похожие сайты с опечатками (например, "fgis-gost.ru" вместо "fgis.gost.ru").
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 2: Найдите раздел для поиска деклараций
            </h3>
            <p className="text-base leading-relaxed mb-6">
              На главной странице сайта ФГИС найдите ссылку "Реестр деклараций о соответствии" или "Поиск декларации". Обычно это расположено в верхнем меню или в центральной части страницы. Кликните на эту ссылку для входа в систему поиска.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 3: Введите данные декларации
            </h3>
            <p className="text-base leading-relaxed mb-6">
              В поле поиска вы можете ввести несколько параметров:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Номер декларации</strong> — самый точный способ проверки (указывается на самом документе)</li>
              <li className="text-base leading-relaxed"><strong>Номер СНИЛС заявителя</strong> — идентификационный номер производителя/заявителя</li>
              <li className="text-base leading-relaxed"><strong>Реквизиты организации</strong> — название компании, ИНН, КПП</li>
              <li className="text-base leading-relaxed"><strong>Наименование товара</strong> — название продукции (пшеница, рожь, мука)</li>
              <li className="text-base leading-relaxed"><strong>Дата выдачи</strong> — период, когда была выдана декларация</li>
            </ul>

            <p className="text-base leading-relaxed mb-6">
              Самый надёжный способ — это ввести <strong>номер декларации</strong>. Номер обычно выглядит как серия букв и цифр (например, "ЕАЭС РС 015.0019.000.0000.0000").
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 4: Нажмите "Поиск" и дождитесь результатов
            </h3>
            <p className="text-base leading-relaxed mb-6">
              После ввода данных нажмите кнопку "Поиск" и дождитесь загрузки результатов. Система обычно отвечает в течение нескольких секунд. Если декларация найдена, вы увидите её полные реквизиты.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Шаг 5: Проверьте детали найденной декларации
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Когда декларация найдена в системе, сравните все параметры с документом, который вам предоставил поставщик:
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что нужно проверять в найденной декларации
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              1. Номер и серия декларации
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Номер в ФГИС должен полностью совпадать с номером на документе. Даже одна буква или цифра в отличии означает, что это не тот документ.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              2. Данные заявителя (производителя/поставщика)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Проверьте:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Точное название организации (должно совпадать с регистрацией)</li>
              <li className="text-base leading-relaxed">ИНН и КПП организации</li>
              <li className="text-base leading-relaxed">Юридический адрес</li>
              <li className="text-base leading-relaxed">ФИО руководителя (если указано)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              3. Описание товара
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Проверьте соответствие всех параметров товара:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Наименование культуры (пшеница, рожь, ячмень и т.д.)</li>
              <li className="text-base leading-relaxed">Сорт и класс зерна</li>
              <li className="text-base leading-relaxed">Объём партии (в тоннах или килограммах)</li>
              <li className="text-base leading-relaxed">Назначение (продовольственное, кормовое, семенное)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              4. Дата и сроки действия
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Убедитесь, что:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Дата выдачи совпадает с датой на документе</li>
              <li className="text-base leading-relaxed">Декларация ещё действует (срок действия не истёк)</li>
              <li className="text-base leading-relaxed">Дата выдачи разумна (не является датой в далёком прошлом или будущем)</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              5. Лаборатория (испытательный центр)
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Проверьте, какая лаборатория выдала декларацию:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed">Название должно быть известной аккредитованной лабораторией</li>
              <li className="text-base leading-relaxed">Проверьте, актуальна ли аккредитация этой лаборатории</li>
              <li className="text-base leading-relaxed">Убедитесь, что это именно та лаборатория, которая указана в документе</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Признаки поддельной декларации
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Красные флаги при проверке в ФГИС
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Декларация не найдена в системе ФГИС</strong> — это основной признак подделки</li>
              <li className="text-base leading-relaxed"><strong>Номер декларации не соответствует стандартному формату</strong> — номер должен начинаться с "ЕАЭС РС" или иметь другой стандартный вид</li>
              <li className="text-base leading-relaxed"><strong>Срок действия истёк</strong> — используется для прикрытия старых сделок</li>
              <li className="text-base leading-relaxed"><strong>Несоответствие в названии компании</strong> — опечатки, сокращения, которых нет в реальной регистрации</li>
              <li className="text-base leading-relaxed"><strong>Странные или несуществующие реквизиты ИНН/КПП</strong> — можно проверить через Яндекс.Справочник или реестр ФНС</li>
            </ul>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Признаки мошеннической схемы
            </h3>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Срок действия декларации скоро истекает</strong> — создаёт спешку у покупателя</li>
              <li className="text-base leading-relaxed"><strong>Несоответствие описания товара</strong> — декларация на пшеницу, а вас пытаются убедить, что это ячмень</li>
              <li className="text-base leading-relaxed"><strong>Объём партии не совпадает</strong> — в декларации 100 тонн, а вас пытаются продать 500 тонн с одной декларацией</li>
              <li className="text-base leading-relaxed"><strong>Запрос авансового платежа</strong> — перед проверкой документов</li>
              <li className="text-base leading-relaxed"><strong>Предложение скидки за наличный расчёт без документов</strong> — классический признак мошенничества</li>
              <li className="text-base leading-relaxed"><strong>Спешка и давление</strong> — "вы должны решиться сегодня", "других покупателей уже ждём"</li>
            </ul>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Что делать, если декларация не найдена или поддельная
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Немедленно прекратите общение
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Если декларация не найдена в ФГИС или явно поддельная, не совершайте никаких действий. Это явный признак мошеннической схемы.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Свяжитесь с компанией-производителем
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Если у вас есть сомнения, найдите контактные данные компании-заявителя в интернете и позвоните им напрямую. Спросите, действительно ли они выдали эту декларацию, и была ли она зарегистрирована в ФГИС.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Подайте жалобу в Росстандарт
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Если вы обнаружили очевидную подделку, вы можете подать жалобу в Федеральное агентство по техническому регулированию и метрологии (Росстандарт). На их сайте есть форма для подачи жалоб на мошенничество.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Обратитесь в полицию
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Если вы стали жертвой мошенничества, обратитесь в местное отделение полиции с заявлением о подделке документов и мошенничестве.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Как ЗерноПоиск упрощает проверку деклараций
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Платформа ЗерноПоиск предоставляет уже проверенные и верифицированные декларации:
            </p>
            <ul className="pl-6 list-disc space-y-2 mb-6">
              <li className="text-base leading-relaxed"><strong>Все декларации проверены в ФГИС</strong> — мы самостоятельно верифицируем каждый документ</li>
              <li className="text-base leading-relaxed"><strong>Достоверные данные о производителях</strong> — известны реальные контакты и история компаний</li>
              <li className="text-base leading-relaxed"><strong>Удобная система поиска</strong> — найдите зерно по всем параметрам за несколько секунд</li>
              <li className="text-base leading-relaxed"><strong>Фильтрация по регионам и объёмам</strong> — выберите поставщиков, подходящих вам</li>
              <li className="text-base leading-relaxed"><strong>Telegram-бот</strong> — оперативные уведомления через <a href="https://t.me/agro_analizbot" target="_blank" rel="noopener noreferrer" className="text-[#2d7a2d] hover:underline">@agro_analizbot</a></li>
            </ul>

            <p className="text-base leading-relaxed mb-6">
              Вместо того, чтобы вручную проверять каждую декларацию в ФГИС, вы можете использовать <Link href="/search" className="text-[#2d7a2d] hover:underline">базу деклараций ЗерноПоиск</Link>, которая уже содержит проверенные и актуальные данные.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Часто задаваемые вопросы
            </h2>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Сколько времени действует декларация?
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Декларация обычно действует 12 месяцев с момента выдачи. Некоторые лаборатории выдают декларации на 6 месяцев или 3 года, но стандарт — 1 год.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Может ли одна декларация использоваться для нескольких партий?
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Нет. Каждая партия зерна должна иметь свою собственную декларацию. Если вы видите, что одна декларация якобы охватывает несколько тысяч тонн — это скорее всего обман.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Что делать, если ФГИС временно недоступна?
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Дождитесь, когда система будет доступна. Если поставщик спешит и не даёт вам времени на проверку, это подозрительный знак. Легальные сделки всегда допускают время для проверок.
            </p>

            <h3 className="text-xl font-semibold text-[#1c1c1c] dark:text-white mt-8 mb-3">
              Нужна ли мне регистрация для входа в ФГИС?
            </h3>
            <p className="text-base leading-relaxed mb-6">
              Нет. ФГИС Росаккредитации открыта для публичного поиска. Вам не нужно регистрироваться или вводить логин и пароль для проверки декларации.
            </p>

            <h2 className="text-2xl font-bold text-[#1c1c1c] dark:text-white mt-10 mb-4">
              Заключение
            </h2>
            <p className="text-base leading-relaxed mb-6">
              Проверка подлинности декларации в ФГИС Росаккредитации — это простой, но критически важный шаг перед заключением любой сделки на зерно. Уделите 5 минут на проверку и избегите потери тысяч рублей на мошенников.
            </p>
            <p className="text-base leading-relaxed">
              Если вы работаете с большим объёмом сделок, используйте <Link href="/search" className="text-[#2d7a2d] hover:underline">платформу ЗерноПоиск</Link>, которая экономит вам время на проверки и предоставляет только верифицированные декларации от надёжных поставщиков. Это безопаснее и эффективнее, чем искать информацию вручную.
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
