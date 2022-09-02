import { Box, Grid } from "@mui/material";
import { Content } from "./Content";
import { ImageView } from "./ImageView";

export const Hero = () => {
  return (
    <Box
      py={{ xs: 8, lg: 6 }}
      width={{ xs: "90%", lg: "75%" }}
      m="auto"
      maxWidth={1400}
    >
      <Grid
        container
        spacing={8}
        alignItems="center"
        justifyContent="space-between"
        columns={{ xs: 6, md: 12 }}
      >
        <Grid item xs={6}>
          <Content />
        </Grid>
        <Grid item xs={6}>
          <ImageView />
        </Grid>
      </Grid>
    </Box>
  );
};
