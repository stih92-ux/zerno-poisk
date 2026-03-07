import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ЗерноПоиск — Поиск зерновых деклараций ФГИС",
  description:
    "Поиск по базе зерновых деклараций ФГИС Росаккредитации. Более 500 000 деклараций. Контакты компаний, экспорт CSV.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru">
      <body className="min-h-screen font-sans bg-slate-50 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
