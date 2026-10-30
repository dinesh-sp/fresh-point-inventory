import { Request, Response, NextFunction } from "express";
import { createledgerSchema } from "../validators";
import * as Model from "../models";

export const ledger = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const input = createledgerSchema.parse(req.body);
      const ledger = await Model.ledger.create(input);
      console.log('sds',ledger)
      res.status(201).json(ledger);
    } catch (err) {
      next(err);
    }
  },
};
