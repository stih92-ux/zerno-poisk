"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface BotUsers {
  total: number;
  active_7d: number;
  premium: number;
}

interface BotSearches {
  total: number;
  today: number;
}

interface BotTracking {
  active: number;
  total: number;
}

interface BotPayments {
  total_count: number;
  total_revenue: number;
  recent_count: number;
  recent_revenue: number;
}

interface BotStats {
  available: boolean;
  users?: BotUsers;
  searches?: BotSearches;
  tracking?: BotTracking;
  payments?: BotPayments;
}

interface WebStats {
  searches: number;
  priceViews: number;
  comtradeQueries: number;
  gaccQueries: number;
  farmerQueries: number;
  uptime: string;
}

interface StatsData {
  web: WebStats;
  bot: BotStats;
}

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [stats, setStats] = useState<StatsData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const stored = sessionStorage.getItem("admin_password");
    if (stored) {
      setPassword(stored);
      setIsAuthenticated(true);
      fetchStats(stored);
    }
  }, []);

  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = setInterval(() => {
      fetchStats(password);
    }, 30000);
    return () => clearInterval(interval);
  }, [isAuthenticated, password]);

  const fetchStats = async (pwd: string) => {
    if (!pwd) return;
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/admin/stats?password=${encodeURIComponent(pwd)}`);
      if (!response.ok) {
        setError("Неверный пароль");
        setIsAuthenticated(false);
        sessionStorage.removeItem("admin_password");
        return;
      }
      const data = await response.json();
      setStats(data);
    } catch {
      setError("Ошибка загрузки статистики");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password.trim()) {
      setError("Введите пароль");
      return;
    }
    sessionStorage.setItem("admin_password", password);
    setIsAuthenticated(true);
    await fetchStats(password);
  };

  const handleLogout = () => {
    setPassword("");
    setIsAuthenticated(false);
    setStats(null);
    sessionStorage.removeItem("admin_password");
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50">
        <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
          <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <span className="text-2xl">🌾</span>
              <span className="text-xl font-bold text-slate-900">ЗерноПоиск</span>
            </Link>
            <nav className="flex items-center gap-4">
              <Link href="/search" className="text-sm font-medium text-slate-600 hover:text-primary-600">Декларации</Link>
              <Link href="/prices" className="text-sm font-medium text-slate-600 hover:text-primary-600">Цены</Link>
              <Link href="/comtrade" className="text-sm font-medium text-slate-600 hover:text-primary-600">Comtrade</Link>
              <Link href="/gacc" className="text-sm font-medium text-slate-600 hover:text-primary-600">GACC</Link>
              <Link href="/farmers" className="text-sm font-medium text-slate-600 hover:text-primary-600">Фермеры</Link>
            </nav>
          </div>
        </header>

        <div className="mx-auto max-w-2xl px-4 py-16">
          <div className="card">
            <h1 className="text-3xl font-bold text-slate-900 mb-2">🔐 Admin Panel</h1>
            <p className="text-slate-600 mb-8">Введите пароль для доступа к статистике</p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-2">
                  Пароль
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Введите пароль"
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition"
                />
              </div>

              {error && (
                <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              )}

              <button type="submit" disabled={loading} className="btn-primary w-full">
                {loading ? "Загрузка..." : "Войти"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

  const bot = stats?.bot;
  const web = stats?.web;

  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-bold text-slate-900">ЗерноПоиск</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/search" className="text-sm font-medium text-slate-600 hover:text-primary-600">Декларации</Link>
            <Link href="/prices" className="text-sm font-medium text-slate-600 hover:text-primary-600">Цены</Link>
            <Link href="/comtrade" className="text-sm font-medium text-slate-600 hover:text-primary-600">Comtrade</Link>
            <Link href="/gacc" className="text-sm font-medium text-slate-600 hover:text-primary-600">GACC</Link>
            <Link href="/farmers" className="text-sm font-medium text-slate-600 hover:text-primary-600">Фермеры</Link>
            <button
              onClick={handleLogout}
              className="text-sm font-medium text-slate-600 hover:text-red-600 transition-colors"
            >
              Выход
            </button>
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold text-slate-900">📊 Admin Dashboard</h1>
          <button
            onClick={() => fetchStats(password)}
            disabled={loading}
            className="btn-secondary text-sm"
          >
            {loading ? "Обновление..." : "🔄 Обновить"}
          </button>
        </div>

        {error && (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 mb-6">
            {error}
          </div>
        )}

        {loading && !stats && (
          <div className="text-center py-20 text-slate-400">
            <div className="animate-spin text-4xl mb-4">⏳</div>
            <p>Загружаем статистику...</p>
          </div>
        )}

        {stats && (
          <div className="space-y-8">
            {/* Web Stats */}
            <div className="card">
              <h2 className="text-xl font-semibold text-slate-900 mb-6">🌐 Web Stats</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
                <StatCard label="Поиски" value={web?.searches || 0} />
                <StatCard label="Цены" value={web?.priceViews || 0} />
                <StatCard label="Comtrade" value={web?.comtradeQueries || 0} />
                <StatCard label="GACC" value={web?.gaccQueries || 0} />
                <StatCard label="Фермеры" value={web?.farmerQueries || 0} />
              </div>
            </div>

            {/* Uptime */}
            <div className="card">
              <h2 className="text-xl font-semibold text-slate-900 mb-4">⏱ Uptime</h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-3 w-3 rounded-full bg-green-500 animate-pulse"></span>
                  <span className="text-slate-700">Сервис работает</span>
                </div>
                <div className="text-2xl font-bold text-slate-900">{web?.uptime || "—"}</div>
              </div>
            </div>

            {/* Bot Stats */}
            {bot?.available ? (
              <div className="space-y-6">
                {/* Пользователи бота */}
                <div className="card">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">🤖 Бот — Пользователи</h2>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <StatCard label="Всего" value={bot.users?.total || 0} />
                    <StatCard label="Активных (7д)" value={bot.users?.active_7d || 0} color="green" />
                    <StatCard label="Premium" value={bot.users?.premium || 0} color="amber" />
                  </div>
                </div>

                {/* Поиски бота */}
                <div className="card">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">🔍 Бот — Поиски</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <StatCard label="Всего поисков" value={bot.searches?.total || 0} />
                    <StatCard label="Сегодня" value={bot.searches?.today || 0} color="blue" />
                  </div>
                </div>

                {/* Трекинг */}
                <div className="card">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">📡 Бот — Трекинг</h2>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <StatCard label="Активных подписок" value={bot.tracking?.active || 0} color="green" />
                    <StatCard label="Всего подписок" value={bot.tracking?.total || 0} />
                  </div>
                </div>

                {/* Платежи */}
                <div className="card">
                  <h2 className="text-xl font-semibold text-slate-900 mb-6">💰 Бот — Платежи</h2>
                  <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    <StatCard label="Всего оплат" value={bot.payments?.total_count || 0} />
                    <StatCard
                      label="Общий доход"
                      value={`${(bot.payments?.total_revenue || 0).toLocaleString("ru-RU")} ₽`}
                      color="green"
                    />
                    <StatCard label="За 30 дней" value={bot.payments?.recent_count || 0} color="blue" />
                    <StatCard
                      label="Доход (30д)"
                      value={`${(bot.payments?.recent_revenue || 0).toLocaleString("ru-RU")} ₽`}
                      color="amber"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="card">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">🤖 Bot Stats</h2>
                <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                  <p className="text-sm text-amber-900">
                    <strong>⚠️ Бот не подключён.</strong><br />
                    Для отображения статистики бота добавьте переменные окружения:
                  </p>
                  <ul className="mt-3 space-y-1 text-sm text-amber-800">
                    <li><code className="bg-amber-100 px-1 rounded">BOT_STATS_URL</code> — адрес бота (например: <code className="bg-amber-100 px-1 rounded">http://your-server:8921</code>)</li>
                    <li><code className="bg-amber-100 px-1 rounded">BOT_STATS_TOKEN</code> — токен доступа (совпадает с BOT_STATS_TOKEN в .env бота)</li>
                  </ul>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function StatCard({ label, value, color }: { label: string; value: number | string; color?: string }) {
  const bgColor = color === "green"
    ? "bg-green-50"
    : color === "blue"
      ? "bg-blue-50"
      : color === "amber"
        ? "bg-amber-50"
        : "bg-slate-50";

  return (
    <div className={`rounded-lg ${bgColor} p-4`}>
      <div className="text-sm text-slate-600 mb-1">{label}</div>
      <div className="text-2xl font-bold text-slate-900">{value}</div>
    </div>
  );
}
