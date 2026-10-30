import { Button } from "@mui/material";
import { GridLayout } from "../../components/common/Layout";
import { Add } from "@mui/icons-material";
import { AGrid } from "./grid";

export const Algorithm = () => {
  const _handleAdd = () => {};

  return (
    <GridLayout
      title="Algorithm"
      action={
        <Button
          className="btn add"
          variant="contained"
          startIcon={<Add />}
          onClick={_handleAdd}
        >
          Add Algorithm Type
        </Button>
      }
    >
      <AGrid />
    </GridLayout>
  );
};
