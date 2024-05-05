import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { Header } from "../common/Header";
import { SERVICES } from "./constants";

export const Services = () => {
  const theme = useTheme()
  return (
    <Box id="services" width={{ xs: "90%", lg: "80%" }} py={{ xs: 8, sm: 16 }} maxWidth={1400} m="auto">
      <Stack alignItems="center" spacing={8}>
        <Header
          mode="dark"
          heading="Ambition and dedication for the attention to detail"
          desc="DevGeeks, a full-service digital marketing agency in Goa, offers solutions across paid and owned channels"
          maxWidth={640}
        />
        <Box>
          <Grid container spacing={6} columns={{ xs: 3, sm: 6, md: 12 }}>
            {SERVICES.map(({ heading, icon, desc, color }, idx) => {
              icon = React.cloneElement(icon, {
                size: 48,
                variant: "Bulk",
                color: theme.palette[color].main,
              })
              return <Grid key={idx} item xs={3}>
                <Box data-sal="fade-up" data-sal-delay={idx * 100}>
                  <Stack spacing={1}>
                    <Stack
                      my={1}
                      width="fit-content"
                    >
                      {icon}
                    </Stack>
                    <Typography variant="h6" fontWeight={600} color="white.main">
                      {heading}
                    </Typography>
                    <Typography variant="body1" color="textWhite.secondary">
                      {desc}
                    </Typography>
                  </Stack>
                </Box>
              </Grid>
            })}
          </Grid>
        </Box>
        <Button variant="contained" size="large" color="white">
          Explore all services
        </Button>
      </Stack>
    </Box>
  );
};
