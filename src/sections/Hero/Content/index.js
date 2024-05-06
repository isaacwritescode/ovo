import {
  Box,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export const Content = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack spacing={4} alignItems="center">
      <Box data-sal="fade-up" py={6}>
        <Stack
          alignItems={{ md: "center" }}
          justifyContent="center"
          spacing={4}
          textAlign={{ md: "center" }}
          maxWidth={1000}
          width={{ xs: "90%", md: "auto" }}
        >
          <Typography
            variant={sm ? "h1" : "h2"}
            lineHeight={1}
            fontWeight={500}
            letterSpacing="-3px"
            color="white.main"
          >
            We build experiences that convert
          </Typography>
          <Typography
            variant="body1"
            color="textWhite.secondary"
            fontWeight={400}
            maxWidth={600}
          >
            DevGeeks is a design and development agency specialized in creating
            simple and performant UX's for startups
          </Typography>
        </Stack>
      </Box>
    </Stack>
  );
};
