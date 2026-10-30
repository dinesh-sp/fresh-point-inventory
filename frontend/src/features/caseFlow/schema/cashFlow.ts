import { z } from "zod";

export const cashFlowshema = z.object({
  id: z.string().uuid(),
  ledger_id: z.string().uuid(),
  code: z.string(),
  tof_cnt: z.number(),
  tof_value: z.coerce.number().int().nonnegative(),
  pty_cnt: z.number(),
  pty_value: z.coerce.number().int().nonnegative(),
});

export const cashFlowListSchema = z.array(cashFlowshema);
export type cashFlow = z.infer<typeof cashFlowshema>;
