import { Box, Container, Divider } from "@mui/material";
import { GridLayout } from "../../components/common/Layout";
import { CfgList } from "./List";

export const Config = () => {
  return (
    <>
      <GridLayout title="Config">
        <Divider />
        <Box sx={{ py: 4 }}>
          <CfgList />
        </Box>
      </GridLayout>
    </>
  );
};
