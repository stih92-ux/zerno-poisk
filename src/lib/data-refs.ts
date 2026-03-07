/**
 * Справочники данных (регионы, округа, культуры и т.д.)
 * Порт data_refs.py из Telegram-бота
 */

export type RefItem = { name: string; code: string };

// ======================== Страны ========================
export const COUNTRIES: RefItem[] = [
  { name: "Россия", code: "RU" },
  { name: "Казахстан", code: "KZ" },
  { name: "Беларусь", code: "BY" },
  { name: "Кыргызстан", code: "KG" },
  { name: "Армения", code: "AM" },
];

// ======================== HS коды (Comtrade) ========================
export const HS_CODE_MAP: Record<string, string> = {
  wheat: "1001",
  rye: "1002",
  barley: "1003",
  oats: "1004",
  corn: "1005",
  rice: "1006",
  buckwheat: "1008",
  soy: "1201",
  sunflower: "1206",
  peas: "0713",
};

// ======================== UN M49 коды стран ========================
export const UN_COUNTRY_CODES: Record<string, string> = {
  RU: "643",
  KZ: "398",
  BY: "112",
  KG: "417",
  AM: "051",
};

// ======================== Федеральные округа ========================
export const FEDERAL_DISTRICTS: RefItem[] = [
  { name: "ДФО", code: "DFO" },
  { name: "ПФО", code: "PFO" },
  { name: "СЗФО", code: "SZFO" },
  { name: "СКФО", code: "SKFO" },
  { name: "СФО", code: "SFO" },
  { name: "УрФО", code: "URFO" },
  { name: "ЦФО", code: "CFO" },
  { name: "ЮФО", code: "UFO" },
];

// ======================== Регионы допуска ========================
export const REGIONS_DOPUSKA: RefItem[] = [
  { name: "Волго-Вятский регион", code: "VVR" },
  { name: "Восточно-Сибирский регион", code: "ESR" },
  { name: "Дальневосточный Северный регион", code: "FENR" },
  { name: "Дальневосточный Южный регион", code: "FESR" },
  { name: "Западно-Сибирский регион", code: "WSR" },
  { name: "Нижневолжский регион", code: "NVR" },
  { name: "Северный регион", code: "NR" },
  { name: "Северо-Западный регион", code: "NWR" },
  { name: "Северо-Кавказский регион", code: "NCR" },
  { name: "Средневолжский регион", code: "MVR" },
  { name: "Уральский регион", code: "UR" },
  { name: "Центрально-Чернозёмный регион", code: "CCR" },
  { name: "Центральный регион", code: "CR" },
];

