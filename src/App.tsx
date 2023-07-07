import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import MainPage from "./pages/MainPage";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./config/theme";
import Tauri from "./Tauri";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // scroll to top on page refresh
    window.history.scrollRestoration = "manual";
  }, []);
  return (
    <ThemeProvider theme={defaultTheme}>
      <Tauri />
      <CssBaseline />
      <MainPage />
    </ThemeProvider>
  );
}

export default App;
