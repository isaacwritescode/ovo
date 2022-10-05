import { Button, Grid, Typography, useMediaQuery } from "@mui/material";
import { Stack, Box } from "@mui/system";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { PROJECTS } from "../constants";
import VisibilitySensor from "react-visibility-sensor";
import CountUp from "react-countup";
import { useTheme } from "@emotion/react";
import { camelCaseToSentance } from "../utils/camelCaseToSentance";
import { Helmet } from "react-helmet-async";

export const CaseStudy = () => {
  const theme = useTheme();
  const md = useMediaQuery(theme.breakpoints.up("md"));
  const [bannerLoaded, setBannerLoaded] = useState(false);
  const [viewPortEntered, setViewPortEntered] = useState(false);
  const [onCountUpEnd, setOnCountUpEnd] = useState(false);
  const { slug } = useParams();
  const {
    title,
    banner,
    bannerMob,
    longDesc,
    info,
    servicesProvided,
    overview,
    body,
    result: {
      stats,
      review: { content, author, designation, pfp },
    },
  } = PROJECTS[slug];

  return (
    <>
      <Helmet>
        <title>OVO | Mitron</title>
      </Helmet>
      <Box width="100%">
        <Stack spacing={8}>
          <Box data-sal="fade-in">
            <img
              className={bannerLoaded ? "visible" : "invisible"}
              onLoad={() => setBannerLoaded(true)}
              src={md ? banner : bannerMob}
              alt={`${title}-banner`}
              width="100%"
            />
            <Box
              width="100%"
              bgcolor="grey.200"
              className={bannerLoaded ? "invisible" : "visible"}
              sx={{
                aspectRatio: "1728/700",
              }}
            />
          </Box>
          <Box>
            <Box maxWidth={1400} m="auto">
              <Box>
                <Box mx="auto" width={{ xs: "75%" }}>
                  <Grid
                    container
                    spacing={{ md: 12 }}
                    columns={{ xs: 6, md: 12 }}
                  >
                    <Grid item xs={4}>
                      <Stack spacing={2} alignItems="start">
                        <Box data-sal="fade-right" data-sal-delay={0}>
                          <Typography variant="h5">{title}</Typography>
                          <Typography variant="body1" color="text.secondary">
                            {longDesc}
                          </Typography>
                        </Box>
                        <Box data-sal="fade-right" data-sal-delay={100}>
                          <Button variant="contained" size="medium">
                            Visit website
                          </Button>
                        </Box>
                        {Object.entries(info).map(([x, y], idx) => (
                          <Box
                            key={idx}
                            data-sal="fade-right"
                            data-sal-delay={200 + 100 * idx}
                          >
                            <Typography
                              variant="body1"
                              textTransform="capitalize"
                            >
                              {camelCaseToSentance(x)}
                            </Typography>
                            <Typography variant="body1" color="text.secondary">
                              {y}
                            </Typography>
                          </Box>
                        ))}
                        <Box>
                          <Box data-sal="fade-right" data-sal-delay={500}>
                            <Typography
                              variant="body1"
                              textTransform="capitalize"
                            >
                              Services Provided
                            </Typography>
                          </Box>
                          {servicesProvided.map((elem, idx) => (
                            <Box
                              key={idx}
                              data-sal="fade-right"
                              data-sal-delay={600 + 100 * idx}
                            >
                              <Typography
                                key={idx}
                                variant="body2"
                                color="text.secondary"
                              >
                                - {elem}
                              </Typography>
                            </Box>
                          ))}
                        </Box>
                      </Stack>
                    </Grid>
                    <Grid item xs={8}>
                      <Box>
                        <Stack spacing={{ xs: 4, md: 8 }} mt={{ xs: 8, md: 0 }}>
                          {Object.entries(overview).map(([x, y], idx) => (
                            <Box
                              key={idx}
                              data-sal="fade-up"
                              data-sal-delay={idx * 100}
                            >
                              <Typography variant={md ? "h3" : "h4"}>
                                The {x}
                              </Typography>
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                {y}
                              </Typography>
                            </Box>
                          ))}
                        </Stack>
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
              <Box>
                <Box mx="auto" width={{ xs: "90%", md: "75%" }}>
                  <Stack spacing={{ xs: 4, md: 8 }}>
                    {body.map(({ type, layout, src, src2, title, desc }, idx) =>
                      type === "img" ? (
                        layout === "grid" ? (
                          <Box>
                            <Grid
                              container
                              spacing={{ xs: 4, md: 6 }}
                              columns={{ xs: 6, md: 12 }}
                            >
                              <Grid item xs={6}>
                                <Box data-sal="fade-up" data-sal-delay={0}>
                                  <img src={src} width="100%" alt={title} />
                                </Box>{" "}
                              </Grid>
                              <Grid item xs={6}>
                                <Box data-sal="fade-up" data-sal-delay={100}>
                                  <img src={src2} width="100%" alt={title} />
                                </Box>{" "}
                              </Grid>{" "}
                            </Grid>
                          </Box>
                        ) : (
                          <Box data-sal="fade-up" data-sal-delay={0}>
                            <img src={src} width="100%" alt={title} />
                          </Box>
                        )
                      ) : (
                        <Box data-sal="fade-up" data-sal-delay={0}>
                          <Box width="85%" m="auto">
                            <Stack spacing={2}>
                              <Typography variant={md ? "h3" : "h4"}>
                                {title}
                              </Typography>
                              <Typography
                                variant="body1"
                                color="text.secondary"
                              >
                                {desc}
                              </Typography>
                            </Stack>
                          </Box>
                        </Box>
                      )
                    )}

                    <Typography variant={md ? "h3" : "h4"}>
                      The result
                    </Typography>
                    <VisibilitySensor
                      active={!viewPortEntered}
                      onChange={(isVisible) => {
                        if (isVisible) {
                          setViewPortEntered(true);
                        }
                      }}
                      delayedCall
                    >
                      <Box>
                        <Grid
                          container
                          columns={{ xs: 6, md: 12 }}
                          spacing={8}
                          mb={{ xs: 8, md: 4 }}
                        >
                          {stats.map(({ value, suffix, desc }, idx) => (
                            <Grid item xs={6} key={idx}>
                              <CountUp
                                start={viewPortEntered ? null : 0}
                                end={value}
                                duration={1}
                                onEnd={() =>
                                  viewPortEntered ? setOnCountUpEnd(true) : ""
                                }
                              >
                                {({ countUpRef }) => {
                                  return (
                                    <>
                                      <Typography
                                        ref={countUpRef}
                                        variant="h1"
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
                                color="grey.400"
                                width="80%"
                              >
                                {desc}
                              </Typography>
                            </Grid>
                          ))}
                        </Grid>
                      </Box>
                    </VisibilitySensor>
                    <Box data-sal="fade-up" data-sal-delay={0}>
                      <Stack spacing={4}>
                        <Typography variant="h4">“{content}.”</Typography>
                        <Stack direction="row" spacing={4} alignItems="center">
                          <img src={pfp} alt={author} width={92} />
                          <Stack>
                            <Typography variant="h5" fontWeight={600}>
                              {author}
                            </Typography>
                            <Typography variant="h6" color="text.secondary">
                              {designation}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Stack>
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Stack>
      </Box>
    </>
  );
};
