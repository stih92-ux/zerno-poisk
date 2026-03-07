/**
 * ФГИС Росаккредитации — поиск деклараций о соответствии.
 *
 * Порт services/fsa_declarations.py из Telegram-бота на TypeScript.
 *
 * Источник: https://pub.fsa.gov.ru/rds/declaration
 * API: POST https://pub.fsa.gov.ru/api/v1/rds/common/declarations/get
 * Анонимная авторизация: POST /login с anonymous:hrgesf7HDR67Bd
 * Токен Bearer (EdDSA JWT) — действует ~8 часов.
 */

import { createHash } from "crypto";
import { ProxyAgent } from "undici";

const BASE_URL = "https://pub.fsa.gov.ru";
const DECLARATIONS_URL = `${BASE_URL}/api/v1/rds/common/declarations/get`;
const DECLARATION_DETAIL_URL = `${BASE_URL}/api/v1/rds/common/declarations`;
const DECLARATION_VIEW_URL = `${BASE_URL}/rds/declaration/view`;
const LOGIN_URL = `${BASE_URL}/login`;

// ==================== Токен ====================
let _token: string | null = null;
let _tokenExpires = 0;
let _tokenPromise: Promise<string> | null = null;

// ==================== Кэш ====================
const _searchCache = new Map<string, { ts: number; data: FsaSearchResult }>();
const CACHE_TTL = 1800; // 30 мин
const CACHE_MAX_SIZE = 200;

// ==================== Rate limiter ====================
const _rateTimestamps: number[] = [];
const RATE_MAX_REQUESTS = 40;
const RATE_WINDOW = 60; // секунд

// ==================== Backoff при блокировке ====================
let _blockedUntil = 0;
let _blockCount = 0;
const BACKOFF_BASE = 120; // 2 мин
const BACKOFF_MAX = 3600; // 1 час

// ==================== Прокси ====================
const FSA_PROXY_URL = process.env.SITE_FSA_PROXY_URL || process.env.FSA_PROXY_URL || "";
const FSA_PROXY_URLS = (process.env.SITE_FSA_PROXY_URLS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);
let _proxyIndex = 0;

// ==================== Таймауты ====================
const REQUEST_TIMEOUT = 60_000; // 60 сек

// ==================== Маппинг кодов → поисковые термины ====================
export const PRODUCT_SEARCH_TERMS: Record<string, string> = {
  wheat: "пшеница",
  corn: "кукуруза",
  barley: "ячмень",
  rye: "рожь",
  oats: "овёс",
  peas: "горох",
  soy: "соя",
  sunflower: "подсолнечник",
  rice: "рис",
  buckwheat: "гречиха",
  flax: "лён",
  green_lentil: "чечевица зеленая",
  coriander: "кориандр",
};

