import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Блог — ЗерноПоиск",
  description: "Статьи о зерновом рынке России: декларации, цены на пшеницу, экспорт в Китай, база фермеров.",
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
