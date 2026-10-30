import { z } from "zod";

export const createBatchSchema = z.object({
  material_id: z.string().trim().uuid("Material is required"),
  measurement_id: z.string().trim().uuid("Measurement is required"),
  code: z
    .string()
    .trim()
    .min(1, "Code is required")
    .max(200, "Code is too long"),
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(200, "Name is too long"),
  price: z.number().min(1, "Price must be greater than 0"),
  start_date: z.coerce.date(),
  is_default: z.boolean().default(true),
  status: z.boolean(),
});

export const updateBatchSchema = z
  .object({
    title: z
      .string()
      .trim()
      .min(1, "Title is required")
      .max(200, "Title is too long")
      .optional(),
    completed: z.boolean().optional(),
  })
  .refine((data) => data.title !== undefined || data.completed !== undefined, {
    message: "At least one field (title or completed) must be provided",
  });

export const idParamSchema = z.object({
  id: z.coerce.number().int().positive(),
});

export type CreateBatchInput = z.infer<typeof createBatchSchema>;
export type UpdateBatchInput = z.infer<typeof updateBatchSchema>;
