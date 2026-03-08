import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Субсидии для фермеров на зерно в 2026 году — полный гид",
  description:
    "Полное руководство по государственным субсидиям для фермеров в 2026: виды субсидий, гранты КФХ, Агростартап, компенсации на семена, как подать заявку и избежать отказа.",
  alternates: {
    canonical: "/blog/farmer-subsidies-2026",
  },
  openGraph: {
    title: "Субсидии для фермеров на зерно в 2026 году — полный гид",
    description:
      "Государственные субсидии, гранты и компенсации для фермеров на зерно: типы, размеры, процедура подачи.",
    url: "/blog/farmer-subsidies-2026",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Субсидии для фермеров на зерно в 2026 году — полный гид",
  datePublished: "2026-03-09",
  dateModified: "2026-03-09",
  description:
    "Полное руководство по государственным субсидиям для фермеров в 2026: виды субсидий, гранты КФХ, Агростартап, компенсации на семена, как подать заявку и избежать отказа.",
  url: "https://zerno-poisk.ru/blog/farmer-subsidies-2026",
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
    "@id": "https://zerno-poisk.ru/blog/farmer-subsidies-2026",
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
