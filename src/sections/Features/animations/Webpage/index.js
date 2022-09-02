import { Box } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import WebpageAnim from "../../../../lottie/web-page.json";

export const Webpage = () => {
  return (
    <Box data-sal="zoom-in">
      <Box height="100%" width="100%" sx={{ pointerEvents: "none" }}>
        <Lottie
          options={{ animationData: WebpageAnim }}
          height="100%"
          width="100%"
        />
      </Box>
    </Box>
  );
};
