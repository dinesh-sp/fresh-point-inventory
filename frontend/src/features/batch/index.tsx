import { Button } from "@mui/material";
import { GridLayout } from "../../components/common/Layout";
import { Add } from "@mui/icons-material";
import { BGrid } from "./grid";
import { useState } from "react";
import { GenForm } from "./action";

export const Batch = () => {
  const [action, SetAction] = useState<string>("L");

  const _handleAdd = () => {
    SetAction((value) => (value === "L" ? "A" : "L"));
  };

  return (
    <>
      {action === "L" ? (
        <>
          <GridLayout
            title="Batch"
            action={
              <Button
                className="btn add"
                variant="contained"
                startIcon={<Add />}
                onClick={_handleAdd}
              >
                Add Batch
              </Button>
            }
          >
            <BGrid />
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
