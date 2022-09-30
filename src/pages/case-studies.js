import { Grid, Stack, Typography } from "@mui/material";
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
        <Box maxWidth={1400} m="auto" py={12} width={{ xs: "90%", md: "75%" }}>
          <Stack spacing={8}>
            <Box py={12}>
              <Typography variant="h6">Case Studies</Typography>
              <Typography variant="h1" letterSpacing="-3px">
                The work we do,
                <br /> and the people we help.
              </Typography>
            </Box>
            <Box>
              <Grid
                container
                spacing={{ xs: 4, md: 8 }}
                columns={{ xs: 6, sm: 12 }}
              >
                {Object.entries(PROJECTS).map(([title, { desc }], idx) => {
                  return (
                    <Grid item key={idx} xs={6} sx={{ mt: idx % 2 ? -8 : 0 }}>
                      <Link
                        path={`/case-studies/${title}`}
                        component={
                          <Box data-sal="fade-up">
                            <Stack spacing={2}>
                              <Box
                                sx={{
                                  overflow: "hidden",
                                  aspectRatio: "960/1100",
                                  cursor: "pointer",
                                  "& img": {
                                    transition: "all ease 0.3s",
                                  },
                                  "&:hover > img": { transform: "scale(1.1)" },
                                }}
                              >
                                <img
                                  src={`/media/images/projects/${title}/case-study/cover.png`}
                                  width="100%"
                                  alt={`${title}-cover`}
                                />
                              </Box>
                              <Typography
                                variant="h5"
                                textTransform="capitalize"
                                color="text.secondary"
                                textAlign="center"
                              >
                                <Box
                                  color="text.primary"
                                  fontWeight={600}
                                  component="span"
                                >
                                  {title}
                                </Box>{" "}
                                -{desc}
                              </Typography>
                            </Stack>
                          </Box>
                        }
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};
