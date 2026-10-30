import { z } from "zod";

export const ledgershema = z.object({
  id: z.string().uuid(),
  ledger_date: z.coerce.date(),
  toff: z.number(),
  patty_cash: z.coerce.number().int().nonnegative(),
  total: z.coerce.number().int().nonnegative(),
});

export const ledgerListSchema = z.array(ledgershema);
export type ledger = z.infer<typeof ledgershema>;
