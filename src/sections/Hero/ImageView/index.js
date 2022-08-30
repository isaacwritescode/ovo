import { Stack, Box } from "@mui/system";
import { useState } from "react";

export const ImageView = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Stack position="relative" alignItems="center" justifyContent="center">
      <img
        src="/media/images/illus/hero.png"
        className={imgLoaded ? "visible" : "invisible"}
        alt="illustration"
        onLoad={() => setImgLoaded(true)}
        style={{ borderRadius: "12px", maxWidth: "100%" }}
      />
      <Box
        width="100%"
        bgcolor="grey.200"
        className={imgLoaded ? "invisible" : "visible"}
        sx={{
          aspectRatio: "700/850",
          borderRadius: "12px",
        }}
      />
    </Stack>
  );
};
