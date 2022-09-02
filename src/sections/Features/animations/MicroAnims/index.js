import { Grid, Box } from "@mui/material";
import React from "react";
import Lottie from "react-lottie";
import Loader from "../../../../lottie/loader.json";
import Switches from "../../../../lottie/switches.json";
import Menu from "../../../../lottie/menu.json";
import Skeleton from "../../../../lottie/skeleton.json";

const ANIMS = [
  {
    color: "indigo.main",
    src: Loader,
  },
  {
    color: "purple.main",
    src: Switches,
  },
  {
    color: "green.main",
    src: Menu,
  },
  {
    color: "orange.main",
    src: Skeleton,
  },
];

export const MicroAnims = () => {
  return (
    <Grid container height="100%" width="100%" spacing={2}>
      {ANIMS.map(({ color, src }, idx) => (
        <Grid key={idx} item xs={6}>
          <Box data-sal="zoom-in" data-sal-delay={idx * 100}>
            <Box
              bgcolor={color}
              borderRadius={3}
              sx={{ aspectRatio: "1/1", pointerEvents: "none" }}
            >
              <Lottie
                options={{ animationData: src }}
                height="100%"
                width="100%"
              />
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};
