import { z } from "zod";

export const expensesTypeshema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  code: z.string(),
});

export const expensesTypeListSchema = z.array(expensesTypeshema);

export const createexpensesTypeFormSchema = z.object({
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

export type expensesType = z.infer<typeof expensesTypeshema>;
export type CreateexpensesTypeFormValues = z.infer<
  typeof createexpensesTypeFormSchema
>;
