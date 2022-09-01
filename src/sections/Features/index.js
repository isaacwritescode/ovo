import { useTheme } from "@emotion/react";
import { Box, Chip, Grid, Typography, useMediaQuery } from "@mui/material";
import { Stack } from "@mui/system";
import { Header } from "../common/Header";
import { FEATURES } from "./constants";

export const Features = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack width="100%" py={12} bgcolor="#f2f3f5">
      <Stack width={lg ? "75%" : "90%"} m="auto" gap={4} maxWidth={1275}>
        <Header
          title="Why us"
          heading="We take things a step further, always. Our priority is making your brand stand out"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          maxWidth={640}
          mb={md ? 8 : 4}
        />
        {FEATURES.map(({ color, title, heading, desc, anim }, idx) => (
          <Box py={{ xs: 2, md: 8 }}>
            <Box key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
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
                </Grid>
                <Grid item xs={6}>
                  {anim}
                </Grid>
              </Grid>
            </Box>
          </Box>
        ))}
      </Stack>
    </Stack>
  );
};
