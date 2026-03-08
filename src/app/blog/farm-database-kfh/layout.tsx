import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "База КФХ России — найти фермера для закупки зерна",
  description:
    "Как использовать базу 27 000+ крестьянских фермерских хозяйств России для поиска поставщиков зерна. Алгоритм поиска и фильтрации по региону и культуре.",
  alternates: {
    canonical: "/blog/farm-database-kfh",
  },
  openGraph: {
    title: "База КФХ России — найти фермера для закупки зерна",
    description:
      "Как найти фермера-поставщика зерна через базу КФХ России.",
    url: "/blog/farm-database-kfh",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "База КФХ России — найти фермера для закупки зерна",
      datePublished: "2026-03-01",
      dateModified: "2026-03-01",
      description:
        "Как использовать базу 27 000+ крестьянских фермерских хозяйств России для поиска поставщиков зерна. Алгоритм поиска и фильтрации по региону и культуре.",
      url: "https://zerno-poisk.ru/blog/farm-database-kfh",
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
        "@id": "https://zerno-poisk.ru/blog/farm-database-kfh",
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://zerno-poisk.ru" },
        { "@type": "ListItem", position: 2, name: "Блог", item: "https://zerno-poisk.ru/blog" },
        { "@type": "ListItem", position: 3, name: "База КФХ России" },
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
