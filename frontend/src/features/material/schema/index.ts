import { z } from "zod";

export const materialshema = z.object({
  id: z.string().uuid(),
  name: z.string(),
  code: z.string(),
});

export const materialListSchema = z.array(materialshema);

export const creatematerialFormSchema = z.object({
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

export type material = z.infer<typeof materialshema>;
export type CreatematerialFormValues = z.infer<
  typeof creatematerialFormSchema
>;
