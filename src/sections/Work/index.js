import { Box, Button, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { PROJECTS } from "../../constants";
import { Link } from "../common/Link";
import { Header } from "../common/Header";
import { Masonry } from "@mui/lab";

export const Work = () => {
  return (
    <Box bgcolor="white.main" width="100%">
      <Box maxWidth={1400} m="auto" py={12} width={{ xs: "90%", md: "80%" }}>
        <Stack spacing={8} alignItems="center">
          <Header
            title="CASE STUDIES"
            heading="Startups, Entrepreneurs and Small Businesses % experience more conversions with DevGeeks"
            desc="Discover what we do and how we make it happen"
            maxWidth={640}
            mb={{ md: 8 }}
            color="blue"
          />
          <Box width="100%">
            <Masonry spacing={{ xs: 0, sm: 6 }} columns={{ xs: 1, sm: 2 }}>
              {Object.entries(PROJECTS).map(
                ([title, { desc, available, cover, website }], idx) => {
                  return (
                    <Box key={idx} pb={{ xs: 6, sm: 0 }}>
                      <Box data-sal="fade-up">
                        <Stack spacing={3}>
                          <Link
                            url={website}
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
                                  src={cover}
                                  width="100%"
                                  style={{ borderRadius: "12px" }}
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
                                {desc}
                              </Typography>
                            </Box>
                          </Stack>
                          <Box data-sal="fade-up" data-sal-delay={200}>
                            {available ? (
                              <Link
                                url={website}
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
  );
};
