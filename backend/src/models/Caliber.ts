import { db } from "../config/pgdb";
import { Caliber } from "../types/caliber";
import { caliberConfig } from "./table";
import { CreateCaliberInput } from "../validators";
import {
  tblInsertColumnsToString,
  tblSelectTostring,
} from "../../utility/conversion";

export const CaliberModel = {
  async findAll(): Promise<Caliber[]> {
    const { columns, jCondition, jColumns, table } =
      tblSelectTostring(caliberConfig);
    // let query = `SELECT * FROM ${caliberConfig.table} ORDER BY id DESC`;
    let query = `SELECT `;
    query += ` ${columns}`;
    query += jColumns == "" ? "" : ` ,${jColumns} `;
    query += `FROM ${table}`;
    query += `${jCondition}`;
    query += ` ORDER BY ${table}.id DESC`;
    const result = await db.query(query);
    return result.rows;
  },
  async create(input: CreateCaliberInput): Promise<Caliber> {
    const { columns, placeholders, table } =
      await tblInsertColumnsToString(caliberConfig);
    const values = caliberConfig.insert.Columns.map(
      (column) => input[column as keyof CreateCaliberInput],
    );

    const query = `
    INSERT INTO ${table}
    (${columns})
    VALUES (${placeholders})
    RETURNING *;
  `;
    const result = await db.query(query, values);

    return (await result.rows[0]) as Caliber;
  },
};
