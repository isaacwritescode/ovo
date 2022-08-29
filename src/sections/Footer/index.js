import {
  Divider,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { FooterMiddle } from "./FooterMiddle";
import { Button } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Stack
      width={md ? "75%" : "90%"}
      m="auto"
      py={8}
      spacing={8}
      maxWidth={1275}
      bgcolor="white.main"
    >
      <Stack
        direction={md ? "row" : "column"}
        justifyContent="space-between"
        alignItems={md ? "center" : "start"}
        gap={4}
      >
        <Typography variant="h3" fontWeight={600} maxWidth={700}>
          Ready to improve your online presence?
        </Typography>
        <Button size="large" variant="contained">
          Request a Quote
        </Button>
      </Stack>
      <Divider />
      <FooterMiddle />
    </Stack>
  );
};