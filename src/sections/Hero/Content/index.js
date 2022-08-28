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
  const sm = useMediaQuery(theme.breakpoints.up("sm"));

  return (
    <Box>
      <Stack spacing={4} alignItems="center">
        <Stack
          textAlign="center"
          alignItems="center"
          justifyContent="center"
          width="85%"
          spacing={2}
          data-aos="fade-up"
        >
          <Typography
            variant={md ? "body1" : "body2"}
            fontWeight={600}
            lineHeight={1}
            textTransform="uppercase"
            sx={{
              background: theme.palette.gradient.orangePink,
              "-webkit-background-clip": "text",
              "-webkit-text-fill-color": "transparent",
            }}
          >
            #Leading world class professionals
          </Typography>
          <Typography variant={md ? "h1" : "h2"} fontWeight={600}>
            Designing experiences that convert
          </Typography>
          <Typography variant={md ? "body1" : "body2"} color="text.secondary">
            We help build brands that make an impact & boost conversions with
            state-of-the art web solutions
          </Typography>
        </Stack>
        <Box data-aos="fade-up" data-aos-delay={400}>
          <Link
            path=""
            component={
              <Button variant="contained" size="large" fullWidth={!sm}>
                Request a Quote
              </Button>
            }
          />
        </Box>
      </Stack>
    </Box>
  );
};
