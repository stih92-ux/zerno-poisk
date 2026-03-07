import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на зерно сегодня — котировки MOEX, ZOL и IDK",
  description: "Актуальные цены на пшеницу, ячмень, кукурузу и другие культуры. Данные MOEX, ZOL, IDK в одном месте.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
