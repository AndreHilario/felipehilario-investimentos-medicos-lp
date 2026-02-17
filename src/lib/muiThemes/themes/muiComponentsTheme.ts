import { createTheme } from "@mui/material";

// 1. Defina as cores da imagem como variáveis para facilitar a referência
const colors = {
  textPrimary: "#263c5d", // Azul escuro/Chumbo para títulos e texto principal
  textSecondary: "#797979", // Cinza para subtítulos
  accentGreen: '#54d67f', // Verde para "Investimentos" e "Tempo e Escolha"
  accentBlue: "#2196F3", // Azul para "Autonomia" e texto destacado
  backgroundLight: "#fff", // Cor de fundo da página
  chipBackground: "#fdf4ceff", // Fundo da tag "Exclusivo"
  chipText: "#424242", // Texto e ícone da tag "Exclusivo"
  whitePaper: "#f1ffff", // Fundo da caixa de informações
};

export const muiComponents = createTheme({
  palette: {
    primary: {
      main: colors.accentBlue,
    },
    secondary: {
      main: colors.accentGreen,
    },
    text: {
      primary: colors.textPrimary,
      secondary: colors.textSecondary,
    },
    background: {
      default: colors.backgroundLight,
      paper: colors.whitePaper,
    },
  },

  typography: {
    fontFamily: "Poppins, sans-serif",
    h1: {
      fontSize: "44px",
      fontWeight: "bold",
      lineHeight: "56px",
      color: colors.textPrimary,
    },
    h2: {
      fontSize: "36px",
      fontWeight: "600",
      lineHeight: "42px",
      color: colors.textPrimary,
    },
    h3: {
      fontSize: "24px",
      fontWeight: "bold",
      lineHeight: "28px",
      color: colors.textPrimary,
    },
    h4: {
      fontSize: "20px",
      fontWeight: "600",
      lineHeight: "24px",
      color: colors.textPrimary,
    },
    h5: {
      fontSize: "18px",
      fontWeight: "bold",
      lineHeight: "22px",
      color: colors.textPrimary,
    },
    h6: {
      fontSize: "16px",
      fontWeight: "600",
      lineHeight: "20px",
      color: colors.textSecondary,
    },
    body1: {
      fontSize: "16px",
      fontWeight: "normal",
      lineHeight: "24px",
      color: colors.textPrimary,
    },
    body2: {
      fontSize: "14px",
      fontWeight: "normal",
      lineHeight: "20px",
      color: colors.textSecondary,
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 8,
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollbarColor: "#7b7b7b #BDBDBD",
          "&::-webkit-scrollbar": {
            width: 10,
            backgroundColor: colors.backgroundLight,
          },
          "&::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#7b7b7b",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#959595",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: "#D4AF37",
          borderRadius: "8px",
          fontSize: "14px",
          fontWeight: "bold",
          textTransform: "none",
          transition: "transform 0.2s ease, background-color 0.2s ease",
          "&:hover": {
            transform: "scale(1.05)",
            backgroundColor: "#D4AF37",
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundColor: colors.whitePaper,
          borderRadius: 16,
          padding: "16px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          backgroundColor: colors.chipBackground,
          color: colors.chipText,
          borderRadius: 16,
          padding: "4px 8px",
        },
        icon: {
          color: colors.accentBlue,
          marginLeft: "-4px",
          marginRight: "4px",
        },
        label: {
          fontSize: "14px",
          fontWeight: 600,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          minHeight: "48px",
          marginBottom: "12px",
        },
        indicator: {
          height: "3px",
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          fontWeight: 700,
          padding: "12px 16px",
          borderRadius: "4px",
          "&.Mui-selected": {
            color: colors.textPrimary,
          },
        },
      },
      defaultProps: {
        disableRipple: true,
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "8px",
          },
        },
      },
    },
  },
});