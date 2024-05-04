import { Stack, Typography, Box } from "@mui/material";
import { Link } from "../../common/Link";
import { SocialLinks } from "./SocialLinks";

export const FooterMiddle = () => {
  return (
    <Box width="100%">
      <Stack
        spacing={2}
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "start", md: "center" }}
        pb={{ xs: 6, lg: 0 }}
      >
        <Stack>
          <Link
            path="/"
            component={
              <img src="logos/logo+wordmark.svg" height={28} alt="logo" />
            }
          />
          <Typography variant="body1" color="textWhite.secondary">
            Web Development Agency
          </Typography>
        </Stack>
        <Typography variant="body1" color="textWhite.secondary">
          ©2024 DevGeeks Agency. All Rights Reserved
        </Typography>
        <SocialLinks />
      </Stack>
    </Box>
  );
};
