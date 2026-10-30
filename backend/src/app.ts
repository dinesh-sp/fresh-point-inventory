import express from "express";
import cors from "cors";
import * as Cusrouter from "./routes";
import { errorHandler, notFoundHandler } from "./middleware/errorHandler";

export function createApp() {
  const app = express();

  app.use(cors({ origin: process.env.CORS_ORIGIN || "http://localhost:5173" }));
  app.use(express.json());

  app.get("/api/health", (_req, res) => res.json({ status: "ok" }));
  app.use("/api/todos", Cusrouter.todo);
  app.use("/api/caliber", Cusrouter.caliber);
  app.use("/api/categoryType", Cusrouter.categoryType);
  app.use("/api/productType", Cusrouter.productType);
  app.use("/api/expensesType", Cusrouter.expensesType);
  app.use("/api/material", Cusrouter.material);
  app.use("/api/batch", Cusrouter.batch);
  app.use("/api/cashflow", Cusrouter.cashFlow);
  app.use("/api/ledger", Cusrouter.ledger);
  

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
