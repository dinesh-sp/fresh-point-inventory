import { Button } from "@mui/material";
import { GridLayout } from "../../components/common/Layout";
import { Add } from "@mui/icons-material";
import { PGrid } from "./grid";
import { ProdTypAdd } from "./action";
import { useState } from "react";

export const Product_type = () => {
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
            title="Product Type"
            action={
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
                Add Product Type
              </Button>
            }
          >
            <PGrid />
          </GridLayout>
        </>
      ) : (
        <>
          <ProdTypAdd _handleClose={_handleAdd} />
        </>
      )}
    </>
  );
};
