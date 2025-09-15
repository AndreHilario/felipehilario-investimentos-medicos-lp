import { Box, Typography, Paper, Button, useTheme } from "@mui/material";

export function ExplainPage() {
    const theme = useTheme(); // Hook para puxar o tema definido no projeto

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.background?.default, // Fundo claro vindo do tema
                minHeight: "100vh", // Tela cheia
                py: theme.spacing(5), // Espaçamento uniforme
                px: theme.spacing(2), // Margens laterais em telas menores
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            {/* Título Principal */}
            <Typography
                variant="h2"
                sx={{
                    color: theme.palette.text.primary, // Cor vinda do tema
                    fontWeight: "bold",
                    textAlign: "center",
                    mb: theme.spacing(4),
                }}
            >
                A Metodologia que Concede Autonomia
                <Typography
                    component="span"
                    sx={{
                        color: theme.palette.secondary.main, // Verde para ênfase
                    }}
                >
                    {" "}
                    Real
                </Typography>
            </Typography>

            {/* Texto Explicativo */}
            <Typography
                variant="body1"
                sx={{
                    maxWidth: "800px",
                    textAlign: "center",
                    color: theme.palette.text.secondary, // Cor secundária para texto longo
                    mb: theme.spacing(4),
                }}
            >
                A estrutura F.O.O. foi projetada especialmente para médicos que desejam construir liberdade financeira e maior
                controle sobre o uso do tempo. Essa metodologia une estratégias de investimento, planejamento de tempo e
                autonomia, garantindo resultados sustentáveis.
            </Typography>

            {/* Blocos de explicação destacados */}
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: theme.spacing(3), // Espaçamento entre os itens
                    maxWidth: "800px",
                    width: "100%", // Garante que o bloco ocupe toda a largura em telas menores
                }}
            >
                {/* Box 1 */}
                <Paper
                    elevation={2}
                    sx={{
                        p: theme.spacing(3),
                        borderRadius: theme.shape.borderRadius, // Cantos arredondados vindo do tema
                        display: "flex",
                        gap: theme.spacing(2),
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
                        Planejamento Estratégico
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                        Descubra exatamente como direcionar seus investimentos para gerar renda passiva previsível e sustentável,
                        deixando de lado a dependência total do consultório.
                    </Typography>
                </Paper>

                {/* Box 2 */}
                <Paper
                    elevation={2}
                    sx={{
                        p: theme.spacing(3),
                        borderRadius: theme.shape.borderRadius,
                        display: "flex",
                        gap: theme.spacing(2),
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
                        Controle Total do Tempo
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                        Organize sua rotina profissional com ferramentas práticas e conquiste mais tempo livre para focar no que é
                        mais importante para você.
                    </Typography>
                </Paper>

                {/* Box 3 */}
                <Paper
                    elevation={2}
                    sx={{
                        p: theme.spacing(3),
                        borderRadius: theme.shape.borderRadius,
                        display: "flex",
                        gap: theme.spacing(2),
                        flexDirection: "column",
                    }}
                >
                    <Typography variant="h5" sx={{ fontWeight: "bold", color: theme.palette.text.primary }}>
                        Resultados Sustentáveis
                    </Typography>
                    <Typography variant="body1" sx={{ color: theme.palette.text.secondary }}>
                        Garantimos uma abordagem validada para que suas conquistas sejam sólidas e mantenham o equilíbrio entre
                        liberdade financeira e qualidade de vida.
                    </Typography>
                </Paper>
            </Box>

            {/* Chamada para Ação */}
            <Button
                variant="contained"
                sx={{
                    mt: theme.spacing(5),
                    px: theme.spacing(4),
                    py: theme.spacing(2),
                    fontSize: "18px",
                    fontWeight: "bold",
                    textTransform: "none",
                    backgroundColor: theme.palette.secondary.main, // Verde do tema
                    "&:hover": {
                        backgroundColor: theme.palette.secondary.dark || "#4ca96d",
                    },
                }}
            >
                Quero Agendar Minha Sessão Estratégica
            </Button>
        </Box>
    );
}