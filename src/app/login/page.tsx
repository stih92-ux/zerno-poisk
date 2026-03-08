"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import ThemeToggle from "@/components/ThemeToggle";
import TelegramLoginButton from "@/components/TelegramLoginButton";
import { useAuth } from "@/context/AuthContext";

export default function LoginPage() {
  const { user, loading } = useAuth();
  const router = useRouter();

  // If already logged in, redirect home
  useEffect(() => {
    if (!loading && user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  return (
    <div className="min-h-screen bg-white dark:bg-[#0a1a0a]">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-[#0a1a0a]/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg">🌾</span>
            <span className="text-base font-semibold text-gray-900 dark:text-white">ЗерноПоиск</span>
          </Link>
          <ThemeToggle />
        </div>
      </header>

      {/* Login Form */}
      <div className="flex items-center justify-center px-4 pt-20 pb-16">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 mb-4">
              <svg className="w-8 h-8 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Вход в ЗерноПоиск
            </h1>
            <p className="mt-2 text-sm text-gray-500 dark:text-gray-400 max-w-sm mx-auto">
              Авторизуйтесь через Telegram — быстро, безопасно и без пароля. Один аккаунт для сайта и бота.
            </p>
          </div>

          <div className="bg-gray-50 dark:bg-[#112211] rounded-2xl p-8 border border-gray-200 dark:border-gray-700">
            <TelegramLoginButton botName="agro_analizbot" />

            <div className="mt-6 text-center">
              <p className="text-xs text-gray-400 dark:text-gray-500 leading-relaxed">
                Нажмите кнопку выше — Telegram попросит подтвердить вход.
                Мы получим только ваше имя и username.
              </p>
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Безопасно</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Без паролей — авторизация через Telegram</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-emerald-600 dark:text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Быстро</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Вход в один клик, без регистрации</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center">
                <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 dark:text-white">Единый аккаунт</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Один Telegram — доступ к сайту и боту</p>
              </div>
            </div>
          </div>

          <p className="mt-8 text-center text-xs text-gray-400 dark:text-gray-500">
            Ещё нет Telegram?{" "}
            <a
              href="https://t.me/agro_analizbot"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2d7a2d] hover:underline"
            >
              Начните с бота →
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