export const REGION_SEARCH_TERMS: Record<string, string> = {
  ALT: "АЛТАЙСКИЙ КРАЙ",
  AMU: "АМУРСКАЯ ОБЛАСТЬ",
  ARH: "АРХАНГЕЛЬСКАЯ ОБЛАСТЬ",
  AST: "АСТРАХАНСКАЯ ОБЛАСТЬ",
  BEL: "БЕЛГОРОДСКАЯ ОБЛАСТЬ",
  BRY: "БРЯНСКАЯ ОБЛАСТЬ",
  VLA: "ВЛАДИМИРСКАЯ ОБЛАСТЬ",
  VLG: "ВОЛГОГРАДСКАЯ ОБЛАСТЬ",
  VOL: "ВОЛОГОДСКАЯ ОБЛАСТЬ",
  VOR: "ВОРОНЕЖСКАЯ ОБЛАСТЬ",
  YEV: "ЕВРЕЙСКАЯ АВТОНОМНАЯ ОБЛАСТЬ",
  ZAB: "ЗАБАЙКАЛЬСКИЙ КРАЙ",
  ZAP: "ЗАПОРОЖСКАЯ ОБЛАСТЬ",
  IVA: "ИВАНОВСКАЯ ОБЛАСТЬ",
  IRK: "ИРКУТСКАЯ ОБЛАСТЬ",
  KGD: "КАЛИНИНГРАДСКАЯ ОБЛАСТЬ",
  KLU: "КАЛУЖСКАЯ ОБЛАСТЬ",
  KAM: "КАМЧАТСКИЙ КРАЙ",
  KEM: "КЕМЕРОВСКАЯ ОБЛАСТЬ",
  KIR: "КИРОВСКАЯ ОБЛАСТЬ",
  KOS: "КОСТРОМСКАЯ ОБЛАСТЬ",
  KDA: "КРАСНОДАРСКИЙ КРАЙ",
  KYA: "КРАСНОЯРСКИЙ КРАЙ",
  KGN: "КУРГАНСКАЯ ОБЛАСТЬ",
  KRS: "КУРСКАЯ ОБЛАСТЬ",
  LEN: "ЛЕНИНГРАДСКАЯ ОБЛАСТЬ",
  LIP: "ЛИПЕЦКАЯ ОБЛАСТЬ",
  MAG: "МАГАДАНСКАЯ ОБЛАСТЬ",
  MOW: "МОСКВА",
  MOS: "МОСКОВСКАЯ ОБЛАСТЬ",
  MUR: "МУРМАНСКАЯ ОБЛАСТЬ",
  NIZ: "НИЖЕГОРОДСКАЯ ОБЛАСТЬ",
  NGR: "НОВГОРОДСКАЯ ОБЛАСТЬ",
  NVS: "НОВОСИБИРСКАЯ ОБЛАСТЬ",
  OMS: "ОМСКАЯ ОБЛАСТЬ",
  ORE: "ОРЕНБУРГСКАЯ ОБЛАСТЬ",
  ORL: "ОРЛОВСКАЯ ОБЛАСТЬ",
  PNZ: "ПЕНЗЕНСКАЯ ОБЛАСТЬ",
  PER: "ПЕРМСКИЙ КРАЙ",
  PRI: "ПРИМОРСКИЙ КРАЙ",
  PSK: "ПСКОВСКАЯ ОБЛАСТЬ",
  ROS: "РОСТОВСКАЯ ОБЛАСТЬ",
  RYA: "РЯЗАНСКАЯ ОБЛАСТЬ",
  SAM: "САМАРСКАЯ ОБЛАСТЬ",
  SPE: "САНКТ-ПЕТЕРБУРГ",
  SAR: "САРАТОВСКАЯ ОБЛАСТЬ",
  SAK: "САХАЛИНСКАЯ ОБЛАСТЬ",
  SVE: "СВЕРДЛОВСКАЯ ОБЛАСТЬ",
  SMO: "СМОЛЕНСКАЯ ОБЛАСТЬ",
  STA: "СТАВРОПОЛЬСКИЙ КРАЙ",
  TAM: "ТАМБОВСКАЯ ОБЛАСТЬ",
  TVE: "ТВЕРСКАЯ ОБЛАСТЬ",
  TOM: "ТОМСКАЯ ОБЛАСТЬ",
  TUL: "ТУЛЬСКАЯ ОБЛАСТЬ",
  TYU: "ТЮМЕНСКАЯ ОБЛАСТЬ",
  ULY: "УЛЬЯНОВСКАЯ ОБЛАСТЬ",
  KHA: "ХАБАРОВСКИЙ КРАЙ",
  CHE: "ЧЕЛЯБИНСКАЯ ОБЛАСТЬ",
  CE: "ЧЕЧЕНСКАЯ РЕСПУБЛИКА",
  YAR: "ЯРОСЛАВСКАЯ ОБЛАСТЬ",
  AD: "РЕСПУБЛИКА АДЫГЕЯ",
  BA: "РЕСПУБЛИКА БАШКОРТОСТАН",
  DA: "РЕСПУБЛИКА ДАГЕСТАН",
  CR_R: "РЕСПУБЛИКА КРЫМ",
  ME: "РЕСПУБЛИКА МАРИЙ ЭЛ",
  MO: "РЕСПУБЛИКА МОРДОВИЯ",
  TA: "РЕСПУБЛИКА ТАТАРСТАН",
  CU: "ЧУВАШСКАЯ РЕСПУБЛИКА",
};

// ==================== Маппинг сегментов ====================
const SEGMENT_NAMES_MAP: Record<string, string> = {
  processor: "Переработчики",
  producer: "Производители",
  trade: "Торговые организации",
  storage: "Хранение и складирование",
  other: "Прочее",
};

