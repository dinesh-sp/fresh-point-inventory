import { db } from "../config/pgdb";
import { expensesType} from "../types/expensesType";

const tblName = "experience_type";

export const expensesTypeModel = {
  async findAll(): Promise<expensesType[]> {
    const result = await db.query(`SELECT * FROM ${tblName} ORDER BY id DESC`);
    return result.rows;
  },
};
