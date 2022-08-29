import { useTheme } from "@emotion/react";
import { Grid, Stack, useMediaQuery } from "@mui/material";
import { Content } from "./Content";
import { ImageView } from "./ImageView";

export const Hero = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      width="100%"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <Grid
        container
        py={lg ? 6 : 8}
        gap={8}
        direction={md ? "row" : "column"}
        width={lg ? "75%" : "90%"}
        alignItems={md ? "center" : "start"}
        justifyContent="space-between"
        maxWidth={1400}
        flexWrap="nowrap"
      >
        <Grid item xs={6}>
          <Content />
        </Grid>
        <Grid item xs={6}>
          <ImageView />
        </Grid>
      </Grid>
    </Stack>
  );
};
