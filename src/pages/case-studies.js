import { Masonry } from "@mui/lab";
import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Helmet } from "react-helmet-async";
import { PROJECTS } from "../constants";
import { Link } from "../sections/common/Link";

export const CaseStudies = () => {
  return (
    <>
      <Helmet>
        <title>OVO | Case Studies</title>
      </Helmet>
      <Box width="100%">
        <Box width="100%" bgcolor="text.primary">
          <Box
            maxWidth={1400}
            m="auto"
            py={16}
            width={{ xs: "90%", md: "80%" }}
          >
            <Stack spacing={2}>
              <Box data-sal="fade-up">
                <Typography
                  variant="body2"
                  color="white.main"
                  fontFamily="digital-geometric-private"
                >
                  CASE STUDIES
                </Typography>
              </Box>
              <Box data-sal="fade-up" data-sal-delay={100}>
                <Typography
                  variant="h1"
                  color="white.main"
                  letterSpacing="-2px"
                  fontWeight={500}
                >
                  Solutions we crafted to make human lives easier.
                </Typography>
              </Box>
              <Box data-sal="fade-up" data-sal-delay={200}>
                <Typography
                  variant="body1"
                  color="white.main"
                  fontWeight={300}
                  maxWidth="600px"
                  lineHeight="1.5"
                >
                  Our dedicated services are developed to fulfill the whole
                  product cycle. They range from discovery, branding, design
                  over to development and continuous improvements in order to
                  achieve the best outcome.
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box maxWidth={1400} m="auto" py={12} width={{ xs: "90%", md: "80%" }}>
          <Stack spacing={8}>
            <Box>
              <Masonry spacing={{ xs: 4, md: 8 }} columns={{ xs: 1, sm: 2 }}>
                {Object.entries(PROJECTS).map(
                  ([title, { longDesc, available }], idx) => {
                    return (
                      <Box key={idx}>
                        <Box data-sal="fade-up">
                          <Stack spacing={3}>
                            <Link
                              path={available ? `/case-studies/${title}` : ""}
                              component={
                                <Box
                                  sx={{
                                    overflow: "hidden",
                                    "& img": {
                                      cursor: "pointer",
                                      transition: "all ease 0.3s",
                                    },
                                    "&:hover > img": {
                                      transform: "scale(1.1)",
                                    },
                                  }}
                                >
                                  <img
                                    src={`/media/images/projects/${title}/case-study/cover.png`}
                                    width="100%"
                                    alt={`${title}-cover`}
                                  />
                                </Box>
                              }
                            />
                            <Stack spacing={2}>
                              <Box data-sal="fade-up">
                                <Typography
                                  variant="h5"
                                  fontWeight={600}
                                  textTransform="capitalize"
                                  color="text.primary"
                                >
                                  {title}
                                </Typography>
                              </Box>
                              <Box data-sal="fade-up" data-sal-delay={100}>
                                <Typography
                                  variant="body1"
                                  color="text.primary"
                                  fontWeight={300}
                                >
                                  {longDesc}
                                </Typography>
                              </Box>
                            </Stack>
                            <Box data-sal="fade-up" data-sal-delay={200}>
                              {available ? (
                                <Link
                                  path={
                                    available ? `/case-studies/${title}` : ""
                                  }
                                  component={
                                    <Button
                                      variant="outlined"
                                      sx={{
                                        width: "fit-content",
                                        "&:hover": {
                                          bgcolor: "black.main",
                                          color: "white.main",
                                        },
                                      }}
                                    >
                                      View project
                                    </Button>
                                  }
                                />
                              ) : (
                                <Button
                                  variant="contained"
                                  disabled
                                  sx={{
                                    width: "fit-content",
                                  }}
                                >
                                  Coming Soon
                                </Button>
                              )}
                            </Box>
                          </Stack>
                        </Box>
                      </Box>
                    );
                  }
                )}
              </Masonry>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
