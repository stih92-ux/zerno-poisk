import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЗерноПоиск — декларации, цены на зерно, база фермеров РФ",
  description:
    "500 000+ зерновых деклараций, котировки MOEX/ZOL/IDK, 27 000 КФХ с контактами. Найдите поставщика или покупателя зерна за 2 минуты. Вход бесплатный.",
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
      </head>
      <body className="min-h-screen font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
