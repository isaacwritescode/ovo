import { camelCaseToSentance } from "../../utils/camelCaseToSentance";
import { PROJECT_STATS } from "./constants";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Divider, List, Stack, Typography, useMediaQuery } from "@mui/material";
import { Fragment, useState } from "react";
import { Box } from "@mui/system";
import { useTheme } from "@emotion/react";

export const StatBlock = () => {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.up("sm"));
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [onCountUpEnd, setOnCountUpEnd] = useState(false);
  return (
    <Stack width="100%" bgcolor="black.main">
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
          justifyContent="space-between"
          width="100%"
          direction={sm ? "row" : "column"}
          py={8}
          borderRadius={2}
          maxWidth={1400}
          m="auto"
        >
          {Object.entries(PROJECT_STATS).map(
            ([key, { value, suffix, decimal }], idx) => (
              <Fragment key={idx}>
                <Stack
                  spacing={2}
                  alignItems="center"
                  justifyContent="start"
                  textAlign="center"
                  flex={1}
                >
                  <CountUp
                    start={viewPortEntered ? null : value - (value / 100) * 50}
                    end={value}
                    onEnd={() => (viewPortEntered ? setOnCountUpEnd(true) : "")}
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
                    color="#617e83"
                    width="80%"
                  >
                    {camelCaseToSentance(key)}
                  </Typography>
                </Stack>
                {idx < Object.entries(PROJECT_STATS).length - 1 &&
                  (sm ? (
                    <List>
                      <Divider color="grey" orientation="vertical" />
                    </List>
                  ) : (
                    <List sx={{ width: "80%", my: 4, mx: "auto" }}>
                      <Divider color="grey" orientation="horizontal" />
                    </List>
                  ))}
              </Fragment>
            )
          )}
        </Stack>
      </VisibilitySensor>
    </Stack>
  );
};
