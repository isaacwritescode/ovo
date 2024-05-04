import { Box } from "@mui/system"
import { Header } from "../common/Header"
import { camelCaseToSentance } from "../../utils/camelCaseToSentance";
import { PROJECT_STATS } from "./constants";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Stack, Typography } from "@mui/material";
import { Fragment, useState } from "react";

export const Mission = () => {
  // const theme = useTheme();
  // const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [onCountUpEnd, setOnCountUpEnd] = useState(false);
  return <Box width="100%" position="relative" bgcolor="#292D32" py={12} sx={{ background: "url(/media/images/illus/components.svg) bottom no-repeat, url(/media/images/illus/noise-bg.png) center", backgroundSize: "contain, cover", backgroundAttachment: "inherit, fixed", backgroundRepeat: "no-repear, repeat" }}>
    <Box width={{ xs: "90%", lg: "80%" }} m="auto">
      <Header title="OUR MISSION" heading="We’ve successfully delivered hundreds of %niche-targeted custom solutions" 
      desc="We are dedicated to delivering exceptional web development services that not only meet but exceed our clients' expectations"
       color="purple" maxWidth={600} mode="dark" mb={{ xs: 2, md: 12 }} />
      <Box mx={{ md: "auto" }} width={{ xs: "100%", sm: "fit-content" }} mb={{ xs: 22, sm: 44, md: 80 }}>
        <VisibilitySensor
          active={!viewPortEntered}
          onChange={(isVisible) => {
            if (isVisible) {
              setViewPortEntered(true);
            }
          }}
          delayedCall
        >
          <Stack
            spacing={{ xs: 2, md: 4 }}
            alignItems="center"
            direction={{ sm: "row", xs: "column" }}
            sx={{ bgcolor: "#ffffff10", borderRadius: 4, p: 3, backdropFilter: "blur(2em)", }}
          >
            {Object.entries(PROJECT_STATS).map(
              ([key, { value, suffix, decimal }], idx) => (
                <Fragment key={idx}>
                  <Stack
                    spacing={1}
                    direction="column"
                    alignItems="start"
                    pr={{ md: 6 }}
                    width={{ xs: "100%", sm: "fit-content" }}
                    sx={{ bgcolor: "#ffffff10", borderRadius: 4, p: 3, boxSizing: "border-box" }}
                  >
                    <Typography
                      variant="body2"
                      textTransform="capitalize"
                      color="grey.400"
                      width="80%"
                    >
                      {camelCaseToSentance(key)}
                    </Typography>
                    <CountUp
                      start={viewPortEntered ? null : 0}
                      end={value}
                      duration={1}
                      onEnd={() =>
                        viewPortEntered ? setOnCountUpEnd(true) : ""
                      }
                      decimals={decimal}
                    >
                      {({ countUpRef }) => {
                        return (
                          <>
                            <Typography
                              ref={countUpRef}
                              variant="h3"
                              fontWeight={500}
                              color="white.main"
                              textTransform="capitalize"
                            >
                              {onCountUpEnd && (
                                <Box display="inline">{suffix}</Box>
                              )}
                            </Typography>
                          </>
                        );
                      }}
                    </CountUp>

                  </Stack>
                </Fragment>
              )
            )}
          </Stack>
        </VisibilitySensor>
      </Box>
    </Box>
  </Box>
}