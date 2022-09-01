import { Box } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import ResponsivityAnim from "../../../../lottie/responsivity.json";

export const Responsivity = () => {
  return (
    <Box
      wodth="100%"
      height="100%"
      bgcolor="red.extraLight"
      borderRadius={3}
      sx={{ aspectRatio: "1/1" }}
    >
      <Lottie
        options={{ animationData: ResponsivityAnim }}
        height="100%"
        width="100%"
      />
    </Box>
  );
};
