import { PropsWithChildren } from "react";
import { AppBar, Toolbar, Container, Box } from "@mui/material";

import { TopNavigation } from "./TopNavigation";
import { UserMenu } from "./UserMenu";

export function Layout({ children }: PropsWithChildren) {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        bgcolor: "background.default",
      }}
    >
      <AppBar position="static" elevation={1}>
        <Toolbar>
          <TopNavigation />
          <Box sx={{ flexGrow: 1 }} />
          <UserMenu />
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" sx={{ py: 1, minHeight: "70vh" }}>
        {children}
      </Container>
    </Box>
  );
}
