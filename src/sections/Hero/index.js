import { Stack } from "@mui/material";
import { Box } from "@mui/system";
import { Content } from "./Content";

export const Hero = () => {
  return (
    <Box mx="auto" py={12}>
      <Stack m="auto" width="90%" maxWidth={1275} spacing={12}>
        <Content />
        <Box data-aos="fade-up" data-aos-delay={600}>
          <img src="/media/images/illus/hero.png" width="100%" alt="" />
        </Box>
      </Stack>
    </Box>
  );
};
