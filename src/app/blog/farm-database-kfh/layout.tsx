import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "База КФХ России — найти фермера для закупки зерна | ЗерноПоиск",
  description: "Как использовать базу крестьянских фермерских хозяйств России для поиска поставщиков зерна. Алгоритм поиска и фильтрации.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
