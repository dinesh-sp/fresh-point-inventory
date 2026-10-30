import { Edit, Delete } from "@mui/icons-material";
import {
  GridColDef,
  GridRenderCellParams,
  GridActionsCellItem,
} from "@mui/x-data-grid";

export const Columns: GridColDef[] = [
  {
    field: "catgry_typ_id",
    headerName: "category",
    width: 250,
  },
  {
    field: "code",
    headerName: "Code",
    width: 300,
  },
  {
    field: "name",
    headerName: "Name",
    width: 600,
    renderCell: (params: GridRenderCellParams<any>) =>
      params.value ? "Yes" : "No",
  },
  {
    field: "",
    headerName: "Action",
    width: 120,
    type: "actions",
    align: "center",
    headerAlign: "center",
    sortable: false,
    filterable: false,
    getActions: (params) => [
      <GridActionsCellItem
        icon={<Edit />}
        label="Edit"
        // onClick={() => onEdit(params.row)}
        showInMenu={false}
      />,
      <GridActionsCellItem
        icon={<Delete />}
        label="Delete"
        // onClick={() => onDelete(params.row)}
        showInMenu={false}
      />,
    ],
  },
];
