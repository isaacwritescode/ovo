import { Box } from "@mui/system";
import { useState } from "react";

export const ImageView = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Box position="relative" data-sal="fade-up" data-sal-delay={600}>
      <img
        src="/media/images/illus/hero.png"
        className={imgLoaded ? "visible" : "invisible"}
        alt="illustration"
        onLoad={() => setImgLoaded(true)}
        style={{ borderRadius: "12px", maxWidth: "100%" }}
      />
      <img
        src="/media/images/illus/card.svg"
        width="50%"
        alt=""
        style={{ position: "absolute", bottom: 24, left: 24 }}
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
    </Box>
  );
};
