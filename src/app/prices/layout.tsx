import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на зерно сегодня — пшеница, ячмень, кукуруза",
  description:
    "Актуальные цены на зерно в России: котировки MOEX, региональные цены ZOL.RU, объявления IDK.RU. Пшеница, ячмень, кукуруза, подсолнечник — все культуры в одном месте.",
  alternates: {
    canonical: "/prices",
  },
  openGraph: {
    title: "Цены на зерно сегодня — пшеница, ячмень, кукуруза",
    description:
      "Мониторинг цен на зерно в России: MOEX, ZOL, IDK. Котировки обновляются ежедневно.",
    url: "/prices",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Какие источники цен используются?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "MOEX (Московская биржа) — фьючерсные контракты; ZOL.RU — региональные цены закупки с базисом поставки; IDK.RU — объявления о покупке и продаже зерна.",
          },
        },
        {
          "@type": "Question",
          name: "Как часто обновляются котировки?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Биржевые данные MOEX обновляются в режиме торговых сессий. Региональные цены ZOL и объявления IDK обновляются ежедневно.",
          },
        },
        {
          "@type": "Question",
          name: "Что такое базис поставки EXW и FOB?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "EXW — цена на воротах склада без транспортировки. FOB — цена с доставкой до порта и погрузкой на судно. CPT — цена с доставкой до указанного пункта.",
          },
        },
      ],
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://zerno-poisk.ru" },
        { "@type": "ListItem", position: 2, name: "Цены на зерно" },
      ],
    },
  ],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
