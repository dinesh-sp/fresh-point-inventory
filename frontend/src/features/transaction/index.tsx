import { Button } from "@mui/material";
import { GridLayout } from "../../components/common/Layout";
import { Receipt } from "@mui/icons-material";

export const Transaction = () => {
  return (
    <>
      <GridLayout title="Transaction"
      action={ <Button className="btn add"
            variant="contained"
            startIcon={<Receipt />}
            // onClick={handleAddCaliber}
           
          >
            Recent Transaction
          </Button>}>
          <></>
      </GridLayout>
    </>
  );
};
