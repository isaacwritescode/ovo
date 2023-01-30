import { Stack, Box, Grid, Typography, Chip, Rating } from "@mui/material";
import { useState } from "react";
import { Header } from "../common/Header";
import { TESTIMONIALS } from "./constants";
import ProgressBar from "react-customizable-progressbar"
import { useEffect } from "react";

export const Testimonials = () => {
  const [currTestimonialIdx, setCurrTestimonialIdx] = useState(0);

  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value === 100) {
        setValue(0);
        if (currTestimonialIdx === Object.keys(TESTIMONIALS).slice(0, 4).length - 1) setCurrTestimonialIdx(0);
        else setCurrTestimonialIdx(currTestimonialIdx + 1);
      }
      else setValue(value + 2);
    }, 100);
    return () => clearInterval(interval);
  }, [value, currTestimonialIdx]);
  return (
    <Box width="100%" py={12} bgcolor="#ffffff">
      <Box
        width={{ xs: "90%", lg: "80%" }}
        m="auto"
        maxWidth={1400}
        overflow="hidden"
      >
        <Header title="WHAT CLIENTS SAY" heading="Don’t just take our work for it, see what % people say about our services & expertise" desc="Social marketing platform that allows music makers and content creators to create campaigns that can effectively reach their fanbase" maxWidth={600} mb={{ xs: 2, md: 8 }} color="pink" />

        <Grid container>
          <Grid item md={5}>
            <Stack display={{ xs: "none", md: "flex" }} spacing={1} p={3} bgcolor="#F7F9FC" borderRadius={4}>
              {TESTIMONIALS.slice(0, 4).map(({ image, name, occupation }, idx) => <Stack key={idx} direction="row" spacing={2} >
                <Stack onClick={() => setCurrTestimonialIdx(idx)} direction="row" spacing={2} p={3} borderRadius={3} width="100%" alignItems="center" bgcolor={currTestimonialIdx === idx ? "white.main" : ""} sx={{ cursor: "pointer", transition: "all ease 0.5s", boxShadow: idx === currTestimonialIdx ? "0px 40px 160px rgba(30, 46, 61, 0.18)" : "" }} >
                  <img src={image} height={64} width={64} alt={`${name}-pfp`} />

                  <Stack
                    position="relative">
                    {idx === currTestimonialIdx && <Chip size="small" label="Recent Buyer" color="pink" sx={{
                      position: "absolute", top: "-42px", left: 0
                    }} />}
                    <Typography variant="h6" textTransform="capitalize" fontWeight={600}>{name}</Typography>
                    <Typography variant="body1" color="text.secondary">{occupation}</Typography>
                  </Stack>
                </Stack>
              </Stack>)}
            </Stack>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item md={6}>
            <Stack height={"100%"} pt={2}>
              <Stack spacing={1} flex={1}>
                <Typography variant="h5" fontWeight={600}>{TESTIMONIALS[currTestimonialIdx].title}</Typography>
                <Rating value={5} readOnly />
                <Typography variant="h6" color="text.secondary">{TESTIMONIALS[currTestimonialIdx].review}</Typography>
              </Stack >
              <Stack sx={{ width: "fit-content", position: "relative" }}>
                <img src={TESTIMONIALS[currTestimonialIdx].image} style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", marginTop: "-1.5px" }} width={80} height={80} alt="" />
                <ProgressBar
                  transition={value >= 1 ? "ease 0.3s" : "none"}
                  progress={value}
                  radius={48}
                  trackStrokeColor="#e7e7f4"
                  strokeColor="#000000"
                  strokeWidth={1.5}
                  trackStrokeWidth={1.5}
                />
              </Stack>
            </Stack>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};
