import React, { JSX, SyntheticEvent } from 'react';
import {
    Container,
    Box,
    Typography,
    Card,
    CardContent,
    FormControl,
    FormLabel,
    RadioGroup,
    FormControlLabel,
    Radio,
    TextField,
    Slider,
    Button,
    Grid,
    Stepper,
    Step,
    StepLabel,
    StepConnector,
} from '@mui/material';
import Check from '@mui/icons-material/Check';
import { styled } from '@mui/system';

// --- Tipos de Dados ---
/**
 * Interface para os dados do formulário.
 */
interface FormData {
    investimento: string;
    metaFinanceira: string;
    desafio: string;
    urgencia: number;
    nomeCompleto: string;
    whatsapp: string;
}

/**
 * Interface para controlar quais etapas foram concluídas no Stepper.
 * A chave é o índice da etapa e o valor é um booleano indicando se foi concluída.
 */
interface CompletedSteps {
    [key: number]: boolean;
}

/**
 * Interface para as marcações do Slider de urgência.
 */
interface UrgenciaMark {
    value: number;
    label: string;
}

// --- Componentes Estilizados ---
const StyledContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f5f7fa',
    padding: theme.spacing(4),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

const StyledCard = styled(Card)(({ theme }) => ({
    width: '100%',
    maxWidth: 700,
    borderRadius: 4,
    boxShadow: '0px 10px 30px rgba(0, 0, 0, 0.08)',
    padding: theme.spacing(3),
    [theme.breakpoints.down('sm')]: {
        padding: theme.spacing(2),
    },
}));

const FormSection = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    '&:last-child': {
        marginBottom: 0,
        paddingBottom: 0,
    },
}));

// --- Estilos Personalizados para o Stepper (Ícones e Conector) ---
/**
 * Props para o componente root do ícone do Stepper.
 * O ownerState é uma prop interna do MUI styled-components.
 */
interface QontoStepIconRootProps {
    ownerState: {
        active?: boolean;
    };
    className?: string;
}

