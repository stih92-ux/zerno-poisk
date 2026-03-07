import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Данные Comtrade по экспорту зерна — статистика ООН | ЗерноПоиск",
  description: "Статистика экспорта и импорта зерна из базы UN Comtrade. Объёмы торговли пшеницей, ячменём, кукурузой по странам.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
