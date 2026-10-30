import { Edit,Delete } from "@mui/icons-material";
import {
  GridColDef,
  GridRenderCellParams,
  GridActionsCellItem,
} from "@mui/x-data-grid";

export const Columns: GridColDef[] = [
  {
    field: "code",
    headerName: "Code",
    width: 600,
  },
  {
    field: "name",
    headerName: "Name",
    width: 600,
    
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
    ]},
];
