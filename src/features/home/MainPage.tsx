import {
    Box,
    Typography,
    Container,
    Stack,
    Chip,
    useTheme,
} from "@mui/material";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";
import { CTAButton } from "../../components/CTAButton";

export function MainPage() {
    const theme = useTheme();

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: `linear-gradient(
          180deg,
          ${theme.palette.background.default} 0%,
          ${theme.palette.background.paper} 100%
        )`,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                py: { xs: 2, md: 4 },
                px: 2,
            }}
        >
            <Container maxWidth="lg">
                <Box sx={{ textAlign: "center", mb: 4 }}>
                    <Chip
                        label="Exclusivo para Médicos Especialistas"
                        sx={{
                            fontWeight: 600,
                            px: 1,
                            py: 1,
                            height: "auto",
                            borderRadius: 5,
                            alignItems: "flex-start",
                            backgroundColor: theme.palette.background.paper,
                            border: `1px solid ${theme.palette.divider}`,

                            "& .MuiChip-label": {
                                whiteSpace: "normal",
                                display: "block",
                                textAlign: "center",
                                lineHeight: 1.3,
                                paddingTop: "3px",
                                paddingBottom: "3px",
                            },
                        }}
                    />
                </Box>


                <Typography
                    variant="h1"
                    component="h1"
                    sx={{
                        textAlign: "center",
                        mb: 3,
                        lineHeight: 1.2,
                        fontWeight: 700,
                        letterSpacing: "-0.02em",
                        fontSize: {
                            xs: "1.6rem",
                            sm: "2rem",
                            md: "2.6rem",
                            lg: "3rem",
                        },
                    }}
                >
                    O dia em que o trabalho deixa de ser{" "}
                    <Box
                        component="span"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.secondary.main} 30%, ${theme.palette.primary.main} 70%)`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        obrigação{" "}
                    </Box>
                    e vira{" "}
                    <Box
                        component="span"
                        sx={{
                            background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                        }}
                    >
                        escolha.
                    </Box>
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        textAlign: "center",
                        mb: 6,
                        maxWidth: 800,
                        mx: "auto",
                        lineHeight: 1.6,
                        fontSize: {
                            xs: "0.95rem",
                            sm: "1.05rem",
                        },
                    }}
                >
                    Uma assessoria financeira feita para médicos que querem saber{" "}
                    <Box component="span" sx={{ fontWeight: 800 }}>
                        exatamente quando podem desacelerar,
                    </Box>{" "}
                    sem estudar investimentos, sem depender de gerente de banco e sem decisões no achismo.
                </Typography>

                <Box
                    sx={{
                        maxWidth: 1000,
                        mx: "auto",
                        p: { xs: 3, md: 3 },
                        borderRadius: 4,
                        backgroundColor: "rgba(255,255,255,0.6)",
                        backdropFilter: "blur(8px)",
                        border: `1px solid ${theme.palette.divider}`,
                        boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                    }}
                >
                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 600,
                            mb: 4,
                            textAlign: "center",
                        }}
                    >
                        Ao longo desta página, você vai entender:
                    </Typography>

                    <Stack spacing={1}>
                        {[
                            "Por que ganhar bem não garante liberdade",
                            "O erro silencioso que faz médicos trabalharem até mais tarde do que precisam",
                            "Como transformar investimentos espalhados em uma estratégia clara de vida",
                            "E como saber, com números, quando você pode reduzir o ritmo ou parar",
                        ].map((item, index) => (
                            <Box
                                key={index}
                                sx={{
                                    display: "flex",
                                    alignItems: "flex-start",
                                    p: 1.5,
                                    borderRadius: 2,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        backgroundColor: theme.palette.action.hover,
                                        transform: "translateX(4px)",
                                    },
                                }}
                            >
                                <CheckCircleOutlineOutlinedIcon
                                    sx={{
                                        color: theme.palette.primary.main,
                                        mr: 1.5,
                                        mt: "3px",
                                    }}
                                />
                                <Typography variant="body1" sx={{ lineHeight: 1.6 }}>
                                    {item}
                                </Typography>
                            </Box>
                        ))}
                    </Stack>

                    <Box sx={{ mt: 5, textAlign: "center" }}>
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 800,
                                lineHeight: 1.4,
                            }}
                        >
                            Não é só sobre rentabilidade.
                        </Typography>

                        <Typography
                            variant="h5"
                            mt={1}
                            sx={{
                                fontWeight: 800,
                                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            É sobre decisão, estratégia e segurança.
                        </Typography>
                    </Box>
                </Box>
            </Container>

            <Box sx={{ mt: 4, textAlign: "center" }}>
                <CTAButton text={"Quero clareza sobre quando posso desacelerar"} message={"Olá Felipe! Quero maior clareza sobre quando posso desacelerar."} />

                <Typography
                    sx={{
                        color: theme.palette.text.secondary,
                        mt: 2,
                        fontSize: {
                            xs: "0.8rem",
                            sm: "0.9rem",
                        },
                    }}
                >
                    (sem compromisso • conversa estratégica)
                </Typography>
            </Box>
        </Box>
    );
}