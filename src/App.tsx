import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import DashboardPage from "./pages/DashboardPage";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2",
    },
    secondary: {
      main: "#dc004e",
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashboardPage />
    </ThemeProvider>
  );
}

export default App;
