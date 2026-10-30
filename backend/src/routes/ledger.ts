import { Router } from "express";
import * as Controllers from "../controllers";

const router = Router();
//GET
// router.get("/", ledgerCtrl.list);

//POST
router.post("/", Controllers.ledger.create);

export default router;
