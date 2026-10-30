import { db } from "../config/pgdb";
import { batch } from "../types";
import { CreateBatchInput } from "../validators/batch";
import { batchConfig } from "./table";
import {
  tblInsertColumnsToString,
  tblSelectTostring,
} from "../../utility/conversion";

export const batchModel = {
  async findAll(): Promise<batch[]> {
    const { columns, jCondition, jColumns } = tblSelectTostring(batchConfig);
    let query = ` SELECT `;
    query += ` ${columns}`;
    query += ` , ${jColumns}`;
    query += ` FROM ${batchConfig.table}`;
    query += `  ${jCondition}`;
    query += ` ORDER BY ${batchConfig.table}.id DESC`;
    const result = await db.query(query);
    return result.rows;
  },

  async create(input: CreateBatchInput): Promise<batch> {
    const { columns, placeholders } = await tblInsertColumnsToString(
      batchConfig.insert.Columns,
    );
    const values = batchConfig.insert.Columns.map(
      (column) => input[column as keyof CreateBatchInput],
    );

    const query = `
    INSERT INTO ${batchConfig.table}
    (${columns})
    VALUES (${placeholders})
    RETURNING *;
  `;

    const result = await db.query(query, values);

    return result.rows[0] as batch;
  },
};
