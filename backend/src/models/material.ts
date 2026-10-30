import { db } from "../config/pgdb";
import { material } from "../types/material";

const tblName = "material";

export const materialModel = {
  async findAll(): Promise<material[]> {
    const result = await db.query(`SELECT * FROM ${tblName} ORDER BY id DESC`);
    return result.rows;
  },
};
