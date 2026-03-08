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

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
