import { Request, Response, NextFunction } from 'express';
import { TodoModel } from '../models/Todo';
import { createTodoSchema, updateTodoSchema, idParamSchema } from '../validators/todoValidator';

export const TodoController = {
  list(_req: Request, res: Response, next: NextFunction) {
    try {
      const todos = TodoModel.findAll();
      res.json(todos);
    } catch (err) {
      next(err);
    }
  },

  getOne(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = idParamSchema.parse(req.params);
      const todo = TodoModel.findById(id);
      if (!todo) return res.status(404).json({ error: 'Todo not found' });
      res.json(todo);
    } catch (err) {
      next(err);
    }
  },

  create(req: Request, res: Response, next: NextFunction) {
    try {
      const input = createTodoSchema.parse(req.body);
      const todo = TodoModel.create(input);
      res.status(201).json(todo);
    } catch (err) {
      next(err);
    }
  },

  update(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = idParamSchema.parse(req.params);
      const input = updateTodoSchema.parse(req.body);
      const todo = TodoModel.update(id, input);
      if (!todo) return res.status(404).json({ error: 'Todo not found' });
      res.json(todo);
    } catch (err) {
      next(err);
    }
  },

  remove(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = idParamSchema.parse(req.params);
      const deleted = TodoModel.remove(id);
      if (!deleted) return res.status(404).json({ error: 'Todo not found' });
      res.status(204).send();
    } catch (err) {
      next(err);
    }
  },
};
