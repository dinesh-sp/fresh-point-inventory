import { GridColDef, DataGridProps } from "@mui/x-data-grid";

export interface IGrid {
  columns: GridColDef[];
  rows?: any[];
  extraProps?: Partial<DataGridProps>;
}
