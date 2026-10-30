import { z } from "zod";

export const createledgerSchema = z.object({
  ledger_date: z.coerce.date({
    required_error: "Date is required",
    invalid_type_error: "Invalid date",
  }),
  toff: z.coerce.number().nonnegative("Value must be 0 or greater"),
  patty_cash: z.coerce.number().nonnegative("Value must be 0 or greater"),
  total: z.coerce.number().positive("Value must be greater than 0"),
});

export type CreateledgerInput = z.infer<typeof createledgerSchema>;
