import { Box, Typography, Container, Paper, Stack, useTheme } from "@mui/material";
import { CTAButton } from "../../components/CTAButton";

export function BlockPage() {
    const items = [
        {
            id: "1",
            title: "Fluxo — Onde você realmente está",
            bullets: [
                "Sua renda média real (sem ilusão)",
                "Seu custo de vida verdadeiro",
                "Quanto pode investir sem comprometer qualidade de vida",
            ],
            marco: "“Agora eu sei exatamente onde estou.”",
            position: "top",
        },
        {
            id: "2",
            title: "Ordem — O que pode dar errado",
            bullets: [
                "Reserva adequada à realidade médica",
                "Proteções pessoais, familiares e profissionais",
                "Separação clara entre segurança e investimento",
            ],
            marco: "“Estou protegido do inesperado.”",
            position: "right",
        },
        {
            id: "3",
            title: "Conquistas — O dinheiro começa a trabalhar",
            bullets: [
                "Investimentos organizados",
                "Cada real com função clara",
                "Estratégias compatíveis com renda irregular",
            ],
            marco: "“Meu dinheiro parou de estar espalhado.”",
            position: "bottom",
        },
        {
            id: "4",
            title: "Objetivos — Quando o trabalho vira opção",
            bullets: [
                "Custo de vida ideal",
                "Renda passiva necessária",
                "Simulações realistas",
                "Data clara de desaceleração ou aposentadoria",
            ],
            marco:
                "“Agora eu sei quando posso parar — e o que fazer até lá.”",
            position: "left",
        },
    ];

    const theme = useTheme();

    const mainGradient =
        "linear-gradient(135deg, rgb(82, 214, 250) 0%, rgb(82, 255, 125) 100%)";

    const radius = 400;

    const getPositionStyles = (position: string) => {
        switch (position) {
            case "top":
                return {
                    top: `calc(50% - ${radius}px)`,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                };
            case "right":
                return {
                    top: "50%",
                    left: `calc(50% + ${radius}px)`,
                    transform: "translate(-50%, -50%)",
                };
            case "bottom":
                return {
                    top: `calc(50% + ${radius}px)`,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                };
            case "left":
                return {
                    top: "50%",
                    left: `calc(50% - ${radius}px)`,
                    transform: "translate(-50%, -50%)",
                };
            default:
                return {};
        }
    };

    const CardItem = ({ item }: { item: any }) => (
        <Paper
            elevation={4}
            sx={{
                p: 3,
                borderRadius: "24px",
                width: { xs: "100%", md: 340 },
                maxWidth: 360,
                backgroundColor: "white",
                transition: "all .3s ease",
                "&:hover": {
                    transform: "translateY(-6px)",
                    boxShadow: "0 12px 30px rgba(0,0,0,.12)",
                },
            }}
        >
            <Typography fontWeight={700} fontSize="1rem" mb={2}>
                {item.id}) {item.title}
            </Typography>

            <Stack spacing={1} mb={2}>
                {item.bullets.map((b: string, i: number) => (
                    <Typography key={i} fontSize="0.85rem">
                        • {b}
                    </Typography>
                ))}
            </Stack>

            <Typography fontWeight={600} fontSize="0.85rem" color="#00c27a">
                📌 Marco: {item.marco}
            </Typography>
        </Paper>
    );

    return (
        <Box
            sx={{
                minHeight: "100vh",
                background: `linear-gradient(
                    180deg,
                    ${theme.palette.background.default} 0%,
                    ${theme.palette.background.paper} 100%
                )`,
                py: 6,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        position: { xs: "static", md: "relative" },
                        width: { xs: "100%", md: 1100 },
                        height: { xs: "auto", md: 1100 },
                        margin: "0 auto",
                        display: "flex",
                        flexDirection: { xs: "column", md: "block" },
                        alignItems: "center",
                        gap: { xs: 4, md: 0 },
                    }}
                >
                    <Box
                        sx={{
                            position: { xs: "static", md: "absolute" },
                            top: { md: "50%" },
                            left: { md: "50%" },
                            transform: { xs: "none", md: "translate(-50%, -50%)" },
                            width: 360,
                            minHeight: 360,
                            borderRadius: "24px",
                            background: mainGradient,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            textAlign: "center",
                            boxShadow: "0 20px 50px rgba(0,0,0,.25)",
                            zIndex: 2,
                            p: 3,
                            order: { xs: 1, md: 0 },
                        }}
                    >
                        <Stack spacing={2} alignItems="center">
                            <Typography
                                fontWeight={800}
                                color="#000"
                                fontSize={{ xs: "1.1rem", md: "1.3rem" }}
                            >
                                COMO O MÉTODO FUNCIONA NA PRÁTICA
                            </Typography>

                            <Typography
                                fontWeight={700}
                                fontSize={{ xs: "0.95rem", md: "1rem" }}
                                color="white"
                            >
                                A maioria dos médicos vive assim:
                            </Typography>

                            <Stack spacing={0.5}>
                                <Typography fontSize="0.85rem" color="black">
                                    • Ganha bem,
                                </Typography>
                                <Typography fontSize="0.85rem" color="black">
                                    • Investe todo mês,
                                </Typography>
                                <Typography fontSize="0.85rem" color="black">
                                    • Mas não sabe responder a pergunta mais importante da carreira:
                                </Typography>
                            </Stack>

                            <Typography
                                fontWeight={600}
                                fontSize={{ xs: "1rem", md: "1.1rem" }}
                                color="white"
                                sx={{ lineHeight: 1.4, fontStyle: "italic" }}
                            >
                                “Quantos anos ainda preciso trabalhar nesse ritmo?”
                            </Typography>

                            <Typography
                                fontSize="1.05rem"
                                fontWeight={800}
                                color="black"
                            >
                                O método F.O.C.O.® resolve isso em quatro etapas claras
                            </Typography>
                        </Stack>
                    </Box>

                    {items.map((item) => {
                        const positionStyles = getPositionStyles(item.position);

                        return (
                            <Box
                                key={item.id}
                                sx={{
                                    position: { xs: "static", md: "absolute" },
                                    top: { md: positionStyles.top },
                                    left: { md: positionStyles.left },
                                    transform: { md: positionStyles.transform },
                                    order: { xs: 2, md: 0 },
                                    width: { xs: "100%", md: "auto" },
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <CardItem item={item} />
                            </Box>
                        );
                    })}

                    <Box
                        sx={{
                            display: { xs: "none", md: "block" },
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            width: 800,
                            height: 800,
                            transform: "translate(-50%, -50%)",
                            borderRadius: "50%",
                            border: "2px dashed rgba(255,255,255,0.35)",
                            zIndex: 1,
                        }}
                    />
                </Box>
            </Container>

            <Box sx={{ mt: 6, textAlign: "center" }}>
                <CTAButton
                    text="Quero construir esse plano"
                    message="Olá Felipe! Quero construir esse plano baseado no F.O.C.O."
                />
            </Box>
        </Box>
    );
}