import { Request, Response, NextFunction } from "express";
import { createcashflowSchema } from "../validators/cashFlow";
import { cashflowModel } from "../models/cashFlow";

export const cashflowCtrl = {

  create(req: Request, res: Response, next: NextFunction) {
    try {
      const input = createcashflowSchema.parse(req.body);
      const cashflow = cashflowModel.create(input);
      res.status(201).json(cashflow);
    } catch (err) {
      next(err);
    }
  },
};