import { Stack, Typography, Box, Grid } from "@mui/material";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { INTEGRATIONS } from "./constants";
import { useInView } from "react-intersection-observer"

export const Integrations = () => {
  const [scrollTop, setScrollTop] = useState(window.scrollY);
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const { ref, inView, entry } = useInView({
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
    <Box width={{ lg: "80%", sm: "75%" }} m="auto" pt={12}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h3" fontWeight={600}>Integrations?<br /><Box display="inline" color="blue.main">We've got you covered</Box> </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="text.secondary">Whether you have 5,000 Shopify customers waiting for a discount or 50,000 subscribers anticipating your Black Friday promotions. BlueReceipt is the platform built for a lifetime of success</Typography>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ overflowX: "hidden" }} py={12}>
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
    </Box>
  </Box >;
}