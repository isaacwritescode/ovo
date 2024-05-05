import { Box } from "@mui/system";

export const ImageView = () => {
  // const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <Box position="relative" width="100%" boxSizing="border-box" borderRadius={8} border={1} p={1} borderColor="#ffffff50">
      <video
        style={{
          borderRadius: 24,
          width: "100%"
        }}
        autoPlay={true}
        loop
        muted
        preload="metadata"
        playsinline
      >
        <source src="media/videos/slideshow.mp4" type="video/mp4" />
      </video>
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
