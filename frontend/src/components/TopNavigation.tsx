import { Button, Typography, Box } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import { useNavigate, useLocation } from "react-router-dom";
// import { menus } from "./TopMenu.js";
import { Routes } from "../app/routes";
import NavigationMenu from "./NavigationMenu";

export function TopNavigation() {
  const navigate = useNavigate();
  const location = useLocation();

  // const menus = [
  //   {
  //     label: 'Daily Cash Flow',
  //     path: '/daily-cash-flow',
  //   },
  //   {
  //     label: 'Stock',
  //     path: '/stock',
  //   },
  // ];

  return (
    <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
      <ChecklistIcon />

      <Typography
        variant="h6"
        sx={{
          fontWeight: 600,
          mr: 3,
          cursor: "pointer",
        }}
        onClick={() => navigate("/")}
      >
        Inventory Management
      </Typography>

      {Routes.filter((r) => r.handle?.menu).map((menu) => {
        if (menu.handle?.type === "dropdown") {
          return (
            <NavigationMenu
              key={menu.path}
              title={menu.handle.label}
              items={menu.handle.children}
            />
          );
        }

        return (
          <Button
            key={menu.path}
            color="inherit"
            variant={location.pathname === menu.path ? "outlined" : "text"}
            onClick={() => navigate(menu.path!)}
            // sx={{
            //   borderColor: 'white',
            //   color: 'white',
            // }}
          >
            {menu.handle?.label}
          </Button>
        );
      })}
    </Box>
  );
}
