import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://zerno-poisk.vercel.app";

export const metadata: Metadata = {
  title: {
    default: "ЗерноПоиск — аналитика зернового рынка России",
    template: "%s | ЗерноПоиск",
  },
  description:
    "Аналитика зернового рынка России: 500 000+ деклараций ФГИС, котировки MOEX/ZOL/IDK, данные UN Comtrade по 170+ странам, реестр GACC КНР и база 27 000+ КФХ с контактами.",
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: siteUrl,
    siteName: "ЗерноПоиск",
    title: "ЗерноПоиск — аналитика зернового рынка России",
    description:
      "Декларации, цены на зерно, экспорт, база фермеров — всё в одном сервисе. Бесплатно.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ЗерноПоиск — аналитика зернового рынка России",
    description:
      "Декларации, цены на зерно, экспорт, база фермеров — всё в одном сервисе. Бесплатно.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {},
};

// JSON-LD structured data for the entire site
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "ЗерноПоиск",
      description:
        "Аналитика зернового рынка России: декларации, цены, экспорт, база фермеров",
      inLanguage: "ru",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate: `${siteUrl}/search?q={search_term_string}`,
        },
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Organization",
      "@id": `${siteUrl}/#organization`,
      name: "ЗерноПоиск",
      url: siteUrl,
      description:
        "Сервис аналитики зернового рынка России: поиск деклараций, мониторинг цен, международная торговля, база фермеров.",
      sameAs: ["https://t.me/agro_analizbot"],
    },
  ],
};

// Inline script to apply theme before first paint (prevents flash)
const themeScript = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch(e) {}
})();
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
