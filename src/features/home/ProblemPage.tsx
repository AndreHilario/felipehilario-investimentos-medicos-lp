import {
    Box,
    Typography,
    Container,
    Stack,
    useTheme,
    Divider,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const ProblemPage = () => {
    const theme = useTheme();

    const entregas = [
        "5 a 8 reuniões iniciais estratégicas",
        "Apoio de especialistas (seguros, internacional, crédito, renda variável, consórcio, planejamento)",
        "Mapa completo da vida financeira atual",
        "Simulações claras de carteira",
        "Projeção objetiva de quando pode desacelerar ou aposentar",
        "Revisões estratégicas a cada 2–3 meses",
        "Suporte direto via WhatsApp",
    ];

    const garantias = [
        "Fluxo claro",
        "Proteções estruturadas",
        "Estratégia definida",
        "Objetivos financeiros estabelecidos",
    ];

    const gradient =
        "linear-gradient(135deg, rgb(82, 214, 250) 0%, rgb(82, 255, 125) 100%)";

    return (
        <Box
            sx={{
                py: { xs: 6, md: 10 },
                background: `linear-gradient(
                    180deg,
                    ${theme.palette.background.default} 0%,
                    ${theme.palette.background.paper} 100%
                )`,
            }}
        >
            <Container maxWidth="xl">
                <Stack spacing={8}>

                    <Stack spacing={3} textAlign="center">
                        <Typography
                            fontSize="0.85rem"
                            fontWeight={700}
                            letterSpacing={2}
                            color="text.secondary"
                        >
                            O QUE É, NA PRÁTICA
                        </Typography>

                        <Typography
                            fontSize={{ xs: "1.8rem", md: "2.5rem" }}
                            fontWeight={700}
                            lineHeight={1.2}
                        >
                            Uma{" "}
                            <Box
                                component="span"
                                sx={{
                                    background: gradient,
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                assessoria financeira 1:1
                            </Box>{" "}
                            contínua e personalizada, focada em planejamento
                            de vida — não em produtos.
                        </Typography>
                    </Stack>

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            gap: { xs: 6, md: 6 },
                        }}
                    >
                        <Box
                            flex={1}
                            sx={{
                                p: { xs: 4, md: 5 },
                                borderRadius: 5,
                                background: "white",
                                boxShadow: "0 20px 60px rgba(0,0,0,0.06)",
                            }}
                        >
                            <Typography
                                fontSize="0.9rem"
                                fontWeight={700}
                                letterSpacing={1}
                                color="text.secondary"
                                mb={3}
                            >
                                VOCÊ RECEBE
                            </Typography>

                            <Box
                                sx={{
                                    display: "grid",
                                    gridTemplateColumns: {
                                        xs: "1fr",
                                        md: "1fr 1fr",
                                    },
                                    gap: 3,
                                }}
                            >
                                {entregas.map((item, index) => (
                                    <Stack
                                        key={index}
                                        direction="row"
                                        spacing={2}
                                        alignItems="flex-start"
                                    >
                                        <CheckCircleOutlineIcon
                                            sx={{
                                                color:
                                                    theme.palette.primary.main,
                                                mt: "3px",
                                            }}
                                        />
                                        <Typography fontSize="0.95rem">
                                            {item}
                                        </Typography>
                                    </Stack>
                                ))}
                            </Box>

                            <Divider sx={{ my: 4 }} />

                            <Stack spacing={1}>
                                <Typography fontWeight={600}>
                                    👉 Você foca na medicina.
                                </Typography>
                                <Typography fontWeight={600}>
                                    👉 A estratégia financeira é construída e acompanhada.
                                </Typography>
                            </Stack>
                        </Box>

                        <Box
                            flex={1}
                            sx={{
                                p: { xs: 4, md: 6 },
                                borderRadius: 6,
                                background: gradient,
                                color: "white",
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "space-between",
                            }}
                        >
                            <Stack spacing={4}>
                                <Stack spacing={2}>
                                    <Typography
                                        fontSize="0.85rem"
                                        fontWeight={700}
                                        letterSpacing={2}
                                        sx={{ opacity: 0.85 }}
                                    >
                                        GARANTIA DE PROCESSO
                                    </Typography>

                                    <Typography
                                        fontSize={{ xs: "1.5rem", md: "2rem" }}
                                        fontWeight={700}
                                    >
                                        Em até 90 dias, você terá:
                                    </Typography>
                                </Stack>

                                <Stack spacing={2}>
                                    {garantias.map((item, index) => (
                                        <Typography
                                            key={index}
                                            fontWeight={600}
                                        >
                                            • {item}
                                        </Typography>
                                    ))}
                                </Stack>

                                <Divider
                                    sx={{
                                        borderColor:
                                            "rgba(255,255,255,0.25)",
                                    }}
                                />

                                <Stack spacing={1}>
                                    <Typography fontWeight={600}>
                                        Se isso não acontecer, o processo não foi concluído.
                                    </Typography>
                                    <Typography sx={{ opacity: 0.9 }}>
                                        Aqui não se promete ganho.
                                    </Typography>
                                    <Typography fontWeight={700}>
                                        Se entrega clareza, estrutura e melhores decisões.
                                    </Typography>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>

                </Stack>
            </Container>
        </Box>
    );
};
