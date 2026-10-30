import { Request, Response, NextFunction } from "express";
import { productTypeModel } from "../models";

export const productType = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await productTypeModel.findAll();
      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  },
};
