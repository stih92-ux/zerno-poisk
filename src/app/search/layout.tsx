import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Поиск зерновых деклараций ФГИС — 500 000+ документов",
  description:
    "Найдите декларацию соответствия на зерно за 10 секунд. 500 000+ документов из реестра Росаккредитации. Фильтрация по культуре, региону, ИНН, объёму партии и дате.",
  alternates: {
    canonical: "/search",
  },
  openGraph: {
    title: "Поиск зерновых деклараций ФГИС — 500 000+ документов",
    description:
      "База деклараций соответствия на зерно из ФГИС Росаккредитации. 13 культур, 68 регионов, поиск по номеру и ИНН.",
    url: "/search",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
