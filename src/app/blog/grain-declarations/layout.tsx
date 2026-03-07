import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Зерновые декларации: что это и как получить | ЗерноПоиск",
  description: "Полное руководство по зерновым декларациям: определение, процесс получения, требования и штрафы. Как ЗерноПоиск помогает найти декларации.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
