import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Цены на зерно сегодня — пшеница, ячмень, кукуруза",
  description:
    "Актуальные цены на зерно в России: котировки MOEX, региональные цены ZOL.RU, объявления IDK.RU. Пшеница, ячмень, кукуруза, подсолнечник — все культуры в одном месте.",
  alternates: {
    canonical: "/prices",
  },
  openGraph: {
    title: "Цены на зерно сегодня — пшеница, ячмень, кукуруза",
    description:
      "Мониторинг цен на зерно в России: MOEX, ZOL, IDK. Котировки обновляются ежедневно.",
    url: "/prices",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
