import { Add } from "@mui/icons-material";
import { GridLayout } from "../../components/common/Layout";
import { ETGrid } from "./grid";
import { Button } from "@mui/material";
import { useState } from "react";
import { ExpnTypAdd } from "./action";

export const Expenses_type = () => {
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
            title="Expenses Type"
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
                Add Expenses Type
              </Button>
            }
          >
            <ETGrid />
          </GridLayout>
        </>
      ) : (
        <>
          <ExpnTypAdd _handleClose={_handleAdd} />
        </>
      )}
    </>
  );
};
