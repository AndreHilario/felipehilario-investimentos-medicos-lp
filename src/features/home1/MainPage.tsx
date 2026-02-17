import { Box, Typography, Container, Paper, Chip, useTheme } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { ScheduleButton } from "../../components/ScheduleButton";

export function MainPage() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background?.default,
                maxHeight: "120vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: theme.spacing(4),
            }}
        >
            <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
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
                                Exclusivo para Médicos Especialistas
                            </Typography>
                        }
                        sx={{
                            height: "auto",
                            py: 1,
                            px: 2,
                        }}
                    />
                </Box>
                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        textAlign: "center",
                        mb: theme.spacing(2),
                        lineHeight: 1.2,
                        fontSize: {
                            xs: '1.4rem',
                            sm: '1.5rem',
                            md: '2rem',
                            lg: '2.5rem',
                        },
                    }}
                >
                    O Plano de{" "}
                    <Box
                        component="span"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 70%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        30 Minutos{" "}
                    </Box>

                    que                     <br />Médicos Estão Usando Para{" "}
                    <Box
                        component="span"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Trabalhar Menos
                    </Box>{" "}
                    <Box
                        component="span"
                    >
                        Sem Perder Renda
                    </Box>
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        textAlign: "center",
                        mb: theme.spacing(4),
                        maxWidth: "md",
                        mx: "auto",
                        fontSize: {
                            xs: '0.9rem',
                            sm: '1rem',
                            lg: '1rem',
                        },
                    }}
                >
                    Diagnóstico Personalizado: Descubra Como Seu Patrimônio Pode Gerar a Liberdade que Você Merece
                </Typography>

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
                    <Typography variant="body1"
                        sx={{
                            fontSize: {
                                xs: '0.9rem',
                                sm: '1rem',
                                textAlign: "center"
                            }
                        }}
                    >
                        Em{" "}
                        <Box
                            component="span"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                            }}
                        >
                            30 minutos
                        </Box>
                        ,  um de nossos estrategistas especializados em resultados financeiros para médicos de alta performance irá desenhar um{" "}
                        <Box
                            component="span"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                            }}
                        >
                            plano personalizado e validado
                        </Box>{" "}
                        para reorganizar seus investimentos e conduzi-los para os seus{" "}
                        <Box
                            component="span"
                            sx={{
                                color: theme.palette.secondary.main,
                                fontWeight: 600,
                            }}
                        >
                            objetivos reais.
                        </Box>
                    </Typography>
                </Paper>

            </Container>
            <ScheduleButton text={"Quero Agendar Uma Sessão"} />
            <Typography
                component="span"
                maxWidth={"md"}
                sx={{
                    color: theme.palette.text.secondary,
                    textAlign: "center",
                    mt: 2,
                    px: 2,
                    fontSize: {
                        xs: '0.8rem',
                        sm: '0.9rem',
                    }
                }}
            >
                Você vai preenhcer alguns dados simples e um especialista treinado vai entrar em contato com você
                para marcar seu diagnóstico.
            </Typography>{" "}
        </Box>
    );
}