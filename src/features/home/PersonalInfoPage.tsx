import {
    Box,
    Typography,
    Container,
    Stack,
    Chip,
} from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import IMAGE from "../../assets/img.jpg";
import { CTAButton } from "../../components/CTAButton";

export const PersonalInfoPage = () => {

    return (
        <Box
            sx={{
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                px: 2,
                mb: 4
            }}
        >
            <Container maxWidth="xl">
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: { xs: "column", md: "row" },
                        gap: { xs: 6, md: 10 },
                        alignItems: "center",
                    }}
                >
                    <Box
                        sx={{
                            flex: 1,
                            borderRadius: 6,
                            overflow: "hidden",
                            maxWidth: { md: "500px" },
                        }}
                    >
                        <Box
                            component="img"
                            src={IMAGE}
                            alt="Felipe Hilário"
                            sx={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                                display: "block",
                            }}
                        />
                    </Box>

                    <Stack spacing={4} flex={1}>
                        <Typography
                            fontSize={{ xs: "2rem", md: "3rem" }}
                            fontWeight={800}
                            lineHeight={1.1}
                        >
                            Quem é <br />
                            Felipe Hilario?
                        </Typography>

                        <Chip
                            icon={<StarBorderIcon />}
                            label="Especialista em Mercado Financeiro"
                            sx={{
                                alignSelf: "flex-start",
                                backgroundColor: "#eaeaea",
                                fontWeight: 500,
                            }}
                        />

                        <Stack spacing={3}>
                            <Typography
                                fontSize="1rem"
                                color="text.secondary"
                                lineHeight={1.8}
                            >
                                Sou matemático, com mais de 5 anos de mercado financeiro.
                                Trabalho com médicos porque vejo, diariamente,
                                profissionais brilhantes sendo prejudicados por:
                            </Typography>

                            <Typography
                                fontSize="1rem"
                                color="text.secondary"
                                lineHeight={1.8}
                                component="div"
                            >
                                • falta de tempo,<br />
                                • excesso de informação,<br />
                                • decisões tomadas no impulso,<br />
                                • e um mercado financeiro agressivo que prioriza produto, comissões e não pessoas.
                            </Typography>

                            <Typography
                                fontSize="1rem"
                                color="text.secondary"
                                lineHeight={1.8}
                            >
                                Entrei nesse mercado para fazer diferente:{" "}
                                <Typography
                                    component="span"
                                    fontWeight="bold"
                                >
                                    honestidade, transparência e acompanhamento
                                </Typography>{" "}
                                real de longo prazo.
                            </Typography>

                        </Stack>
                    </Stack>
                </Box>


            </Container>
            <Box sx={{ mt: 6, textAlign: "center" }}>
                <CTAButton
                    text="Quero ter seu acompanhamento"
                    message="Olá Felipe! Quero ter seu acompanhamento"
                />
            </Box>
        </Box>
    );
};
