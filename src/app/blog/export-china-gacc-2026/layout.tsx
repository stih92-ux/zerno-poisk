import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экспорт зерна в Китай — требования GACC 2026",
  description:
    "Полное руководство по экспорту зерна в Китай: требования GACC, процесс аккредитации, фитосанитарный контроль, логистика и экономика сделки.",
  alternates: {
    canonical: "/blog/export-china-gacc-2026",
  },
  openGraph: {
    title: "Экспорт зерна в Китай — требования GACC 2026",
    description:
      "Требования GACC для экспорта зерна в Китай: аккредитация, документы, логистика.",
    url: "/blog/export-china-gacc-2026",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Экспорт зерна в Китай — требования GACC 2026",
  datePublished: "2026-03-02",
  dateModified: "2026-03-02",
  description:
    "Полное руководство по экспорту зерна в Китай: требования GACC, процесс аккредитации, фитосанитарный контроль, логистика и экономика сделки.",
  url: "https://zerno-poisk.ru/blog/export-china-gacc-2026",
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
    "@id": "https://zerno-poisk.ru/blog/export-china-gacc-2026",
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
