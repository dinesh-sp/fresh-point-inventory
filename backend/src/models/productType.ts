import { db } from "../config/pgdb";
import { productType} from "../types/productType";

const tblName = "product_type";

export const productTypeModel = {
  async findAll(): Promise<productType[]> {
    const result = await db.query(`SELECT * FROM ${tblName} ORDER BY id DESC`);
    return result.rows;
  },
};