// ======================== Субъекты РФ (68 шт.) ========================
export const DETAILED_REGIONS: RefItem[] = [
  { name: "Алтайский Край", code: "ALT" },
  { name: "Амурская Область", code: "AMU" },
  { name: "Архангельская Область", code: "ARH" },
  { name: "Астраханская Область", code: "AST" },
  { name: "Белгородская Область", code: "BEL" },
  { name: "Брянская Область", code: "BRY" },
  { name: "Владимирская Область", code: "VLA" },
  { name: "Волгоградская Область", code: "VLG" },
  { name: "Вологодская Область", code: "VOL" },
  { name: "Воронежская Область", code: "VOR" },
  { name: "Еврейская Автономная Обл.", code: "YEV" },
  { name: "Забайкальский Край", code: "ZAB" },
  { name: "Запорожская Область", code: "ZAP" },
  { name: "Ивановская Область", code: "IVA" },
  { name: "Иркутская Область", code: "IRK" },
  { name: "Калининградская Область", code: "KGD" },
  { name: "Калужская Область", code: "KLU" },
  { name: "Камчатский Край", code: "KAM" },
  { name: "Кемеровская Область", code: "KEM" },
  { name: "Кировская Область", code: "KIR" },
  { name: "Костромская Область", code: "KOS" },
  { name: "Краснодарский Край", code: "KDA" },
  { name: "Красноярский Край", code: "KYA" },
  { name: "Курганская Область", code: "KGN" },
  { name: "Курская Область", code: "KRS" },
  { name: "Ленинградская Область", code: "LEN" },
  { name: "Липецкая Область", code: "LIP" },
  { name: "Магаданская Область", code: "MAG" },
  { name: "Москва", code: "MOW" },
  { name: "Московская Область", code: "MOS" },
  { name: "Мурманская Область", code: "MUR" },
  { name: "Нижегородская Область", code: "NIZ" },
  { name: "Новгородская Область", code: "NGR" },
  { name: "Новосибирская Область", code: "NVS" },
  { name: "Омская Область", code: "OMS" },
  { name: "Оренбургская Область", code: "ORE" },
  { name: "Орловская Область", code: "ORL" },
  { name: "Пензенская Область", code: "PNZ" },
  { name: "Пермский Край", code: "PER" },
  { name: "Приморский Край", code: "PRI" },
  { name: "Псковская Область", code: "PSK" },
  { name: "Ростовская Область", code: "ROS" },
  { name: "Рязанская Область", code: "RYA" },
  { name: "Самарская Область", code: "SAM" },
  { name: "Санкт-Петербург", code: "SPE" },
  { name: "Саратовская Область", code: "SAR" },
  { name: "Сахалинская Область", code: "SAK" },
  { name: "Свердловская Область", code: "SVE" },
  { name: "Смоленская Область", code: "SMO" },
  { name: "Ставропольский Край", code: "STA" },
  { name: "Тамбовская Область", code: "TAM" },
  { name: "Тверская Область", code: "TVE" },
  { name: "Томская Область", code: "TOM" },
  { name: "Тульская Область", code: "TUL" },
  { name: "Тюменская Область", code: "TYU" },
  { name: "Ульяновская Область", code: "ULY" },
  { name: "Хабаровский Край", code: "KHA" },
  { name: "Челябинская Область", code: "CHE" },
  { name: "Чеченская Республика", code: "CE" },
  { name: "Ярославская Область", code: "YAR" },
  { name: "Респ. Адыгея", code: "AD" },
  { name: "Респ. Башкортостан", code: "BA" },
  { name: "Респ. Дагестан", code: "DA" },
  { name: "Респ. Крым", code: "CR_R" },
  { name: "Респ. Марий Эл", code: "ME" },
  { name: "Респ. Мордовия", code: "MO" },
  { name: "Респ. Татарстан", code: "TA" },
  { name: "Респ. Чувашия", code: "CU" },
];

// ======================== Культуры (13 шт.) ========================
export const PRODUCTS: RefItem[] = [
  { name: "Пшеница", code: "wheat" },
  { name: "Кукуруза", code: "corn" },
  { name: "Ячмень", code: "barley" },
  { name: "Рожь", code: "rye" },
  { name: "Овёс", code: "oats" },
  { name: "Горох", code: "peas" },
  { name: "Соя", code: "soy" },
  { name: "Подсолнечник", code: "sunflower" },
  { name: "Рис", code: "rice" },
  { name: "Гречиха", code: "buckwheat" },
  { name: "Лён", code: "flax" },
  { name: "Чечевица зелёная", code: "green_lentil" },
  { name: "Кориандр", code: "coriander" },
];

// ======================== Сегменты (5 шт.) ========================
export const SEGMENTS: RefItem[] = [
  { name: "Переработчики", code: "processor" },
  { name: "Производители", code: "producer" },
  { name: "Прочее", code: "other" },
  { name: "Торговые организации", code: "trade" },
  { name: "Хранение и складирование", code: "storage" },
];

// ======================== Иконки культур ========================
export const PRODUCT_ICONS: Record<string, string> = {
  wheat: "🌾",
  corn: "🌽",
  barley: "🌾",
  rye: "🌾",
  oats: "🌾",
  peas: "🌾",
  soy: "🌾",
  sunflower: "🌻",
  rice: "🌾",
  buckwheat: "🌾",
  flax: "🌱",
  green_lentil: "🌿",
  coriander: "🌿",
};

// ======================== Lookup ========================
function lookup(list: RefItem[], code: string): string {
  const item = list.find((it) => it.code === code);
  return item?.name ?? code;
}

export const countryName = (code: string) => lookup(COUNTRIES, code);
export const foName = (code: string) => lookup(FEDERAL_DISTRICTS, code);
export const rdName = (code: string) => lookup(REGIONS_DOPUSKA, code);
export const regionName = (code: string) => lookup(DETAILED_REGIONS, code);
export const productName = (code: string) => lookup(PRODUCTS, code);
export const segmentName = (code: string) => lookup(SEGMENTS, code);

export const REGIONS_PER_PAGE = 14;
