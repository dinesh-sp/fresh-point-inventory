import { Router } from "express";
import { productType } from "../controllers";

const router = Router();

router.get("/", productType.list);

export default router;
