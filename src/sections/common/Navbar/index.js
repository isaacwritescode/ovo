import { Menu, CloseOutlined } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NAVBAR_LINKS } from "./constants";
import { NavLinkGroup } from "./NavLinkGroup";
import { Link } from "../Link";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export const Navbar = ({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
}) => {
  const theme = useTheme();
  const { pathname } = useLocation();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  const [navTheme, setNavTheme] = useState("dark");
  useEffect(() => {
    const onScroll = () => {
      window.scrollY >= 568 ? setNavTheme("light") : setNavTheme("dark");
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <Stack
    m="auto"
    sx={{
      position: "sticky",
      top: 0,
      zIndex: 99,
      backgroundColor: "transparent",
      boxShadow: userHasScrolled && "0 0 50px rgb(0, 0, 0, 0.2)",
      "@supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none))":
      {
        backgroundColor: userHasScrolled && "rgba(41, 45, 50, .8)",
        backdropFilter: userHasScrolled && "blur(2em)",
      },
      transition: "all ease 0.3s",
    }}
  >
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      width="80%"
      height="72px"
      m="auto"
      maxWidth={1400}
    >
      <Link
        path="/"
        component={
          <Typography
            variant="h6"
            fontFamily="Digital-Geometric-Private"
            color="white.main"
          >
            OVO
          </Typography>
        }
      />
      {md && <NavLinkGroup links={NAVBAR_LINKS} dark />}
      <Stack direction="row" spacing={2}>
        {sm && (
          <Button variant="contained" color="white" sx={{ borderColor: "#ffffff40" }}>
            Get in touch
          </Button>
        )}
        {md || (
          <IconButton onClick={() => setIsMenuVisible(!isMenuVisible)}>
            {isMenuVisible ? <CloseOutlined /> : <Menu />}
          </IconButton>
        )}
      </Stack>
    </Stack>
  </Stack>

};
