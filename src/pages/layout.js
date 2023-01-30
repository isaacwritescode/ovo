import { Box, useMediaQuery, useTheme } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "../sections/common/Navbar";
import { Footer } from "../sections/Footer";

export default function Layout({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
}) {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Box
      // sx={{ position: "relative", backgroundImage: "url(/media/images/illus/bg.png)", backgroundPosition: "top", backgroundSize: "contain", backgroundRepeat: "no-repeat", width: "100%" }}
      sx={{ background: "url(/media/images/illus/bg.png) top no-repeat", backgroundSize: md ? "cover" : "contain", backgroundAttachment: "fixed", width: "100%" }}
    >
      <Navbar
        isMenuVisible={isMenuVisible}
        setIsMenuVisible={setIsMenuVisible}
        userHasScrolled={userHasScrolled}

      />
      <Outlet />
      <Footer />
    </Box>
  );
}
