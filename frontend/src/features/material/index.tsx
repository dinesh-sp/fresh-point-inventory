import { Add } from "@mui/icons-material";
import { GridLayout } from "../../components/common/Layout";
import { MGrid } from "./grid";
import { Button } from "@mui/material";
import { useState } from "react";
import { FormGrid } from "./action";

export const Material = () => {
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
            title="Material"
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
                Add Material
              </Button>
            }
          >
            <MGrid />
          </GridLayout>
        </>
      ) : (
        <>
          <FormGrid _handleClose={_handleAdd} />
        </>
      )}
    </>
  );
};
