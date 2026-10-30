import { useState } from "react";
import { Button } from "@mui/material";
import { GridLayout } from "../../components/common/Layout";
import { Add } from "@mui/icons-material";
import { CTGrid } from "./grid";
import { CtgAdd } from "./action";

export const Category_type = () => {
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
          {" "}
          <GridLayout
            title="Category Type"
            action={
              <Button
                className="btn add"
                variant="contained"
                startIcon={<Add />}
                onClick={_handleAdd}
              >
                Add Category Type
              </Button>
            }
          >
            <CTGrid />
          </GridLayout>
        </>
      ) : (
        <>
          {" "}
          <CtgAdd _handleClose={_handleAdd} />
        </>
      )}
    </>
  );
};
