import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Зерновые декларации: что это, как получить и проверить",
  description:
    "Полное руководство по декларациям соответствия на зерно: определение, процесс получения, требования ТР ТС, штрафы и как проверить через ФГИС Росаккредитации.",
  alternates: {
    canonical: "/blog/grain-declarations",
  },
  openGraph: {
    title: "Зерновые декларации: что это, как получить и проверить",
    description:
      "Руководство по декларациям соответствия на зерно: требования, процесс, проверка.",
    url: "/blog/grain-declarations",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Зерновые декларации: что это, как получить и проверить",
  datePublished: "2026-03-05",
  dateModified: "2026-03-05",
  description:
    "Полное руководство по декларациям соответствия на зерно: определение, процесс получения, требования ТР ТС, штрафы и как проверить через ФГИС Росаккредитации.",
  url: "https://zerno-poisk.vercel.app/blog/grain-declarations",
  author: {
    "@type": "Organization",
    name: "ЗерноПоиск",
    url: "https://zerno-poisk.vercel.app",
  },
  publisher: {
    "@type": "Organization",
    name: "ЗерноПоиск",
    url: "https://zerno-poisk.vercel.app",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://zerno-poisk.vercel.app/blog/grain-declarations",
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
