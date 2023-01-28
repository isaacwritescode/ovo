import { Box } from "@mui/system";
import { useState } from "react";

export const ImageView = () => {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Box position="relative">
      <img
        src="/media/images/illus/video-prev-2.png"
        // className={imgLoaded ? "visible" : "invisible"}
        onLoad={() => setImgLoaded(true)}
        alt="illustration"
        style={{ maxWidth: "100%", borderRadius: 12 }}
      />
      {/* <Box
        width="100%"
        bgcolor="grey.200"
        className={imgLoaded ? "invisible" : "visible"}
        sx={{
          aspectRatio: "660/700",
        }}
      /> */}
    </Box>
  );
};
