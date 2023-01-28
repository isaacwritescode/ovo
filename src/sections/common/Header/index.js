import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";

export const Header = ({ mode, heading, desc, type, maxWidth, mb, cta }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  type = md ? type : "page";

  return type === "page" ? (
    <Stack gap={4}>
      <Stack
        alignItems="start"
        justifyContent="start"
        gap={1}
        textAlign="left"
        maxWidth={maxWidth}
        mb={mb}
      >
        <Typography variant={md ? "h3" : "h4"} color={mode == "dark" ? 'white.main' : "black.main"} fontWeight={600}>
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
      <Box >
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
      <Typography variant={md ? "h3" : "h4"} color={mode == "dark" ? 'white.main' : "black.main"} fontWeight={600}>
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
