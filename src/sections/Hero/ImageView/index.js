import { Stack, Box } from "@mui/system";
import { useState } from "react";

export const ImageView = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Stack
      position="relative"
      alignItems="center"
      justifyContent="center"
      overflow="hidden"
    >
      <img
        onLoad={() => setImgLoaded(true)}
        src="/media/images/illus/hero.png"
        className={imgLoaded ? "visible" : "invisible"}
        alt=""
        style={{ borderRadius: "12px", maxWidth: "100%" }}
      />
      <Box
        width="100%"
        bgcolor="primary.main"
        className={imgLoaded ? "invisible" : "visible"}
        sx={{
          borderRadius: "12px",
        }}
      />
    </Stack>
  );
};
