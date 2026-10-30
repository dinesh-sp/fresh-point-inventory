import { Router } from "express";
import { Caliber } from "../controllers/caliber";

const router = Router();
//GET
router.get("/", Caliber.list);

//POST
router.post("/", Caliber.create);


export default router;
