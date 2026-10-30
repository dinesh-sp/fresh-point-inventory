import { z } from "zod";

export const productTypeshema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  code: z.string(),
});

export const productTypeListSchema = z.array(productTypeshema);

export const createproductTypeFormSchema = z.object({
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

export type productType = z.infer<typeof productTypeshema>;
export type CreateproductTypeFormValues = z.infer<
  typeof createproductTypeFormSchema
>;
