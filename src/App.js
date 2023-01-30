import { ThemeProvider } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect, useState } from "react";
import Home from "./pages/home";
import Layout from "./pages/layout";
import theme from "./theme";
import sal from "sal.js";
import "sal.js/dist/sal.css";
import { useLocation } from "react-router-dom";
import { CaseStudy } from "./pages/case-study";
import { CaseStudies } from "./pages/case-studies";

function App() {
  const { pathname } = useLocation();
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
  }, [isMenuVisible]);

  useEffect(() => {
    sal({ threshold: 0.3 });
  }, [pathname]);

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
            <Route index element={<Home scrollAmt={0} />} />
            <Route path="/case-studies" exact element={<CaseStudies />} />
            <Route path="/case-studies/:slug" element={<CaseStudy />} />
          </Route>
        </Routes>
      </ThemeProvider>
    </HelmetProvider>
  );
}

export default App;
