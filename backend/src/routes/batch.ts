import { Router } from "express";
import { BatchCtrl } from "../controllers/batch";

const router = Router();
//GET
router.get("/", BatchCtrl.list);

//POST
router.post("/", BatchCtrl.create);

export default router;
