"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";
import UserMenu from "@/components/UserMenu";

// ==================== Types ====================

interface GACCCompany {
  corpNameMo: string;
  corpNameEn: string;
  corpAddrNameMo: string;
  chinaRegNo: string;
  overseasOfficialRegNo: string;
  prodNameCn: string;
  prodNameEn: string;
  validFrom: string;
  validTo: string;
  corpTypeNameEn: string;
  corpContactTel: string;
  corpContactEmail: string;
}

// ==================== Helpers ====================

function isValidAccreditation(validTo: string): boolean {
  if (!validTo) return false;
  try {
    // Format: "2024-06-29 00:00:00" or "2024-06-29"
    const d = new Date(validTo.replace(" ", "T"));
    return !isNaN(d.getTime()) && d > new Date();
  } catch {
    return false;
  }
}

function formatDate(dateStr: string): string {
  if (!dateStr) return "";
  try {
    // Format: "2024-06-29 00:00:00" → "29.06.2024"
    const datePart = dateStr.split(" ")[0]; // strip time
    const [year, month, day] = datePart.split("-");
    if (year && month && day) return `${day}.${month}.${year}`;
    return dateStr;
  } catch {
    return dateStr;
  }
}

// ==================== Main Component ====================

export default function GACCPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [companies, setCompanies] = useState<GACCCompany[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searched, setSearched] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalResults, setTotalResults] = useState(0);

  const itemsPerPage = 5;

  // Поиск по названию компании
  const doSearch = useCallback(async (query: string, page: number = 0) => {
    if (!query.trim()) {
      setError("Введите название компании");
      return;
    }

    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const resp = await fetch(`/api/gacc?query=${encodeURIComponent(query)}`);

      if (!resp.ok) {
        throw new Error(`API returned ${resp.status}`);
      }

      const data = await resp.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to fetch data");
      }

      setCompanies((data.data as GACCCompany[]) || []);
      setTotalResults(data.total || 0);
      setCurrentPage(0);
    } catch (e: any) {
      setError(e.message || "Ошибка при поиске. Попробуйте позже.");
      setCompanies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Загрузить все аккредитованные компании России
  const loadAllRussian = useCallback(async () => {
    setLoading(true);
    setError(null);
    setSearched(true);

    try {
      const resp = await fetch("/api/gacc?all=true", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      if (!resp.ok) {
        throw new Error(`API returned ${resp.status}`);
      }

      const data = await resp.json();

      if (!data.success) {
        throw new Error(data.error || "Failed to fetch data");
      }

      setCompanies((data.data as GACCCompany[]) || []);
      setTotalResults(data.total || 0);
      setCurrentPage(0);
    } catch (e: any) {
      setError(e.message || "Ошибка при загрузке. Попробуйте позже.");
      setCompanies([]);
    } finally {
      setLoading(false);
    }
  }, []);

  // Пагинация
  const totalPages = Math.ceil(totalResults / itemsPerPage);
  const paginatedCompanies = companies.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-sm" style={{ backgroundColor: '#1a2e1a' }}>
        <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="text-2xl">🌾</span>
            <span className="text-xl font-bold text-white">ЗерноПоиск</span>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/search" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Декларации</Link>
            <Link href="/prices" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Цены</Link>
            <Link href="/comtrade" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Comtrade</Link>
            <Link href="/gacc" className="text-sm font-medium text-white/70 hover:text-white transition-colors">GACC</Link>
            <Link href="/farmers" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Фермеры</Link>
            <Link href="/blog" className="text-sm font-medium text-white/70 hover:text-white transition-colors">Блог</Link>
            <ThemeToggle />
            <UserMenu />
          </nav>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-8">
        {/* Hero */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Проверка аккредитации в Китае
          </h1>
          <p className="text-slate-600">
            Поиск аккредитованных российских компаний в системе GACC Китая
          </p>
        </div>

        {/* Search Section */}
        <div className="card mb-8">
          <h2 className="text-lg font-semibold text-slate-900 mb-4">
            Поиск компании
          </h2>

          <div className="flex gap-3 mb-4">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter" && !loading) {
                  doSearch(searchQuery);
                }
              }}
              placeholder="Введите название компании..."
              className="flex-1 rounded-lg border border-slate-200 px-4 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none"
            />
            <button
              onClick={() => doSearch(searchQuery)}
              disabled={loading || !searchQuery.trim()}
              className="btn-primary"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Поиск...
                </span>
              ) : (
                "🔍 Поиск"
              )}
            </button>
          </div>

          <button
            onClick={loadAllRussian}
            disabled={loading}
            className="btn-secondary w-full"
          >
            {loading ? (
              <span className="flex items-center gap-2">
                <svg
                  className="w-4 h-4 animate-spin"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Загрузка...
              </span>
            ) : (
              "Показать все РФ (зерно)"
            )}
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="mb-6 rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700 flex items-center justify-between">
            <span>{error}</span>
            <button
              onClick={() => {
                setError(null);
                setSearched(false);
                setCompanies([]);
              }}
              className="text-red-600 hover:text-red-800 font-medium"
            >
              Очистить
            </button>
          </div>
        )}

        {/* Empty State */}
        {!searched && !loading && (
          <div className="text-center py-20 text-slate-400">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-lg">
              Введите название компании или загрузите все аккредитованные
            </p>
          </div>
        )}

        {/* No Results */}
        {searched && !loading && companies.length === 0 && !error && (
          <div className="text-center py-20 text-slate-400">
            <div className="text-6xl mb-4">📋</div>
            <p className="text-lg">
              Компаний не найдено. Попробуйте другое название.
            </p>
          </div>
        )}

        {/* Results */}
        {paginatedCompanies.length > 0 && (
          <>
            {/* Results Info */}
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm text-slate-600">
                Найдено:{" "}
                <span className="font-semibold text-slate-900">
                  {totalResults}
                </span>
                {totalResults === 1 ? " компания" : " компаний"}
              </div>
              <div className="text-xs text-slate-400">
                Страница {currentPage + 1} из {totalPages}
              </div>
            </div>

            {/* Companies Grid */}
            <div className="space-y-4 mb-8">
              {paginatedCompanies.map((company, idx) => (
                <CompanyCard key={idx} company={company} />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={() =>
                    setCurrentPage(Math.max(0, currentPage - 1))
                  }
                  disabled={currentPage === 0}
                  className="btn-secondary text-sm disabled:opacity-30"
                >
                  ← Назад
                </button>
                <span className="text-sm text-slate-500">
                  Страница {currentPage + 1} из {totalPages}
                </span>
                <button
                  onClick={() =>
                    setCurrentPage(Math.min(totalPages - 1, currentPage + 1))
                  }
                  disabled={currentPage >= totalPages - 1}
                  className="btn-secondary text-sm disabled:opacity-30"
                >
                  Далее →
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* SEO Text */}
      <section className="py-16 mt-8" style={{ backgroundColor: '#f0f2ed' }}>
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="text-2xl font-bold mb-6" style={{ color: '#1c1c1c' }}>Реестр GACC: российские экспортёры зерна, допущенные в Китай</h2>
          <div className="space-y-4 text-base leading-relaxed" style={{ color: '#444' }}>
            <p>GACC (General Administration of Customs of the People's Republic of China) — это таможенная служба Китая, которая ведёт реестр иностранных компаний, допущенных к экспорту продуктов питания, включая зерно. Российские производители и трейдеры должны быть зарегистрированы в этом реестре, чтобы экспортировать зерно в КНР.</p>
            <p>Регистрация в GACC требуется для соответствия требованиям китайского законодательства по безопасности пищевых продуктов. Компания должна пройти инспекцию, получить номер аккредитации, и периодически подтверждать статус. Реестр публикуется GACC, и мы даём вам возможность быстро проверить статус компании.</p>
            <p>Если вы планируете экспорт в Китай, убедитесь, что ваша компания зарегистрирована. Найдите проверенных поставщиков через поиск по названию или загрузите список всех аккредитованных российских компаний. Сравните их декларации на странице <a href="/search" style={{ color: '#2e7d32', textDecoration: 'underline' }}>Декларации</a>.</p>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4" style={{ color: '#1c1c1c' }}>Часто задаваемые вопросы</h3>
          <div className="space-y-4">
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Как зарегистрироваться в реестре GACC?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>Регистрация проходит через Россельхознадзор: компания подаёт заявку, проходит инспекцию предприятия на соответствие требованиям КНР, после чего Россельхознадзор направляет документы в GACC. Процесс занимает от 3 до 12 месяцев. Предприятие получает уникальный регистрационный номер.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Какие виды зерна разрешены к экспорту в Китай?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>По межправительственному протоколу между РФ и КНР разрешены: пшеница, ячмень, кукуруза, рис, соя, рапс, подсолнечник, овёс, гречиха и просо. Для каждой культуры действуют отдельные фитосанитарные требования, включая допустимые уровни загрязнения и требования к фумигации.</p>
            </details>
            <details className="group">
              <summary className="cursor-pointer text-base font-medium" style={{ color: '#1c1c1c' }}>Что нужно для фитосанитарного сертификата?</summary>
              <p className="mt-2 text-sm leading-relaxed" style={{ color: '#555' }}>Фитосанитарный сертификат выдаётся Россельхознадзором перед отгрузкой. Необходимо пройти карантинный контроль партии, подтвердить отсутствие карантинных объектов и предоставить результаты лабораторных исследований. Для экспорта в Китай также требуется фумигация по стандартам IPPC.</p>
            </details>
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="/blog/export-china-gacc-2026" className="block rounded-lg p-4" style={{ backgroundColor: '#e8ede3' }}>
              <span className="text-sm font-medium" style={{ color: '#2e7d32' }}>Статья в блоге</span>
              <p className="mt-1 text-sm font-semibold" style={{ color: '#1c1c1c' }}>Экспорт зерна в Китай: требования GACC 2026</p>
            </a>
            <a href="/comtrade" className="block rounded-lg p-4" style={{ backgroundColor: '#e8ede3' }}>
              <span className="text-sm font-medium" style={{ color: '#2e7d32' }}>Инструмент</span>
              <p className="mt-1 text-sm font-semibold" style={{ color: '#1c1c1c' }}>Объёмы экспорта: статистика Comtrade</p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#1a2e1a' }} className="py-12 mt-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap gap-8 justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-2xl">🌾</span>
                <span className="text-lg font-bold text-white">ЗерноПоиск</span>
              </div>
              <p className="text-white/60 text-sm">Поиск зерновых деклараций<br/>и аналитика рынка</p>
            </div>
            <div className="flex gap-8">
              <div className="flex flex-col gap-2">
                <Link href="/search" className="text-sm text-white/70 hover:text-white">Декларации</Link>
                <Link href="/prices" className="text-sm text-white/70 hover:text-white">Цены</Link>
                <Link href="/comtrade" className="text-sm text-white/70 hover:text-white">Comtrade</Link>
              </div>
              <div className="flex flex-col gap-2">
                <Link href="/gacc" className="text-sm text-white/70 hover:text-white">GACC</Link>
                <Link href="/farmers" className="text-sm text-white/70 hover:text-white">Фермеры</Link>
                <Link href="/blog" className="text-sm text-white/70 hover:text-white">Блог</Link>
              </div>
            </div>
            <div>
              <p className="text-sm text-white/70">Telegram: <a href="https://t.me/agro_analizbot" className="text-white hover:underline">@agro_analizbot</a></p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-white/50">
            © 2026 ЗерноПоиск
          </div>
        </div>
      </footer>
    </div>
  );
}

// ==================== Company Card Component ====================

function CompanyCard({ company }: { company: GACCCompany }) {
  const [expanded, setExpanded] = useState(false);
  const isValid = isValidAccreditation(company.validTo);

  return (
    <div
      className="card cursor-pointer transition-all"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          {/* Header with validity */}
          <div className="flex items-center gap-3 mb-2">
            {isValid ? (
              <span className="text-green-600">✓</span>
            ) : (
              <span className="text-red-600">✗</span>
            )}
            <span className={`badge-green text-xs`}>
              {isValid ? "Действительна" : "Истекла"}
            </span>
          </div>

          {/* Company Name (Russian) */}
          <h3 className="text-base font-semibold text-slate-900 truncate">
            {company.corpNameMo || "—"}
          </h3>

          {/* Company Name (English) */}
          <p className="text-sm text-slate-600 truncate">
            {company.corpNameEn || "—"}
          </p>

          {/* Address */}
          <p className="text-xs text-slate-500 mt-2 truncate">
            📍 {company.corpAddrNameMo || "—"}
          </p>

          {/* Products */}
          <div className="mt-2 flex flex-wrap gap-2">
            <span className="badge-blue text-xs">
              {company.prodNameCn || "—"}
            </span>
            {company.prodNameEn && (
              <span className="text-xs text-slate-500">
                ({company.prodNameEn})
              </span>
            )}
          </div>
        </div>

        <svg
          className={`w-5 h-5 text-slate-300 flex-shrink-0 transition-transform ${
            expanded ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </div>

      {/* Expanded Content */}
      {expanded && (
        <div className="mt-4 pt-4 border-t border-slate-100 space-y-3 text-sm">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-400 mb-1">Номер в Китае</p>
              <p className="font-mono text-xs text-slate-900">
                {company.chinaRegNo || "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">
                Номер за границей
              </p>
              <p className="font-mono text-xs text-slate-900">
                {company.overseasOfficialRegNo || "—"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-slate-400 mb-1">Действительна с</p>
              <p className="text-sm text-slate-900">
                {formatDate(company.validFrom) || "—"}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-400 mb-1">Действительна до</p>
              <p className={`text-sm font-semibold ${isValid ? "text-green-700" : "text-red-700"}`}>
                {formatDate(company.validTo) || "—"}
              </p>
            </div>
          </div>

          {company.corpTypeNameEn && (
            <div>
              <p className="text-xs text-slate-400 mb-1">Тип компании</p>
              <p className="text-sm text-slate-900">
                {company.corpTypeNameEn}
              </p>
            </div>
          )}

          {/* Contacts */}
          <div className="bg-slate-50 rounded-lg p-3 space-y-2">
            <p className="text-xs font-semibold text-slate-700">Контакты</p>
            {company.corpContactTel && (
              <div className="flex items-center gap-2">
                <span className="text-slate-400">📞</span>
                <a
                  href={`tel:${company.corpContactTel}`}
                  className="text-xs text-primary-600 hover:underline truncate"
                  onClick={(e) => e.stopPropagation()}
                >
                  {company.corpContactTel}
                </a>
              </div>
            )}
            {company.corpContactEmail && (
              <div className="flex items-center gap-2">
                <span className="text-slate-400">✉️</span>
                <a
                  href={`mailto:${company.corpContactEmail}`}
                  className="text-xs text-primary-600 hover:underline truncate"
                  onClick={(e) => e.stopPropagation()}
                >
                  {company.corpContactEmail}
                </a>
              </div>
            )}
            {!company.corpContactTel && !company.corpContactEmail && (
              <p className="text-xs text-slate-400">Контакты не указаны</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
