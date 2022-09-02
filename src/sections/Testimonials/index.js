import { Masonry } from "@mui/lab";
import { Stack, Box } from "@mui/material";
import { Header } from "../common/Header";
import { Card } from "./Card";
import { TESTIMONIALS } from "./constants";

export const Testimonials = () => {
  return (
    <Box width="100%" py={12} bgcolor="#f2f3f5">
      <Box width={{ xs: "90%", lg: "75%" }} m="auto" maxWidth={1400}>
        <Stack spacing={4}>
          <Header
            title="Testimonials"
            heading="Don’t just take our word for it,
          see what clients have to say about our services"
            desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
            maxWidth={640}
            mb={{ md: 8 }}
          />
          <Box width="100%">
            <Masonry columns={{ xl: 3, md: 2, xs: 1 }} spacing={2}>
              {TESTIMONIALS.map(({ name, occupation, review, image }, idx) => (
                <Box key={idx} data-sal="fade-up">
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
