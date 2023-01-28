import { Masonry } from "@mui/lab";
import { Stack, Box, useTheme, useMediaQuery } from "@mui/material";
import { Header } from "../common/Header";
import { Card } from "./Card";
import { TESTIMONIALS } from "./constants";

export const Testimonials = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box width="100%" py={12} bgcolor="#f2f3f5">
      <Box
        width={{ xs: "90%", lg: "80%" }}
        m="auto"
        maxWidth={1400}
        overflow="hidden"
      >
        <Stack spacing={4}>
          <Header
            title="Testimonials"
            heading="Here's what people have to say about our work"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            maxWidth={640}
            mb={{ md: 8 }}
          />
          <Box width="100%">
            <Masonry columns={{ xl: 3, md: 2, xs: 1 }} spacing={2}>
              {TESTIMONIALS.map(({ name, occupation, review, image }, idx) => (
                <Box
                  key={idx}
                  data-sal={
                    sm ? "fade-up" : idx % 2 ? "fade-up-left" : "fade-up-right"
                  }
                >
                  <Card
                    key={idx}
                    name={name}
                    occupation={occupation}
                    review={review}
                    image={image}
                  />
                </Box>
              ))}
            </Masonry>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};
