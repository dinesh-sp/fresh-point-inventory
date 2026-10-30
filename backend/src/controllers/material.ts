import { Request, Response, NextFunction } from "express";
import { materialModel } from "../models";

export const material = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await materialModel.findAll();
      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  },
};
