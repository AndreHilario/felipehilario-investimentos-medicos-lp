import { muiTheme } from "../lib/muiThemes/muiTheme";
import { ThemeProvider } from "@mui/material";

export const MuiThemeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <ThemeProvider theme={muiTheme}>{children}</ThemeProvider>;
};
