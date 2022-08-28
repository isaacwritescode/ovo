import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Header } from "../common/Header";
import { SERVICES } from "./constants";

export const Services = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack width={md ? "80%" : "90%"} py={12} maxWidth={1400} m="auto">
      <Header
        title="services"
        heading="Startups, Shopify brands, Small businesses experience more conversions with OVO"
        desc="OVO, a full-service digital marketing agency in Goa, offers solutions across paid and owned channels"
        maxWidth={700}
        mb={8}
      />
      <Grid container spacing={6} columns={{ xs: 4, sm: 8, md: 12 }}>
        {SERVICES.map(({ heading, icon, desc, color }, idx) => (
          <Grid key={idx} item xs={4} sm={4} md={4}>
            <Box data-aos="fade-up" data-aos-delay={idx * 100}>
              <Stack spacing={1}>
                <Stack
                  bgcolor={color}
                  color="white.main"
                  p={2}
                  my={1}
                  width="fit-content"
                  borderRadius={4}
                >
                  {icon}
                </Stack>
                <Typography variant="h6" fontWeight={600}>
                  {heading}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {desc}
                </Typography>
              </Stack>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};
