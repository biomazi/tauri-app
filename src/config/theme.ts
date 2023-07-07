import { createTheme, responsiveFontSizes } from "@mui/material";

export const defaultTheme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          "&.Mui-disabled": {
            backgroundColor: "#F0F1F4",
          },
        },
      },
    },
  },
});
