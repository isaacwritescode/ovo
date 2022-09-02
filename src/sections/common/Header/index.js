import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";

export const Header = ({ title, heading, desc, type, maxWidth, mb, cta }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  type = md ? type : "page";

  return type === "page" ? (
    <Stack gap={4}>
      <Box data-sal="fade-up">
        <Stack
          alignItems="start"
          justifyContent="start"
          gap={1}
          textAlign="left"
          maxWidth={maxWidth}
          mb={mb}
        >
          <Typography
            variant={md ? "h6" : "body1"}
            textTransform="uppercase"
            fontFamily="Digital-Geometric-Private"
            sx={{ WebkitTextStroke: "0.7px #ffffff" }}
          >
            {title}
          </Typography>
          <Typography variant={md ? "h3" : "h4"} fontWeight={600}>
            {heading}
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            width="80%"
          >
            {desc}
          </Typography>
        </Stack>
      </Box>
      <Box data-sal="fade-up" data-sal-delay={200}>
        {cta}
      </Box>
    </Stack>
  ) : (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={2}
      textAlign="center"
      maxWidth={maxWidth}
      mx="auto"
      mb={mb}
    >
      <Typography
        variant={md ? "h6" : "body1"}
        textTransform="uppercase"
        fontFamily="Digital-Geometric-Private"
        sx={{ WebkitTextStroke: "0.7px #ffffff" }}
      >
        {title}
      </Typography>
      <Typography variant={md ? "h3" : "h4"} fontWeight={600}>
        {heading}
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        width="80%"
      >
        {desc}
      </Typography>
      {cta}
    </Stack>
  );
};
