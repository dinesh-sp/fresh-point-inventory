import { db } from "../config/pgdb";
import { cashFlow } from "../types";
import { CreatecashflowInput } from "../validators/cashFlow";
import * as Config from "./table";
import { tblInsertColumnsToString } from "../../utility/conversion";

export const cashflowModel = {
  async create(input: CreatecashflowInput): Promise<cashFlow> {
    const { columns, placeholders } = await tblInsertColumnsToString(
      Config.cashflow,
    );
    const values = Config.cashflow.insert.Columns.map(
      (column) => input[column as keyof CreatecashflowInput],
    );

    const query = `
    INSERT INTO ${Config.cashflow.table}
    (${columns})
    VALUES (${placeholders})
    RETURNING *;
  `;

    const result = await db.query(query, values);

    return result.rows[0] as cashFlow;
  },
};
