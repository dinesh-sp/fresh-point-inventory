import { Add } from "@mui/icons-material";
import { GridLayout } from "../../components/common/Layout";
import { PGrid } from "./grid";
import { Button } from "@mui/material";
import { useState } from "react";
import { GenForm } from "./action";

export const Product = () => {
  const [action, SetAction] = useState<string>("L");

  const _handleAdd = () => {
    SetAction((value) => {
      if (value === "L") {
        return "A";
      } else {
        return "L";
      }
    });
  };
  return (
    <>
      {action === "L" ? (
        <>
          <GridLayout
            title="Product"
            action={
              <Button
                className="btn add"
                variant="contained"
                startIcon={<Add />}
                onClick={_handleAdd}
              >
                Add Product
              </Button>
            }
          >
            <PGrid />
          </GridLayout>
        </>
      ) : (
        <>
          <GenForm _handleClose={_handleAdd} />
        </>
      )}
    </>
  );
};
