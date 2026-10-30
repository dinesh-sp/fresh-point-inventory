import "dotenv/config";
import { createApp } from "./app";
// import { runMigrations } from './config/database';
import { runMigrations } from "./config/pgdb";
const PORT = process.env.PORT ? Number(process.env.PORT) : 4000;

// runMigrations();

const app = createApp();

app.listen(PORT, () => {
  console.log(`Backend listening on http://localhost:${PORT}`);
});
