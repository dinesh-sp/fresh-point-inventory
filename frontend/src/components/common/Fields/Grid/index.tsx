import { DataGrid } from "@mui/x-data-grid";
import { IGrid } from "./interface";
import { Backdrop, CircularProgress, Paper } from "@mui/material";

export const Grid = (props: IGrid) => {
  const { columns, rows = [], extraProps } = props;
  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={extraProps?.loading ?? false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Paper
        elevation={2}
        sx={{
          width: "100%",
          borderRadius: 3,
          overflow: "hidden",
          backgroundColor: "#fff",
          p: { xs: 1, sm: 2 },
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          getRowId={(row) => row.id}
          autoHeight
          disableRowSelectionOnClick
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10, 25, 50]}
          sx={{
            border: 0,
            "& .MuiCircularProgress-root": {
              color: "#1976d2",
            },
            "& .MuiDataGrid-columnHeaders": {
              backgroundColor: "#f5f7fb",
              fontWeight: 700,
              fontSize: "0.95rem",
            },

            "& .MuiDataGrid-columnHeaderTitle": {
              fontWeight: 700,
            },

            "& .MuiDataGrid-row": {
              transition: "all 0.2s ease",
              "&:hover": {
                backgroundColor: "#f8faff",
              },
            },

            "& .MuiDataGrid-cell": {
              borderBottom: "1px solid #eee",
            },

            "& .MuiDataGrid-footerContainer": {
              backgroundColor: "#fafafa",
            },

            "& .MuiDataGrid-overlay": {
              fontSize: "1rem",
            },
          }}
          {...extraProps}
        />
      </Paper>
    </>
  );
};
