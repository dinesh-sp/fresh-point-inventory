import { Router } from "express";
import { cashflowCtrl } from "../controllers";

const router = Router();
//GET
// router.get("/", cashflowCtrl.list);

//POST
router.post("/", cashflowCtrl.create);

export default router;
