import {
  Box,
  Button,
  Alert,
  Stack,
  Snackbar,
  AlertTitle,
  Collapse,
  Grid,
  TextField,
} from "@mui/material";
import { CusGrid, FormField } from "../../../components/common/Fields";
import { BIGrid } from "./bi";
import { Columns } from "./columns";

export const UIGrid = (props: any) => {
  const { gData, gtotal, processRowUpdate, _handleSubmit, cSnackbar } =
    BIGrid(props);

  return (
    <>
      <Snackbar
        open={cSnackbar.state}
        autoHideDuration={3000}
        onClose={cSnackbar.action}
      >
        <Alert
          onClose={cSnackbar.action}
          severity="error"
          variant="outlined"
          sx={{ width: "100%" }}
        >
          {" "}
          <AlertTitle>Error</AlertTitle>
          {cSnackbar.msg}
        </Alert>
      </Snackbar>
      <Collapse in={false}>
        <Grid
          container
          spacing={3}
          sx={{
            mx: 4,
          }}
        >
          <Grid xs={12} md={4}>
            <FormField label="Code" required>
              <TextField
                variant="outlined"
                size="small"
                fullWidth
                placeholder="Enter Unique code"
              />
            </FormField>
          </Grid>
        </Grid> 
        <Stack display="flex" mx={12} m={1}>
          <Alert severity="warning">
            This is a success Alert with warning colors.
          </Alert>
        </Stack>
      </Collapse>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          alignItems: "center",
          px: 3,
          py: 0.5,
          borderBottom: 1,
          borderColor: "divider",
        }}
        mb={5}
      >
        <CusGrid
          columns={Columns}
          rows={(gData && gData?.slice().sort((x) => x.id)) ?? []}
          extraProps={{
            hideFooter: true,
            initialState: {
              pagination: {
                paginationModel: {
                  page: 0,
                  pageSize: 10,
                },
              },
            },
            processRowUpdate: processRowUpdate,
            onProcessRowUpdateError: (error) => {
              console.error(error);

              // Optional
              alert(error instanceof Error ? error : "Failed to update row");
            },
          }}
        />
        <Stack display="flex" mx={12} my={0.3} width="100%">
          <CusGrid
            columns={Columns.map((x) => ({ ...x, editable: false }))}
            rows={gtotal ?? []}
            extraProps={{
              columnHeaderHeight: 0,
              hideFooter: true,
              sx: {
                "& .MuiDataGrid-cell": {
                  fontWeight: 700, // bold
                },
              },
            }}
          />
        </Stack>
      </Box>
      {/* <Divider sx={{ mt: 2 }} /> */}
      <Stack
        direction="row"
        spacing={2}
        justifyContent="flex-end"
        mt={2}
        mr={2}
      >
        <Button
          variant="contained"
          sx={{
            // borderBottom: `0.2rem solid ${getRandomColor()}`,
            // borderTop: `0.2rem solid ${getRandomColor()}`,
            borderRadius: 3,
          }}
        >
          Reset
        </Button>

        <Button
          type="submit"
          variant="contained"
          onClick={_handleSubmit}
          sx={{
            // borderBottom: `0.2rem solid ${getRandomColor()}`,
            // borderTop: `0.2rem solid ${getRandomColor()}`,
            borderRadius: 3,
          }}
        >
          Save
        </Button>
      </Stack>
    </>
  );
};
