import { Box, Stack, Typography, IconButton, Tooltip } from "@mui/material"
import InstagramIcon from "@mui/icons-material/Instagram"
import WhatsAppIcon from "@mui/icons-material/WhatsApp"
import { generateWhatsappLink } from "../utils/sendWhatsAppMessage"

export const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <Box
            component="footer"
            sx={{
                width: "100%",
                borderTop: "1px solid",
                borderColor: "divider",
                bgcolor: "background.defalut",
            }}
        >
            <Box sx={{ maxWidth: 1200, mx: "auto", px: 3, py: 3 }}>
                <Stack
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="space-between"
                    alignItems={{ xs: "center", md: "center" }}
                    spacing={{ xs: 4, md: 0 }}
                >
                    <Box sx={{ textAlign: { xs: "center", md: "center" } }}>
                        <Typography
                            fontWeight={700}
                            fontSize="0.95rem"
                            mb={2}
                        >
                            SUPORTE
                        </Typography>

                        <Stack spacing={1}>
                            <Typography variant="body2">
                                • WhatsApp direto
                            </Typography>
                            <Typography variant="body2">
                                • Reuniões estratégicas agendadas
                            </Typography>
                            <Typography variant="body2">
                                • Acompanhamento contínuo
                            </Typography>
                        </Stack>

                        <Typography
                            mt={2}
                            fontWeight={600}
                            fontSize="0.9rem"
                        >
                            Você não fica sozinho.
                        </Typography>
                    </Box>

                    <Stack
                        spacing={2}
                        alignItems={{ xs: "center", md: "center" }}
                        textAlign={{ xs: "center", md: "center" }}
                    >
                        <Typography
                            variant="body2"
                            sx={{
                                color: (theme) =>
                                    theme.palette.mode === "dark"
                                        ? "grey.400"
                                        : "grey.700"
                            }}
                        >
                            © {currentYear} FelipeHilario | Todos os direitos reservados
                        </Typography>

                        <Stack direction="row" spacing={1}>
                            <Tooltip title="WhatsApp" arrow>
                                <IconButton
                                    component="a"
                                    href={generateWhatsappLink(
                                        "5512982245338",
                                        "Olá Felipe! Venho pelo site e preciso falar com você de forma urgente."
                                    )}
                                    rel="noopener noreferrer"
                                    aria-label="Abrir WhatsApp"
                                    sx={{
                                        color: "#25D366",
                                        transition: "all .2s ease",
                                        "&:hover": {
                                            transform: "translateY(-1px)",
                                            bgcolor: "rgba(37, 211, 102, 0.12)"
                                        }
                                    }}
                                >
                                    <WhatsAppIcon />
                                </IconButton>
                            </Tooltip>

                            <Tooltip title="Instagram" arrow>
                                <IconButton
                                    component="a"
                                    href="https://instagram.com/felipehilario.investimentos"
                                    rel="noopener noreferrer"
                                    aria-label="Abrir Instagram"
                                    sx={{
                                        color: "#E4405F",
                                        transition: "all .2s ease",
                                        "&:hover": {
                                            transform: "translateY(-1px)",
                                            bgcolor: "rgba(228, 64, 95, 0.12)"
                                        }
                                    }}
                                >
                                    <InstagramIcon />
                                </IconButton>
                            </Tooltip>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
        </Box>
    )
}
