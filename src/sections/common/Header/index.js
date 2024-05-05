import { Box, Chip, Typography, useMediaQuery, useTheme } from "@mui/material";
import { Stack } from "@mui/system";

export const Header = ({ mode, title, heading, desc, type, maxWidth, mb, cta, color }) => {
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
        {color && <Chip size="medium" label={title} sx={{ "& > span": { fontWeight: 500 }, bgcolor: theme.palette[color].main + "20", color: theme.palette[color].main, }} />}
        <Typography variant={md ? "h3" : "h4"} color={mode === "dark" ? 'white.main' : "black.main"} fontWeight={600}>
          {heading.split("%")[0]}
          <Box display="inline" color={color + ".main"}>
            {heading.split("%")[1]}
          </Box>
        </Typography>
        <Typography
          variant="body1"
          color={mode === "dark" ? "rgba(255,255,255,0.8)" : "text.secondary"}
          width="90%"
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
      {color && <Chip size="medium" label={title} sx={{ "& > span": { fontWeight: 500 }, bgcolor: theme.palette[color].main + "20", color: theme.palette[color].main, }} />}
      <Typography variant={md ? "h3" : "h4"} color={mode === "dark" ? 'white.main' : "black.main"} fontWeight={600}>
        {heading.split("%")[0]}
        <Box display="inline" color={color + ".main"}>
          {heading.split("%")[1]}
        </Box>
      </Typography>
      <Typography
        variant="body1"
        color={mode === "dark" ? "#ffffff80" : "text.secondary"}
        width="80%"
      >
        {desc}
      </Typography>
      {cta}
    </Stack>
  );
};
