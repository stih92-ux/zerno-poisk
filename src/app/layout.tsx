import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЗерноПоиск — Поиск зерновых деклараций ФГИС",
  description:
    "Поиск по базе зерновых деклараций ФГИС Росаккредитации. Более 500 000 деклараций. Контакты компаний, экспорт CSV.",
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
