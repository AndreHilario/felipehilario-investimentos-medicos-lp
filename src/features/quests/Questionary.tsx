import React, { useMemo, useState } from 'react';
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
    Grid,
    Stepper,
    Step,
    StepLabel,
    StepConnector,
    useMediaQuery,
    Slider
} from '@mui/material';
import Check from '@mui/icons-material/Check';
import { styled, useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { sendToGoogleSheet } from '../../services/GoogleSheets';

// -------- Tipos --------
interface FormData {
    investAmount: 'ate_300k' | '300k_a_1m' | '1m_a_3m' | 'acima_3m' | '';
    goal: 'reduzir_plantoes' | 'manutencao_protecao' | 'aposentadoria_renda_passiva' | 'organizacao_financeira' | '';
    challenge: string;
    urgency: number;
    fullName: string;
    whatsapp: string;
}

// -------- Estilos --------
const StyledContainer = styled(Container)(() => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'linear-gradient(135deg, #a2eafeff 0%, #95ffb0ff 100%)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
}));

const StyledCard = styled(Card)(() => ({
    borderRadius: 12,
    maxHeight: '100vh',
    overflowY: 'auto',
}));

const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
    '&.MuiStepConnector-root': {
        top: 12,
    },
    '& .MuiStepConnector-line': {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : theme.palette.grey[300],
        borderTopWidth: 2,
        borderRadius: 1,
    },
}));

// Ícone do Step: bolinha azul quando ativo, check verde quando completed (nunca mostra check no ativo)
const StepIconRoot = styled('div')<{
    ownerState: { active?: boolean; completed?: boolean };
}>(({ theme, ownerState }) => ({
    backgroundColor: ownerState.active
        ? theme.palette.primary.main
        : theme.palette.mode === 'dark'
            ? theme.palette.grey[700]
            : theme.palette.grey[300],
    zIndex: 1,
    color: '#fff',
    width: 24,
    height: 24,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'all .2s ease',
    ...(ownerState.completed && !ownerState.active && {
        backgroundColor: theme.palette.success.main,
    }),
}));

const CompactFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  alignItems: "flex-start",
  minHeight: "32px", // altura menor
  "& .MuiFormControlLabel-label": {
    fontSize: "0.875rem", // fonte menor
  },
  "& .MuiRadio-root": {
    padding: "4px", // menos espaço no radio
  },
}));

function CustomStepIcon(props: { active?: boolean; completed?: boolean; className?: string }) {
    const { active, completed, className } = props;
    return (
        <StepIconRoot ownerState={{ active, completed }} className={className}>
            {completed && !active ? <Check fontSize="small" /> : <span style={{ fontSize: 12, lineHeight: 1 }}> </span>}
        </StepIconRoot>
    );
}

// -------- Validação simples por etapa --------
function validateStep(stepIndex: number, data: FormData) {
    const errors: Partial<Record<keyof FormData, string>> = {};
    switch (stepIndex) {
        case 0:
            if (!data.investAmount) errors.investAmount = 'Selecione uma faixa de valor.';
            break;
        case 5:
            if (!data.whatsapp) {
                errors.whatsapp = 'Informe seu WhatsApp.';
            } else {
                // Validação simples para BR (apenas dígitos 10-11). Ajuste conforme necessário.
                const digits = data.whatsapp.replace(/\D/g, '');
                if (digits.length < 10 || digits.length > 11) {
                    errors.whatsapp = 'Informe um número válido (DDD + número).';
                }
            }
            break;
        default:
            break;
    }
    return errors;
}

