import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Зерновые декларации: что это, как получить и проверить",
  description:
    "Полное руководство по декларациям соответствия на зерно: определение, процесс получения, требования ТР ТС, штрафы и как проверить через ФГИС Росаккредитации.",
  alternates: {
    canonical: "/blog/grain-declarations",
  },
  openGraph: {
    title: "Зерновые декларации: что это, как получить и проверить",
    description:
      "Руководство по декларациям соответствия на зерно: требования, процесс, проверка.",
    url: "/blog/grain-declarations",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Зерновые декларации: что это, как получить и проверить",
      datePublished: "2026-03-05",
      dateModified: "2026-03-05",
      description:
        "Полное руководство по декларациям соответствия на зерно: определение, процесс получения, требования ТР ТС, штрафы и как проверить через ФГИС Росаккредитации.",
      url: "https://zerno-poisk.ru/blog/grain-declarations",
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
        "@id": "https://zerno-poisk.ru/blog/grain-declarations",
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://zerno-poisk.ru" },
        { "@type": "ListItem", position: 2, name: "Блог", item: "https://zerno-poisk.ru/blog" },
        { "@type": "ListItem", position: 3, name: "Зерновые декларации" },
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
