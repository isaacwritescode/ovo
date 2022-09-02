import {
  Divider,
  Stack,
  Typography,
} from "@mui/material";
import { FooterMiddle } from "./FooterMiddle";
import { Button, Box } from "@mui/material";

export const Footer = () => {

  return (
    <Box
      width={{ xs: "90%", lg: "75%" }}
      maxWidth={1400}
      bgcolor="white.main"
      m="auto"
    >
      <Stack py={12} spacing={8}>
        <Stack
          justifyContent="space-between"
          direction={{ xs: "column", md: "row" }}
          alignItems={{ xs: "start", md: "center" }}
          spacing={{ md: 4 }}
        >
          <Typography variant="h3" fontWeight={600} maxWidth={480}>
            Ready to improve your online presence?
          </Typography>
          <Button size="large" variant="contained">
            Request a Quote
          </Button>
        </Stack>
        <Divider />
        <FooterMiddle />
      </Stack>
    </Box>
  );
};
