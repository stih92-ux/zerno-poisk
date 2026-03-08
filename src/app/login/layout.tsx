import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Вход — ЗерноПоиск",
  description:
    "Войдите в ЗерноПоиск через Telegram. Один аккаунт для сайта и бота.",
  robots: { index: false, follow: false },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
