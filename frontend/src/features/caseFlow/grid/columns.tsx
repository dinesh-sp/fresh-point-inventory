import { GridColDef, GridActionsCellItem } from "@mui/x-data-grid";

export const Columns: GridColDef[] = [
  {
    field: "code",
    headerName: "Rs",
    width: 50,
    flex: 1,
    minWidth: 100,
  },
  {
    field: "transaction",
    headerName: "Transaction",
    type: "number",
    flex: 1,
    editable: true,
    minWidth: 100,
  },
  {
    field: "toff",
    headerName: "T-Off",
    flex: 1,
    editable: true,
    type: "number",
    minWidth: 100,
  },
  {
    field: "tatotal",
    headerName: "Transaction Total",
    width: 50,
    flex: 1,
    minWidth: 100,
  },
  {
    field: "tototal",
    headerName: "Take Off Total",
    flex: 1,
    editable: true,
    minWidth: 100,
  },
  {
    field: "pattyCash",
    headerName: "patty cash",
    flex: 1,
    editable: true,
    minWidth: 100,
  },
];
