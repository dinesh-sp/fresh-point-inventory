import { Button } from "@mui/material";
import { GridLayout } from "../../components/common/Layout";
import { Add } from "@mui/icons-material";
import { SGrid } from "./grid";

export const Stock = () => {
  return (
    <>
      <GridLayout title="Stock"
      action={ <Button className="btn add"
            variant="contained"
            startIcon={<Add />}
            // onClick={handleAddCaliber}
          >
            Add Stock
          </Button>}>
         <SGrid />
      </GridLayout>
    </>
  );
};
