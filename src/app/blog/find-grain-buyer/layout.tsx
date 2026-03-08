import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как найти покупателя зерна — руководство для фермера",
  description:
    "Пошаговое руководство по продаже зерна: типы покупателей, каналы поиска, подготовка товара, безопасность сделок и типичные ошибки фермеров.",
  alternates: {
    canonical: "/blog/find-grain-buyer",
  },
  openGraph: {
    title: "Как найти покупателя зерна — руководство для фермера",
    description:
      "Пошаговое руководство: где и как фермеру найти покупателя зерна.",
    url: "/blog/find-grain-buyer",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как найти покупателя зерна — руководство для фермера",
  datePublished: "2026-03-03",
  dateModified: "2026-03-03",
  description:
    "Пошаговое руководство по продаже зерна: типы покупателей, каналы поиска, подготовка товара, безопасность сделок и типичные ошибки фермеров.",
  url: "https://zerno-poisk.ru/blog/find-grain-buyer",
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
    "@id": "https://zerno-poisk.ru/blog/find-grain-buyer",
  },
  inLanguage: "ru",
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
