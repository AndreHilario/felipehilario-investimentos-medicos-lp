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

const StyledContainer = styled(Container)(() => ({
    height: '100vh',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: `linear-gradient(
        180deg,
        #d0fcfc 0%,
        #d0fcfc 100%
    )`,
}));

const StyledCard = styled(Card)(() => ({
    borderRadius: 12,
    maxHeight: '100vh',
    overflowY: 'auto',
    maxWidth: "90%"
}));


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
                                        sx={{
                                            backgroundColor: "#0D2B45",
                                            "&:hover": {
                                                backgroundColor: "#081E30",
                                            },
                                        }}
                                    >
                                        Preencher novamente
                                    </Button>
                                </Box>

                                <Box>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        onClick={() => navigate("/")}
                                        sx={{
                                            backgroundColor: "#0D2B45",
                                            "&:hover": {
                                                backgroundColor: "#081E30",
                                            },
                                        }}
                                    >
                                        Voltar
                                    </Button>
                                </Box>

                                <Box>
                                    <Button
                                        fullWidth
                                        variant="contained"
                                        sx={{
                                            background: `linear-gradient(to right, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                                            color: "#fff",
                                            transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
                                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                                            "&:hover": {
                                                transform: "scale(1.05)",
                                                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.3)",
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

