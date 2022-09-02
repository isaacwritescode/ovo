import { Box, Chip, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { Header } from "../common/Header";
import { FEATURES } from "./constants";

export const Features = () => {
  return (
    <Box width="100%" py={12} bgcolor="#f2f3f5">
      <Box width={{ xs: "90%", lg: "75%" }} maxWidth={1400} m="auto">
        <Stack spacing={4}>
          <Header
            title="Why us"
            heading="We take things a step further, always. Our priority is making your brand stand out"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            maxWidth={640}
            mb={{ xs: 4, md: 8 }}
          />
          {FEATURES.map(({ color, title, heading, desc, anim }, idx) => (
            <Box py={{ xs: 2, md: 8 }}>
              <Grid
                container
                width="100%"
                justifyContent="center"
                alignItems="center"
                direction={idx % 2 ? "row" : "row-reverse"}
                spacing={{ md: 8 }}
                columns={{ xs: 6, md: 12 }}
              >
                <Grid item xs={6}>
                  <Box key={idx} data-sal="fade-up">
                    <Stack spacing={1} alignItems="start" mb={{ xs: 4, md: 0 }}>
                      <Chip
                        label={title}
                        sx={{
                          bgcolor: color,
                          color: "white.main",
                          borderRadius: 2,
                        }}
                      />
                      <Typography variant="h4" fontWeight={400}>
                        {heading}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        {desc}
                      </Typography>
                    </Stack>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  {anim}
                </Grid>
              </Grid>
            </Box>
          ))}
        </Stack>
      </Box>
    </Box>
  );
};
