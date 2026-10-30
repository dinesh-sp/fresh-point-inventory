import { Router } from "express";
import { expensesType } from "../controllers";

const router = Router();

router.get("/", expensesType.list);

export default router;
