import { z } from "zod";

export const batchschema = z.object({
  id: z.string().uuid().trim().optional(),
  code: z.string().trim(),
  name: z.string().trim(),
  material: z.string().trim(),
  measurement: z.string().trim(),
  price: z.coerce.number(),
  start_date: z.coerce.date(),
  end_date: z.coerce.date().optional(),
  is_default: z.boolean(),
  status: z.boolean(),
});

export const batchListSchema = z.array(batchschema);

export const createbatchFormSchema = z.object({
  code: z
    .string()
    .trim()
    .min(1, "Code is required")
    .max(200, "Title must be 200 characters or fewer"),
  name: z
    .string()
    .trim()
    .min(1, "Name is required")
    .max(200, "Title must be 200 characters or fewer"),
  is_default: z.boolean(),
  status: z.boolean(),
  material_id: z.string().trim().min(1, "material is required"),
  measurement_id: z.string().trim().min(1, "material is required"),
  price: z.coerce.number().min(1, "Price must be greater than 0"),
  start_date: z.coerce.date(),
  enddate: z.coerce.date().optional(),
});

export type batch = z.infer<typeof batchschema>;
export type CreatebatchFormValues = z.infer<typeof createbatchFormSchema>;
