import { Request, Response, NextFunction } from "express";
import { categoryTypeModel } from "../models";

export const categoryType = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await categoryTypeModel.findAll();
      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  },
};
