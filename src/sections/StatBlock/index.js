import { camelCaseToSentance } from "../../utils/camelCaseToSentance";
import { PROJECT_STATS } from "./constants";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import {
  Divider,
  List,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { Fragment, useState } from "react";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";

export const StatBlock = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [onCountUpEnd, setOnCountUpEnd] = useState(false);
  return (
    <Box width="100%" bgcolor="black.main">
      <VisibilitySensor
        active={!viewPortEntered}
        onChange={(isVisible) => {
          if (isVisible) {
            setViewPortEntered(true);
          }
        }}
        delayedCall
      >
        <Box py={8} width={{ xs: "90%", lg: "75%" }} maxWidth={1400} m="auto">
          <Stack
            justifyContent="space-between"
            alignItems="center"
            direction={{ sm: "row", xs: "column" }}
          >
            {Object.entries(PROJECT_STATS).map(
              ([key, { value, suffix, decimal }], idx) => (
                <Fragment key={idx}>
                  <Stack
                    spacing={{ xs: 2, md: 4 }}
                    direction={{ xs: "column", md: "row" }}
                    textAlign={{ xs: "center", md: "left" }}
                    maxWidth={200}
                    flex={1}
                    alignItems="center"
                  >
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
                    <Typography
                      variant="body1"
                      textTransform="capitalize"
                      color="grey.400"
                      width="80%"
                    >
                      {camelCaseToSentance(key)}
                    </Typography>
                  </Stack>
                  {idx < Object.entries(PROJECT_STATS).length - 1 &&
                    (sm ? (
                      <List>
                        <Divider
                          sx={{ borderColor: "#ffffff50", height: "48px" }}
                          orientation="vertical"
                        />
                      </List>
                    ) : (
                      <List sx={{ width: "80%", my: 4, mx: "auto" }}>
                        <Divider
                          sx={{ borderColor: "#ffffff50" }}
                          orientation="horizontal"
                        />
                      </List>
                    ))}
                </Fragment>
              )
            )}
          </Stack>
        </Box>
      </VisibilitySensor>
    </Box>
  );
};
