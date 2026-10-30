import { Router } from "express";
import { material } from "../controllers/material";

const router = Router();

router.get("/", material.list);

export default router;
