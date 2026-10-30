import { Add } from "@mui/icons-material";
import { GridLayout } from "../../components/common/Layout";
import { CGrid } from "./grid";
import { Button } from "@mui/material";

export const Category = () => {

  const _handleAdd = () => {};

  return (
    <GridLayout title="Category"action={
        <Button
          variant="contained"
          startIcon={<Add />}
          onClick={_handleAdd}
          sx={{
            borderRadius: 2,
            textTransform: "none",
            px: 3,
            py: 1,
            boxShadow: 2,
            "&:hover": {
              boxShadow: 5,
            },
          }}
        >
          Add Category
        </Button>
      }
    >
      <CGrid />
    </GridLayout>
  );
};
