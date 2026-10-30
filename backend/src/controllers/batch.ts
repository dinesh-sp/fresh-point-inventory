import { Request, Response, NextFunction } from "express";
import { createBatchSchema } from "../validators/batch";
import { batchModel } from "../models/batch";

export const BatchCtrl = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const batch = await batchModel.findAll();
      res.status(200).json(batch);
    } catch (err) {
      next(err);
    }
  },

  create(req: Request, res: Response, next: NextFunction) {
    try {
      const input = createBatchSchema.parse(req.body);
      const batch = batchModel.create(input);
      res.status(201).json(batch);
    } catch (err) {
      next(err);
    }
  },
};
