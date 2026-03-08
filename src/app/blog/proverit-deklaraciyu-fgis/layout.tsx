import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Как проверить декларацию на зерно в ФГИС Росаккредитации",
  description:
    "Полное руководство по проверке декларации на зерно в системе ФГИС Росаккредитации: пошаговая инструкция, как выявить подделку, что проверять, признаки мошенничества и как использовать проверенные данные.",
  alternates: {
    canonical: "/blog/proverit-deklaraciyu-fgis",
  },
  openGraph: {
    title: "Как проверить декларацию на зерно в ФГИС Росаккредитации",
    description:
      "Пошаговое руководство по проверке подлинности деклараций: ФГИС, реестр, признаки подделок.",
    url: "/blog/proverit-deklaraciyu-fgis",
    type: "article",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Как проверить декларацию на зерно в ФГИС Росаккредитации",
  datePublished: "2026-03-06",
  dateModified: "2026-03-06",
  description:
    "Полное руководство по проверке декларации на зерно в системе ФГИС Росаккредитации: пошаговая инструкция, как выявить подделку, что проверять, признаки мошенничества и как использовать проверенные данные.",
  url: "https://zerno-poisk.ru/blog/proverit-deklaraciyu-fgis",
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
    "@id": "https://zerno-poisk.ru/blog/proverit-deklaraciyu-fgis",
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
