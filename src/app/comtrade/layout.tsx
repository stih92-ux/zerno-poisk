import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Экспорт зерна — статистика UN Comtrade по 170+ странам",
  description:
    "Международная торговля зерном: данные UN Comtrade по экспорту и импорту пшеницы, ячменя, кукурузы. Объёмы и стоимость поставок по 170+ странам мира.",
  alternates: {
    canonical: "/comtrade",
  },
  openGraph: {
    title: "Экспорт зерна — статистика UN Comtrade по 170+ странам",
    description:
      "Данные ООН по международной торговле зерном. Экспорт, импорт, объёмы по странам.",
    url: "/comtrade",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Что такое UN Comtrade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "UN Comtrade — крупнейшая база данных ООН по международной торговле товарами. Содержит данные об экспорте и импорте более чем 200 стран, классифицированные по кодам HS.",
      },
    },
    {
      "@type": "Question",
      name: "За какой период доступны данные?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "На ЗерноПоиск доступны данные за последние 4 года. Некоторые страны публикуют данные с задержкой 3–6 месяцев.",
      },
    },
    {
      "@type": "Question",
      name: "Какие страны являются крупнейшими импортёрами российского зерна?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Основные покупатели: Турция, Египет, Бангладеш, Саудовская Аравия и страны Африки.",
      },
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
