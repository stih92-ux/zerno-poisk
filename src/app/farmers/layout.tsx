import { Metadata } from "next";

export const metadata: Metadata = {
  title: "База фермеров России — 27 000+ КФХ с контактами | ЗерноПоиск",
  description: "Найдите КФХ и фермеров по региону, культуре и объёму производства. 27 000+ хозяйств с контактами.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