// ==================== Типы ====================
export interface Declaration {
  id: number;
  number: string;
  status: string;
  reg_date: string;
  end_date: string;
  product_name: string;
  volume_tons: number;
  applicant_name: string;
  applicant_inn: string;
  applicant_ogrn: string;
  applicant_address: string;
  applicant_phone: string;
  applicant_email: string;
  applicant_director: string;
  applicant_segment: string;
  manufacturer_name: string;
  tech_regulation: string;
  url: string;
  _enriched?: boolean;
}

export interface FsaSearchResult {
  items: Declaration[];
  total: number;
  page: number;
  error: string | null;
}

export interface SearchParams {
  products: string[];
  regions?: string[];
  segments?: string[];
  minVolume?: number;
  dateFrom?: string;
  dateTo?: string;
  page?: number;
  size?: number;
  enrich?: boolean;
}

// ==================== Браузерные заголовки ====================
const BROWSER_HEADERS: Record<string, string> = {
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
  "Sec-Ch-Ua": '"Chromium";v="131", "Not_A Brand";v="24"',
  "Sec-Ch-Ua-Mobile": "?0",
  "Sec-Ch-Ua-Platform": '"macOS"',
};

// ==================== Прокси ====================
function getProxy(): string | null {
  const proxies = FSA_PROXY_URLS.length > 0 ? FSA_PROXY_URLS : FSA_PROXY_URL ? [FSA_PROXY_URL] : [];
  if (proxies.length === 0) return null;
  const proxy = proxies[_proxyIndex % proxies.length];
  _proxyIndex++;
  return proxy;
}

// ==================== Rate Limiter ====================
async function rateLimitWait(): Promise<void> {
  const now = Date.now() / 1000;
  while (_rateTimestamps.length > 0 && _rateTimestamps[0] < now - RATE_WINDOW) {
    _rateTimestamps.shift();
  }
  if (_rateTimestamps.length >= RATE_MAX_REQUESTS) {
    const waitUntil = _rateTimestamps[0] + RATE_WINDOW;
    const waitTime = (waitUntil - now + Math.random() * 1.5 + 0.5) * 1000;
    if (waitTime > 0) {
      await new Promise((resolve) => setTimeout(resolve, waitTime));
    }
  }
  _rateTimestamps.push(Date.now() / 1000);
}

// ==================== Backoff ====================
function checkBlocked(): string | null {
  if (Date.now() / 1000 < _blockedUntil) {
    return "api_blocked_cooldown";
  }
  return null;
}

function registerBlock(): void {
  _blockCount++;
  const backoff = Math.min(BACKOFF_BASE * Math.pow(2, _blockCount - 1), BACKOFF_MAX);
  const jittered = backoff * (0.8 + Math.random() * 0.4);
  _blockedUntil = Date.now() / 1000 + jittered;
  console.warn(`FSA IP blocked (count=${_blockCount}), backoff ${Math.floor(jittered)}s`);
}

function registerSuccess(): void {
  if (_blockCount > 0) {
    _blockCount = 0;
    _blockedUntil = 0;
    console.log("FSA block counter reset");
  }
}

// ==================== Кэш ====================
function cacheKey(product: string, regions: string[] | null, page: number, size: number): string {
  const parts = `${product}|${regions ? JSON.stringify(regions.sort()) : ""}|${page}|${size}`;
  return createHash("md5").update(parts).digest("hex");
}

function cacheGet(key: string): FsaSearchResult | null {
  const entry = _searchCache.get(key);
  if (!entry) return null;
  if (Date.now() / 1000 - entry.ts < CACHE_TTL) return entry.data;
  _searchCache.delete(key);
  return null;
}

function cacheSet(key: string, data: FsaSearchResult): void {
  if (_searchCache.size >= CACHE_MAX_SIZE) {
    const now = Date.now() / 1000;
    for (const [k, v] of _searchCache) {
      if (now - v.ts > CACHE_TTL) _searchCache.delete(k);
    }
    if (_searchCache.size >= CACHE_MAX_SIZE) {
      const oldest = [..._searchCache.entries()].sort((a, b) => a[1].ts - b[1].ts);
      for (let i = 0; i < Math.floor(CACHE_MAX_SIZE / 4); i++) {
        _searchCache.delete(oldest[i][0]);
      }
    }
  }
  _searchCache.set(key, { ts: Date.now() / 1000, data });
}

