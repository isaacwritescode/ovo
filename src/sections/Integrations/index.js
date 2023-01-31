import { Stack, Typography, Box, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
import { INTEGRATIONS } from "./constants";
import { useInView } from "react-intersection-observer"

export const Integrations = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("sm"));
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const { ref, inView } = useInView({
    threshold: 0,
  });
  useEffect(() => {
    const onScroll = () => {
      if (inView) {
        ref1.current.style.transform = `translateX(${0.2 * (window.scrollY - window.pageYOffset + ref1.current.getBoundingClientRect().top)}px)`;
        ref2.current.style.transform = `translateX(${-0.2 * (window.scrollY - window.pageYOffset + ref2.current.getBoundingClientRect().top)}px)`;
      };
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [inView]);

  return <Box width="100%" bgcolor="#f2f3f5" position="relative">
    <Stack spacing={4} py={12}>
      <Box width={{ lg: "80%", xs: "90%" }} m="auto" >
        <Grid container spacing={{ xs: 2, sm: 0 }}>
          <Grid item md={6}>
            <Typography variant="h3" fontWeight={600}>Integrations?<br /><Box display="inline" color="blue.main">We've got you covered</Box> </Typography>
          </Grid>
          <Grid item md={6}>
            <Typography variant="body1" color="text.secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Typography>
          </Grid>
        </Grid>
      </Box>
      {md || <Box width="100%">
        <Stack direction="row" spacing={3} sx={{ overflowX: "scroll", "::-webkit-scrollbar": { display: "none" } }}>
          {INTEGRATIONS.map((({ title, desc }, idx) =>
            <Box sx={{ mr: idx === Object.keys(INTEGRATIONS).length - 1 ? "5vw !important" : "0", ml: idx === 0 ? "5vw !important" : "" }}>
              <Stack key={idx} p={4} justifyContent="center" alignItems="center" spacing={4} sx={{ border: "1px solid #ddd", borderRadius: 4, }}>
                <img src={`/media/images/icons/${title.replaceAll(" ", "-")}.svg`} width={56} height={56} alt={`${title}-icon`} />
                <Stack textAlign="center" width="140px" spacing={1}>
                  <Typography variant="h6" textTransform="capitalize" fontWeight={600}>{title}</Typography>
                  <Typography variant="body2" color="text.secondary">{desc}</Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Stack>
      </Box>}
    </Stack>
    {md && <Box sx={{ overflowX: "hidden" }} py={12}>
      <Stack spacing={3} ref={ref}>
        <Stack ref={ref1} direction="row" spacing={3} sx={{ width: 2400, transition: "transform linear 0.1s", willChange: "transform" }}>
          {INTEGRATIONS.slice(0, 4).map((({ title, desc }, idx) =>
            <Stack key={idx} p={4} spacing={4} direction="row" sx={{ border: "1px solid #ddd", borderRadius: 4, }}>
              <img src={`/media/images/icons/${title.replaceAll(" ", "-")}.svg`} width={56} height={56} alt={`${title}-icon`} />
              <Stack >
                <Typography variant="h6" textTransform="capitalize" fontWeight={600}>{title}</Typography>
                <Typography variant="body2" color="text.secondary">{desc}</Typography>
              </Stack>
            </Stack>))}
        </Stack>
        <Stack ref={ref2} direction="row" spacing={3} sx={{ width: 2400, transition: "transform linear 0.1s", willChange: "transform" }}>
          {INTEGRATIONS.slice(4).map((({ title, desc }, idx) =>
            <Stack key={idx} p={4} spacing={4} direction="row" sx={{ border: "1px solid #ddd", borderRadius: 4 }}>
              <img src={`/media/images/icons/${title.replaceAll(" ", "-")}.svg`} width={56} height={56} alt={`${title}-icon`} />
              <Stack >
                <Typography variant="h6" textTransform="capitalize" fontWeight={600}>{title}</Typography>
                <Typography variant="body2" color="text.secondary">{desc}</Typography>
              </Stack>
            </Stack>))}
        </Stack>
      </Stack>
    </Box>}
  </Box >;
}