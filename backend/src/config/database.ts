import path from 'path';
import fs from 'fs';
import { DatabaseSync } from 'node:sqlite';

const dbPath = process.env.DB_PATH || path.join(__dirname, '..', '..', 'data', 'app.db');

// Ensure the folder for the SQLite file exists
const dbDir = path.dirname(dbPath);
if (!fs.existsSync(dbDir)) {
  fs.mkdirSync(dbDir, { recursive: true });
}

// Uses Node's built-in SQLite module (node:sqlite) — no native
// compilation or build tools required, unlike better-sqlite3.
export const db = new DatabaseSync(dbPath);

db.exec('PRAGMA journal_mode = WAL');
db.exec('PRAGMA foreign_keys = ON');

export function runMigrations(): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      completed INTEGER NOT NULL DEFAULT 0,
      created_at TEXT NOT NULL DEFAULT (datetime('now'))
    );
  `);
}
