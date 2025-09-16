import React from "react";
import { Stack } from "@mui/material";

const Header: React.FC = () => {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 1000,
        backgroundImage: "linear-gradient(135deg, #69ff8fff 0%, #5cdcffff 100%)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "40px"
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        sx={{
          width: "100%",
          maxWidth: "1800px", // equivalente ao max-w-screen-2xl
          margin: "0 auto",
          paddingY: 0.5,
          paddingX: {
            xs: 2, // padding horizontal menor em mobile
            sm: 3, // um pouco maior em tablets
            md: 4, // ainda maior em notebooks
          },
          color: "#FFFFFF",
        }}
      >
      </Stack>
    </div>
  );
};

export default Header;
