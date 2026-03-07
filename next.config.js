/** @type {import('next').NextConfig} */
const nextConfig = {
  // Отключаем strict mode для dev
  reactStrictMode: true,
  // Увеличиваем таймаут для API роутов (FSA API медленный)
  experimental: {
    serverActions: {
      bodySizeLimit: "2mb",
    },
  },
};

module.exports = nextConfig;
