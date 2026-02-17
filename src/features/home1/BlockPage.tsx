import { Box, Typography, Container, Paper, Grid, Stack, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export function BlockPage() {
    const navigate = useNavigate();

    function redirect() {
        navigate("/agendamento");
    }
    const items = [
        {
            id: 1,
            title: "O Caminho para Sua Real Autonomia",
            description: "Você vai ter a clareza para saber exatamente quantos anos faltam para desacelerar. Vou te mostrar como ir além da 'liberdade' e poder decidir o quanto e quando quer trabalhar.",
        },
        {
            id: 2,
            title: "Seu Patrimônio Trabalhando Ativamente por Você",
            description: "Receba um plano sob medida para transformar seu capital em uma força que gera renda passiva crescente, sem ficar dependendo de esforço manual e virar especialista em investimentos.",
        },
        {
            id: 3,
            title: "Caminho claro para alcançar objetivos",
            description: "Nada de fórmulas genéricas. Teremos um plano claro, personalizado e validado para seus investimentos, que alinha diretamente com o que é importante para você: seja a educação dos filhos, viagens em família, a casa dos sonhos ou a segurança e o legado para sua família.",
        },
        {
            id: 4,
            title: "Paz e Focar no que faz de melhor: Salvar vidas",
            description: "Deixe de se preocupar com gráficos, análises de mercado ou 'dicas' genéricas. Com uma estratégia desenhada para a sua realidade, você poderá se dedicar 100% à sua paixão, sabendo que seus investimentos estão no rumo certo e sob controle.",
        },
    ];

    // Gradiente principal conforme sua solicitação
    const mainGradient = "linear-gradient(135deg, #a2eafeff 0%, #95ffb0ff 100%)";
    const mainGradientBack = "linear-gradient(135deg, #95ffb0ff 0%, #a2eafeff 100%)";
    // Cor de destaque (azul claro do gradiente) para números e detalhes
    const accentColorStart = "#95ffb0ff";
    // Cores de texto para garantir boa leitura no tema médico
    const darkTextColor = "rgb(45, 55, 72)";
    const lightGreyTextColor = "rgb(74, 85, 104)";

    // Padrão de pontos para o fundo, sutil e elegante
    const dottedPattern = `radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)`;
    const backgroundSize = '20px 20px'; // Tamanho dos pontos

    // Tamanho do círculo central, responsivo
    const centralCircleSize = { xs: 200, sm: 250, md: 280 };
    // Offset para empurrar as colunas de cards para os lados no desktop
    const cardColumnOffset = { xs: 0, md: `${centralCircleSize.md / 2 + 20}px` }; // Meio do círculo + um pouco de espaçamento

    // Componente auxiliar para renderizar cada card
    const CardItem = ({ item }: { item: any }) => (
        <Paper
            elevation={3}
            sx={{
                p:3,
                textAlign: "left",
                borderRadius: "32px",
                border: "2px solid #95ffb0ff",
                backgroundColor: "white",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: "0px 6px 15px rgba(0,0,0,0.1)",
                },
                position: 'relative',
                maxWidth: { xs: '100%', md: '380px' }, // Limita a largura do card
                width: '100%',
                height: "300px"
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 36,
                    height: 36,
                    borderRadius: "50%",
                    background: accentColorStart, // Cor de destaque para o número
                    color: "white",
                    fontSize: "1rem",
                    fontWeight: "bold",
                    mb: 2,
                    boxShadow: `0 0 0 2px ${accentColorStart}`, // Borda/sombra externa
                }}
            >
                {String(item.id).padStart(2, '0')} {/* Formato "01", "02" */}
            </Box>
            <Typography
                variant="h6"
                fontWeight={600}
                sx={{
                    color: darkTextColor,
                    fontSize: { xs: "1rem", sm: "1.1rem" },
                    mb: 1,
                }}
            >
                {item.title}
            </Typography>
            <Typography
                variant="body2"
                sx={{
                    color: lightGreyTextColor,
                    fontSize: { xs: "0.85rem", sm: "0.9rem" },
                    lineHeight: 1.5,
                }}
            >
                {item.description}
            </Typography>
        </Paper>
    );

    return (
        <Box
            sx={{
                minHeight: "90vh", // Garante que ocupe a altura mínima da tela
                backgroundImage: `${mainGradient}, ${dottedPattern}`, // Gradiente + padrão de pontos
                backgroundBlendMode: 'overlay', // Mistura os dois backgrounds
                backgroundRepeat: "no-repeat, repeat", // Gradiente não repete, pontos sim
                backgroundSize: `cover, ${backgroundSize}`, // Gradiente cobre, pontos têm tamanho fixo
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                py: { xs: 6, md: 8 }, // Padding vertical responsivo
                position: 'relative', // Contexto para posicionamento absoluto de elementos internos
                overflow: 'hidden', // Esconde qualquer transbordamento de elementos (e.g., linhas)
            }}
        >
            <Container maxWidth="lg">
                <Box
                    sx={{
                        position: 'relative', // Contexto para o círculo central e as linhas
                        display: 'flex',
                        flexDirection: 'column', // Empilhamento vertical por padrão (mobile)
                        alignItems: 'center', // Centraliza itens no mobile
                        mb: { xs: 6, md: 8 }, // Margem inferior antes do botão
                    }}
                >
                    {/* Círculo Central "O QUE VOCÊ IRÁ DESBLOQUEAR" */}
                    <Box
                        sx={{
                            position: { xs: 'static', md: 'absolute' }, // Estático no mobile, absoluto no desktop
                            top: { xs: 'auto', md: '50%' },
                            left: { xs: 'auto', md: '50%' },
                            transform: { xs: 'none', md: 'translate(-50%, -50%)' }, // Centraliza no desktop
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: centralCircleSize,
                            height: centralCircleSize,
                            borderRadius: "50%",
                            background: mainGradient, // O círculo usa o mesmo gradiente
                            boxShadow: `0px 8px 25px rgba(0,0,0,0.15)`, // Sombra para profundidade
                            textAlign: 'center',
                            flexShrink: 0, // Impede que o círculo encolha
                            zIndex: 2, // Garante que fique acima dos cards e linhas
                            mb: { xs: 4, md: 0 }, // Margem inferior no mobile
                        }}
                    >
                        <Typography
                            variant="h5"
                            fontWeight={700}
                            sx={{
                                color: "white",
                                fontSize: { xs: "1.1rem", sm: "1.3rem", md: "1.5rem" },
                                lineHeight: 1.3,
                                p: 2,
                            }}
                        >
                            O QUE VOCÊ IRÁ DESBLOQUEAR
                        </Typography>
                    </Box>

                    {/* Grid para os Cards */}
                    <Grid
                        container
                        spacing={{ xs: 3, md: 8 }} // Espaçamento entre os cards
                        justifyContent="center"
                        alignItems="stretch"
                        sx={{
                            position: 'relative',
                            zIndex: 1, // Abaixo do círculo central, acima do fundo
                            width: '100%',
                        }}
                    >
                        {/* Coluna Esquerda (Itens 1 e 3) */}
                        <Box 
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-end' }, // Centraliza no mobile, alinha à direita no desktop
                                pr: cardColumnOffset, // Empurra os cards para a esquerda, criando espaço para o círculo
                                textAlign: { xs: 'center', md: 'right' }
                            }}
                        >
                            <Stack spacing={4} sx={{ width: '100%', maxWidth: { xs: '400px', md: '380px' }, alignItems: { xs: 'center', md: 'flex-end' } }}>
                                <CardItem item={items[0]} />
                                <CardItem item={items[1]} />
                            </Stack>
                        </Box>

                        {/* Coluna Direita (Itens 2 e 4) */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: { xs: 'center', md: 'flex-start' }, // Centraliza no mobile, alinha à esquerda no desktop
                                pl: cardColumnOffset, // Empurra os cards para a direita
                                textAlign: { xs: 'center', md: 'left' }
                            }}
                        >
                            <Stack spacing={4} sx={{ width: '100%', maxWidth: { xs: '400px', md: '380px' }, alignItems: { xs: 'center', md: 'flex-start' } }}>
                                <CardItem item={items[2]} />
                                <CardItem item={items[3]} />
                            </Stack>
                        </Box>
                    </Grid>

                    {/* Linhas de Conexão (Apenas no Desktop) */}
                    {/* Implementação simplificada com Boxes para dar a ideia de conexão.
                        Para linhas curvas e precisas como na imagem, seria necessário um componente SVG. */}
                    <Box
                        sx={{
                            display: { xs: 'none', md: 'block' }, // Visível apenas em telas maiores
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            pointerEvents: 'none', // Permite clicar em elementos abaixo
                            zIndex: 0, // Fica atrás dos cards e do círculo central
                        }}
                    >
                        {/* Linha vertical central (dividir em duas para evitar sobreposição desnecessária) */}
                        <Box sx={{
                            position: 'absolute',
                            top: 0,
                            height: '50%',
                            width: '2px',
                            left: '50%',
                            transform: 'translateX(-1px)',
                            borderLeft: '2px dashed rgba(255,255,255,0.4)',
                        }} />
                        <Box sx={{
                            position: 'absolute',
                            bottom: 0,
                            height: '50%',
                            width: '2px',
                            left: '50%',
                            transform: 'translateX(-1px)',
                            borderLeft: '2px dashed rgba(255,255,255,0.4)',
                        }} />

                        {/* Linha horizontal superior esquerda */}
                        <Box sx={{
                            position: 'absolute',
                            top: '25%', // Posição vertical aproximada do card superior
                            left: `calc(50% - ${centralCircleSize.md / 2}px)`, // Borda do círculo central
                            width: '150px', // Comprimento da linha
                            borderTop: '2px dashed rgba(255,255,255,0.4)',
                            transform: 'translateX(-100%)', // Move a linha para a esquerda a partir da borda do círculo
                        }} />
                        {/* Linha horizontal superior direita */}
                        <Box sx={{
                            position: 'absolute',
                            top: '25%',
                            left: `calc(50% + ${centralCircleSize.md / 2}px)`, // Borda do círculo central
                            width: '150px',
                            borderTop: '2px dashed rgba(255,255,255,0.4)',
                        }} />

                        {/* Linha horizontal inferior esquerda */}
                        <Box sx={{
                            position: 'absolute',
                            bottom: '25%', // Posição vertical aproximada do card inferior
                            left: `calc(50% - ${centralCircleSize.md / 2}px)`,
                            width: '150px',
                            borderBottom: '2px dashed rgba(255,255,255,0.4)',
                            transform: 'translateX(-100%)',
                        }} />
                        {/* Linha horizontal inferior direita */}
                        <Box sx={{
                            position: 'absolute',
                            bottom: '25%',
                            left: `calc(50% + ${centralCircleSize.md / 2}px)`,
                            width: '150px',
                            borderBottom: '2px dashed rgba(255,255,255,0.4)',
                        }} />
                    </Box>
                </Box>
            </Container>

            {/* Botão de Ação */}
            <Button
                variant="contained"
                onClick={redirect}
                sx={{
                    background: mainGradientBack, // Botão com o gradiente
                    color: "white",
                    fontWeight: 600,
                    fontSize: { xs: "0.9rem", sm: "1rem" },
                    py: { xs: 1.5, sm: 2 },
                    px: { xs: 3, sm: 4 },
                    borderRadius: "8px",
                    boxShadow: `0px 4px 15px rgba(0,0,0,0.15)`,
                    '&:hover': {
                        background: mainGradientBack, // Mantém o gradiente no hover
                        opacity: 0.9, // Diminui um pouco a opacidade para feedback visual
                        boxShadow: `0px 6px 20px rgba(0,0,0,0.2)`,
                    },
                }}
            >
                Quero agendar uma sessão &gt;&gt;
            </Button>
        </Box>
    );
}