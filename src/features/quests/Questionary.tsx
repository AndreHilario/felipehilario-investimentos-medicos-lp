import React, { useState } from "react";
import {
    Container,
    Box,
    Typography,
    Card,
    CardContent,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    Button,
    Slider,
    Divider,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { sendToGoogleSheet } from "../../services/GoogleSheets";

export interface FormDataSheets {
    investAmount:
    | "ate_300k"
    | "300k_a_1m"
    | "1m_a_3m"
    | "acima_3m"
    | "";
    goal:
    | "reduzir_plantoes"
    | "manutencao_protecao"
    | "aposentadoria_renda_passiva"
    | "organizacao_financeira"
    | "";
    challenge: string;
    urgency: number;
    fullName: string;
    whatsapp: string;
}

const PageContainer = styled(Container)(() => ({
    minHeight: "100vh",
    background: `linear-gradient(
        180deg,
        #FFF 0%,
        #dbffff 100%
    )`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    paddingBottom: 40,
}));

const StyledCard = styled(Card)(() => ({
    borderRadius: 16,
    boxShadow: "0px 15px 50px rgba(0,0,0,0.06)",
    maxWidth: 720,
    width: "100%",
}));

export default function FinancialForm() {
    const navigate = useNavigate();

    const [data, setData] = useState<FormDataSheets>({
        investAmount: "",
        goal: "",
        challenge: "",
        urgency: 5,
        fullName: "",
        whatsapp: "",
    });

    const handleChange =
        (field: keyof FormDataSheets) =>
            (event: React.ChangeEvent<HTMLInputElement>) => {
                setData((prev) => ({
                    ...prev,
                    [field]: event.target.value,
                }));
            };

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, "");
        const limited = digits.slice(0, 11);

        if (limited.length <= 2) {
            return `(${limited}`;
        }

        if (limited.length <= 7) {
            return `(${limited.slice(0, 2)}) ${limited.slice(2)}`;
        }

        return `(${limited.slice(0, 2)}) ${limited.slice(2, 3)} ${limited.slice(
            3,
            7
        )}-${limited.slice(7)}`;
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const formatted = formatPhone(event.target.value);

        setData((prev) => ({
            ...prev,
            whatsapp: formatted,
        }));
    };



    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await sendToGoogleSheet(data);
        navigate("/obrigado");
    };

    return (
        <PageContainer maxWidth={false}>
            <StyledCard>
                <CardContent>
                    <Box mb={4}>
                        <Typography
                            variant="h4"
                            fontWeight={700}
                            color="#0D2B45"
                            gutterBottom
                            textAlign={"center"}
                        >
                            Análise para Planejamento Patrimonial Estratégico
                        </Typography>

                        <Typography variant="body1" color="text.secondary" textAlign={"center"}>
                            Atendimento exclusivo e personalizado de acordo com sua necessidade.
                        </Typography>
                    </Box>

                    <form onSubmit={handleSubmit}>
                        <Box mb={5}>
                            <Typography
                                variant="h5"
                                fontWeight={600}
                                color="#0D2B45"
                                gutterBottom
                            >
                                1. Quanto você já possui investido ou disponível para investir nos seus objetivos?
                            </Typography>

                            <FormControl fullWidth>
                                <RadioGroup
                                    value={data.investAmount}
                                    onChange={handleChange("investAmount")}
                                    sx={{
                                        "& .MuiFormControlLabel-root": {
                                            padding: "8px 12px",
                                            borderRadius: 8,
                                            transition: "0.2s",
                                            "&:hover": {
                                                backgroundColor: "#F1F5F9",
                                            },
                                        },
                                    }}
                                >
                                    <FormControlLabel
                                        value="ate_300k"
                                        control={<Radio />}
                                        label="Até R$ 300.000"
                                    />
                                    <FormControlLabel
                                        value="300k_a_1m"
                                        control={<Radio />}
                                        label="De R$ 300.001 a R$ 1.000.000"
                                    />
                                    <FormControlLabel
                                        value="1m_a_3m"
                                        control={<Radio />}
                                        label="De R$ 1.000.001 a R$ 3.000.000"
                                    />
                                    <FormControlLabel
                                        value="acima_3m"
                                        control={<Radio />}
                                        label="Acima de R$ 3.000.000"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Box>

                        <Divider sx={{ mb: 5 }} />

                        <Box mb={5}>
                            <Typography
                                variant="h5"
                                fontWeight={600}
                                color="#0D2B45"
                                gutterBottom
                            >
                                2. Qual das seguintes metas financeiras melhor descreve seu objetivo para os próximos anos?
                            </Typography>

                            <FormControl fullWidth>
                                <RadioGroup
                                    value={data.goal}
                                    onChange={handleChange("goal")}
                                >
                                    <FormControlLabel
                                        value="reduzir_plantoes"
                                        control={<Radio />}
                                        label="Reduzir carga de plantões"
                                    />
                                    <FormControlLabel
                                        value="manutencao_protecao"
                                        control={<Radio />}
                                        label="Manutenção e proteção do patrimônio construído"
                                    />
                                    <FormControlLabel
                                        value="aposentadoria_renda_passiva"
                                        control={<Radio />}
                                        label="Garantir aposentadoria através de renda passiva de investimentos"
                                    />
                                    <FormControlLabel
                                        value="organizacao_financeira"
                                        control={<Radio />}
                                        label="Se organizar financeiramente"
                                    />
                                </RadioGroup>
                            </FormControl>
                        </Box>

                        <Divider sx={{ mb: 5 }} />

                        <Box mb={5}>
                            <Typography
                                variant="h5"
                                fontWeight={600}
                                color="#0D2B45"
                                gutterBottom
                            >
                                3. Qual é o principal desafio que tem te impedido de alcançar esse objetivo?
                            </Typography>

                            <TextField
                                fullWidth
                                multiline
                                minRows={4}
                                placeholder="Ex.: falta de tempo, excesso de informações desconectadas, ausência de estratégia personalizada..."
                                value={data.challenge}
                                onChange={handleChange("challenge")}
                            />
                        </Box>

                        <Divider sx={{ mb: 5 }} />

                        <Box mb={5}>
                            <Typography
                                variant="h5"
                                fontWeight={600}
                                color="#0D2B45"
                                gutterBottom
                            >
                                4. Em uma escala de 0 a 10, qual a urgência em resolver esse problema?
                            </Typography>

                            <Slider
                                value={data.urgency}
                                onChange={(_, value) =>
                                    typeof value === "number" &&
                                    setData((prev) => ({ ...prev, urgency: value }))
                                }
                                min={0}
                                max={10}
                                step={1}
                                marks
                                valueLabelDisplay="off"
                                sx={{
                                    mt: 2,
                                    "& .MuiSlider-thumb": {
                                        backgroundColor: "#0D2B45",
                                    },
                                    "& .MuiSlider-track": {
                                        backgroundColor: "#0D2B45",
                                    },
                                }}
                            />

                            <Box textAlign="center" mt={2}>
                                <Typography
                                    variant="h4"
                                    fontWeight={700}
                                    color="#0D2B45"
                                >
                                    {data.urgency}
                                </Typography>
                            </Box>

                            <Box mt={2}>
                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    <Box component="span" fontWeight={600} color="#0D2B45">
                                        0–4:
                                    </Box>{" "}
                                    Posso esperar, ainda não é prioridade máxima.
                                </Typography>

                                <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                                    <Box component="span" fontWeight={600} color="#0D2B45">
                                        5–8:
                                    </Box>{" "}
                                    É importante, mas posso me planejar com calma.
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    <Box component="span" fontWeight={600} color="#0D2B45">
                                        9–10:
                                    </Box>{" "}
                                    Preciso resolver agora, a situação está me gerando angústia ou me impedindo de progredir.
                                </Typography>
                            </Box>

                        </Box>

                        <Divider sx={{ mb: 5 }} />

                        <Box mb={4}>
                            <Typography
                                variant="h5"
                                fontWeight={600}
                                color="#0D2B45"
                                gutterBottom
                                mb={2}
                            >
                                5. Dados para contato
                            </Typography>

                            <TextField
                                fullWidth
                                label="Nome"
                                sx={{ mb: 3 }}
                                value={data.fullName}
                                onChange={handleChange("fullName")}
                                required
                                inputProps={{
                                    maxLength: 60,
                                }}
                            />

                            <TextField
                                fullWidth
                                label="WhatsApp"
                                placeholder="(11) 9 9999-9999"
                                value={data.whatsapp}
                                onChange={handlePhoneChange}
                                required
                                inputProps={{
                                    inputMode: "numeric",
                                    maxLength: 16,
                                }}
                            />
                        </Box>

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{
                                py: 1.6,
                                fontWeight: 600,
                                fontSize: "1rem",
                                backgroundColor: "#0D2B45",
                                "&:hover": {
                                    backgroundColor: "#081E30",
                                },
                            }}
                        >
                            Enviar
                        </Button>

                        <Button
                            fullWidth
                            variant="contained"
                            onClick={() => navigate("/")}
                            sx={{
                                py: 1.6,
                                mt: 1,
                                fontWeight: 600,
                                color: "#000",
                                fontSize: "1rem",
                                backgroundColor: "#ffffff",
                                "&:hover": {
                                    backgroundColor: "#bbe1ff",
                                },
                            }}
                        >
                            Voltar
                        </Button>
                    </form>
                </CardContent>
            </StyledCard>
        </PageContainer>
    );
}
