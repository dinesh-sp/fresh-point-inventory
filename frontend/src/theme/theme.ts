import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: { main: "#FFFFFF" },
    secondary: { main: "#0ea5e9" },
    background: { default: "#f5f6fa" },
    text: { primary: "#000000", secondary: "#000000", disabled: "#808080" },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          // borderRadius: 8,
          fontWeight: 600,
          paddingLeft: "20px",
          paddingRight: "20px",
        },

        containedPrimary: {
          backgroundColor: "#FFFFFF",
          color: "#000000",

          "&:hover": {
            backgroundColor: "#f0f0f0",
          },
        },

        containedSecondary: {
          backgroundColor: "#0ea5e9",
          color: "#FFFFFF",

          "&:hover": {
            backgroundColor: "#0284c7",
          },
        },

        outlinedPrimary: {
          borderColor: "#FFFFFF",
          color: "#000000",
        },

        outlinedSecondary: {
          borderColor: "#0ea5e9",
          color: "#0ea5e9",
        },
      },
    },
  },
  shape: {
    // borderRadius: 10,
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  },
});
