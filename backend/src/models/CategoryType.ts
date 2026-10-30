import { db } from "../config/pgdb";
import { CategoryType } from "../types/categoryType";

const tblName = "category_type";

export const categoryTypeModel = {
  async findAll(): Promise<CategoryType[]> {
    const result = await db.query(`SELECT * FROM ${tblName} ORDER BY id DESC`);
    return result.rows;
  },
};
