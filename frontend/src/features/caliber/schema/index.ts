import { z } from "zod";

export const calibershema = z.object({
  id: z.string().uuid(),
  code: z.string(),
  name: z.string(),
});

export const caliberListSchema = z.array(calibershema);

export const createCaliberFormSchema = z.object({
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
});

export type Caliber = z.infer<typeof calibershema>;
export type CreateCaliberFormValues = z.infer<typeof createCaliberFormSchema>;
