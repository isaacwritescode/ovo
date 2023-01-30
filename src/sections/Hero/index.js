import { Box, Grid } from "@mui/material";
import { Stack } from "@mui/system";
import { Content } from "./Content";
import { ImageView } from "./ImageView";

export const Hero = () => {
  return (
    <Box width="100%"
      position="relative"
    >
      <img src="/media/images/illus/avatar03.png" style={{ width: 180, position: "absolute", top: 80, left: 100 }} />
      <img src="/media/images/illus/avatar02.png" style={{ width: 140, position: "absolute", top: 250, left: 200 }} />
      <img src="/media/images/illus/avatar01.png" style={{ width: 200, position: "absolute", top: 60, right: 100 }} />
      <img src="/media/images/illus/avatar04.png" style={{ width: 180, position: "absolute", top: 300, right: 350 }} />
      <Box
        py={{
          xs: 8, lg: 6
        }}
        width={{ xs: "90%", lg: "80%" }}
        m="auto"
        maxWidth={1400}
      >
        <Stack spacing={8} justifyContent="center" alignItems="center">
          <Content />
          <ImageView />
        </Stack>

      </Box>
    </Box>
  );
};
