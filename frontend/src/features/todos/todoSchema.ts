import { z } from 'zod';

// Mirrors the backend's Todo shape. Used to validate API responses at
// runtime and to type/validate the create-todo form.
export const todoSchema = z.object({
  id: z.number(),
  title: z.string(),
  completed: z.boolean(),
  createdAt: z.string(),
});

export const todoListSchema = z.array(todoSchema);

export const createTodoFormSchema = z.object({
  title: z
    .string()
    .trim()
    .min(1, 'Title is required')
    .max(200, 'Title must be 200 characters or fewer'),
});

export type Todo = z.infer<typeof todoSchema>;
export type CreateTodoFormValues = z.infer<typeof createTodoFormSchema>;
