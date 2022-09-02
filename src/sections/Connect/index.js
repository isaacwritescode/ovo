import { Grid, Box } from "@mui/material";
import { Card1 } from "./Card1";
import { Card2 } from "./Card2";

export const Connect = () => {
  return (
    <Box width={{ xs: "90%", lg: "75%" }} m="auto" maxWidth={1400}>
      <Grid container py={8} spacing={4} columns={{ xs: 6, lg: 12 }}>
        <Grid item xs={6}>
          <Box data-sal="flip-up" data-sal-duration={1000}>
            <Card1 />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box data-sal="flip-up" data-sal-delay={200} data-sal-duration={1000}>
            <Card2 />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
