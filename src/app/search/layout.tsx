import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Зерновые декларации — поиск по базе 500 000+ документов",
  description: "Найдите декларацию соответствия на зерно за 10 секунд. 500 000+ документов из реестра Росаккредитации. Поиск по номеру, ИНН, культуре, региону.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
