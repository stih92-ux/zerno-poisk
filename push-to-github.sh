#!/bin/bash
# Скрипт загрузки zerno-poisk-web на GitHub
# Запустить из папки: cd ~/zerno-poisk-web && bash push-to-github.sh

set -e

echo "🚀 Загрузка ЗерноПоиск v2.0 на GitHub..."

# Инициализация git
git init
git checkout -b main 2>/dev/null || git checkout main

# Добавляем все файлы
git add -A

# Коммит
git commit -m "feat: v2.0 - Full bot functionality port to website

- Port FSA API client (fsa.ts) with auth, rate limiting, caching, proxy rotation
- Port reference data (data-refs.ts) with 13 products, 68 regions, 5 segments
- Search page with 4-level geo filtering, volume/date filters, contact enrichment
- CSV export (standard + grouped by company)
- Grain prices dashboard (MOEX, ZOL.RU, IDK.RU)
- Separate proxy support (SITE_FSA_PROXY_URL) to not interfere with bot
- API routes: /api/fsa/search, /api/fsa/export, /api/prices"

# Подключаем удалённый репозиторий
git remote remove origin 2>/dev/null || true
git remote add origin https://github.com/stih92-ux/zerno-poisk.git

# Пушим (перезаписываем содержимое)
echo ""
echo "⚠️  Сейчас будет force push - это перезапишет текущее содержимое на GitHub."
echo "    Нажми Ctrl+C если хочешь отменить, или подожди 5 секунд..."
sleep 5

git push -f origin main

echo ""
echo "✅ Готово! Файлы загружены на GitHub."
echo "🌐 https://github.com/stih92-ux/zerno-poisk"
echo "📦 Vercel автоматически задеплоит новую версию через 1-2 минуты."
echo ""
echo "⚡ Не забудь настроить SITE_FSA_PROXY_URL в Vercel:"
echo "   https://vercel.com/dashboard → zerno-poisk → Settings → Environment Variables"
