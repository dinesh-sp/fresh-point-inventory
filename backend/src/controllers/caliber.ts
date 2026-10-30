import { Request, Response, NextFunction } from "express";
import { CaliberModel } from "../models/Caliber";
import { createCaliberSchema } from "../validators";

export const Caliber = {
  async list(_req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await CaliberModel.findAll();
      res.status(200).json(todos);
    } catch (err) {
      next(err);
    }
  },
   create(req: Request, res: Response, next: NextFunction) {
      try {
        const input = createCaliberSchema.parse(req.body);
        const Caliber = CaliberModel.create(input);
        res.status(201).json(Caliber);
      } catch (err) {
        next(err);
      }
    },
};
