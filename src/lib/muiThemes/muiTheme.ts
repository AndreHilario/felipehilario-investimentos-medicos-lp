import { createTheme } from "@mui/material";
import { muiComponents } from "./themes/muiComponentsTheme";

declare module '@mui/material/styles' {
  interface TypographyVariants {
    blockquote: React.CSSProperties;
    capitalized: React.CSSProperties;
    small: React.CSSProperties;
    tiny: React.CSSProperties;
    letterSpacingVariant: React.CSSProperties;
  }

  interface TypographyVariantsOptions {
    blockquote?: React.CSSProperties;
    capitalized?: React.CSSProperties;
    small?: React.CSSProperties;
    tiny?: React.CSSProperties;
    letterSpacingVariant?: React.CSSProperties;
  }
}

export const muiTheme = createTheme({
  typography: muiComponents.typography,
  components: muiComponents.components,
  palette: muiComponents.palette
});