// ==================== Fetch с прокси ====================
async function fsaFetch(
  url: string,
  options: RequestInit & { timeout?: number } = {}
): Promise<Response> {
  const proxy = getProxy();
  const controller = new AbortController();
  const timeout = options.timeout || REQUEST_TIMEOUT;
  const timer = setTimeout(() => controller.abort(), timeout);

  const headers: Record<string, string> = {
    ...BROWSER_HEADERS,
    ...(options.headers as Record<string, string> || {}),
  };

  try {
    const fetchOptions: any = {
      ...options,
      headers,
      signal: controller.signal,
    };

    // Используем undici ProxyAgent для маршрутизации через прокси
    if (proxy) {
      fetchOptions.dispatcher = new ProxyAgent(proxy);
      console.log(`FSA fetch via proxy: ${proxy.replace(/\/\/.*@/, "//***@")}`);
    }

    const resp = await fetch(url, fetchOptions);
    return resp;
  } finally {
    clearTimeout(timer);
  }
}

// ==================== Получение токена ====================
async function ensureToken(): Promise<string> {
  // Быстрая проверка
  if (_token && Date.now() / 1000 < _tokenExpires - 60) {
    return _token;
  }

  // Предотвращаем параллельные логины
  if (_tokenPromise) return _tokenPromise;

  _tokenPromise = (async () => {
    try {
      const blockErr = checkBlocked();
      if (blockErr) throw new Error(`FSA API blocked (cooldown ${Math.floor(_blockedUntil - Date.now() / 1000)}s)`);

      await rateLimitWait();

      // 1) Заходим на страницу для session cookies
      const r1 = await fsaFetch(`${BASE_URL}/rds/declaration`, {
        headers: {
          Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
          "Sec-Fetch-Dest": "document",
          "Sec-Fetch-Mode": "navigate",
          "Sec-Fetch-Site": "none",
          "Sec-Fetch-User": "?1",
          "Upgrade-Insecure-Requests": "1",
        },
      });
      if (r1.status === 403) {
        registerBlock();
        throw new Error("FSA 403 on session page");
      }

      await rateLimitWait();

      // 2) Логинимся анонимно
      const resp = await fsaFetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json, text/plain, */*",
          Origin: BASE_URL,
          Referer: `${BASE_URL}/rds/declaration`,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
        },
        body: JSON.stringify({ username: "anonymous", password: "hrgesf7HDR67Bd" }),
      });

      if (resp.status === 403) {
        registerBlock();
        throw new Error("FSA 403 on login");
      }

      if (!resp.ok) throw new Error(`FSA login failed: ${resp.status}`);

      const auth = resp.headers.get("authorization") || "";
      const tokenValue = auth.replace("Bearer", "").trim();
      if (!tokenValue) throw new Error("FSA login: no token in Authorization header");

      _token = tokenValue;

      // Парсим exp из JWT
      try {
        const payloadB64 = tokenValue.split(".")[1];
        const padded = payloadB64 + "=".repeat((4 - (payloadB64.length % 4)) % 4);
        const payload = JSON.parse(Buffer.from(padded, "base64url").toString());
        _tokenExpires = payload.exp || Date.now() / 1000 + 3600;
      } catch {
        _tokenExpires = Date.now() / 1000 + 3600;
      }

      registerSuccess();
      console.log(`FSA: token obtained, expires in ${Math.floor((_tokenExpires - Date.now() / 1000) / 60)} min`);

      return _token;
    } finally {
      _tokenPromise = null;
    }
  })();

  return _tokenPromise;
}

// ==================== Запрос к FSA API ====================
async function queryFsa(
  productSearch: string,
  regions: string[] | null,
  dateFrom: string | null,
  dateTo: string | null,
  page: number,
  size: number
): Promise<{ items: any[]; total: number }> {
  const blockErr = checkBlocked();
  if (blockErr) throw new Error(`FSA API cooldown (${Math.floor(_blockedUntil - Date.now() / 1000)}s)`);

  // Проверяем кэш
  let ck: string | null = null;
  if (!dateFrom && !dateTo) {
    ck = cacheKey(productSearch, regions, page, size);
    const cached = cacheGet(ck);
    if (cached) return { items: (cached as any).items || [], total: (cached as any).total || 0 };
  }

  const columnsSearch: any[] = [
    { name: "productFullName", search: productSearch, type: 0 },
  ];

  if (regions && regions.length > 0) {
    const regionTerms = regions
      .map((r) => REGION_SEARCH_TERMS[r])
      .filter(Boolean);
    if (regionTerms.length > 0) {
      columnsSearch.push({
        name: "applicantAddress",
        search: regionTerms[0],
        type: 0,
      });
    }
  }

  const regDate: any = { minDate: dateFrom || null, maxDate: dateTo || null };

  const payload = {
    size,
    page,
    count: 0,
    filter: {
      status: [6],
      idDeclType: [],
      idCertObjectType: [],
      idProductType: [],
      idGroupRU: [],
      idGroupEEU: [],
      idTechReg: [],
      idApplicantType: [],
      regDate,
      endDate: { minDate: null, maxDate: null },
      columnsSearch,
      number: null,
      idProductOrigin: [],
      idProductEEU: [],
      idProductRU: [],
      idDeclScheme: [],
      awaitOperatorCheck: null,
      editApp: null,
      violationSendDate: null,
      isProtocolInvalid: null,
      checkerAIResult: null,
      checkerAIProtocolsResults: null,
      checkerAIProtocolsMistakes: null,
      hiddenFromOpen: null,
    },
    columnsSort: [{ column: "declDate", sort: "DESC" }],
    numberOfAllRecords: false,
  };

  await rateLimitWait();
  const token = await ensureToken();

  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    Accept: "application/json, text/plain, */*",
    Authorization: `Bearer ${token}`,
    lkId: "",
    orgId: "",
    Referer: `${BASE_URL}/rds/declaration`,
    Origin: BASE_URL,
    "Sec-Fetch-Dest": "empty",
    "Sec-Fetch-Mode": "cors",
    "Sec-Fetch-Site": "same-origin",
  };

  // Retry для транзиентных ошибок
  const MAX_RETRIES = 2;
  let lastErr: Error | null = null;

  for (let attempt = 0; attempt <= MAX_RETRIES; attempt++) {
    try {
      const resp = await fsaFetch(DECLARATIONS_URL, {
        method: "POST",
        headers,
        body: JSON.stringify(payload),
      });

      if (resp.status === 403) {
        registerBlock();
        throw new Error("FSA 403 on search");
      }

      if (!resp.ok) throw new Error(`FSA search failed: ${resp.status}`);

      const data = await resp.json();
      registerSuccess();

      const items = data.items || [];
      const total = data.total || items.length;
      const result = { items, total };

      if (ck) cacheSet(ck, { ...result, page, error: null } as any);

      console.log(`FSA query '${productSearch}': ${items.length} items (total: ${total}, page: ${page})`);
      return result;
    } catch (e: any) {
      if (e.message?.includes("403")) throw e;
      lastErr = e;
      if (attempt < MAX_RETRIES) {
        const wait = 3000 * (attempt + 1);
        console.warn(`FSA query '${productSearch}' error (attempt ${attempt + 1}): ${e.message} — retry in ${wait}ms`);
        _token = null;
        _tokenExpires = 0;
        await new Promise((r) => setTimeout(r, wait));
      }
    }
  }

  throw lastErr || new Error("FSA query failed");
}

// ==================== Парсинг даты ====================
function parseFsaDate(dateStr: any): string {
  if (!dateStr) return "";
  try {
    if (typeof dateStr === "number") {
      return new Date(dateStr).toLocaleDateString("ru-RU");
    }
    if (String(dateStr).includes("T")) {
      return new Date(dateStr).toLocaleDateString("ru-RU");
    }
    return String(dateStr);
  } catch {
    return String(dateStr);
  }
}

// ==================== Извлечение объёма ====================
function extractVolume(productName: string): number {
  const text = productName.toLowerCase();
  const patterns = [
    /(\d[\d\s,.]*)\s*(?:тонн|тн|т\.?\b)/,
    /объ[её]м[:\s]*(\d[\d\s,.]*)/,
    /партия[:\s]*(\d[\d\s,.]*)/,
  ];
  for (const pattern of patterns) {
    const match = text.match(pattern);
    if (match) {
      const numStr = match[1].replace(/\s/g, "").replace(",", ".");
      const val = parseFloat(numStr);
      if (!isNaN(val)) return val;
    }
  }
  return 0;
}

// ==================== Определение сегмента ====================
function detectSegment(applicantName: string, opf: string, manufacturer: string): string {
  const text = `${applicantName} ${opf} ${manufacturer}`.toUpperCase();

  const processorKw = ["ЭЛЕВАТОР", "МЕЛЬНИЦ", "МУКОМОЛЬН", "КОМБИКОРМ", "ПЕРЕРАБОТ", "КРУПЯН", "МАСЛОЖИР", "МАСЛОЗАВОД", "КРАХМАЛ", "СПИРТ", "ЗАВОД", "КОМБИНАТ"];
  if (processorKw.some((kw) => text.includes(kw))) return "Переработчики";

  const storageKw = ["ХРАНЕН", "СКЛАД", "ЛОГИСТИК", "ТЕРМИНАЛ", "БАЗИС", "ЗЕРНОХРАНИЛИЩ"];
  if (storageKw.some((kw) => text.includes(kw))) return "Хранение и складирование";

  const tradeKw = ["ТРЕЙД", "ТОРГОВ", "ЭКСПОРТ", "ИМПОРТ", "ОПТ ", "TRADE", "КОММЕРЦ", "СБЫТ", "СНАБЖЕН"];
  if (tradeKw.some((kw) => text.includes(kw))) return "Торговые организации";

  const producerKw = ["КФХ", "К.Ф.Х", "КРЕСТЬЯНСК", "ФЕРМЕРСК", "АГРО", "СЕЛЬХОЗ", "С/Х", "АГРАРН", "СОВХОЗ", "КОЛХОЗ", "НИВА", "УРОЖАЙ", "ЗЕМЛЕДЕЛ", "ПОСЕВ", "РАСТЕНИЕВОД"];
  if (producerKw.some((kw) => text.includes(kw))) return "Производители";

  if (text.includes("ИНДИВИДУАЛЬНЫЙ ПРЕДПРИНИМАТЕЛЬ") || opf.toUpperCase().startsWith("ИП")) return "Производители";

  return "Прочее";
}

// ==================== Парсинг декларации ====================
function parseDeclaration(raw: any): Declaration | null {
  try {
    const declId = raw.id;
    const number = raw.number || "";
    const statusId = raw.idStatus;

    const statusMap: Record<number, string> = {
      1: "Архивный", 3: "Возобновлён", 5: "Выдано предписание",
      6: "Действует", 10: "Направлено уведомление", 11: "Недействителен",
      13: "Отправлен", 14: "Прекращён", 15: "Приостановлен",
      16: "Продлён", 18: "Удалён", 19: "Частично приостановлен",
      20: "Черновик", 42: "Ожидает проверки",
    };
    const status = statusMap[statusId] || `Статус ${statusId}`;

    const regDate = parseFsaDate(raw.declDate);
    const endDate = parseFsaDate(raw.declEndDate);

    const productName = raw.productFullName || raw.productSingleList || raw.group || "";
    const batchSize = raw.productBatchSize || "";
    const volumeTons = extractVolume(batchSize ? `${batchSize} ${productName}` : productName);

    const applicant = raw.applicantName || "";
    const applicantAddress = raw.applicantAddress || "";
    const applicantInn = raw.creatorInn || "";
    const applicantOgrn = raw.creatorOgrn || "";
    const applicantPhone = raw.applicantPhone || "";
    const applicantEmail = raw.applicantEmail || "";
    const applicantDirector = raw.applicantHead || "";
    const manufacturer = raw.manufacterName || raw.manufacturerName || "";
    const techReg = raw.technicalReglaments || "";
    const applicantOpf = raw.applicantOpf || "";
    const applicantSegment = detectSegment(applicant, applicantOpf, manufacturer);
    const url = declId ? `${DECLARATION_VIEW_URL}/${declId}/common` : "";

    return {
      id: declId,
      number,
      status,
      reg_date: regDate,
      end_date: endDate,
      product_name: productName,
      volume_tons: volumeTons,
      applicant_name: applicant,
      applicant_inn: applicantInn,
      applicant_ogrn: applicantOgrn,
      applicant_address: applicantAddress,
      applicant_phone: applicantPhone,
      applicant_email: applicantEmail,
      applicant_director: applicantDirector,
      applicant_segment: applicantSegment,
      manufacturer_name: manufacturer,
      tech_regulation: techReg,
      url,
    };
  } catch (e) {
    console.warn("Failed to parse declaration:", e);
    return null;
  }
}

// ==================== Проверка региона ====================
function matchesRegion(item: Declaration, regions: string[]): boolean {
  const address = (item.applicant_address || "").toUpperCase();
  if (!address) return true;
  return regions.some((code) => {
    const term = REGION_SEARCH_TERMS[code] || "";
    return term && address.includes(term);
  });
}

// ==================== ГЛАВНАЯ ФУНКЦИЯ: Поиск деклараций ====================
export async function searchDeclarations(params: SearchParams): Promise<FsaSearchResult> {
  const {
    products,
    regions,
    segments,
    minVolume,
    dateFrom,
    dateTo,
    page = 0,
    size = 20,
    enrich = true,
  } = params;

  const searchTerms = products
    .map((p) => PRODUCT_SEARCH_TERMS[p])
    .filter(Boolean);

  if (searchTerms.length === 0) {
    return { items: [], total: 0, page, error: null };
  }

  const segmentFilter = segments
    ? new Set(segments.map((s) => SEGMENT_NAMES_MAP[s]).filter(Boolean))
    : null;

  const allItems: Declaration[] = [];
  let totalCount = 0;
  let hasError = false;
  let lastError = "";

  // Если несколько регионов — запрашиваем больше
  let apiSize = size;
  if (regions && regions.length > 1) {
    apiSize = Math.min(size * 5, 50);
  }

  for (const term of searchTerms) {
    try {
      const result = await queryFsa(
        term,
        regions || null,
        dateFrom || null,
        dateTo || null,
        page,
        apiSize
      );

      for (const raw of result.items) {
        const parsed = parseDeclaration(raw);
        if (!parsed) continue;
        if (minVolume && parsed.volume_tons < minVolume) continue;
        if (regions && regions.length > 0 && !matchesRegion(parsed, regions)) continue;
        if (segmentFilter && !segmentFilter.has(parsed.applicant_segment)) continue;
        allItems.push(parsed);
      }

      totalCount += result.total;
    } catch (e: any) {
      console.error(`FSA search error for '${term}':`, e.message);
      hasError = true;
      lastError = e.message || String(e);
    }
  }

  // Сортировка: сначала новые
  allItems.sort((a, b) => (b.reg_date || "").localeCompare(a.reg_date || ""));
  const finalItems = allItems.slice(0, size);

  // Обогащаем контакты
  if (finalItems.length > 0 && enrich) {
    await enrichContacts(finalItems);

    // Повторная фильтрация по сегментам после обогащения
    if (segmentFilter) {
      return {
        items: finalItems.filter((it) => segmentFilter.has(it.applicant_segment)),
        total: totalCount,
        page,
        error: null,
      };
    }
  }

  let errorMsg: string | null = null;
  if (hasError && allItems.length === 0) {
    if (lastError.toLowerCase().includes("cooldown")) errorMsg = "api_blocked_cooldown";
    else if (lastError.includes("403")) errorMsg = "api_blocked";
    else if (lastError.toLowerCase().includes("timeout") || lastError.toLowerCase().includes("ssl")) errorMsg = "api_timeout";
    else errorMsg = "api_error";
  }

  return { items: finalItems, total: totalCount, page, error: errorMsg };
}

// ==================== Обогащение контактов ====================
export async function enrichContacts(items: Declaration[], maxConcurrent = 10): Promise<void> {
  const blockErr = checkBlocked();
  if (blockErr) return;

  const toEnrich = items.filter((it) => !it._enriched);
  if (toEnrich.length === 0) return;

  let running = 0;
  const queue = [...toEnrich];

  async function processOne(item: Declaration) {
    if (!item.id) return;
    try {
      await rateLimitWait();
      const token = await ensureToken();

      const resp = await fsaFetch(`${DECLARATION_DETAIL_URL}/${item.id}`, {
        headers: {
          Accept: "application/json, text/plain, */*",
          Authorization: `Bearer ${token}`,
          lkId: "",
          orgId: "",
          Referer: `${BASE_URL}/rds/declaration`,
          Origin: BASE_URL,
          "Sec-Fetch-Dest": "empty",
          "Sec-Fetch-Mode": "cors",
          "Sec-Fetch-Site": "same-origin",
        },
        timeout: 30_000,
      });

      if (resp.status === 403) {
        registerBlock();
        return;
      }
      if (!resp.ok) return;

      const detail = await resp.json();
      const applicant = detail.applicant;
      if (!applicant) return;

      // Контакты
      const contacts = applicant.contacts || [];
      for (const c of contacts) {
        if (c.idContactType === 1 && !item.applicant_phone) item.applicant_phone = c.value || "";
        if (c.idContactType === 4 && !item.applicant_email) item.applicant_email = c.value || "";
      }

      if (applicant.inn) item.applicant_inn = applicant.inn;
      if (applicant.ogrn) item.applicant_ogrn = applicant.ogrn;
      if (applicant.headName) item.applicant_director = applicant.headName;

      const addresses = applicant.addresses || [];
      if (addresses.length > 0 && addresses[0].fullAddress) {
        item.applicant_address = addresses[0].fullAddress;
      }

      const opf = applicant.opfShortName || "";
      if (detail.idApplicantType || opf) {
        item.applicant_segment = detectSegment(
          item.applicant_name,
          opf,
          item.manufacturer_name
        );
      }

      item._enriched = true;
    } catch (e: any) {
      // Тихо пропускаем ошибки обогащения
    }
  }

  // Parallel с ограничением
  const promises: Promise<void>[] = [];
  for (const item of queue) {
    const p = processOne(item);
    promises.push(p);
    running++;
    if (running >= maxConcurrent) {
      await Promise.race(promises);
      running = promises.filter((p) => p).length;
    }
  }
  await Promise.allSettled(promises);
}

// ==================== CSV экспорт ====================
export function generateCsv(items: Declaration[], groupByCompany = false): string {
  const BOM = "\uFEFF";

  if (groupByCompany) {
    const companies: Record<string, any> = {};
    for (const item of items) {
      const inn = item.applicant_inn || "N/A";
      if (!companies[inn]) {
        companies[inn] = {
          inn,
          company: item.applicant_name,
          address: item.applicant_address,
          phone: item.applicant_phone,
          email: item.applicant_email,
          director: item.applicant_director,
          declarations: 0,
          products: new Set<string>(),
          totalVolume: 0,
        };
      }
      const c = companies[inn];
      c.declarations++;
      c.products.add(item.product_name);
      c.totalVolume += item.volume_tons;
    }

    const rows = [
      ["ИНН", "Компания", "Адрес", "Телефон", "Email", "Руководитель", "Кол-во деклараций", "Продукция", "Общий объём (тонн)"].join(";"),
    ];
    const sorted = Object.values(companies).sort((a: any, b: any) => b.totalVolume - a.totalVolume);
    for (const c of sorted) {
      rows.push(
        [c.inn, c.company, c.address, c.phone, c.email, c.director, c.declarations, [...c.products].join("; "), Math.round(c.totalVolume)].join(";")
      );
    }
    return BOM + rows.join("\n");
  }

  const rows = [
    ["Номер декларации", "Дата регистрации", "Действует до", "Статус", "Продукция", "Объём (тонн)", "Заявитель", "ИНН", "Адрес", "Телефон", "Email", "Руководитель", "Изготовитель", "Ссылка"].join(";"),
  ];
  for (const item of items) {
    rows.push(
      [item.number, item.reg_date, item.end_date, item.status, item.product_name, item.volume_tons || "", item.applicant_name, item.applicant_inn, item.applicant_address, item.applicant_phone, item.applicant_email, item.applicant_director, item.manufacturer_name, item.url].join(";")
    );
  }
  return BOM + rows.join("\n");
}
