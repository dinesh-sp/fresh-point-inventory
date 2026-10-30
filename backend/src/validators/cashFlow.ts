import { z } from "zod";

export const createcashflowSchema = z.object({
  ledger_id: z.string().trim().uuid("ledger is required"),
  code: z
    .string()
    .trim()
    .min(1, "Code is required")
    .max(200, "Code is too long"),
  tof_cnt: z.coerce.number().nonnegative("Value must be 0 or greater"),
  tof_value: z.coerce.number().nonnegative("Value must be 0 or greater"),
  pty_cnt: z.coerce.number().nonnegative("Value must be 0 or greater"),
  pty_value: z.coerce.number().nonnegative("Value must be 0 or greater"),
});

export type CreatecashflowInput = z.infer<typeof createcashflowSchema>;
