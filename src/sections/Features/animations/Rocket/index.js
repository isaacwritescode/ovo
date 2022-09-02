import { Box } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import RocketAnim from "../../../../lottie/rocket.json";

export const Rocket = () => {
  return (
    <Box data-aos="zoom-in">
      <Box
        wodth="100%"
        height="100%"
        bgcolor="turquoise.contrastText"
        borderRadius={3}
        p={4}
        boxSizing="border-box"
        sx={{ aspectRatio: "1/1", pointerEvents: "none" }}
      >
        <Lottie
          options={{ animationData: RocketAnim }}
          height="100%"
          width="100%"
        />
      </Box>
    </Box>
  );
};
