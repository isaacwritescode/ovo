import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import Layout from "./pages/layout";
import theme from "./theme";
import { init, refresh } from "aos";
import "aos/dist/aos.css";

function App() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [userHasScrolled, setUserHasScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      window.scrollY === 0
        ? setUserHasScrolled(false)
        : setUserHasScrolled(true);
    };
    if (isMenuVisible) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  });

  useEffect(() => {
    init({
      once: true,
      duration: 1000
    });
    refresh();
  }, []);

  return (
    <HelmetProvider>
      <ThemeProvider theme={theme}>
        <Routes>
          <Route
            path="/"
            element={
              <Layout
                isMenuVisible={isMenuVisible}
                setIsMenuVisible={setIsMenuVisible}
                userHasScrolled={userHasScrolled}
              />
            }
          >
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
