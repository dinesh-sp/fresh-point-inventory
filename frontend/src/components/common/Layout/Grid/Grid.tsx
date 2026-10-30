import { Container, Paper, Stack, Typography } from "@mui/material";
import { IGridLayout } from "./interface";

export const GridLayout = (props: IGridLayout) => {
  const { title, action, children } = props;
  return (
    <>
      <Container maxWidth="xl">
        <Paper
          elevation={4}
          sx={{
            p: { xs: 2, sm: 3, md: 4 },
            background: "#fafafa",
          }}
        >
          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "stretch", sm: "center" }}
            spacing={2}
            mb={3}
          >
            <Typography
              variant="h5"
              component="h1"
              fontWeight={600}
              color="Secondary"
            >
              {title}
            </Typography>
            {action}
          </Stack>
          {children}
        </Paper>
      </Container>
    </>
  );
};
