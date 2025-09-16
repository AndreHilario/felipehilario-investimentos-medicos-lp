import { Box, Typography, Grid, Container, Stack, Chip, Card, useTheme } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import PeopleOutlineOutlinedIcon from "@mui/icons-material/PeopleOutlineOutlined";
import PsychologyIcon from '@mui/icons-material/Psychology';
import { ScheduleButton } from "../../components/ScheduleButton";

export const ProblemPage = () => {
    const allProblems = [
        {
            id: 1,
            icon: <WatchLaterOutlinedIcon fontSize="large" />,
            title: "Rotina estressante de atendimentos e plantões",
            description:
                "Manter seu padrão de vida ainda depende de trabalho excessivo - sem perspectiva clara de como ou quando desacelerar.",
            accentColor: "rgba(246, 37, 37, 1)",
        },
        {
            id: 2,
            icon: <TrendingDownIcon fontSize="large" />,
            title: 'Patrimônio "parado" em investimentos sem direção',
            description:
                "Patrimônio construído com dedicação está disperso e perdendo oportunidades - e isso tira seu sono.",
            accentColor: "rgba(246, 37, 37, 1)",
        },
        {
            id: 3,
            icon: <PsychologyIcon fontSize="large" />,
            title: "Falta de tempo e excesso de informações",
            description: "Você até tenta estudar investimentos e seguir mentores - mas a rotina te esmaga.",
            accentColor: "rgba(246, 37, 37, 1)",
        },
        {
            id: 4,
            icon: <PeopleOutlineOutlinedIcon fontSize="large" />,
            title: "Soluções financeiras genéricas",
            description:
                "Você até tem um gerente ou um assessor, mas a abordagem é superficial e pouco específica.",
            accentColor: "rgba(246, 37, 37, 1)",
        },
    ];
    const theme = useTheme();
    return (
        <Box
            sx={{
                minHeight: "100vh",
                backgroundColor: theme.palette.background?.default,
                py: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: 'relative',
                overflowX: 'hidden',
            }}
        >
            <Container
                maxWidth="xl"
            >
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Chip
                        icon={<ErrorOutlineOutlinedIcon />}
                        label="O Problema Real"
                        sx={{
                            backgroundColor: 'rgba(244, 67, 54, 0.1)',
                            color: 'rgb(244, 67, 54)',
                            '& .MuiChip-icon': {
                                color: 'rgb(244, 67, 54)',
                            },
                            mb: 4,
                            fontWeight: 600,
                            fontSize: '0.875rem'
                        }}
                    />
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            fontSize: { xs: "1.8rem", md: "2.5rem" },
                            color: 'rgb(45, 55, 72)',
                            letterSpacing: '-0.025em',
                        }}
                    >
                        Você já tem patrimônio. Faturamento alto.
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "1rem", md: "1.125rem" },
                            mt: 4,
                            color: "rgb(108, 122, 137)",
                        }}
                    >
                        Mas seu futuro financeiro ainda está atrelado à:
                    </Typography>
                </Box>

                <Grid
                    container
                    spacing={4}
                    justifyContent="center"
                    alignItems="stretch" // força todos os itens a esticarem para a mesma altura
                >
                    {allProblems.map((problem) => (
                        <Grid item xs={12} sm={6} key={problem.id}>
                            <Card
                                elevation={3}
                                sx={{
                                    p: 3,
                                    height: "100%", // garante altura igual em cada linha
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    textAlign: "center",
                                    maxWidth: { sm: "40vw", xs: "100%" },
                                    gap: 2,
                                    borderRadius: '0.75rem',
                                    backgroundColor: "#f8fbfc",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0px 8px 20px rgba(255, 47, 47, 1)",
                                    },
                                }}
                            >
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        width: 70,
                                        height: 70,
                                        backgroundColor: "rgba(246, 37, 37, 0.1)",
                                        color: problem.accentColor,
                                        borderRadius: "50%",
                                        fontSize: 30,
                                    }}
                                >
                                    {problem.icon}
                                </Box>

                                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        sx={{
                                            color: "rgb(45, 55, 72)",
                                            fontSize: "1.125rem",
                                        }}
                                    >
                                        {problem.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgb(74, 85, 104)",
                                            fontSize: "0.9375rem",
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {problem.description}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box sx={{mt: 6, display: "flex", justifyContent: "center"}}><ScheduleButton text={"Quero Agendar Uma Sessão"} /></Box>

            </Container>
        </Box>
    );
};