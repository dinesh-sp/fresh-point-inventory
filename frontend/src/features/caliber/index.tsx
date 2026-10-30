import { Button } from "@mui/material";
import { List } from "./list";
import { Add } from "@mui/icons-material";
import { GridLayout } from "../../components/common/Layout";
import { useState } from "react";
import { ClbrAdd } from "./action";

export const Caliber = () => {
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
            title="Caliber Registration"
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
                Add Caliber
              </Button>
            }
          >
            <List />
          </GridLayout>
        </>
      ) : (
        <>
          <ClbrAdd _handleClose={_handleAdd} />
        </>
      )}
    </>
  );
};
