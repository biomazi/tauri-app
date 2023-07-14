import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./config/theme";
import Tauri from "./Tauri";
import { useEffect } from "react";
import { SnackbarProvider } from "notistack";

function App() {
  useEffect(() => {
    // scroll to top on page refresh
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <SnackbarProvider maxSnack={5}>
        <Tauri />
        <CssBaseline />
        <MainPage />
      </SnackbarProvider>
    </ThemeProvider>
  );
}

export default App;
