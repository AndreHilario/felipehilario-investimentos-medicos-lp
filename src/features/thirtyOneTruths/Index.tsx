import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import type { ReactNode } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import ShieldOutlinedIcon from "@mui/icons-material/ShieldOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import { getCheckoutLinkProps } from "../../utils/checkout";
import FELIPE_IMAGE from "../../assets/img.jpg";

const paletteOptions = {
  blueDark: {
    label: "Dark azul",
    vars: {
      "--lp-bg": "#06172e",
      "--lp-bg-elevated": "#08213f",
      "--lp-hero-top": "#0b2d55",
      "--lp-text": "#eef8ff",
      "--lp-text-muted": "rgba(238, 248, 255, 0.78)",
      "--lp-text-soft": "rgba(238, 248, 255, 0.62)",
      "--lp-accent": "#ECB503",
      "--lp-accent-hover": "#d39f00",
      "--lp-accent-soft": "#ffe39a",
      "--lp-accent-rgb": "236, 181, 3",
      "--lp-line": "rgba(238, 248, 255, 0.13)",
      "--lp-line-strong": "rgba(238, 248, 255, 0.34)",
      "--lp-card": "rgba(238, 248, 255, 0.06)",
      "--lp-card-strong": "rgba(236, 181, 3, 0.1)",
      "--lp-inverse-bg": "#f3f9ff",
      "--lp-inverse-surface": "#ffffff",
      "--lp-inverse-text": "#06203c",
      "--lp-inverse-muted": "rgba(6, 32, 60, 0.74)",
      "--lp-inverse-soft": "rgba(6, 32, 60, 0.56)",
      "--lp-inverse-card": "rgba(6, 32, 60, 0.06)",
      "--lp-inverse-line": "rgba(6, 32, 60, 0.12)",
      "--lp-inverse-line-strong": "rgba(6, 32, 60, 0.28)",
    },
  },
  modern: {
    label: "Moderna",
    vars: {
      "--lp-bg": "#07090f",
      "--lp-bg-elevated": "#0e1522",
      "--lp-hero-top": "#151b2a",
      "--lp-text": "#f8f4ec",
      "--lp-text-muted": "rgba(248, 244, 236, 0.76)",
      "--lp-text-soft": "rgba(248, 244, 236, 0.58)",
      "--lp-accent": "#ffb86b",
      "--lp-accent-hover": "#f59b42",
      "--lp-accent-soft": "#ffe1bd",
      "--lp-accent-rgb": "255, 184, 107",
      "--lp-line": "rgba(247, 244, 237, 0.12)",
      "--lp-line-strong": "rgba(247, 244, 237, 0.32)",
      "--lp-card": "rgba(248, 244, 236, 0.055)",
      "--lp-card-strong": "rgba(255, 184, 107, 0.12)",
      "--lp-inverse-bg": "#f7f4ed",
      "--lp-inverse-surface": "#ffffff",
      "--lp-inverse-text": "#10131b",
      "--lp-inverse-muted": "rgba(16, 19, 27, 0.72)",
      "--lp-inverse-soft": "rgba(16, 19, 27, 0.56)",
      "--lp-inverse-card": "rgba(16, 19, 27, 0.06)",
      "--lp-inverse-line": "rgba(16, 19, 27, 0.12)",
      "--lp-inverse-line-strong": "rgba(16, 19, 27, 0.28)",
    },
  },
} as const;

const painPoints = [
  "Ganha mais hoje do que ganhava há 3 anos, mas tem menos tranquilidade.",
  "Já leu livro, baixou planilha, viu vídeo e continua no mesmo ciclo.",
  "Sente que o salário cai, as contas se pagam e nada de verdade acontece.",
  "Tem vergonha de admitir que, com a renda que tem, ainda não construiu o que gostaria.",
];

const deliverables = [
  "31 vídeo-aulas de 3 a 5 minutos, uma verdade por aula.",
  "Acesso imediato e vitalício à área de membros.",
  'O "teste que vale fazer hoje" em cada aula.',
  "A metodologia FOCO completa: Fluxo, Ordem, Conquistas e Objetivo.",
  "Bônus: masterclass ao vivo exclusiva para alunos.",
  "Garantia incondicional de 7 dias.",
];

const practicalSteps = [
  {
    title: "Assista no seu ritmo",
    text: "Todas as 31 verdades ficam liberadas desde o primeiro dia. Você pode maratonar em um fim de semana ou assistir uma por dia ao longo de um mês.",
  },
  {
    title: "Reconheça o comportamento",
    text: "Cada aula parte de uma cena real: o gasto que parecia necessário, a compra por orgulho, o mês que sumiu sem deixar patrimônio.",
  },
  {
    title: "Aplique um teste simples",
    text: "Toda verdade termina com uma pergunta, exercício ou decisão prática para levar para a vida real ainda na mesma semana.",
  },
];

