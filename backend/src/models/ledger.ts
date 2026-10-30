import { db } from "../config/pgdb";
import * as Type from "../types";
import { CreateledgerInput } from "../validators";
import * as config from "./table";
import { tblInsertColumnsToString } from "../../utility/conversion";

export const ledger = {
  async create(input: CreateledgerInput): Promise<Type.ledger.response> {
    const { columns, placeholders } = await tblInsertColumnsToString(
      config.ledger,
    );
    const values = config.ledger.insert.Columns.map(
      (column) => input[column as keyof CreateledgerInput],
    );

    const query = `
    INSERT INTO ${config.ledger.table}
    (${columns})
    VALUES (${placeholders})
    RETURNING *;
  `;
    const { rows } = await db.query(query, values);

    // return rows[0] as Type.ledger;
    return Type.ledger.mapRowResponse(rows[0]);
  },
};
