import { z } from "zod";

export const productshema = z.object({
  id: z.string().uuid(),
  product_typ_id: z.string().uuid(),
  batch_ids: z.string(),
  name: z.string(),
  code: z.string(),
});

export const productListSchema = z.array(productshema);

export const createproductFormSchema = z.object({
  product_typ_id: z
    .string()
    .trim()
    .min(1, "Product Type is required")
    .max(200, "Title must be 200 characters or fewer"),
  batch_ids: z
    .array(z.string().uuid("Invalid batch ID"))
    .min(1, "Minimum one batch is required"),
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

export type product = z.infer<typeof productshema>;
export type CreateproductFormValues = z.infer<typeof createproductFormSchema>;
