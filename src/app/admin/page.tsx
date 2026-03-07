"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface WebStats {
  searches: number;
  priceViews: number;
  comtradeQueries: number;
  gaccQueries: number;
  farmerQueries: number;
  uptime: string;
}

interface BotStats {
  available: boolean;
  users: number;
  searches: number;
  trackingActive: number;
  recentPayments: number;
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

  // Check if user is already logged in
  useEffect(() => {
    const stored = sessionStorage.getItem("admin_password");
    if (stored) {
      setPassword(stored);
      setIsAuthenticated(true);
      fetchStats(stored);
    }
  }, []);

  // Auto-refresh stats every 30 seconds
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
    } catch (err) {
      setError("Ошибка загрузки статистики");
      console.error(err);
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

              <button
                type="submit"
                disabled={loading}
                className="btn-primary w-full"
              >
                {loading ? "Загрузка..." : "Войти"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }

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
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-sm text-slate-600 mb-1">Поиски</div>
                  <div className="text-2xl font-bold text-slate-900">{stats.web.searches}</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-sm text-slate-600 mb-1">Цены</div>
                  <div className="text-2xl font-bold text-slate-900">{stats.web.priceViews}</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-sm text-slate-600 mb-1">Comtrade</div>
                  <div className="text-2xl font-bold text-slate-900">{stats.web.comtradeQueries}</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-sm text-slate-600 mb-1">GACC</div>
                  <div className="text-2xl font-bold text-slate-900">{stats.web.gaccQueries}</div>
                </div>
                <div className="rounded-lg bg-slate-50 p-4">
                  <div className="text-sm text-slate-600 mb-1">Фермеры</div>
                  <div className="text-2xl font-bold text-slate-900">{stats.web.farmerQueries}</div>
                </div>
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
                <div className="text-2xl font-bold text-slate-900">{stats.web.uptime}</div>
              </div>
            </div>

            {/* Bot Stats */}
            {stats.bot.available ? (
              <div className="card">
                <h2 className="text-xl font-semibold text-slate-900 mb-6">🤖 Bot Stats</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm text-slate-600 mb-1">Пользователи</div>
                    <div className="text-2xl font-bold text-slate-900">{stats.bot.users}</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm text-slate-600 mb-1">Поиски</div>
                    <div className="text-2xl font-bold text-slate-900">{stats.bot.searches}</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm text-slate-600 mb-1">Активный трекинг</div>
                    <div className="text-2xl font-bold text-slate-900">{stats.bot.trackingActive}</div>
                  </div>
                  <div className="rounded-lg bg-slate-50 p-4">
                    <div className="text-sm text-slate-600 mb-1">Платежи (за день)</div>
                    <div className="text-2xl font-bold text-slate-900">{stats.bot.recentPayments}</div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="card">
                <h2 className="text-xl font-semibold text-slate-900 mb-4">🤖 Bot Stats</h2>
                <div className="rounded-lg bg-amber-50 border border-amber-200 p-4">
                  <p className="text-sm text-amber-900">
                    <strong>⚠️ База данных бота недоступна.</strong><br />
                    Статистика бота будет отображаться, когда переменная окружения ADMIN_PASSWORD будет установлена и база данных бота будет доступна.
                  </p>
                </div>

                <div className="mt-6 rounded-lg bg-slate-50 border border-slate-200 p-4">
                  <h3 className="font-semibold text-slate-900 mb-2">🔗 Ссылка на базу данных бота</h3>
                  <p className="text-sm text-slate-600 mb-3">
                    Статистика бота хранится в SQLite базе данных:
                  </p>
                  <code className="block text-xs bg-slate-100 rounded px-3 py-2 text-slate-900 overflow-x-auto mb-3">
                    /sessions/confident-busy-edison/mnt/mybot/.openclaw/workspace/zernopoisk/zernopoisk.db
                  </code>
                  <p className="text-xs text-slate-500">
                    Чтобы активировать статистику бота, убедитесь, что переменная ADMIN_PASSWORD установлена в переменных окружения вашего приложения.
                  </p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
