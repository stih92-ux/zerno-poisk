import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Биржевые котировки зерна на MOEX — как торговать зерном на бирже",
  description:
    "Полное руководство по торговле зерном на Московской бирже MOEX: котировки, типы контрактов, как начать торговать, инструменты и стратегии.",
  alternates: {
    canonical: "/blog/moex-grain-quotes",
  },
  openGraph: {
    title: "Биржевые котировки зерна на MOEX — как торговать зерном на бирже",
    description:
      "Торговля зерном на MOEX: типы контрактов, котировки, регистрация, стратегии.",
    url: "/blog/moex-grain-quotes",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Биржевые котировки зерна на MOEX — как торговать зерном на бирже",
  datePublished: "2026-03-07",
  dateModified: "2026-03-07",
  description:
    "Полное руководство по торговле зерном на Московской бирже MOEX: котировки, типы контрактов, как начать торговать, инструменты и стратегии.",
  url: "https://zerno-poisk.ru/blog/moex-grain-quotes",
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
    "@id": "https://zerno-poisk.ru/blog/moex-grain-quotes",
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
