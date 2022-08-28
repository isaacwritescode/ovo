import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { CHECKLIST, PROJECTS } from "./constants";
import { TickCircle } from "iconsax-react";
import { Card } from "./Card";

export const Work = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack bgcolor="black.main" width="100%" py={12} alignItems="center">
      <Stack maxWidth={1400} width={md ? "75%" : "90%"}>
        <Stack
          direction={lg ? "row" : "column"}
          justifyContent="space-between"
          spacing={4}
        >
          <Stack maxWidth={520} spacing={2} data-aos="fade-up">
            <Typography
              variant={md ? "h3" : "h4"}
              fontWeight={600}
              color="white.main"
            >
              Get a taste of what we do & how we do it
            </Typography>
            <Typography variant={md ? "body1" : "body2"} color="text.secondary">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </Stack>
          <Stack spacing={2} mr={6}>
            {CHECKLIST.map((elem, idx) => (
              <Box key={idx} data-aos="fade-left" data-aos-delay={idx * 100}>
                <Stack direction="row" gap={2} alignItems="center">
                  <TickCircle size="32px" color="#2FBF7A" />
                  <Typography variant="h6" color="white.main">
                    {elem}
                  </Typography>
                </Stack>
              </Box>
            ))}
          </Stack>
        </Stack>
        <Grid container spacing={4} columns={{ xs: 4, sm: 8, md: 12 }} my={4}>
          {PROJECTS.map(({ logo, heading, desc, thumbnail, url }, idx) => (
            <Grid key={idx} item xs={4} sm={4} md={4}>
              <Box data-aos="fade-up" data-aos-delay={idx * 100}>
                <Card
                  logo={logo}
                  heading={heading}
                  desc={desc}
                  thumbnail={thumbnail}
                  url={url}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Stack>
    </Stack>
  );
};
