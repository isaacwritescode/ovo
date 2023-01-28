import { Masonry } from "@mui/lab";
import { Stack, Box, useTheme, useMediaQuery, Grid, Typography, Chip, Rating } from "@mui/material";
import { useState } from "react";
import { Header } from "../common/Header";
import { TESTIMONIALS } from "./constants";

export const Testimonials = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [currTestimonialIdx, setCurrTestimonialIdx] = useState(0);
  return (
    <Box width="100%" py={12} bgcolor="#ffffff">
      <Box
        width={{ xs: "90%", lg: "80%" }}
        m="auto"
        maxWidth={1400}
        overflow="hidden"
      >
        <Header title="WHAT CLIENTS SAY" heading="Don’t just take our work for it, see what % people say about our services & expertise" desc="Social marketing platform that allows music makers and content creators to create campaigns that can effectively reach their fanbase" maxWidth={600} mb={8} color="pink" />

        <Grid container>
          <Grid item xs={5}>
            <Stack spacing={1} p={3} bgcolor="#F7F9FC" borderRadius={4}>
              {TESTIMONIALS.slice(0, 4).map(({ image, name, occupation }, idx) => <Stack key={idx} direction="row" spacing={2} >
                <Stack onClick={() => setCurrTestimonialIdx(idx)} direction="row" spacing={2} p={3} borderRadius={3} width="100%" alignItems="center" bgcolor={currTestimonialIdx === idx ? "white.main" : ""} sx={{ cursor: "pointer", transition: "all ease 0.5s", boxShadow: idx == currTestimonialIdx ? "0px 40px 160px rgba(30, 46, 61, 0.18)" : "" }} >
                  <img src={image} height={64} width={64} alt={`${name}-pfp`} />

                  <Stack
                    position="relative">
                    {idx == currTestimonialIdx && <Chip size="small" label="Recent Buyer" color="pink" sx={{
                      position: "absolute", top: "-42px", left: 0
                    }} />}
                    <Typography variant="h6" textTransform="capitalize" fontWeight={600}>{name}</Typography>
                    <Typography variant="body1" color="text.secondary">{occupation}</Typography>
                  </Stack>
                </Stack>
              </Stack>)}
            </Stack>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid item xs={6}>
            <Stack spacing={1}>
              <Typography variant="h5" fontWeight={600}>{TESTIMONIALS[currTestimonialIdx].title}</Typography>
              <Rating value={5} />
              <Typography variant="h6" color="text.secondary">{TESTIMONIALS[currTestimonialIdx].review}</Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
