const tableJoinToStr = (columns: any[]): string =>
  columns
    .map((column) => {
      let query = ` join ${column.name} on ${column.name}.${column.relation.from}`;
      query += ` =${column.relation.to}`;
      return query;
    })
    .join(" ");

const tblSelectColumnsTostring = (
  columns: string[],
  tableName: string,
  alisedRequired: boolean = false,
): string =>
  columns
    .map(
      (column) =>
        `${tableName}.${column} ${alisedRequired ? " as " + tableName : ``}`,
    )
    .join(", ");

export const tblInsertColumnsToString = (data: any) => {
  const { table, insert } = data;
  return {
    columns: insert.Columns.join(", "),
    placeholders: insert.Columns.map(
      (_: string, index: number) => `$${index + 1}`,
    ).join(", "),
    table,
  };
};

export const tblSelectTostring = (data: any) => {
  const { table, list } = data;
  let jColumns = "",
    jCondition = "";
  if (list?.JTables) {
    jColumns = list.JTables.map((joins: any) =>
      tblSelectColumnsTostring(joins.columns, joins.name, true),
    );
    jCondition = tableJoinToStr(list.JTables);
  }
  return {
    columns: tblSelectColumnsTostring(list.columns, table),
    jColumns,
    jCondition,
    table,
  };
};
