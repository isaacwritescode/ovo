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
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
      <Stack spacing={4} alignItems="start">
        <Stack
          alignItems="start"
          justifyContent="center"
          width="80%"
          data-aos="fade-up"
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
            variant={md ? "h1" : "h2"}
            lineHeight={1}
            fontWeight={600}
          >
            Designing experiences that convert
          </Typography>
          <Typography variant="body1" color="text.secondary">
            We help build brands that make an impact & boost conversions with
            state of the art web solutions
          </Typography>
        </Stack>
        <Box data-aos="fade-up" data-aos-delay={200}>
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
