import { Box } from "@mui/system"
import { Header } from "../common/Header"
import { camelCaseToSentance } from "../../utils/camelCaseToSentance";
import { PROJECT_STATS } from "./constants";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Divider, List, Stack, Typography, useMediaQuery } from "@mui/material";
import { Fragment, useState } from "react";
import { useTheme } from "@emotion/react";

export const Mission = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [onCountUpEnd, setOnCountUpEnd] = useState(false);
  return <Box width="100%" position="relative" bgcolor="#292D32" py={12} sx={{ background: "url(/media/images/illus/components.svg) bottom no-repeat, url(/media/images/illus/noise-bg.png) center no-repeat", backgroundSize: "contain cover" }}>
    <Box width={{ sm: "90%", lg: "80%" }} m="auto" >
      <Header title="OUR MISSION" heading="We’ve successfully delivered hundreds of %niche-targeted custom solutions" desc="Social marketing platform that allows music makers and content creators to create campaigns that can effectively reach their fanbaseSocial marketing platform that allows music makers" color="purple" maxWidth={600} mode="dark" mb={12} />
      <Box mx="auto" width="fit-content" mb={88}>
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
            spacing={4}
            alignItems="center"
            direction={{ sm: "row", xs: "column" }}
            sx={{ bgcolor: "#ffffff10", borderRadius: 4, p: 3, backdropFilter: "blur(2em)" }}
          >
            {Object.entries(PROJECT_STATS).map(
              ([key, { value, suffix, decimal }], idx) => (
                <Fragment key={idx}>
                  <Stack
                    spacing={1}
                    direction="column"
                    sx={{ bgcolor: "#ffffff10", borderRadius: 4, p: 3, pr: 6 }}
                    alignItems="start"
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
                              variant="h2"
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