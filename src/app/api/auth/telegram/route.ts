import { NextRequest, NextResponse } from "next/server";
import {
  verifyTelegramAuth,
  isAuthFresh,
  createSessionToken,
  type TelegramUser,
} from "@/lib/auth";

const BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
const JWT_SECRET = process.env.JWT_SECRET;

if (!BOT_TOKEN || !JWT_SECRET) {
  console.error("CRITICAL: TELEGRAM_BOT_TOKEN or JWT_SECRET is not set!");
}
const COOKIE_NAME = "zp_session";
const MAX_AGE = 60 * 60 * 24 * 30; // 30 days

export async function POST(req: NextRequest) {
  try {
    // Проверяем наличие секретов
    if (!BOT_TOKEN || !JWT_SECRET) {
      return NextResponse.json(
        { error: "Сервер не настроен для авторизации" },
        { status: 503 }
      );
    }

    // Проверяем Origin/Referer — запросы только с нашего домена
    const origin = req.headers.get("origin") || "";
    const allowedOrigins = [
      "https://zerno-poisk.ru",
      "https://www.zerno-poisk.ru",
      "https://zerno-poisk.vercel.app",
    ];
    if (
      process.env.NODE_ENV === "production" &&
      !allowedOrigins.some((o) => origin.startsWith(o))
    ) {
      return NextResponse.json(
        { error: "Недопустимый источник запроса" },
        { status: 403 }
      );
    }

    const body = await req.json();

    const telegramUser: TelegramUser = {
      id: Number(body.id),
      first_name: String(body.first_name || ""),
      last_name: body.last_name ? String(body.last_name) : undefined,
      username: body.username ? String(body.username) : undefined,
      photo_url: body.photo_url ? String(body.photo_url) : undefined,
      auth_date: Number(body.auth_date),
      hash: String(body.hash),
    };

    // Verify hash — ГЛАВНАЯ ЗАЩИТА от подмены
    // Даже если виджет подменят, без bot_token нельзя подделать hash
    if (!verifyTelegramAuth(telegramUser, BOT_TOKEN)) {
      return NextResponse.json(
        { error: "Неверная подпись Telegram" },
        { status: 401 }
      );
    }

    // Check freshness
    if (!isAuthFresh(telegramUser.auth_date)) {
      return NextResponse.json(
        { error: "Данные авторизации устарели" },
        { status: 401 }
      );
    }

    // Create session
    const { hash, ...userData } = telegramUser;
    const token = createSessionToken(userData, JWT_SECRET);

    const response = NextResponse.json({
      ok: true,
      user: {
        id: userData.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        username: userData.username,
        photo_url: userData.photo_url,
      },
    });

    response.cookies.set(COOKIE_NAME, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: MAX_AGE,
      path: "/",
    });

    return response;
  } catch (e) {
    console.error("Telegram auth error:", e);
    return NextResponse.json(
      { error: "Ошибка авторизации" },
      { status: 500 }
    );
  }
}