const faqItems = [
  {
    question: "Eu não entendo nada de finanças. Isso serve para mim?",
    answer:
      "Serve, sim. O curso não é técnico. É sobre comportamento financeiro para quem recebe salário, paga conta, usa cartão e quer parar de viver no automático.",
  },
  {
    question: "Eu já vi muito conteúdo de finanças. Por que esse seria diferente?",
    answer:
      "Porque a maioria tenta te ensinar o que fazer. Aqui, a proposta é mostrar por que você não está fazendo, de forma curta, direta e aplicável.",
  },
  {
    question: "Eu tenho dívida. Vale a pena fazer mesmo assim?",
    answer:
      "Vale, e talvez ainda mais. Dívida normalmente também tem raiz comportamental. As 31 verdades ajudam você a enxergar o padrão por trás do problema.",
  },
  {
    question: "Quanto tempo eu vou levar para assistir tudo?",
    answer:
      "As aulas têm de 3 a 5 minutos. Dá para ver tudo em cerca de 2 horas, mas o ideal é assistir com calma e aplicar os testes.",
  },
  {
    question: "Tem mensalidade?",
    answer:
      "Não. O acesso custa R$ 10 em pagamento único, sem recorrência e sem mensalidade.",
  },
];

function CTAButton({ children, variant = "primary" }: { children: ReactNode; variant?: "primary" | "dark" }) {
  const isDark = variant === "dark";

  return (
    <Button
      component="a"
      {...getCheckoutLinkProps()}
      size="large"
      sx={{
        width: { xs: "100%", sm: "auto" },
        minHeight: 56,
        px: 4,
        borderRadius: "8px",
        bgcolor: isDark ? "var(--lp-inverse-text)" : "var(--lp-accent)",
        color: isDark ? "var(--lp-inverse-bg)" : "var(--lp-bg)",
        boxShadow: isDark
          ? "0 14px 34px rgba(0, 0, 0, 0.22)"
          : "0 16px 38px rgba(var(--lp-accent-rgb), 0.28)",
        fontWeight: 900,
        letterSpacing: 0,
        textTransform: "none",
        transition: "background-color .3s cubic-bezier(.22,1,.36,1), transform .3s cubic-bezier(.22,1,.36,1), box-shadow .3s cubic-bezier(.22,1,.36,1)",
        "&:hover": {
          bgcolor: isDark ? "var(--lp-accent-hover)" : "var(--lp-accent-hover)",
          transform: "translateY(-2px)",
          boxShadow: isDark
            ? "0 18px 44px rgba(0, 0, 0, 0.28)"
            : "0 20px 48px rgba(var(--lp-accent-rgb), 0.34)",
        },
      }}
    >
      {children}
    </Button>
  );
}

function ImageSlot({ label, height = 340 }: { label: string; height?: number }) {
  return (
    <Box
      sx={{
        minHeight: { xs: Math.max(220, height - 80), md: height },
        borderRadius: "8px",
        border: "1px solid var(--lp-line)",
        bgcolor: "var(--lp-card-strong)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        component="img"
        src={FELIPE_IMAGE}
        alt={label}
        sx={{
          width: "100%",
          height: "100%",
          minHeight: { xs: Math.max(220, height - 80), md: height },
          display: "block",
          objectFit: "cover",
          objectPosition: "center",
          filter: "saturate(0.96) contrast(1.04)",
        }}
      />
    </Box>
  );
}

function SectionLabel({ children, color = "var(--lp-accent)" }: { children: ReactNode; color?: string }) {
  return (
    <Typography
      component="p"
      sx={{
        color,
        fontSize: "0.78rem",
        fontWeight: 900,
        letterSpacing: 0,
        textTransform: "uppercase",
        mb: 2,
      }}
    >
      {children}
    </Typography>
  );
}

function CheckItem({ children }: { children: ReactNode }) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="flex-start">
      <CheckCircleOutlineIcon sx={{ color: "var(--lp-accent)", mt: "2px", fontSize: 22, flexShrink: 0 }} />
      <Typography sx={{ color: "var(--lp-text-muted)", lineHeight: 1.65 }}>{children}</Typography>
    </Stack>
  );
}

