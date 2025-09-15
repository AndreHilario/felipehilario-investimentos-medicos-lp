import { BrowserRouter as Router } from "react-router-dom";
import { AppRoutes } from "./routes";
import { ContextProvider } from "./contexts/GlobalContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { MuiThemeProvider } from "./providers/MuiThemeProvider";
import ResetStyle from "./styles/ResetStyles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  return (
    <MuiThemeProvider>
      <ResetStyle/>
      <CssBaseline />
      <Router>
        <ToastContainer />
        <ContextProvider>
          <AppRoutes />
        </ContextProvider>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
