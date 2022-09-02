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
    <Stack spacing={4} alignItems="start">
      <Box data-sal="fade-up" width="80%">
        <Stack
          alignItems="start"
          justifyContent="center"
          maxWidth={480}
          spacing={1}
        >
          <Typography
            variant="body1"
            fontWeight={600}
            textTransform="uppercase"
            sx={{
              background: theme.palette.gradient.orangePink,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            #one stop solution
          </Typography>
          <Typography
            variant={sm ? "h1" : "h2"}
            lineHeight={1}
            fontWeight={600}
          >
            We build experiences that convert
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We help build brands that make an impact & boost conversions with
            state of the art web solutions
          </Typography>
        </Stack>
      </Box>
      <Box data-sal="fade-up" data-sal-delay={200}>
        <Link
          path=""
          component={
            <Button variant="contained" size="large">
              Request a Quote
            </Button>
          }
        />
      </Box>
    </Stack>
  );
};
