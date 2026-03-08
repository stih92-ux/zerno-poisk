import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на ячмень в России 2026 — обзор и прогноз рынка",
  description:
    "Анализ цен на ячмень в России 2026: кормовой и пивоваренный ячмень, региональные различия, факторы влияния и прогноз развития рынка.",
  alternates: {
    canonical: "/blog/barley-prices-2026",
  },
  openGraph: {
    title: "Цены на ячмень в России 2026 — обзор и прогноз рынка",
    description:
      "Цены на ячмень, факторы влияния, региональные различия, прогноз рынка.",
    url: "/blog/barley-prices-2026",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Цены на ячмень в России 2026 — обзор и прогноз рынка",
  datePublished: "2026-03-07",
  dateModified: "2026-03-07",
  description:
    "Анализ цен на ячмень в России 2026: кормовой и пивоваренный ячмень, региональные различия, факторы влияния и прогноз развития рынка.",
  url: "https://zerno-poisk.ru/blog/barley-prices-2026",
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
    "@id": "https://zerno-poisk.ru/blog/barley-prices-2026",
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
