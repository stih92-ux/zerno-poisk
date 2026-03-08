import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экспорт пшеницы из России — статистика и ключевые рынки",
  description:
    "Анализ экспорта пшеницы из России: объёмы (2020-2026), крупнейшие покупатели (Египет, Турция, Бангладеш), порты, пошлины, классы и сезонность экспорта.",
  alternates: {
    canonical: "/blog/wheat-export-russia",
  },
  openGraph: {
    title: "Экспорт пшеницы из России — статистика и ключевые рынки",
    description:
      "Объёмы экспорта пшеницы, рынки, порты, пошлины и данные Comtrade для аналитики.",
    url: "/blog/wheat-export-russia",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Экспорт пшеницы из России — статистика и ключевые рынки",
  datePublished: "2026-03-08",
  dateModified: "2026-03-08",
  description:
    "Анализ экспорта пшеницы из России: объёмы (2020-2026), крупнейшие покупатели (Египет, Турция, Бангладеш), порты, пошлины, классы и сезонность экспорта.",
  url: "https://zerno-poisk.ru/blog/wheat-export-russia",
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
    "@id": "https://zerno-poisk.ru/blog/wheat-export-russia",
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
