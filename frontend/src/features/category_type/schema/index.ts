import { z } from "zod";

export const CategoryTypeshema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  code: z.string(),
});

export const CategoryTypeListSchema = z.array(CategoryTypeshema);

export const createCategoryTypeFormSchema = z.object({
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

export type CategoryType = z.infer<typeof CategoryTypeshema>;
export type CreateCategoryTypeFormValues = z.infer<
  typeof createCategoryTypeFormSchema
>;
