import { Masonry } from "@mui/lab";
import { Stack, useMediaQuery, useTheme } from "@mui/material";
import { Header } from "../common/Header";
import { Card } from "./Card";
import { TESTIMONIALS } from "./constants";

export const Testimonials = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack width="100%" py={12} bgcolor="#f2f3f5">
      <Stack
        width={md ? "75%" : "90%"}
        alignItems={md ? "start" : "center"}
        m="auto"
        gap={4}
        maxWidth={1275}
      >
        <Header
          title="Testimonials"
          heading="Don’t just take our word for it,
          see what clients have to say about our services"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
          maxWidth={640}
          mb={md ? 8 : 4}
        />

        <Masonry columns={lg ? 3 : md ? 2 : 1} spacing={2}>
          {TESTIMONIALS.map(({ name, occupation, review, image }, idx) => (
            <Card
              key={idx}
              name={name}
              occupation={occupation}
              review={review}
              image={image}
            />
          ))}
        </Masonry>
      </Stack>
    </Stack>
  );
};
