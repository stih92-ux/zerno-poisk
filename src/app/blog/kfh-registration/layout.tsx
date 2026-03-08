import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "КФХ — что это такое и как зарегистрировать фермерское хозяйство",
  description:
    "Полное руководство по регистрации крестьянского фермерского хозяйства (КФХ): правовые формы, пошаговая процедура, необходимые документы, налоговые режимы и различие между КФХ и ООО.",
  alternates: {
    canonical: "/blog/kfh-registration",
  },
  openGraph: {
    title: "КФХ — что это такое и как зарегистрировать фермерское хозяйство",
    description:
      "Регистрация КФХ: правовые формы, документы, налоги и отличие от ООО.",
    url: "/blog/kfh-registration",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Article",
      headline: "КФХ — что это такое и как зарегистрировать фермерское хозяйство",
      datePublished: "2026-03-09",
      dateModified: "2026-03-09",
      description:
        "Полное руководство по регистрации крестьянского фермерского хозяйства (КФХ): правовые формы, пошаговая процедура, необходимые документы, налоговые режимы и различие между КФХ и ООО.",
      url: "https://zerno-poisk.ru/blog/kfh-registration",
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
        "@id": "https://zerno-poisk.ru/blog/kfh-registration",
      },
      inLanguage: "ru",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Главная", item: "https://zerno-poisk.ru" },
        { "@type": "ListItem", position: 2, name: "Блог", item: "https://zerno-poisk.ru/blog" },
        { "@type": "ListItem", position: 3, name: "Регистрация КФХ" },
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
