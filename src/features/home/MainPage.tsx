import { Box, Typography, Container, Paper, Chip, useTheme } from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { ScheduleButton } from "../../components/ScheduleButton";

export function MainPage() {
    const theme = useTheme();
    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background?.default,
                minHeight: "110vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: theme.spacing(4),
            }}
        >
            <Container maxWidth="lg" sx={{ marginBottom: 4 }}>
                <Box sx={{ textAlign: "center", mb: theme.spacing(4) }}>
                    <Chip
                        icon={<CheckCircleOutlineOutlinedIcon />}
                        label="Exclusivo para Médicos Especialistas"
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
                    Construção de{" "}
                    <Box
                        component="span"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 70%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Investimentos
                    </Box>
                    <br />
                    que Trabalham pela sua{" "}
                    <Box
                        component="span"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        Autonomia
                    </Box>{" "}
                    de{" "}
                    <Box
                        component="span"
                    >
                        Tempo e Escolha
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
                    O Seu Plano de Ação para Organizar Seus Investimentos, Gerar Renda Passiva e Romper sua Dependência do
                    Consultório...
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
                        , um de nossos estrategistas especializados em resultados financeiros para médicos de alta performance irá
                        desenhar um{" "}
                        <Box
                            component="span"
                            sx={{
                                color: theme.palette.primary.main,
                                fontWeight: 600,
                            }}
                        >
                            plano personalizado e validado
                        </Box>{" "}
                        para reorganizar seus investimentos, definir o tempo necessário para você trabalhar meio período e assegurar
                        o comando do seu futuro financeiro, tudo isso através da{" "}
                        <Box
                            component="span"
                            sx={{
                                color: theme.palette.secondary.main,
                                fontWeight: 600,
                            }}
                        >
                            Metodologia F.O.O.
                        </Box>{" "}
                        — estrutura que já concedeu autonomia real de tempo e total controle financeiro para diversos médicos como
                        você.
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