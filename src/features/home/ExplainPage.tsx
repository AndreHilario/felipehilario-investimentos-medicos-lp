import {
    Box,
    Typography,
    Container,
    Stack,
} from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CloseIcon from "@mui/icons-material/Close";

export const ExplainPage = () => {

    const paraQuemE = [
        "Médicos que ganham bem, mas vivem na incerteza",
        "Médicos com patrimônio construído, mas sem estratégia",
        "Médicos que querem trabalhar por escolha, não por obrigação",
        "Médicos cansados de produtos soltos e promessas vazias",
        "Médicos que não têm tempo para estudar investimentos",
    ];

    const paraQuemNaoE = [
        "Não é para quem quer “dica quente”",
        "Não é para quem busca aposta ou milagre",
        "Não é para quem não quer encarar números reais",
    ];

    return (
        <Box
            sx={{
                py: { xs: 3, md: 5 },
            }}
        >
            <Container maxWidth="xl">
                <Stack spacing={3}>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: { xs: "column", md: "column" },
                            borderRadius: 4,
                            overflow: "hidden",
                            boxShadow: "0 10px 40px rgba(0,0,0,0.05)",
                        }}
                    >
                        <Box
                            sx={{
                                flex: 1,
                                p: { xs: 4, md: 6 },
                                backgroundColor: "rgb(168, 253, 178)",
                                color: "white",
                            }}
                        >
                            <Stack spacing={4}>
                                <Typography
                                    fontSize={{ xs: "1.4rem", md: "1.8rem" }}
                                    fontWeight={700}
                                >
                                    Para quem é
                                </Typography>

                                <Stack spacing={3}>
                                    {paraQuemE.map((item, index) => (
                                        <Stack
                                            key={index}
                                            direction="row"
                                            spacing={2}
                                            alignItems="flex-start"
                                        >
                                            <CheckCircleOutlineIcon sx={{color: "green"}}/>
                                            <Typography fontSize="1rem">
                                                {item}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>

                        <Box
                            sx={{
                                flex: 1,
                                p: { xs: 4, md: 6 },
                                backgroundColor: "rgb(252, 199, 199)",
                                color: "white",
                            }}
                        >
                            <Stack spacing={4}>
                                <Typography
                                    fontSize={{ xs: "1.4rem", md: "1.8rem" }}
                                    fontWeight={700}
                                >
                                    Para quem não é
                                </Typography>

                                <Stack spacing={3}>
                                    {paraQuemNaoE.map((item, index) => (
                                        <Stack
                                            key={index}
                                            direction="row"
                                            spacing={2}
                                            alignItems="flex-start"
                                        >
                                            <CloseIcon sx={{color: "red"}} />
                                            <Typography fontSize="1rem">
                                                {item}
                                            </Typography>
                                        </Stack>
                                    ))}
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>

                </Stack>
            </Container>
        </Box>
    );
};
