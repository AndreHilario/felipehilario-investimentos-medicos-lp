import { Box, Stack, Typography } from "@mui/material"

export const Footer = () => {
    return (
        <Box sx={{ width: "100%", pb: 2 }}>
            <Stack direction="row" justifyContent="center" alignItems="center">
                <Typography variant="body2" sx={{ color: "#474747ff" }}>
                    © 2025 FelipeHilario | Todos os direitos reservados
                </Typography>
            </Stack>
        </Box>
    )

}