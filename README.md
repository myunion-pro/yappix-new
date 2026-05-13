# YappiX

Публичный лендинг **YappiX** — мультимодальные AI-агенты, RAG, цены и контакты. Сайт: [yappix.net](https://yappix.net).

Репозиторий: [github.com/myunion-pro/yappix-new](https://github.com/myunion-pro/yappix-new)

## Стек

- [Vite](https://vitejs.dev/) + [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Локальный запуск

Нужны Node.js 18+ и pnpm (или npm).

```bash
git clone https://github.com/myunion-pro/yappix-new.git
cd yappix-new
pnpm install
pnpm run dev
```

Откройте [http://localhost:5173](http://localhost:5173).

Сборка и превью:

```bash
pnpm run build
pnpm run preview
```

## Деплой

Статический билд в `dist/`. Для выкладки на свой сервер можно использовать скрипт (SSH, пути и ключ задайте под себя):

```bash
./deploy/publish.sh
```

## Контакты

- Почта: [help@yappix.net](mailto:help@yappix.net)
- Telegram: [@yappix_bot](https://t.me/yappix_bot)

## Скрипты

| Команда        | Описание        |
| -------------- | --------------- |
| `pnpm run dev` | Режим разработки |
| `pnpm run build` | Продакшен-сборка |
| `pnpm run preview` | Локальный просмотр `dist/` |
| `pnpm run lint` | ESLint          |