// -------- Componente Principal --------
export default function FinancialForm() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    const steps = useMemo(
        () => [
            'Recursos',
            'Objetivo',
            'Desafio',
            'Urgência',
            'Nome',
            'WhatsApp',
        ],
        []
    );

    const [activeStep, setActiveStep] = useState(0);

    // Completed manual: somente índices menores que o ativo ficam completed
    const isStepCompleted = (index: number) => index < activeStep;

    const [data, setData] = useState<FormData>({
        investAmount: '',
        goal: '',
        challenge: '',
        urgency: 0,
        fullName: '',
        whatsapp: '',
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const handleChange =
        (field: keyof FormData) =>
            (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
                setData((prev) => ({ ...prev, [field]: e.target.value as any }));
                // Limpa erro ao digitar
                setErrors((prev) => ({ ...prev, [field]: undefined }));
            };

    const handleNext = () => {
        const errs = validateStep(activeStep, data);
        setErrors(errs);
        if (Object.keys(errs).length === 0) {
            setActiveStep((prev) => Math.min(prev + 1, steps.length));
        }
    };

    const handleBack = () => {
        setActiveStep((prev) => Math.max(prev - 1, 0));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const errs = validateStep(activeStep, data);
        setErrors(errs);
        if (Object.keys(errs).length > 0) return;

        console.log('Dados enviados:', data);
        await sendToGoogleSheet(data);
        setActiveStep(steps.length);
    };

    const renderStepContent = (index: number) => {
        switch (index) {
            case 0:
                return (
                    <FormControl component="fieldset" fullWidth>
                        <Typography variant="h6" mb={2}>
                            1. Quanto você já possui investido ou disponível para investir nos seus objetivos?
                        </Typography>
                        <RadioGroup
                            name="investAmount"
                            value={data.investAmount}
                            onChange={handleChange('investAmount')}
                        >
                            <CompactFormControlLabel value="ate_300k" control={<Radio />} label="Até R$300.000" />
                            <CompactFormControlLabel value="300k_a_1m" control={<Radio />} label="De R$300.001 a R$1.000.000" />
                            <CompactFormControlLabel value="1m_a_3m" control={<Radio />} label="De R$1.000.001 a R$3.000.000" />
                            <CompactFormControlLabel value="acima_3m" control={<Radio />} label="Acima de R$3.000.001" />
                        </RadioGroup>
                        {errors.investAmount && (
                            <Typography color="error" variant="body2" mt={1}>
                                {errors.investAmount}
                            </Typography>
                        )}
                    </FormControl>
                );
            case 1:
                return (
                    <FormControl component="fieldset" fullWidth>
                        <Typography variant="h6" mb={2}>
                            2. Qual das seguintes metas financeiras melhor descreve seu objetivo para os próximos anos?
                        </Typography>
                        <RadioGroup name="goal" value={data.goal} onChange={handleChange('goal')}>
                            <CompactFormControlLabel value="reduzir_plantoes" control={<Radio />} label="Reduzir carga de plantões" />
                            <CompactFormControlLabel
                                value="manutencao_protecao"
                                control={<Radio />}
                                label="Manutenção e proteção do patrimônio construído"
                            />
                            <CompactFormControlLabel
                                value="aposentadoria_renda_passiva"
                                control={<Radio />}
                                label="Garantir aposentadoria através de renda passiva de investimentos"
                            />
                            <CompactFormControlLabel
                                value="organizacao_financeira"
                                control={<Radio />}
                                label="Se organizar financeiramente"
                            />
                        </RadioGroup>
                        {errors.goal && (
                            <Typography color="error" variant="body2" mt={1}>
                                {errors.goal}
                            </Typography>
                        )}
                    </FormControl>
                );
            case 2:
                return (
                    <Box>
                        <Typography variant="h6" mb={2}>
                            3. Qual é o maior desafio específico que tem te impedido de alcançar esse objetivo?
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            minRows={4}
                            placeholder="Ex.: falta de tempo para gerenciar investimentos, excesso de informações, estratégias genéricas que não funcionam para sua realidade, etc."
                            value={data.challenge}
                            onChange={handleChange('challenge')}
                            error={!!errors.challenge}
                            helperText={errors.challenge}
                        />
                    </Box>
                );
            case 3:
                const marks = Array.from({ length: 11 }, (_, i) => ({
                    value: i,
                    label: String(i),
                }));

                return (
                    <FormControl component="fieldset" fullWidth>
                        <Typography variant="h6" mb={2}>
                            4. Em uma escala de 0 a 10, qual a urgência em resolver esse problema?
                        </Typography>

                        <Slider
                            value={typeof data.urgency === "number" ? data.urgency : 0}
                            onChange={(_, newValue) => {
                                if (typeof newValue === "number") {
                                    setData((prev) => ({ ...prev, urgency: newValue }));
                                }
                            }}
                            step={1}
                            marks={marks}
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                        />

                        {/* Legenda */}
                        <Box mt={2}>
                            <Typography component="ul" variant="body2" sx={{ pl: 2, listStyleType: "disc" }}>
                                <li style={{marginBottom: "10px"}}>0–4 (Posso esperar, ainda não é prioridade máxima)</li>
                                <li style={{marginBottom: "10px"}}>5–8 (É importante, mas posso me planejar com calma)</li>
                                <li style={{marginBottom: "10px"}}>9–10 (Preciso resolver agora, a situação está me gerando angústia ou me impedindo de progredir)</li>
                            </Typography>
                        </Box>

                        {errors.urgency && (
                            <Typography color="error" variant="body2" mt={1}>
                                {errors.urgency}
                            </Typography>
                        )}
                    </FormControl>
                );
            case 4:
                return (
                    <Box>
                        <Typography variant="h6" mb={2}>
                            5. Nome completo
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="Seu nome completo"
                            value={data.fullName}
                            onChange={handleChange('fullName')}
                            error={!!errors.fullName}
                            helperText={errors.fullName}
                        />
                    </Box>
                );
            case 5:
                return (
                    <Box>
                        <Typography variant="h6" mb={2}>
                            6. WhatsApp
                        </Typography>
                        <TextField
                            fullWidth
                            placeholder="(11) 9 9999-9999"
                            value={data.whatsapp}
                            onChange={handleChange('whatsapp')}
                            error={!!errors.whatsapp}
                            helperText={errors.whatsapp || 'Apenas números também são aceitos; validaremos DDD + número.'}
                            inputProps={{ inputMode: 'tel' }}
                        />
                    </Box>
                );
            default:
                return null;
        }
    };

    const isLastStep = activeStep === steps.length - 1;
    const finished = activeStep >= steps.length;
    const navigate = useNavigate();
    return (
        <Box>
            <StyledContainer maxWidth="xl">
                <StyledCard>
                    <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                        <Typography variant="h5" fontWeight={700} gutterBottom>
                            Formulário
                        </Typography>

                        {!finished ? (
                            <form onSubmit={handleSubmit} noValidate>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        flexDirection: isMobile ? 'column' : 'row',
                                        gap: 3,
                                    }}
                                >
                                    {/* Stepper */}
                                    <Box sx={{ minWidth: isMobile ? '100%' : 260 }}>
                                        <Stepper
                                            activeStep={activeStep}
                                            orientation="horizontal"
                                            alternativeLabel
                                            connector={<CustomStepConnector />}
                                            sx={{
                                                flexWrap: "wrap", // permite quebrar linha
                                                "& .MuiStep-root": {
                                                    flexBasis: isMobile ? "30%" : "auto", // 2 por linha no mobile
                                                    flexGrow: 1,
                                                },
                                                "& .MuiStepLabel-label": { fontSize: isMobile ? "0.6rem" : "1rem" },
                                                "& .MuiStepIcon-root": {
                                                    width: isMobile ? 14 : 24,
                                                    height: isMobile ? 14 : 24,
                                                },
                                            }}
                                        >
                                            {steps.map((label, index) => (
                                                <Step key={label} completed={isStepCompleted(index)}>
                                                    <StepLabel StepIconComponent={CustomStepIcon}>{label}</StepLabel>
                                                </Step>
                                            ))}
                                        </Stepper>

                                    </Box>

                                    {/* Conteúdo da etapa */}
                                    <Box sx={{ flex: 1 }}>
                                        {renderStepContent(activeStep)}
                                        <Grid
                                            container
                                            spacing={2}
                                            mt={2}
                                            sx={{
                                                flexDirection: isMobile ? 'row' : 'row', // sempre lado a lado
                                                justifyContent: "space-between",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Button
                                                variant="contained"
                                                onClick={handleBack}
                                                disabled={activeStep === 0}
                                                sx={{ minWidth: 40 }}
                                            >
                                                <ArrowBackIosNewIcon />
                                            </Button>

                                            {/* Avançar ou Enviar */}
                                            {!isLastStep ? (
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    onClick={handleNext}
                                                    sx={{ minWidth: 40 }}
                                                >
                                                    <ArrowForwardIosIcon />
                                                </Button>
                                            ) : (
                                                <Button type="submit" variant="contained" color="primary">
                                                    Enviar
                                                </Button>
                                            )}
                                        </Grid>
                                    </Box>

                                </Box>
                            </form>
                        ) : (
                            <Box textAlign="center" py={4}>
                                <Typography variant="h6" gutterBottom>
                                    Obrigado! Recebemos suas informações.
                                </Typography>
                                <Typography variant="body1" color="text.secondary">
                                    Em breve entraremos em contato pelo WhatsApp informado.
                                </Typography>
                                <Box mt={3}>
                                    <Button variant="contained" onClick={() => setActiveStep(0)}>
                                        Preencher novamente
                                    </Button>
                                    <Button sx={{ marginTop: 3 }} variant="contained" onClick={() => navigate('/')}>
                                        Voltar à tela inicial
                                    </Button>
                                </Box>
                            </Box>
                        )}
                    </CardContent>
                </StyledCard>
            </StyledContainer>
        </Box>
    );
}