import {
  Box,
  Button,
  Chip,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Check } from "iconsax-react";

export const Card2 = () => {
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
      justifyContent="start"
      alignItems="start"
      overflow="hidden"
      position="relative"
      sx={{
        background: "#0083ff20",
      }}
    >
      <Chip
        color="blue"
        sx={{
          borderRadius: 2,
          width: "fit-content",
          position: "absolute",
          top: "32px",
          right: "32px",
        }}
        label="Website Redesign"
      />
      <Stack spacing={2} width={sm ? "80%" : "100%"}>
        <Check variant="Bulk" color={theme.palette.blue.main} size="48px" />
        <Typography variant={xl ? "h2" : "h3"}>
          Is your website not performing well?
        </Typography>
        <Typography variant="body1" sx={{ opacity: 0.7 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </Typography>
      </Stack>
      <Button variant="contained" size="large" sx={{ px: 6 }}>
        Get a report
      </Button>
      <Box height={132} width="100%"></Box>
      <Box
        sx={{
          position: "absolute",
          bottom: "16px",
          right: "32px",
          width: "40%",
        }}
      >
        <img src="/media/images/illus/graph.svg" width="100%" alt="" />
      </Box>
    </Stack>
  );
};
