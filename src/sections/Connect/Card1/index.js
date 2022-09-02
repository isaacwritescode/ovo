import {
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Box } from "@mui/system";
import { CalendarAdd } from "iconsax-react";

export const Card1 = () => {
  const theme = useTheme();
  const xl = useMediaQuery(theme.breakpoints.up("xl"));
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack
      width="100%"
      borderRadius={4}
      boxSizing="border-box"
      p={5}
      spacing={4}
      alignItems="start"
      overflow="hidden"
      position="relative"
      sx={{
        background:
          "linear-gradient(197.48deg, #8C5FE0 5.19%, rgba(221, 181, 109, 0.12) 78.1%), linear-gradient(145.14deg, #CF2B5E 0%, #E06977 65.83%, #E7A424 99.05%)",
      }}
    >
      <Chip
        color="black"
        sx={{
          borderRadius: 2,
          width: "fit-content",
          position: "absolute",
          top: "32px",
          right: "32px",
          opacity: 0,
        }}
        label="Recommended"
      />
      <Stack spacing={2} width={sm ? "80%" : "100%"}>
        <CalendarAdd variant="Bulk" color="white" size="48px" />
        <Typography variant={xl ? "h2" : "h3"} color="white.main">
          Schedule a One on one call with us
        </Typography>
        <Typography variant="body1" color="white.main" sx={{ opacity: 0.7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Typography>
      </Stack>
      <Button variant="contained" color="white" size="large" sx={{ px: 6 }}>
        Book Now
      </Button>
      <Box pt={8}>
        <img src="/media/images/socials/group.svg" height={64} alt="" />
      </Box>
    </Stack>
  );
};
