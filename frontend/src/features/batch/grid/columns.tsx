import { Edit, Delete, CheckCircle, Cancel } from "@mui/icons-material";
import { Tooltip } from "@mui/material";
import {
  GridColDef,
  GridRenderCellParams,
  GridActionsCellItem,
} from "@mui/x-data-grid";

export const Columns: GridColDef[] = [
  {
    field: "code",
    headerName: "Code",
    width: 100,
    flex: 1,
    minWidth: 100,
  },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "material",
    headerName: "Material",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "measurement",
    headerName: "Measurement",
    flex: 1,
    minWidth: 100,
  },
  {
    field: "price",
    headerName: "Price",
    flex: 1,
    minWidth: 100,
    renderCell: (params) => `₹ ${Number(params.value ?? 0).toFixed(2)}`,
    // valueFormatter: (value) => `₹${Number(value ?? 0).toFixed(2)}`,
  },
  {
    field: "start_date",
    headerName: "Start Date",
    flex: 1,
    minWidth: 100,
    valueFormatter: (params) =>
      params.value
        ? new Date(params.value as string).toLocaleDateString("en-IN")
        : "-",
  },
  {
    field: "end_date",
    headerName: "End Date",
    flex: 1,
    minWidth: 100,
    renderCell: (params) =>
      params.value
        ? new Date(params.value as string).toLocaleDateString("en-IN")
        : "-",
  },
  {
    field: "is_default",
    headerName: "Default",
    flex: 1,
    minWidth: 100,
    renderCell: (params) =>
      params.value ? (
        <Tooltip title="Active">
          <CheckCircle color="success" />
        </Tooltip>
      ) : (
        <Tooltip title="Inactive">
          <Cancel color="error" />
        </Tooltip>
      ),
  },
  {
    field: "status",
    headerName: "Active",
    flex: 0.6,
    minWidth: 90,
    align: "center",
    headerAlign: "center",
    renderCell: (params) =>
      params.value ? (
        <Tooltip title="Active">
          <CheckCircle color="success" />
        </Tooltip>
      ) : (
        <Tooltip title="Inactive">
          <Cancel color="error" />
        </Tooltip>
      ),
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
