import {
    Box,
    Typography,
    Container,
    Stack,
    Accordion,
    AccordionSummary,
    AccordionDetails,
    useTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CTAButton } from "../../components/CTAButton";

export const QuestionsFAQPage = () => {
    const theme = useTheme();

    const perguntas = [
        {
            pergunta: "Isso toma meu tempo?",
            resposta:
                "Não. O processo é desenhado para médicos ocupados.",
        },
        {
            pergunta: "Você decide por mim?",
            resposta:
                "Não. Você terá suporte para tomar boas decisões, mas no final as decisões são todas suas.",
        },
        {
            pergunta: "Funciona se eu já tiver patrimônio?",
            resposta:
                "Especialmente nesses casos. Mas aquele médico que está começando a construir também pode ter acompanhamento.",
        },
        {
            pergunta: "Quanto custa?",
            resposta:
                "Você não paga um boleto pela assessoria. Você escolhe o modelo de remuneração que mais se sentir confortável. Tudo é explicado com clareza nas reuniões.",
        },
        {
            pergunta: "O que mais engloba?",
            resposta:
                "Você terá suporte para tudo que envolve sua vida financeira. Como comprar melhor uma casa, decidir sobre um carro, melhorar plano de saúde, investir nos EUA, entre outras decisões estratégicas.",
        },
    ];

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
            <Container maxWidth="xl">
                <Stack spacing={6}>

                    <Stack spacing={2} textAlign="center">
                        <Typography
                            fontSize={{ xs: "2rem", md: "2.8rem" }}
                            fontWeight={800}
                            lineHeight={1.2}
                        >
                            FAQ –{" "}
                            <Box
                                component="span"
                            >
                                Perguntas frequentes
                            </Box>
                        </Typography>
                    </Stack>

                    <Stack spacing={2}>
                        {perguntas.map((item, index) => (
                            <Accordion
                                key={index}
                                disableGutters
                                elevation={0}
                                sx={{
                                    borderRadius: 3,
                                    border: "1px solid rgba(0,0,0,0.08)",
                                    "&:before": { display: "none" },
                                }}
                            >
                                <AccordionSummary
                                    expandIcon={
                                        <ExpandMoreIcon
                                            sx={{ color: "rgb(15,109,115)" }}
                                        />
                                    }
                                >
                                    <Typography
                                        fontWeight={600}
                                        fontSize="1rem"
                                    >
                                        {item.pergunta}
                                    </Typography>
                                </AccordionSummary>

                                <AccordionDetails>
                                    <Typography
                                        fontSize="0.95rem"
                                        color="text.secondary"
                                    >
                                        {item.resposta}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        ))}
                    </Stack>

                </Stack>
            </Container>
            <Box sx={{ mt: 6, textAlign: "center" }}>
                <CTAButton
                    text="Quero saber quando posso desacelerar com segurança"
                    message="Olá Felipe! Quero saber quando posso desacelerar com segurança"
                />
            </Box>
        </Box>
    );
};
