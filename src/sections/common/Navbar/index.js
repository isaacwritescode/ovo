import { Menu, CloseOutlined } from "@mui/icons-material";
import {
  Button,
  IconButton,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { NAVBAR_LINKS } from "./constants";
import { NavLinkGroup } from "./NavLinkGroup";
import { Link } from "../Link";

export const Navbar = ({
  isMenuVisible,
  userHasScrolled,
  setIsMenuVisible,
}) => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const md = useMediaQuery(theme.breakpoints.up("md"));

  // const [navTheme, setNavTheme] = useState("dark");
  // useEffect(() => {
  //   const onScroll = () => {
  //     window.scrollY >= 568 ? setNavTheme("light") : setNavTheme("dark");
  //   };
  //   window.addEventListener("scroll", onScroll);
  //   return () => window.removeEventListener("scroll", onScroll);
  // }, []);

  return (
    <Stack
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
          component={<img src="logos/logo+wordmark.svg" height={28} alt="logo" />}
        />
        {md && <NavLinkGroup links={NAVBAR_LINKS} dark />}
        <Stack direction="row" spacing={2}>
          {sm && (
            <Button
              variant="contained"
              color="white"
              sx={{ borderColor: "#ffffff40" }}
            >
              Get in touch
            </Button>
          )}
          {md || (
            <IconButton
              sx={{ color: "white.main" }}
              onClick={() => setIsMenuVisible(!isMenuVisible)}
            >
              {isMenuVisible ? <CloseOutlined /> : <Menu />}
            </IconButton>
          )}
        </Stack>
      </Stack>
    </Stack>
  );
};
