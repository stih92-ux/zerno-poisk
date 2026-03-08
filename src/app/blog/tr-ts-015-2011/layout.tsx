import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ТР ТС 015/2011 — технический регламент на зерно",
  description:
    "Полное руководство по ТР ТС 015/2011: что это, требования к безопасности зерна, правила маркировки, процедуры оценки соответствия, штрафы за нарушения и как найти сертифицированных поставщиков.",
  alternates: {
    canonical: "/blog/tr-ts-015-2011",
  },
  openGraph: {
    title: "ТР ТС 015/2011 — технический регламент на зерно",
    description:
      "Технический регламент: требования безопасности зерна, маркировка, штрафы и сертификация.",
    url: "/blog/tr-ts-015-2011",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "ТР ТС 015/2011 — технический регламент на зерно",
      datePublished: "2026-03-06",
      dateModified: "2026-03-06",
      description:
        "Полное руководство по ТР ТС 015/2011: что это, требования к безопасности зерна, правила маркировки, процедуры оценки соответствия, штрафы за нарушения и как найти сертифицированных поставщиков.",
      url: "https://zerno-poisk.ru/blog/tr-ts-015-2011",
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
        "@id": "https://zerno-poisk.ru/blog/tr-ts-015-2011",
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://zerno-poisk.ru" },
        { "@type": "ListItem", position: 2, name: "Блог", item: "https://zerno-poisk.ru/blog" },
        { "@type": "ListItem", position: 3, name: "ТР ТС 015/2011" },
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
