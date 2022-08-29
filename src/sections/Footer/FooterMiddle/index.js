import {
  Grid,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Link } from "../../common/Link";
import { FOOTER_LINKS } from "../constants";
import { SocialLinks } from "./SocialLinks";

export const FooterMiddle = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <Grid container columns={{ xs: 3, sm: 6, md: 12 }} spacing={md && 4}>
      <Grid item xs={3} sx={{ paddingLeft: "0 !important" }}>
        <Stack spacing={2} pb={6}>
          <Link
            path="/"
            component={
              <Typography variant="h6" fontFamily="Digital-Geometric-Private">
                OVO
              </Typography>
            }
          />
          <Typography variant="body1" color="text.secondary">
            Web Development Agency
          </Typography>
          <SocialLinks />
          <Typography variant="body1" color="text.secondary">
            ©2022 OVO Agency. <br /> All Rights Reserved
          </Typography>
        </Stack>
      </Grid>
      {Object.keys(FOOTER_LINKS).map((category, idx) => (
        <Grid item xs={3} key={idx}>
          <Stack spacing={3} pb={6}>
            <Typography variant="h6" textTransform="capitalize">
              {category}
            </Typography>
            {FOOTER_LINKS[category].map(({ title, path, url }, idx) => {
              return (
                <Link
                  key={idx}
                  url={url}
                  path={path}
                  component={
                    <Typography
                      variant="body1"
                      color="text.secondary"
                      py={0.5}
                      sx={{
                        "&:hover": { textDecoration: "underline" },
                      }}
                    >
                      {title}
                    </Typography>
                  }
                />
              );
            })}
          </Stack>
        </Grid>
      ))}
    </Grid>
  );
};