export function ModernThirtyOneTruthsPage() {
  const palette = paletteOptions.modern;

  return (
    <Box sx={{ ...palette.vars, bgcolor: "var(--lp-bg)", color: "var(--lp-text)", minHeight: "100vh" }}>
      <Box
        component="header"
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          borderBottom: "1px solid var(--lp-line)",
          bgcolor: "rgba(8, 9, 13, 0.88)",
          backdropFilter: "blur(18px)",
        }}
      >
        <Container maxWidth="xl">
          <Stack
            direction={{ xs: "column", lg: "row" }}
            spacing={2}
            alignItems={{ xs: "stretch", lg: "center" }}
            justifyContent="space-between"
            sx={{ py: 1.5 }}
          >
            <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={2}>
              <Typography color="var(--lp-text)" fontWeight={950} letterSpacing={0}>
                31 Verdades
              </Typography>
              <Typography
                sx={{
                  display: { xs: "none", sm: "block" },
                  color: "var(--lp-text-soft)",
                  fontSize: "0.82rem",
                  fontWeight: 800,
                }}
              >
                Felipe Hilário | Finanças e Foco
              </Typography>
            </Stack>
            <CTAButton>Acessar por R$ 10</CTAButton>
          </Stack>
        </Container>
      </Box>

      <Box
        component="main"
        sx={{
          background:
            "radial-gradient(circle at 18% 4%, rgba(var(--lp-accent-rgb), 0.18), transparent 26%), radial-gradient(circle at 88% 14%, rgba(84, 150, 255, 0.12), transparent 28%)",
        }}
      >
        <Box component="section" sx={{ minHeight: { md: "92vh" }, display: "grid", alignItems: "center", py: { xs: 6, md: 10 } }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1.05fr 0.95fr" },
                gap: { xs: 5, lg: 8 },
                alignItems: "center",
              }}
            >
              <Stack spacing={3}>
                <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                  {["31 aulas", "3 a 5 min", "R$ 10", "7 dias de garantia"].map((item) => (
                    <Typography
                      key={item}
                      sx={{
                        px: 1.6,
                        py: 0.8,
                        borderRadius: "999px",
                        border: "1px solid var(--lp-line)",
                        bgcolor: "var(--lp-card)",
                        color: "var(--lp-text-muted)",
                        fontSize: "0.78rem",
                        fontWeight: 900,
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Stack>

                <Typography
                  component="h1"
                  sx={{
                    color: "var(--lp-text)",
                    fontWeight: 950,
                    lineHeight: 0.9,
                    letterSpacing: 0,
                    fontSize: { xs: "3rem", sm: "4.2rem", lg: "6.7rem" },
                    maxWidth: 900,
                  }}
                >
                  Pare de ganhar bem e terminar o mês no escuro.
                </Typography>

                <Typography sx={{ color: "var(--lp-text-muted)", lineHeight: 1.7, fontSize: { xs: "1.06rem", md: "1.22rem" }, maxWidth: 760 }}>
                  Uma landing mais direta para vender o 31 Verdades Financeiras: um curso
                  curto, prático e desconfortável para quem trabalha muito, recebe bem e
                  ainda não sabe explicar para onde o dinheiro vai.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
                  <CTAButton>Quero destravar meu acesso agora</CTAButton>
                  <Typography color="var(--lp-text-soft)" fontWeight={800}>
                    Pagamento único. Acesso imediato.
                  </Typography>
                </Stack>
              </Stack>

              <Box
                sx={{
                  position: "relative",
                  minHeight: { xs: 460, md: 620 },
                  borderRadius: "8px",
                  border: "1px solid var(--lp-line)",
                  background: "linear-gradient(180deg, var(--lp-card-strong), var(--lp-card))",
                  overflow: "hidden",
                  p: { xs: 2, md: 3 },
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    inset: "12% 8% auto auto",
                    width: 148,
                    height: 148,
                    borderRadius: "50%",
                    bgcolor: "rgba(var(--lp-accent-rgb), 0.18)",
                    filter: "blur(10px)",
                  }}
                />
                <Box
                  sx={{
                    position: "relative",
                    height: "100%",
                    minHeight: { xs: 420, md: 560 },
                    display: "grid",
                    gridTemplateRows: "1fr auto",
                    gap: 2,
                  }}
                >
                  <ImageSlot label="Felipe Hilário - Finanças e Foco" height={420} />
                  <Box
                    sx={{
                      display: "grid",
                      gridTemplateColumns: "repeat(3, 1fr)",
                      gap: 1.5,
                    }}
                  >
                    {[
                      ["31", "verdades"],
                        ["2h", "conteúdo"],
                        ["R$10", "acesso"],
                    ].map(([value, label]) => (
                      <Box key={label} sx={{ p: 2, borderRadius: "8px", bgcolor: "var(--lp-card)", border: "1px solid var(--lp-line)" }}>
                        <Typography color="var(--lp-accent)" fontSize={{ xs: "1.4rem", md: "2rem" }} fontWeight={950} lineHeight={1}>
                          {value}
                        </Typography>
                        <Typography color="var(--lp-text-soft)" fontSize="0.78rem" fontWeight={800}>
                          {label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 7, md: 10 }, borderTop: "1px solid var(--lp-line)", borderBottom: "1px solid var(--lp-line)" }}>
          <Container maxWidth="xl">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.8fr 1.2fr" }, gap: { xs: 4, lg: 8 }, alignItems: "start" }}>
              <Box sx={{ position: { lg: "sticky" }, top: { lg: 112 } }}>
                <SectionLabel>Diagnóstico rápido</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2.2rem", md: "4rem" }, lineHeight: 1 }}>
                  O dinheiro não some. Ele segue seus padrões.
                </Typography>
              </Box>

              <Box sx={{ display: "grid", gap: 1.5 }}>
                {painPoints.map((item, index) => (
                  <Box
                    key={item}
                    sx={{
                      display: "grid",
                      gridTemplateColumns: { xs: "1fr", sm: "88px 1fr" },
                      gap: 2,
                      p: { xs: 2.5, md: 3.5 },
                      borderRadius: "8px",
                      border: "1px solid var(--lp-line)",
                      bgcolor: "var(--lp-card)",
                    }}
                  >
                    <Typography color="var(--lp-accent)" fontWeight={950} fontSize="1.8rem">
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography color="var(--lp-text-muted)" fontSize="1.08rem" lineHeight={1.65}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
          <Container maxWidth="xl">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", lg: "1fr 1fr" },
                gap: { xs: 4, lg: 8 },
                alignItems: "center",
              }}
            >
              <Stack spacing={3}>
                <SectionLabel>A arquitetura do curso</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2.2rem", md: "4.6rem" }, lineHeight: 0.98 }}>
                  Uma aula por dia. Uma verdade por vez. Um teste para hoje.
                </Typography>
                <Typography color="var(--lp-text-muted)" lineHeight={1.75} fontSize="1.08rem">
                  A página moderna troca blocos longos por leitura escaneável: módulos,
                  números grandes e contraste forte. Ainda assim, a promessa continua a
                  mesma: comportamento financeiro direto, sem planilha complicada e sem
                  promessa vazia.
                </Typography>
              </Stack>

              <Box sx={{ display: "grid", gap: 2 }}>
                {practicalSteps.map((step, index) => (
                  <Box
                    key={step.title}
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRadius: "8px",
                      background: index === 1
                        ? "linear-gradient(135deg, rgba(var(--lp-accent-rgb), 0.18), rgba(255, 255, 255, 0.055))"
                        : "var(--lp-card)",
                      color: "var(--lp-text)",
                      border: index === 1
                        ? "1px solid rgba(var(--lp-accent-rgb), 0.32)"
                        : "1px solid var(--lp-line)",
                      boxShadow: index === 1
                        ? "0 24px 70px rgba(0, 0, 0, 0.24)"
                        : "none",
                    }}
                  >
                    <Typography fontWeight={950} fontSize="0.8rem" mb={1} sx={{ opacity: 0.78 }}>
                      MÓDULO {index + 1}
                    </Typography>
                    <Typography component="h3" fontWeight={950} fontSize={{ xs: "1.5rem", md: "2rem" }} mb={1}>
                      {step.title}
                    </Typography>
                    <Typography lineHeight={1.65} sx={{ opacity: 0.78 }}>
                      {step.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ bgcolor: "var(--lp-inverse-bg)", color: "var(--lp-inverse-text)", py: { xs: 8, md: 12 } }}>
          <Container maxWidth="xl">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", lg: "0.9fr 1.1fr" }, gap: { xs: 5, lg: 8 }, alignItems: "center" }}>
              <Box
                sx={{
                  minHeight: { xs: 320, md: 560 },
                  borderRadius: "8px",
                  border: "1px solid var(--lp-inverse-line)",
                  bgcolor: "var(--lp-inverse-card)",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={FELIPE_IMAGE}
                  alt="Felipe Hilário"
                  sx={{
                    width: "100%",
                    minHeight: { xs: 320, md: 560 },
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "saturate(0.96) contrast(1.04)",
                  }}
                />
              </Box>

              <Stack spacing={3}>
                <SectionLabel>Autoridade sem fantasia</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-inverse-text)", fontWeight: 950, fontSize: { xs: "2.2rem", md: "4rem" }, lineHeight: 1 }}>
                  Finanças pessoais são 80% comportamento e 20% matemática.
                </Typography>
                <Typography color="var(--lp-inverse-muted)" lineHeight={1.78} fontSize="1.08rem">
                  Felipe Hilário traduz comportamento financeiro para a realidade de quem
                  ganha razoavelmente bem, trabalha muito e quer construir patrimônio sem
                  destruir a própria vida.
                </Typography>
                <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 1.5 }}>
                  {["Sem promessa de enriquecimento rápido", "Sem teoria de banco", "Sem planilha impossível", "Sem mensalidade"].map((item) => (
                    <Stack key={item} direction="row" spacing={1.2} alignItems="flex-start">
                      <CheckCircleOutlineIcon sx={{ color: "var(--lp-accent)", mt: "2px" }} />
                      <Typography color="var(--lp-inverse-muted)" lineHeight={1.5}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="xl">
            <Stack spacing={4}>
              <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, justifyContent: "space-between", gap: 3 }}>
                <Box sx={{ maxWidth: 720 }}>
                  <SectionLabel>Oferta clara</SectionLabel>
                  <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2.2rem", md: "4rem" }, lineHeight: 1 }}>
                    Tudo por R$ 10. Sem mensalidade.
                  </Typography>
                </Box>
                <Box sx={{ minWidth: { md: 280 }, alignSelf: { md: "end" } }}>
                  <CTAButton>Ir para o checkout</CTAButton>
                </Box>
              </Box>

              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2 }}>
                {deliverables.map((item, index) => (
                  <Box key={item} sx={{ p: 3, borderRadius: "8px", border: "1px solid var(--lp-line)", bgcolor: "var(--lp-card)" }}>
                    <Typography color="var(--lp-accent)" fontWeight={950} fontSize="1.4rem" mb={2}>
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography color="var(--lp-text-muted)" lineHeight={1.65}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 12 }, bgcolor: "var(--lp-bg-elevated)" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" }, gap: { xs: 4, md: 6 } }}>
              <Stack spacing={2}>
                <ShieldOutlinedIcon sx={{ color: "var(--lp-accent)", fontSize: 42 }} />
                <Typography component="h2" color="var(--lp-text)" fontWeight={950} fontSize={{ xs: "2.1rem", md: "3.2rem" }} lineHeight={1}>
                  7 dias para testar sem peso.
                </Typography>
              </Stack>
              <Stack spacing={2}>
                <Typography color="var(--lp-text-muted)" lineHeight={1.75} fontSize="1.08rem">
                  Você entra agora, assiste o que quiser e testa as ideias na vida real.
                  Se não fizer diferença ou se o formato não servir para você, pede reembolso.
                </Typography>
                <Typography color="var(--lp-accent-soft)" fontWeight={950} fontSize="1.35rem">
                  Sem perguntas. Sem formulário. Sem burocracia.
                </Typography>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Container maxWidth="md">
            <Stack spacing={4} textAlign="center">
              <Box>
                <SectionLabel color="#ffffff">FAQ</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2.2rem", md: "3.8rem" }, lineHeight: 1 }}>
                  Dúvidas antes de entrar.
                </Typography>
              </Box>
              <Stack spacing={1.5} textAlign="left">
                {faqItems.map((item) => (
                  <Accordion
                    key={item.question}
                    disableGutters
                    elevation={0}
                    sx={{
                      borderRadius: "8px",
                      bgcolor: "var(--lp-card)",
                      color: "var(--lp-text)",
                      border: "1px solid var(--lp-line)",
                      "&:before": { display: "none" },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "var(--lp-accent)" }} />}>
                      <Typography color="#ffffff" fontWeight={950}>
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="var(--lp-text-muted)" lineHeight={1.65}>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Box
          component="section"
          sx={{
            py: { xs: 9, md: 14 },
            color: "var(--lp-text)",
            background:
              "radial-gradient(circle at 50% 0%, rgba(var(--lp-accent-rgb), 0.22), transparent 34%), linear-gradient(180deg, var(--lp-bg-elevated), var(--lp-bg))",
            borderTop: "1px solid var(--lp-line)",
          }}
        >
          <Container maxWidth="lg">
            <Stack
              spacing={3}
              alignItems="center"
              textAlign="center"
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: "8px",
                border: "1px solid rgba(var(--lp-accent-rgb), 0.28)",
                background: "linear-gradient(135deg, rgba(var(--lp-accent-rgb), 0.12), rgba(255, 255, 255, 0.045))",
                boxShadow: "0 32px 90px rgba(0, 0, 0, 0.28)",
              }}
            >
              <Typography component="h2" fontWeight={950} fontSize={{ xs: "2.6rem", md: "5.8rem" }} lineHeight={0.94}>
                Comece pelas 31 verdades.
              </Typography>
              <Typography color="var(--lp-text-muted)" fontWeight={850} lineHeight={1.6} fontSize={{ xs: "1rem", md: "1.18rem" }} maxWidth={740}>
                Em menos de 60 segundos você pode estar dentro da área de membros.
                O risco é pequeno. A clareza que você pode ganhar não é.
              </Typography>
              <CTAButton>Quero acessar agora</CTAButton>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>
  );
}

export function ThirtyOneTruthsPage() {
  const palette = paletteOptions.blueDark;

  return (
    <Box sx={{ ...palette.vars, bgcolor: "var(--lp-bg)", color: "var(--lp-text)", minHeight: "100vh" }}>
      <Box
        component="header"
        sx={{
          borderBottom: "1px solid var(--lp-line)",
          position: "sticky",
          top: 0,
          zIndex: 20,
          bgcolor: "color-mix(in srgb, var(--lp-bg) 90%, transparent)",
          backdropFilter: "blur(16px)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "stretch", md: "center" }}
            justifyContent="space-between"
            spacing={2}
            sx={{ minHeight: 72, py: { xs: 1.5, md: 0 } }}
          >
            <Typography fontWeight={900} letterSpacing={0} color="var(--lp-text)">
              Finanças e Foco
            </Typography>
            <Button
              component="a"
              {...getCheckoutLinkProps()}
              sx={{
                color: "var(--lp-text)",
                border: "1px solid var(--lp-line-strong)",
                borderRadius: "8px",
                px: 2,
                textTransform: "none",
                fontWeight: 800,
                "&:hover": { borderColor: "var(--lp-accent)", bgcolor: "rgba(var(--lp-accent-rgb), 0.12)" },
              }}
            >
              Acessar por R$ 10
            </Button>
          </Stack>
        </Container>
      </Box>

      <Box component="main">
        <Box
          component="section"
          sx={{
            py: { xs: 2, md: 6 },
            background:
              "radial-gradient(circle at 78% 16%, rgba(var(--lp-accent-rgb), 0.2), transparent 28%), linear-gradient(180deg, var(--lp-hero-top) 0%, var(--lp-bg) 100%)",
          }}
        >
          <Container maxWidth="lg">
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: { xs: "1fr", md: "1.02fr 0.98fr" },
                gap: { xs: 5, md: 8 },
                alignItems: "center",
              }}
            >
              <Stack spacing={3}>
                <Typography
                  sx={{
                    alignSelf: "flex-start",
                    color: "var(--lp-accent-soft)",
                    bgcolor: "var(--lp-card-strong)",
                    border: "1px solid var(--lp-line)",
                    borderRadius: "999px",
                    px: 2,
                    py: 0.9,
                    fontSize: "0.82rem",
                    fontWeight: 800,
                  }}
                >
                  Curso curto. Pagamento único. Acesso imediato.
                </Typography>

                <Typography
                  component="h1"
                  sx={{
                    color: "var(--lp-text)",
                    fontWeight: 950,
                    lineHeight: 0.96,
                    letterSpacing: 0,
                    fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                  }}
                >
                  31 verdades sobre dinheiro que você só descobre tarde demais.
                </Typography>

                <Typography
                  sx={{
                    color: "var(--lp-text-muted)",
                    fontSize: { xs: "1.05rem", md: "1.24rem" },
                    lineHeight: 1.68,
                    maxWidth: 680,
                  }}
                >
                  Verdades curtas, diretas e desconfortáveis sobre comportamento financeiro,
                  em vídeos de 3 a 5 minutos. Para você que ganha razoavelmente bem, mas
                  vive com a sensação de que o mês some sem deixar nada para trás.
                </Typography>

                <Stack direction={{ xs: "column", sm: "row" }} spacing={2} alignItems={{ xs: "stretch", sm: "center" }}>
                  <CTAButton>Quero acessar as 31 verdades por R$ 10</CTAButton>
                  <Typography color="var(--lp-text-soft)" fontSize="0.92rem">
                    Sem mensalidade. Sem letra miúda.
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Box sx={{ bgcolor: "var(--lp-accent)", color: "#ffffff", py: { xs: 3, md: 4 } }}>
          <Container maxWidth="lg">
            <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center" justifyContent="space-between">
              <Typography component="h3" fontWeight={800} fontSize={{ xs: "1.2rem", md: "2rem" }} lineHeight={1.1} color="#FFF">
                Acesso imediato por apenas R$ 10
              </Typography>
              <Typography fontWeight={800} textAlign={{ xs: "center", md: "right" }} color="var(--lp-text-muted)">
                Pagamento único. Sem mensalidade.
              </Typography>
            </Stack>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.9fr 1.1fr" }, gap: { xs: 5, md: 8 } }}>
              <Box>
                <SectionLabel>Isso é para você</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2rem", md: "3.4rem" }, lineHeight: 1.05, mb: 3 }}>
                  Você ganha bem, mas vive com a sensação de que o salário some.
                </Typography>
                <Typography sx={{ color: "var(--lp-text-muted)", lineHeight: 1.75, fontSize: "1.06rem" }}>
                  Se você é CLT, ganha entre 5 mil e 30 mil por mês, faz hora extra,
                  recebe bônus ou pega um freela do lado, mas no dia 25 olha para o
                  extrato e pensa "cadê tudo isso que eu trabalhei?", esta página é para você.
                </Typography>
              </Box>

              <Stack spacing={2}>
                {painPoints.map((item) => (
                  <Box
                    key={item}
                    sx={{
                      p: { xs: 2.5, md: 3 },
                      borderRadius: "8px",
                      border: "1px solid var(--lp-line)",
                      bgcolor: "var(--lp-card)",
                    }}
                  >
                    <CheckItem>{item}</CheckItem>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 }, bgcolor: "var(--lp-bg-elevated)" }}>
          <Container maxWidth="lg">
            <Stack spacing={4} alignItems="center" textAlign="center" sx={{ maxWidth: 900, mx: "auto" }}>
              <SectionLabel>O inimigo nomeado</SectionLabel>
              <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2rem", md: "3.6rem" }, lineHeight: 1.05 }}>
                O problema não é falta de dinheiro. É a Síndrome do Salário Que Some.
              </Typography>
              <Typography sx={{ color: "var(--lp-text-muted)", lineHeight: 1.8, fontSize: "1.08rem" }}>
                O salário cai. Você paga as contas. Sobra algum dinheiro. Esse dinheiro
                vai embora em coisas que, na hora, parecem necessárias. No fim do mês,
                sobra zero. E quando você tenta lembrar para onde foi, não consegue.
              </Typography>
              <Typography sx={{ color: "var(--lp-accent-soft)", fontWeight: 900, fontSize: { xs: "1.3rem", md: "1.7rem" }, lineHeight: 1.35 }}>
                Não é falta de inteligência. É falta de enxergar o próprio comportamento financeiro de fora.
              </Typography>
            </Stack>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
              <Stack spacing={3}>
                <SectionLabel>A solução</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2rem", md: "3.4rem" }, lineHeight: 1.05 }}>
                  31 verdades. 31 dias. Uma cabeça financeira diferente.
                </Typography>
                <Typography sx={{ color: "var(--lp-text-muted)", lineHeight: 1.78, fontSize: "1.06rem" }}>
                  O 31 Verdades Financeiras é um curso curto, prático e desconfortável.
                  Não é teoria de banco, tabela de Excel ou gráfico de juros compostos.
                  É comportamento na veia, direto e sem enrolação.
                </Typography>
                <Stack spacing={2}>
                  <CheckItem>Uma cena concreta que você vai reconhecer porque já viveu.</CheckItem>
                  <CheckItem>O princípio por trás dela, sem a maquiagem do mercado financeiro.</CheckItem>
                  <CheckItem>Um teste para aplicar na sua vida ainda essa semana.</CheckItem>
                </Stack>
              </Stack>

              <Box sx={{ display: "grid", gap: 2 }}>
                {practicalSteps.map((step, index) => (
                  <Box
                    key={step.title}
                    sx={{
                      p: { xs: 3, md: 4 },
                      borderRadius: "8px",
                      border: "1px solid var(--lp-line)",
                      bgcolor: "var(--lp-card)",
                    }}
                  >
                    <Typography color="var(--lp-accent)" fontWeight={950} mb={1}>
                      0{index + 1}
                    </Typography>
                    <Typography component="h3" color="var(--lp-text)" fontWeight={900} fontSize="1.28rem" mb={1}>
                      {step.title}
                    </Typography>
                    <Typography color="var(--lp-text-muted)" lineHeight={1.65}>
                      {step.text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 }, bgcolor: "var(--lp-inverse-bg)", color: "var(--lp-inverse-text)" }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" }, gap: { xs: 5, md: 8 }, alignItems: "center" }}>
              <Box
                sx={{
                  minHeight: { xs: 300, md: 520 },
                  borderRadius: "8px",
                  border: "1px solid var(--lp-inverse-line)",
                  bgcolor: "var(--lp-inverse-card)",
                  overflow: "hidden",
                }}
              >
                <Box
                  component="img"
                  src={FELIPE_IMAGE}
                  alt="Felipe Hilário"
                  sx={{
                    width: "100%",
                    minHeight: { xs: 300, md: 520 },
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    objectPosition: "center",
                    filter: "saturate(0.96) contrast(1.04)",
                  }}
                />
              </Box>

              <Stack spacing={3}>
                <SectionLabel>Sobre o Felipe</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-inverse-text)", fontWeight: 950, fontSize: { xs: "2rem", md: "3.1rem" }, lineHeight: 1.08 }}>
                  Quem é o cara que vai te entregar essas 31 verdades?
                </Typography>
                <Typography sx={{ color: "var(--lp-inverse-muted)", lineHeight: 1.78, fontSize: "1.06rem" }}>
                  Meu nome é Felipe Hilário. Sou o criador da Finanças e Foco. Eu
                  não sou economista de banco, não sou herdeiro e não vendo promessa
                  de ficar rico em 6 meses.
                </Typography>
                <Typography sx={{ color: "var(--lp-inverse-muted)", lineHeight: 1.78, fontSize: "1.06rem" }}>
                  Durante muitos anos, vivi exatamente o padrão dessa página: ganhava
                  razoavelmente bem, trabalhava muito e olhava para o extrato sem entender
                  para onde o dinheiro tinha ido. O que virou a chave foi entender que
                  finanças pessoais são 80% comportamento e 20% matemática.
                </Typography>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
          <Container maxWidth="lg">
            <Stack spacing={5} alignItems="center" textAlign="center">
              <Box sx={{ maxWidth: 800 }}>
                <SectionLabel>O que você recebe</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2rem", md: "3.4rem" }, lineHeight: 1.05 }}>
                  Tudo o que entra no seu acesso hoje.
                </Typography>
              </Box>
              <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5, width: "100%" }}>
                {deliverables.map((item, index) => (
                  <Box
                    key={item}
                    sx={{
                      p: 3,
                      borderRadius: "8px",
                      border: "1px solid var(--lp-line)",
                      bgcolor: "var(--lp-card)",
                      textAlign: "left",
                    }}
                  >
                    <Typography color="var(--lp-accent)" fontWeight={950} mb={2}>
                      {String(index + 1).padStart(2, "0")}
                    </Typography>
                    <Typography color="var(--lp-text-muted)" lineHeight={1.65}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Stack>
          </Container>
        </Box>

        {/*
          Seção de feedback/prints temporariamente desativada.
          Reativar quando houver comentários reais de clientes para exibir.
        */}

        <Box id="checkout" component="section" sx={{ py: { xs: 4, md: 8 }, bgcolor: "var(--lp-inverse-bg)", color: "var(--lp-inverse-text)" }}>
          <Container maxWidth="md">
            <Box
              sx={{
                p: { xs: 3, md: 6 },
                borderRadius: "8px",
                bgcolor: "var(--lp-inverse-surface)",
                border: "1px solid var(--lp-inverse-line)",
                boxShadow: "0 22px 60px rgba(0, 0, 0, 0.12)",
                textAlign: "center",
              }}
            >
              <Stack spacing={3} alignItems="center">
                <SectionLabel>Oferta de entrada</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-inverse-text)", fontWeight: 950, fontSize: { xs: "2rem", md: "3rem" }, lineHeight: 1.08 }}>
                  Hoje você entra no 31 Verdades e leva tudo isso.
                </Typography>
                <Box sx={{ display: "grid", gap: 1.5, textAlign: "left", maxWidth: 620 }}>
                  {deliverables.map((item) => (
                    <Stack key={item} direction="row" spacing={1.5} alignItems="flex-start">
                      <CheckCircleOutlineIcon sx={{ color: "var(--lp-accent)", mt: "2px" }} />
                      <Typography color="var(--lp-inverse-muted)" lineHeight={1.55}>
                        {item}
                      </Typography>
                    </Stack>
                  ))}
                </Box>
                <Divider sx={{ width: "100%", borderColor: "var(--lp-inverse-line)", my: 1 }} />
                <Typography color="var(--lp-inverse-soft)" fontWeight={800}>
                  Por apenas
                </Typography>
                <Typography sx={{ color: "var(--lp-inverse-text)", fontWeight: 950, fontSize: { xs: "4rem", md: "6rem" }, lineHeight: 0.9 }}>
                  R$ 10
                </Typography>
                <Typography color="var(--lp-inverse-muted)" fontWeight={850}>
                  Pagamento único. Acesso imediato. Sem mensalidade.
                </Typography>
                <CTAButton variant="dark">Quero meu acesso ao 31 Verdades por R$ 10</CTAButton>
                <Typography color="var(--lp-inverse-soft)" lineHeight={1.6}>
                  Menos do que um lanche no shopping. A diferença é que esse R$ 10
                  pode mudar a forma como você olha para o seu dinheiro pelo resto da vida.
                </Typography>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "0.8fr 1.2fr" }, gap: { xs: 4, md: 8 }, alignItems: "start" }}>
              <Stack spacing={3}>
                <ShieldOutlinedIcon sx={{ color: "var(--lp-accent)", fontSize: 42 }} />
                <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2rem", md: "3.2rem" }, lineHeight: 1.06 }}>
                  Garantia incondicional de 7 dias.
                </Typography>
              </Stack>
              <Stack spacing={2.5}>
                <Typography color="var(--lp-text-muted)" lineHeight={1.8} fontSize="1.05rem">
                  Você entra agora, assiste o que quiser nas próximas 168 horas e testa
                  as ideias na vida real: no extrato, na decisão de compra, na conversa em casa.
                </Typography>
                <Typography color="var(--lp-text-muted)" lineHeight={1.8} fontSize="1.05rem">
                  Se sentir que não fez diferença ou não curtir o formato, manda uma
                  mensagem e recebe 100% do dinheiro de volta. Sem formulário, sem
                  burocracia e sem perguntas.
                </Typography>
              </Stack>
            </Box>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 }, bgcolor: "var(--lp-bg-elevated)" }}>
          <Container maxWidth="md">
            <Stack spacing={4} textAlign="center">
              <Box>
                <SectionLabel color="#ffffff">Dúvidas comuns</SectionLabel>
                <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2rem", md: "3.2rem" }, lineHeight: 1.06 }}>
                  Antes de entrar.
                </Typography>
              </Box>
              <Stack spacing={1.5} textAlign="left">
                {faqItems.map((item) => (
                  <Accordion
                    key={item.question}
                    disableGutters
                    elevation={0}
                    sx={{
                      borderRadius: "8px",
                      bgcolor: "var(--lp-card)",
                      color: "var(--lp-text)",
                      border: "1px solid var(--lp-line)",
                      "&:before": { display: "none" },
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon sx={{ color: "var(--lp-accent)" }} />}
                      sx={{ color: "#ffffff" }}
                    >
                      <Typography color="#ffffff" fontWeight={900}>
                        {item.question}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography color="var(--lp-text-muted)" lineHeight={1.65}>
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Stack>
            </Stack>
          </Container>
        </Box>

        <Box component="section" sx={{ py: { xs: 4, md: 8 } }}>
          <Container maxWidth="lg">
            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" }, gap: 2.5, mb: 6 }}>
              {[
                { icon: <PlayCircleOutlineIcon />, title: "31 aulas curtas", text: "Conteúdo direto para assistir sem precisar reorganizar sua vida." },
                { icon: <AccountBalanceWalletOutlinedIcon />, title: "Comportamento", text: "O foco é a raiz das decisões, não mais uma promessa técnica." },
                { icon: <WorkspacePremiumOutlinedIcon />, title: "Risco zero", text: "7 dias para testar. Se não fizer sentido, seu dinheiro volta." },
              ].map((item) => (
                <Box key={item.title} sx={{ p: 3, borderRadius: "8px", border: "1px solid var(--lp-line)", bgcolor: "var(--lp-card)" }}>
                  <Box sx={{ color: "var(--lp-accent)", mb: 2, "& svg": { fontSize: 30 } }}>{item.icon}</Box>
                  <Typography color="var(--lp-text)" fontWeight={950} fontSize="1.25rem" mb={1}>
                    {item.title}
                  </Typography>
                  <Typography color="var(--lp-text-muted)" lineHeight={1.65}>
                    {item.text}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Stack spacing={3} alignItems="center" textAlign="center" sx={{ maxWidth: 820, mx: "auto" }}>
              <Typography component="h2" sx={{ color: "var(--lp-text)", fontWeight: 950, fontSize: { xs: "2.2rem", md: "4rem" }, lineHeight: 1.02 }}>
                Você pode fechar esta página ou começar a primeira verdade agora.
              </Typography>
              <Typography color="var(--lp-text-muted)" lineHeight={1.75} fontSize="1.06rem">
                Eu não vou te prometer riqueza, milhão em 12 meses ou liberdade mágica.
                O que eu prometo é simples: se você assistir as 31 verdades de cabeça
                aberta e fizer pelo menos metade dos testes, sua relação com dinheiro
                não vai ser mais a mesma.
              </Typography>
              <CTAButton>Quero começar as 31 verdades agora</CTAButton>
              <Typography color="var(--lp-text-soft)">
                Felipe Hilário | Finanças e Foco
              </Typography>
            </Stack>
          </Container>
        </Box>
      </Box>

      <Box component="footer" sx={{ borderTop: "1px solid var(--lp-line)", py: 4 }}>
        <Container maxWidth="lg">
          <Stack direction={{ xs: "column", md: "row" }} spacing={2} justifyContent="space-between" alignItems={{ xs: "flex-start", md: "center" }}>
            <Typography color="var(--lp-text-muted)" fontWeight={800}>
              Finanças e Foco - Felipe Hilário
            </Typography>
            <Typography color="var(--lp-text-soft)" fontSize="0.92rem">
              Todos os direitos reservados | 2026
            </Typography>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
