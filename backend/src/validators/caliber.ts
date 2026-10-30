import { z } from "zod";
export const createCaliberSchema = z.object({
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
});

export type CreateCaliberInput = z.infer<typeof createCaliberSchema>;
