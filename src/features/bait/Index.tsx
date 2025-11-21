import {
  Container,
  Typography,
  Button,
  Box,
  Paper,
  useTheme,
  Stack,
  Divider,
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const FinancialBaitScreen = () => {
  const theme = useTheme();

  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        bgcolor: `linear-gradient(135deg, ${theme.palette.primary.light}30, ${theme.palette.secondary.light}40)`,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Paper
          elevation={10}
          sx={{
            borderRadius: 6,
            textAlign: 'center',
            boxShadow: '0 10px 35px rgba(0, 0, 0, 0.15)',
            bgcolor: theme.palette.background.paper,
            minHeight: '100vh',
          }}
        >
          {/* Ícone principal */}
          <motion.div
            initial={{ rotate: -15, opacity: 0 }}
            animate={{ rotate: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <CheckCircleOutlineIcon
              sx={{
                fontSize: 60,
                color: theme.palette.success.main,
                mb: 2,
                mt: 4,
              }}
            />
          </motion.div>

          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: theme.palette.text.primary,
              mb: 2,
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
            }}
          >
            CHECK-UP FINANCEIRO
          </Typography>

          <Typography
            variant="h5"
            component="h2"
            sx={{
              color: theme.palette.primary.dark,
              mb: 3,
              fontSize: { xs: '1.2rem', sm: '1.4rem', md: '1.7rem' },
            }}
          >
            Seu patrimônio está realmente trabalhando por você?
          </Typography>

          {/* GIF ou imagem ilustrativa */}
          <Box
            component="img"
            src="https://cdn.pixabay.com/animation/2022/08/15/08/47/08-47-44-137_512.gif"
            alt="Animação financeira"
            sx={{
              width: '100%',
              maxWidth: 100,
              borderRadius: 3,
              mb: 3,
              mx: 'auto',
            }}
          />

          <Typography
            variant="body1"
            paragraph
            sx={{
              color: theme.palette.text.secondary,
              lineHeight: 1.7,
              mb: 3,
              fontSize: { xs: '1rem', sm: '1.1rem' },
            }}
          >
            Você é um profissional de sucesso, com um patrimônio sólido. Mas será que ele está realmente
            te conduzindo ao futuro que você sonha? Este <strong>check-up rápido</strong> vai te mostrar o quanto
            sua estratégia financeira está alinhada com sua liberdade e tranquilidade.
          </Typography>

          <Divider sx={{ my: 4 }} />

          {/* Ícones informativos */}
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={3}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: 4 }}
          >
            <motion.div whileHover={{ scale: 1.1 }}>
              <Box textAlign="center">
                <AccessTimeIcon sx={{ fontSize: 40, color: theme.palette.info.main }} />
                <Typography variant="subtitle2">Leva menos de 3 min</Typography>
              </Box>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Box textAlign="center">
                <TrendingUpIcon sx={{ fontSize: 40, color: theme.palette.success.main }} />
                <Typography variant="subtitle2">Diagnóstico completo</Typography>
              </Box>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Box textAlign="center">
                <AttachMoneyIcon sx={{ fontSize: 40, color: theme.palette.warning.main }} />
                <Typography variant="subtitle2">Foco no seu patrimônio</Typography>
              </Box>
            </motion.div>

            <motion.div whileHover={{ scale: 1.1 }}>
              <Box textAlign="center">
                <FavoriteBorderIcon sx={{ fontSize: 40, color: theme.palette.error.main }} />
                <Typography variant="subtitle2">Mais autonomia e bem-estar</Typography>
              </Box>
            </motion.div>
          </Stack>

          {/* Botão de ação */}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => (window.location.href = '/pdf')}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: { xs: '1rem', sm: '1.1rem', md: '1.2rem' },
                fontWeight: 'bold',
                borderRadius: 10,
              }}
            >
              Começar Meu Check-up Agora
            </Button>
          </motion.div>

          <Typography
            variant="caption"
            display="block"
            sx={{
              mt: 3,
              color: theme.palette.text.disabled,
            }}
          >
            ⏳ Invista 3 minutos hoje para colher liberdade financeira amanhã.
          </Typography>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default FinancialBaitScreen;
