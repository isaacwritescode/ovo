import { Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";

export const Header = ({ title, heading, desc }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      alignItems="center"
      justifyContent="center"
      gap={2}
      textAlign="center"
      maxWidth={700}
      mx="auto"
      mb={12}
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
        variant={md ? "body1" : "body2"}
        color="text.secondary"
        width="80%"
      >
        {desc}
      </Typography>
    </Stack>
  );
};
