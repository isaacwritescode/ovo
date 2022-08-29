import { Launch } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "../../common/Link";

export const Card = ({ logo, thumbnail, heading, desc, url }) => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack
      width="100%"
      borderRadius={2}
      overflow="hidden"
      border="1px solid #ffffff30"
    >
      <img src={thumbnail} alt="" width="100%" />

      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        bgcolor="#ffffff10"
        position="relative"
      >
        <Box sx={{ position: "absolute", top: -32, bottom: 36 }}>
          <img
            src={logo}
            alt=""
            width={48}
            height={48}
            style={{
              border: "2.5px solid #ffffff",
              borderRadius: "8px",
              boxShadow: "10px -10px 20px 0px #00000040",
            }}
          />
        </Box>
        <Stack spacing={0.5}>
          <Typography variant="h6" fontWeight={600} color="white.main">
            {heading}
          </Typography>
          <Typography variant={md ? "body2" : "caption"} color="text.secondary">
            {desc}
          </Typography>
        </Stack>
        <Link
          url={url}
          component={
            <Button
              variant="contained"
              color="white"
              size="medium"
              startIcon={<Launch />}
            >
              Visit Site
            </Button>
          }
        />
      </Stack>
    </Stack>
  );
};
