import { Button, Box, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

type ScheduleButtonProps = {
    text: string;
    message: string;
    onClick?: () => void;
};

export const CTAButton: React.FC<ScheduleButtonProps> = ({ text, message }) => {
    const theme = useTheme();
    const navigate = useNavigate();

    function redirect() {
        navigate("/agendamento");
    }
    return (
        <Button
            variant="contained"
            onClick={redirect}
            title={message}
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: theme.spacing(2, 4),
                fontSize: "14px",
                fontWeight: 700,
                textTransform: "none",
                borderRadius: "6px",
                background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                color: "#fff",
                transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
                "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
                },
            }}
        >
            {text}
            <Box
                component="span"
                sx={{
                    fontSize: "1.3rem",
                    marginLeft: theme.spacing(1),
                    transition: "transform 0.2s ease",
                    "&:hover": {
                        transform: "translateX(5px)",
                    },
                }}
            >
            </Box>
        </Button>
    );
};