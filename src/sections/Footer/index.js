import { Divider, List, ListItem, Stack, Typography, useMediaQuery, useTheme } from "@mui/material";
import { FooterMiddle } from "./FooterMiddle";
import { Button, Box } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  return (
    <Box sx={{ background: "url(/media/images/illus/bg-inverted.png) bottom left no-repeat", backgroundSize: "cover", backgroundAttachment: "fixed" }}
      width="100%"    >
      <Box
        width={{ xs: "90%", lg: "80%" }}
        maxWidth={1400}
        m="auto"
      >
        <Stack py={14} spacing={8}>
          <Stack
            spacing={6}
            alignItems={{ sm: "center" }}
          >
            <Typography
              variant={sm ? "h1" : "h2"}
              lineHeight={1}
              fontWeight={500}
              letterSpacing="-3px"
              color="white.main"
              textAlign={{ sm: "center" }}
            >
              Let's work together
            </Typography>
            <Button size="large" variant="contained" color="white" sx={{ width: "fit-content" }} >
              Get in touch
            </Button>
          </Stack>
          <List>
            <Divider sx={{ bgcolor: "#ffffff40" }} />
          </List>
          <FooterMiddle />
        </Stack>
      </Box>
    </Box>

  );
};
