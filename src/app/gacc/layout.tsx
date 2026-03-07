import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Реестр GACC КНР — экспортёры зерна в Китай | ЗерноПоиск",
  description: "Проверьте регистрацию российских предприятий в реестре GACC для экспорта зерна в Китай.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