const QontoStepIconRoot = styled('div')<QontoStepIconRootProps>(({ theme, ownerState }) => ({
    color: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    ...(ownerState.active && {
        color: theme.palette.primary.main,
    }),
    '& .QontoStepIcon-completedIcon': {
        color: '#4CAF50', // VERDE para ícone de etapa concluída
        zIndex: 1,
        fontSize: 24,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
}));

/**
 * Props para o componente de ícone personalizado do Stepper.
 */
interface QontoStepIconProps {
    active?: boolean;
    completed?: boolean;
    className?: string;
}

function QontoStepIcon(props: QontoStepIconProps): JSX.Element {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${'Mui-active'}`]: {
        [`& .${'MuiStepConnector-line'}`]: {
            borderColor: theme.palette.primary.main,
        },
    },
    [`&.${'Mui-completed'}`]: {
        [`& .${'MuiStepConnector-line'}`]: {
            borderColor: '#4CAF50', // VERDE para a linha de etapa concluída
        },
    },
    [`& .${'MuiStepConnector-line'}`]: {
        borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
    },
}));

// Definição das etapas para o Stepper
const steps: string[] = [
    'Investimento',
    'Meta Financeira',
    'Desafio',
    'Urgência',
    'Nome',
    'Contato',
];

function FinancialForm(): JSX.Element {
    const [activeStep, setActiveStep] = React.useState<number>(0);
    const [completed, setCompleted] = React.useState<CompletedSteps>({}); // Objeto para controlar quais etapas foram concluídas

    // Estado para os dados do formulário
    const [formData, setFormData] = React.useState<FormData>({
        investimento: '',
        metaFinanceira: '',
        desafio: '',
        urgencia: 5, // Valor padrão para o slider
        nomeCompleto: '',
        whatsapp: '',
    });

    const totalSteps: number = steps.length;
    // Verifica se todas as etapas foram marcadas como concluídas pelo menos uma vez
    const allStepsCompleted: boolean = Object.keys(completed).length === totalSteps;

    /**
     * Handler genérico para campos de texto e RadioGroups.
     * Exclui 'urgencia' pois o Slider tem um evento de mudança diferente.
     */
    const handleTextAndRadioChange = <T extends Exclude<keyof FormData, 'urgencia'>>(field: T) => (
        event: React.ChangeEvent<HTMLInputElement>
    ): void => {
        setFormData((prev) => ({
            ...prev,
            [field]: event.target.value,
        }));
    };

    /**
     * Handler específico para o componente Slider.
     */
    const handleSliderChange = (field: 'urgencia') => (
        event: Event | SyntheticEvent, // Evento padrão para Slider
        newValue: number | number[] // O valor do Slider pode ser um número ou um array de números
    ): void => {
        if (typeof newValue === 'number') { // O campo urgencia espera um único número
            setFormData((prev) => ({
                ...prev,
                [field]: newValue,
            }));
        }
    };

    const handleNext = (): void => {
        // Marca a etapa atual como concluída antes de avançar para a próxima.
        // Usamos um novo objeto para garantir a imutabilidade do estado.
        setCompleted((prev) => ({
            ...prev,
            [activeStep]: true,
        }));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = (): void => {
        // Ao voltar, apenas alteramos a etapa ativa, mantendo o status 'completed' das etapas anteriores.
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = (): void => {
        setActiveStep(0);
        setCompleted({}); // Reseta todas as etapas para não concluídas
        setFormData({ // Reseta os dados do formulário
            investimento: '',
            metaFinanceira: '',
            desafio: '',
            urgencia: 5,
            nomeCompleto: '',
            whatsapp: '',
        });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault(); // Previne o comportamento padrão de recarregar a página

        if (activeStep === totalSteps - 1) { // Se for a última etapa
            console.log('Formulário Completo:', formData);
            alert('Formulário enviado com sucesso! (Verifique o console para os dados)');
            // Marca todas as etapas como concluídas para exibir a tela final de "Formulário Completo!"
            setCompleted(steps.reduce((acc, _, index) => ({ ...acc, [index]: true }), {}));
        } else {
            handleNext(); // Avança para a próxima etapa
        }
    };

    const urgenciaMarks: UrgenciaMark[] = [
        { value: 0, label: '0' },
        { value: 1, label: '1' },
        { value: 2, label: '2' },
        { value: 3, label: '3' },
        { value: 4, label: '4' },
        { value: 5, label: '5' },
        { value: 6, label: '6' },
        { value: 7, label: '7' },
        { value: 8, label: '8' },
        { value: 9, label: '9' },
        { value: 10, label: '10' },
    ];

    // Função que renderiza o conteúdo da etapa atual
    const getStepContent = (step: number): JSX.Element | string => {
        switch (step) {
            case 0:
                return (
                    <FormSection>
                        <Typography variant="h6" gutterBottom>
                            1- Quanto você já possui investido ou disponível para investir nos seus objetivos?
                        </Typography>
                        <FormControl component="fieldset" fullWidth>
                            <RadioGroup
                                aria-label="investimento"
                                name="investimento"
                                value={formData.investimento}
                                onChange={handleTextAndRadioChange('investimento')}
                            >
                                <Grid container spacing={2}>
                                    <>
                                        <FormControlLabel value="ate-300k" control={<Radio />} label="Até R$300.000" />
                                    </>
                                    <>
                                        <FormControlLabel value="300k-1m" control={<Radio />} label="De R$300.001 a R$1.000.000" />
                                    </>
                                    <>
                                        <FormControlLabel value="1m-3m" control={<Radio />} label="De R$1.000.001 a R$3.000.000" />
                                    </>
                                    <>
                                        <FormControlLabel value="acima-3m" control={<Radio />} label="Acima de R$3.000.001" />
                                    </>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </FormSection>
                );
            case 1:
                return (
                    <FormSection>
                        <Typography variant="h6" gutterBottom>
                            2- Qual das seguintes metas financeiras melhor descreve seu objetivo para os próximos anos?
                        </Typography>
                        <FormControl component="fieldset" fullWidth>
                            <RadioGroup
                                aria-label="meta-financeira"
                                name="meta-financeira"
                                value={formData.metaFinanceira}
                                onChange={handleTextAndRadioChange('metaFinanceira')}
                            >
                                <Grid container spacing={2}>
                                    <>
                                        <FormControlLabel value="reduzir-plantao" control={<Radio />} label="Reduzir carga de plantões" />
                                    </>
                                    <>
                                        <FormControlLabel value="manutencao-patrimonio" control={<Radio />} label="Manutenção e proteção do patrimônio construído" />
                                    </>
                                    <>
                                        <FormControlLabel value="aposentadoria-renda-passiva" control={<Radio />} label="Garantir aposentadoria através de renda passiva de investimentos" />
                                    </>
                                    <>
                                        <FormControlLabel value="se-organizar" control={<Radio />} label="Se organizar financeiramente" />
                                    </>
                                </Grid>
                            </RadioGroup>
                        </FormControl>
                    </FormSection>
                );
            case 2:
                return (
                    <FormSection>
                        <Typography variant="h6" gutterBottom>
                            3- Qual é o maior desafio específico que tem te impedido de alcançar esse objetivo?
                            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                                (Ex: falta de tempo para gerenciar investimentos, excesso de informações, estratégias genéricas que não funcionam para sua realidade, etc.)
                            </Typography>
                        </Typography>
                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            variant="outlined"
                            placeholder="Descreva seu desafio aqui..."
                            value={formData.desafio}
                            onChange={handleTextAndRadioChange('desafio')}
                        />
                    </FormSection>
                );
            case 3:
                return (
                    <FormSection>
                        <Typography variant="h6" gutterBottom>
                            4- Em uma escala de 0 a 10, qual a urgência em resolver esse problema?
                        </Typography>
                        <Slider
                            aria-label="Urgência"
                            defaultValue={5}
                            step={1}
                            marks={urgenciaMarks}
                            min={0}
                            max={10}
                            valueLabelDisplay="auto"
                            value={formData.urgencia} // `formData.urgencia` já é `number`
                            onChange={handleSliderChange('urgencia')}
                            sx={{ mt: 4 }}
                        />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                            <Typography variant="caption" sx={{ width: '30%', textAlign: 'left' }}>
                                0-4 (Posso esperar)
                            </Typography>
                            <Typography variant="caption" sx={{ width: '40%', textAlign: 'center' }}>
                                5-8 (É importante)
                            </Typography>
                            <Typography variant="caption" sx={{ width: '30%', textAlign: 'right' }}>
                                9-10 (Preciso resolver agora)
                            </Typography>
                        </Box>
                    </FormSection>
                );
            case 4:
                return (
                    <FormSection>
                        <Typography variant="h6" gutterBottom>5- Nome completo</Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="Seu nome completo"
                            value={formData.nomeCompleto}
                            onChange={handleTextAndRadioChange('nomeCompleto')}
                        />
                    </FormSection>
                );
            case 5:
                return (
                    <FormSection>
                        <Typography variant="h6" gutterBottom>6- Whatsapp</Typography>
                        <TextField
                            fullWidth
                            variant="outlined"
                            placeholder="(XX) XXXXX-XXXX"
                            value={formData.whatsapp}
                            onChange={handleTextAndRadioChange('whatsapp')}
                            type="tel" // Sugere teclado numérico em mobile
                        />
                    </FormSection>
                );
            default:
                return 'Etapa desconhecida.';
        }
    };

    return (
        <StyledContainer maxWidth="xl">
            <StyledCard>
                <CardContent>
                    <Box sx={{ textAlign: 'center', mb: 4 }}>
                        <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 700, color: '#333' }}>
                            Seus Objetivos Financeiros
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Preencha este formulário para nos ajudar a entender suas necessidades e como podemos te auxiliar.
                        </Typography>
                    </Box>

                    {/* Stepper para indicar o progresso */}
                    <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />} sx={{ mb: 4 }}>
                        {steps.map((label, index) => (
                            <Step key={label} completed={completed[index]}>
                                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <div>
                        {allStepsCompleted ? (
                            // Tela de conclusão do formulário
                            <Box sx={{ p: 3, textAlign: 'center' }}>
                                <Typography variant="h5" sx={{ mb: 2 }}>
                                    Formulário Completo! 🎉
                                </Typography>
                                <Typography sx={{ mb: 3 }}>
                                    Obrigado por preencher o formulário. Seus dados foram enviados.
                                </Typography>
                                <Button onClick={handleReset} variant="outlined" color="primary" sx={{ mr: 1 }}>
                                    Preencher Novamente
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                        color: 'white',
                                        '&:hover': {
                                            boxShadow: '0px 6px 20px rgba(255, 142, 83, 0.4)',
                                        },
                                    }}
                                    onClick={() => {
                                        console.log('Dados Finais:', formData);
                                        alert('Dados Finais: ' + JSON.stringify(formData, null, 2));
                                    }}
                                >
                                    Ver Dados
                                </Button>
                            </Box>
                        ) : (
                            // Conteúdo da etapa atual do formulário
                            <form onSubmit={handleSubmit}>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
                                    <Button
                                        color="inherit"
                                        disabled={activeStep === 0} // Desabilita o botão "Voltar" na primeira etapa
                                        onClick={handleBack}
                                        sx={{ mr: 1 }}
                                    >
                                        Voltar
                                    </Button>
                                    <Box sx={{ flex: '1 1 auto' }} /> {/* Empurra o botão "Próximo" para a direita */}
                                    <Button
                                        type="submit" // Faz com que o botão submeta o formulário (e chame handleSubmit)
                                        variant="contained"
                                        sx={{
                                            background: 'linear-gradient(45deg, #2ecc71 30%, #27ae60 90%)', // VERDE para o botão "Próximo"
                                            color: 'white',
                                            '&:hover': {
                                                boxShadow: '0px 6px 20px rgba(46, 204, 113, 0.4)',
                                            },
                                        }}
                                    >
                                        {activeStep === totalSteps - 1 ? 'Finalizar' : 'Próximo'}
                                    </Button>
                                </Box>
                            </form>
                        )}
                    </div>
                </CardContent>
            </StyledCard>
        </StyledContainer>
    );
}

export default FinancialForm;