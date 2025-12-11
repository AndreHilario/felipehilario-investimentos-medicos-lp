import {
    Container,
    Box,
    Typography,
    Card,
    CardContent,
    Button,
    Grid,
} from '@mui/material';
import { styled, useTheme } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { generateWhatsappLink } from '../../utils/sendWhatsAppMessage';

export interface FormDataSheets {
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
    maxWidth: "90%"
}));


// -------- Componente Principal --------
export default function Success() {

    const navigate = useNavigate();
    const theme = useTheme();
    return (
        <StyledContainer maxWidth={false} disableGutters>
            <StyledCard>
                <CardContent sx={{ p: { xs: 2, sm: 4 } }}>
                    <Typography variant="h5" fontWeight={700} gutterBottom>
                        Formulário
                    </Typography>
                    <Box textAlign="center" py={4}>
                        <Typography variant="h6" gutterBottom>
                            🎉 Parabéns! Formulário concluído com sucesso.
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Em breve entraremos em contato pelo WhatsApp informado.
                        </Typography>

                        <Box mt={4}>
                            <Grid container spacing={2} justifyContent="center">
                                <Box>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => navigate("/agendamento")}
                                    >
                                        Preencher novamente
                                    </Button>
                                </Box>

                                <Box>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => navigate("/")}
                                    >
                                        Voltar
                                    </Button>
                                </Box>

                                <Box>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`, // Gradiente Azul > Verde
                                            color: "#fff", // Texto branco
                                            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out", // Suaviza a animação de hover
                                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)", // Sombra inicial
                                            "&:hover": {
                                                transform: "scale(1.05)", // Leve aumento ao passar o mouse
                                                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)", // Sombra ao passar o mouse
                                            },
                                        }}
                                        startIcon={<WhatsAppIcon />}
                                        href={generateWhatsappLink(
                                            "5512982245338",
                                            "Olá Felipe! Preciso falar com você de forma mais urgente."
                                        )}
                                        target="_blank"
                                    >
                                        Contato Urgente
                                    </Button>
                                </Box>
                            </Grid>
                        </Box>
                    </Box>
                </CardContent>
            </StyledCard>
        </StyledContainer>
    );
}

