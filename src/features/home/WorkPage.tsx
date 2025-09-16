import { Box, Typography, Container, Paper, useTheme, Grid, Stack } from "@mui/material";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import EventNoteOutlinedIcon from "@mui/icons-material/EventNoteOutlined";
import React from "react";

export function WorkPage() {
    const theme = useTheme();

    const steps = [
        {
            id: 1,
            icon: <DescriptionOutlinedIcon />,
            title: "Preencha um breve formulário",
            description:
                "Responda algumas perguntas simples para o diagnóstico inicial. Levará apenas alguns minutos do seu tempo.",
            accentColor: theme.palette.primary.main,
            bgColor: "rgba(33, 150, 243, 0.1)", // azul claro
        },
        {
            id: 2,
            icon: <EventNoteOutlinedIcon />,
            title: "Agendaremos sua sessão estratégica",
            description:
                "Um especialista entrará em contato para marcar seu diagnóstico personalizado.",
            accentColor: theme.palette.success.main,
            bgColor: "rgba(76, 175, 80, 0.1)", // verde claro
        },
    ];

    return (
        <Box
            sx={{
                minHeight: "70vh",
                backgroundImage: "linear-gradient(135deg, #a2eafeff 0%, #95ffb0ff 100%)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: 4
            }}
        >
            <Container maxWidth="xl">
                <Box sx={{ textAlign: "center", mb: theme.spacing(6) }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            mb: 1,
                            fontSize: { xs: "1.5rem", sm: "2rem", md: "2.5rem" },
                            fontWeight: 700,
                            color: "rgb(45, 55, 72)",
                        }}
                    >
                        Como funciona?
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: "0.95rem", sm: "1rem" },
                            fontWeight: 600,
                            color: theme.palette.secondary.main
                        }}
                    >
                        Simples e rápido para você
                    </Typography>
                </Box>

                <Grid container spacing={4} justifyContent="center" alignItems="stretch">
                    {steps.map((step) => (
                        <>
                            <Paper
                                elevation={3}
                                sx={{
                                    p: 4,
                                    height: "100%",
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    textAlign: "center",
                                    maxWidth: { sm: "40vw", xs: "100%" },
                                    gap: 2,
                                    borderRadius: "0.75rem",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "translateY(-6px)",
                                        boxShadow: "0px 8px 20px rgba(0,0,0,0.12)",
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
                                        borderRadius: "50%",
                                        backgroundColor: step.bgColor,
                                        color: step.accentColor,
                                        fontSize: 36,
                                        mb: 1,
                                        position: "relative",
                                    }}
                                >
                                    {React.cloneElement(step.icon, { fontSize: "inherit" })}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            top: -6,
                                            right: -6,
                                            width: 26,
                                            height: 26,
                                            borderRadius: "50%",
                                            backgroundColor: step.accentColor,
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            color: "white",
                                            fontSize: "0.8rem",
                                            fontWeight: "bold",
                                            border: `2px solid ${theme.palette.background.paper}`,
                                        }}
                                    >
                                        {step.id}
                                    </Box>
                                </Box>

                                <Stack spacing={1} sx={{ flexGrow: 1 }}>
                                    <Typography
                                        variant="h6"
                                        fontWeight={600}
                                        sx={{
                                            color: "rgb(45, 55, 72)",
                                            fontSize: { xs: "1.1rem", sm: "1.2rem" },
                                        }}
                                    >
                                        {step.title}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            color: "rgb(74, 85, 104)",
                                            fontSize: { xs: "0.9rem", sm: "0.95rem" },
                                            lineHeight: 1.5,
                                        }}
                                    >
                                        {step.description}
                                    </Typography>
                                </Stack>
                            </Paper>
                        </>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}
