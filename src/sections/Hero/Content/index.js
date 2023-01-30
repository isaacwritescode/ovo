import {
  Box,
  Button,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "../../common/Link";

export const Content = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Stack spacing={4} alignItems="center"
    >
      <Box data-sal="fade-up" width="90%"
        py={6}>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={4}
          textAlign="center"
          maxWidth={1000}
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
          <Typography variant="body1" color="text.secondary" fontWeight={400} width={{ sm: "60%" }}>
            OVO is a design and development agency specialized in creating simple and performant UX's for startups
          </Typography>
        </Stack>
      </Box >
    </Stack >
  );
};
