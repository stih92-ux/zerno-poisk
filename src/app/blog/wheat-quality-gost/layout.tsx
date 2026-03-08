import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Классы пшеницы по ГОСТ — как определить качество зерна",
  description:
    "Полное описание классификации пшеницы по ГОСТ 9353-2016: 5 классов качества, параметры глютена, белка, влажности, упавших зёрен. Как читать сертификаты и влияние класса на цену.",
  alternates: {
    canonical: "/blog/wheat-quality-gost",
  },
  openGraph: {
    title: "Классы пшеницы по ГОСТ — как определить качество зерна",
    description:
      "Классификация пшеницы по ГОСТ: 5 классов, параметры качества, сертификаты, влияние на цену.",
    url: "/blog/wheat-quality-gost",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "Классы пшеницы по ГОСТ — как определить качество зерна",
      datePublished: "2026-03-10",
      dateModified: "2026-03-10",
      description:
        "Полное описание классификации пшеницы по ГОСТ 9353-2016: 5 классов качества, параметры глютена, белка, влажности, упавших зёрен. Как читать сертификаты и влияние класса на цену.",
      url: "https://zerno-poisk.ru/blog/wheat-quality-gost",
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
        "@id": "https://zerno-poisk.ru/blog/wheat-quality-gost",
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://zerno-poisk.ru" },
        { "@type": "ListItem", position: 2, name: "Блог", item: "https://zerno-poisk.ru/blog" },
        { "@type": "ListItem", position: 3, name: "Классы пшеницы ГОСТ" },
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
