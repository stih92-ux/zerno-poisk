import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на пшеницу 2026 — котировки, обзор и прогноз рынка",
  description:
    "Анализ цен на пшеницу в России 2026: текущие котировки MOEX, факторы влияния, региональные различия и прогноз развития рынка зерна.",
  alternates: {
    canonical: "/blog/wheat-prices-2026",
  },
  openGraph: {
    title: "Цены на пшеницу 2026 — котировки, обзор и прогноз рынка",
    description:
      "Анализ цен на пшеницу в России: котировки, факторы, прогноз.",
    url: "/blog/wheat-prices-2026",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Цены на пшеницу 2026 — котировки, обзор и прогноз рынка",
  datePublished: "2026-03-04",
  dateModified: "2026-03-04",
  description:
    "Анализ цен на пшеницу в России 2026: текущие котировки MOEX, факторы влияния, региональные различия и прогноз развития рынка зерна.",
  url: "https://zerno-poisk.ru/blog/wheat-prices-2026",
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
    "@id": "https://zerno-poisk.ru/blog/wheat-prices-2026",
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
