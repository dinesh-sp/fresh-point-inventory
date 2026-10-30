import { Request, Response, NextFunction } from "express";
import { expensesTypeModel } from "../models";

export const expensesType = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await expensesTypeModel.findAll();
      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  },
};
