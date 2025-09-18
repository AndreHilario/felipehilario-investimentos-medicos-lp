import { Box, Typography, Container, Paper, Chip, useTheme, Stack } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { ScheduleButton } from "../../components/ScheduleButton";

export function StartPage() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                backgroundImage: theme.palette.background?.default,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: theme.spacing(6),
            }}
        >
            <Container maxWidth="lg">
                {/* Chip de Destaque */}
                <Box sx={{ textAlign: "center", mb: theme.spacing(3) }}>
                    <Chip
                        icon={<CheckCircleOutlineOutlinedIcon />}
                        label={
                            <Typography
                                variant="body1"
                                sx={{
                                    whiteSpace: "normal",
                                    textAlign: "center",
                                    lineHeight: 1.3,
                                }}
                            >
                                Sua Transformação Financeira Começa Agora
                            </Typography>
                        }
                        sx={{
                            height: "auto",
                            py: 1,
                            px: 2,
                        }}
                    />
                </Box>

                {/* Título Principal */}
                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        textAlign: "center",
                        mb: theme.spacing(3),
                        lineHeight: 1.2,
                        fontWeight: 700,
                        fontSize: {
                            xs: "1.8rem",
                            sm: "2.2rem",
                            md: "2.8rem",
                        },
                    }}
                >
                    Como seus{" "}
                    <Box
                        component="span"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 70%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        investimentos
                    </Box>{" "}
                    podem trabalhar pela sua{" "}
                    <Box
                        component="span"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        autonomia
                    </Box>
                </Typography>

                {/* Card central */}
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: theme.spacing(3), sm: theme.spacing(4), md: theme.spacing(5) },
                        mx: "auto",
                        cursor: "pointer",
                        transition: "transform 0.3s ease, box-shadow 0.3s ease", // Propriedades que serão animadas
                        '&:hover': {
                            transform: "translateY(-8px)", // Leve movimento para cima
                            boxShadow: `0px 8px 16px ${theme.palette.grey[300]}`, // Sombra mais intensa
                        },
                        '&:active': {
                            transform: "scale(0.9)", // Pequeno efeito de "aperto" ao clicar
                        }
                    }}
                >
                    <Typography
                        sx={{
                            fontSize: { xs: "0.95rem", sm: "1rem" },
                            lineHeight: 1.6,
                            color: "text.secondary",
                            mb: 4,
                            textAlign: "center"
                        }}
                    >
                        Não deixe mais um ano passar com seus investimentos
                        trabalhando abaixo do potencial. Agende sua sessão
                        estratégica gratuita e descubra como transformar seu
                        patrimônio em uma máquina de gerar renda passiva.
                    </Typography>

                    {/* Botão CTA */}
                    <Box sx={{ display: "flex", justifyContent: "center" }}>
                        <ScheduleButton text="Agendar Minha Sessão Estratégica" />
                    </Box>

                    {/* Lista de benefícios */}
                    <Stack
                        direction="row"
                        spacing={4}
                        justifyContent="center"
                        flexWrap="wrap"
                        sx={{ mt: 5, color: "#6B7280", fontSize: "0.9rem" }}
                    >
                        {["100% Gratuito", "30 Minutos", "Plano Personalizado"].map(
                            (item, idx) => (
                                <Typography
                                    key={idx}
                                    component="span"
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        "&::before": {
                                            content: "''",
                                            display: "inline-block",
                                            width: "8px",
                                            height: "8px",
                                            backgroundColor: theme.palette.secondary.main,
                                            borderRadius: "50%",
                                            marginRight: "8px",
                                        },
                                    }}
                                >
                                    {item}
                                </Typography>
                            )
                        )}
                    </Stack>
                </Paper>
            </Container>
        </Box>
    );
}
