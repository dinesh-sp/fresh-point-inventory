import { z } from 'zod';

export const createTodoSchema = z.object({
  title: z.string().trim().min(1, 'Title is required').max(200, 'Title is too long'),
});

export const updateTodoSchema = z.object({
  title: z.string().trim().min(1, 'Title is required').max(200, 'Title is too long').optional(),
  completed: z.boolean().optional(),
}).refine((data) => data.title !== undefined || data.completed !== undefined, {
  message: 'At least one field (title or completed) must be provided',
});

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateTodoInput = z.infer<typeof createTodoSchema>;
export type UpdateTodoInput = z.infer<typeof updateTodoSchema>;
