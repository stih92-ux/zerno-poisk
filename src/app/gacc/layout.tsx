import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Реестр GACC КНР — аккредитация экспортёров зерна в Китай",
  description:
    "Проверьте регистрацию российских предприятий в реестре GACC для экспорта зерна в Китай. Поиск по названию компании и коду аккредитации.",
  alternates: {
    canonical: "/gacc",
  },
  openGraph: {
    title: "Реестр GACC КНР — аккредитация экспортёров зерна в Китай",
    description:
      "Проверка аккредитации российских компаний для экспорта зерна в Китай через реестр GACC.",
    url: "/gacc",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
