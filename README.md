# Fullstack App — React + Node.js + SQLite

A standard-structure full-stack starter:

- **Frontend**: React, TypeScript, Vite, MUI, RTK Query, Zod, React Hook Form
- **Backend**: Node.js, Express, TypeScript, SQLite (built-in `node:sqlite`), Zod

> **Requires Node.js 22.5+ (24.x recommended).** This uses Node's built-in
> `node:sqlite` module instead of `better-sqlite3`, so there's no native
> addon to compile — no Visual Studio Build Tools, Python, or node-gyp
> needed. On Node < 24.15 you'll see a one-line `ExperimentalWarning` in the
> console; it's harmless and safe to ignore for local dev.

The demo feature is a simple **Todos** CRUD app, showing the full pattern:
Zod-validated request → Express controller → SQLite model → JSON response →
RTK Query cache → MUI UI.

## Project structure

```
fullstack-app/
├── backend/
│   ├── src/
│   │   ├── config/        # DB connection + migrations
│   │   ├── models/        # Data-access layer (SQL queries)
│   │   ├── controllers/   # Request handlers
│   │   ├── routes/        # Express routers
│   │   ├── validators/    # Zod schemas for input validation
│   │   ├── middleware/    # Error handling
│   │   ├── types/         # Shared TS types
│   │   ├── app.ts         # Express app (middleware + routes)
│   │   └── server.ts      # Entry point
│   ├── data/               # SQLite .db file lives here (gitignored)
│   ├── package.json
│   └── tsconfig.json
│
└── frontend/
    ├── src/
    │   ├── api/            # RTK Query base API slice
    │   ├── app/            # Redux store
    │   ├── features/todos/ # Feature folder: schema, RTK Query endpoints, UI
    │   ├── components/     # Shared UI (Layout, etc.)
    │   ├── theme/          # MUI theme
    │   ├── App.tsx
    │   └── main.tsx
    ├── package.json
    └── tsconfig.json
```

## Getting started

### 1. Backend

```bash
cd backend
cp .env.example .env
npm install
npm run dev       # starts on http://localhost:4000
```

This creates `backend/data/app.db` automatically on first run and runs the
`todos` table migration.

### 2. Frontend

```bash
cd frontend
cp .env.example .env
npm install
npm run dev        # starts on http://localhost:5173
```

Open http://localhost:5173 — the app talks to the backend at
`http://localhost:4000/api` by default (configurable via `VITE_API_BASE_URL`).

## API

| Method | Endpoint          | Description          |
|--------|-------------------|-----------------------|
| GET    | /api/todos        | List all todos        |
| GET    | /api/todos/:id    | Get one todo          |
| POST   | /api/todos        | Create a todo          |
| PATCH  | /api/todos/:id    | Update title/completed |
| DELETE | /api/todos/:id    | Delete a todo          |

All input is validated with **Zod** on the backend (`validators/todoValidator.ts`)
and the frontend independently validates API responses and form input with
its own Zod schemas (`features/todos/todoSchema.ts`).

## How to extend this to a new resource

1. **Backend**: add a table in `config/database.ts`, a model in `models/`, a
   Zod validator in `validators/`, a controller in `controllers/`, and wire
   up a router in `routes/`, mounted in `app.ts`.
2. **Frontend**: create a new folder under `features/<name>/` with a Zod
   schema, an `injectEndpoints` RTK Query slice, and MUI components.

## Notes

- Both frontend and backend typecheck cleanly with `npm run typecheck`, and
  the backend has been run end-to-end (create + list todos) against a real
  SQLite file via `node:sqlite`.
- Also fix the `'tsx' is not recognized...` error you saw: that happened
  because `npm install` aborted partway through (due to the old
  `better-sqlite3` native build failure), so `node_modules/.bin/tsx` was
  never written. A clean `npm install` with the updated `package.json`
  resolves it.
