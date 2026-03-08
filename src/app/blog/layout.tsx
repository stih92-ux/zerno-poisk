import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог о зерновом рынке — статьи и аналитика",
  description:
    "Статьи о зерновом рынке России: декларации соответствия, цены на пшеницу, экспорт в Китай, база фермеров КФХ. Аналитика и руководства.",
  alternates: {
    canonical: "/blog",
  },
  openGraph: {
    title: "Блог ЗерноПоиск — аналитика зернового рынка",
    description:
      "Статьи и руководства по зерновому рынку России.",
    url: "/blog",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Главная", item: "https://zerno-poisk.ru" },
    { "@type": "ListItem", position: 2, name: "Блог" },
  ],
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
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
