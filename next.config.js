/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Запрет встраивания сайта в iframe (защита от clickjacking)
          { key: "X-Frame-Options", value: "DENY" },
          // Запрет MIME-sniffing
          { key: "X-Content-Type-Options", value: "nosniff" },
          // Referrer — отправлять только origin
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          // Запрет доступа к камере, микрофону и т.д.
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          // Strict Transport Security — только HTTPS
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          // Content Security Policy — ГЛАВНАЯ ЗАЩИТА
          // Разрешаем скрипты только с нашего домена и telegram.org
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              // Скрипты: наши + telegram виджет + inline для theme-скрипта
              // unsafe-eval нужен для Telegram Login Widget (telegram-widget.js использует eval)
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://telegram.org",
              // Стили: наши + inline (Tailwind)
              "style-src 'self' 'unsafe-inline'",
              // Картинки: наши + Telegram аватары + Unsplash
              "img-src 'self' https://t.me https://*.telegram.org https://images.unsplash.com data:",
              // Шрифты
              "font-src 'self'",
              // API-запросы: только наш домен
              "connect-src 'self'",
              // Фреймы: telegram для виджета авторизации
              "frame-src https://oauth.telegram.org",
              // Запрет object/embed
              "object-src 'none'",
              // base-uri только self
              "base-uri 'self'",
              // form-action только self
              "form-action 'self'",
              // upgrade insecure requests
              "upgrade-insecure-requests",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
