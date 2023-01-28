import { Box, Button, Grid, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Header } from "../common/Header";
import { SERVICES } from "./constants";

export const Services = () => {
  return (
    <Box width={{ xs: "90%", lg: "80%" }} py={16} maxWidth={1400} m="auto">
      <Stack alignItems="center" spacing={8}>
        <Header
          mode="dark"
          heading="Ambition and dedication for the attention to detail"
          desc="OVO, a full-service digital marketing agency in Goa, offers solutions across paid and owned channels"
          maxWidth={640}
          mb={0}
        />
        <Grid container spacing={6} columns={{ xs: 4, sm: 8, md: 12 }}>
          {SERVICES.map(({ heading, icon, desc, color }, idx) => (
            <Grid key={idx} item xs={3} sm={3} md={3}>
              <Box data-sal="fade-up" data-sal-delay={idx * 100}>
                <Stack spacing={1}>
                  <Stack
                    color="white.main"
                    my={1}
                    width="fit-content"
                  >
                    {icon}
                  </Stack>
                  <Typography variant="h6" fontWeight={600} color="white.main">
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
        <Button variant="contained" size="large" color="white">
          Explore all services
        </Button>
      </Stack>
    </Box>
  );
};
