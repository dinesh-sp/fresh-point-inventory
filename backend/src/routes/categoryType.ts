import { Router } from "express";
import { categoryType } from "../controllers";

const router = Router();

router.get("/", categoryType.list);

export default router;
