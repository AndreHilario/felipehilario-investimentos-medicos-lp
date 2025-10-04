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
                py: 2,
                borderTop: "1px solid",
                borderColor: "divider",
                bgcolor: "background.paper"
            }}
        >
            <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 1, sm: 2 }}
                justifyContent="center"
                alignItems="center"
                sx={{ textAlign: "center", px: 2 }}
            >
                <Typography
                    variant="body2"
                    sx={{ color: (theme) => (theme.palette.mode === "dark" ? "grey.400" : "grey.700") }}
                >
                    © {currentYear} FelipeHilario | Todos os direitos reservados
                </Typography>

                {/* Separador opcional em telas maiores */}
                <Box
                    sx={{
                        display: { xs: "none", sm: "block" },
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "divider",
                        mx: 1
                    }}
                />

                {/* Ícones de redes sociais */}
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
        </Box>
    )
}