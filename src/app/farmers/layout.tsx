import { Metadata } from "next";

export const metadata: Metadata = {
  title: "База фермеров России — 27 000+ КФХ с контактами",
  description:
    "Найдите КФХ и сельхозпредприятия по региону, культуре и объёму производства. 27 000+ крестьянских фермерских хозяйств с контактами и площадями.",
  alternates: {
    canonical: "/farmers",
  },
  openGraph: {
    title: "База фермеров России — 27 000+ КФХ с контактами",
    description:
      "Крупнейшая открытая база КФХ России. Поиск фермеров по региону, культуре и площади.",
    url: "/farmers",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
