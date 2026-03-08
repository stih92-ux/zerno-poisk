import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как экспортировать зерно из России — пошаговая инструкция",
  description:
    "Полный гайд по экспорту зерна из России: требования к компании, поиск покупателя, документы, логистика, таможенное оформление и типичные ошибки.",
  alternates: {
    canonical: "/blog/grain-export-guide",
  },
  openGraph: {
    title: "Как экспортировать зерно из России — пошаговая инструкция",
    description:
      "Пошаговое руководство по экспорту: регистрация, документы, порты, таможенное оформление, выплаты.",
    url: "/blog/grain-export-guide",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как экспортировать зерно из России — пошаговая инструкция",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  description:
    "Полный гайд по экспорту зерна из России: требования к компании, поиск покупателя, документы, логистика, таможенное оформление и типичные ошибки.",
  url: "https://zerno-poisk.ru/blog/grain-export-guide",
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
    "@id": "https://zerno-poisk.ru/blog/grain-export-guide",
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
