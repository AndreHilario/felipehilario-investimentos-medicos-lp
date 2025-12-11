import { Button, Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
type ScheduleButtonProps = {
  text: string;
  onClick?: () => void; // opcional, caso queira passar ação
};

export const ScheduleButton: React.FC<ScheduleButtonProps> = ({ text }) => {
  const theme = useTheme(); // Hook para acessar o tema e cores configuradas
  const navigate = useNavigate();

  function redirect() {
    navigate("/agendamento");
  }
  return (
    <Button
      variant="contained"
      onClick={redirect}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: theme.spacing(2, 4), // Espaçamento interno
        fontSize: "18px", // Tamanho da fonte
        fontWeight: "bold", // Negrito
        textTransform: "none", // Sem capitalizar todas as letras
        borderRadius: "8px", // Bordas arredondadas
        background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Gradiente Azul > Verde
        color: "#fff", // Texto branco
        transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out", // Suaviza a animação de hover
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra inicial
        "&:hover": {
          transform: "scale(1.05)", // Leve aumento ao passar o mouse
          boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // Sombra ao passar o mouse
        },
      }}
    >
      {text}
      <Box
        component="span"
        sx={{
          fontSize: "1.5rem", // Tamanho aumentado para o ícone
          marginLeft: theme.spacing(1), // Espaço entre o texto e o ícone
          transition: "transform 0.2s ease", // Animação no ícone
          "&:hover": {
            transform: "translateX(5px)", // Move o ícone para a direita no hover
          },
        }}
      >
        →
      </Box>
    </Button>
  );
};