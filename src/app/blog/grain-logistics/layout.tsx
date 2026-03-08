import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Логистика зерна в России — элеваторы, перевозка и хранение",
  description:
    "Полный обзор инфраструктуры зерновой логистики в России: типы элеваторов, хранение, железнодорожная и автомобильная перевозка, портовая логистика, расходы на доставку.",
  alternates: {
    canonical: "/blog/grain-logistics",
  },
  openGraph: {
    title: "Логистика зерна в России — элеваторы, перевозка и хранение",
    description:
      "Логистика зерна в России: элеваторы, перевозка, хранение, порты, расходы.",
    url: "/blog/grain-logistics",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Логистика зерна в России — элеваторы, перевозка и хранение",
      datePublished: "2026-03-10",
      dateModified: "2026-03-10",
      description:
        "Полный обзор инфраструктуры зерновой логистики в России: типы элеваторов, хранение, железнодорожная и автомобильная перевозка, портовая логистика, расходы на доставку.",
      url: "https://zerno-poisk.ru/blog/grain-logistics",
      author: {
        "@type": "Organization",
        name: "ЗерноПоиск",
        url: "https://zerno-poisk.ru",
      },
      publisher: {
        "@type": "Organization",
        name: "ЗерноПоиск",
        url: "https://zerno-poisk.ru",
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": "https://zerno-poisk.ru/blog/grain-logistics",
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://zerno-poisk.ru" },
        { "@type": "ListItem", position: 2, name: "Блог", item: "https://zerno-poisk.ru/blog" },
        { "@type": "ListItem", position: 3, name: "Логистика зерна" },
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
