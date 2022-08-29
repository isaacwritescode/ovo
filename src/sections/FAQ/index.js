import { Button, Grid, useTheme, useMediaQuery, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "../common/Link";
import { Header } from "../common/Header";
import { AccordionGroup } from "./AccordionGroup";

export const FAQ = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const [expanded, setExpanded] = useState("panel0");
  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Grid
      container
      gap={8}
      py={16}
      maxWidth={1400}
      m="auto"
      flexWrap="nowrap"
      width={lg ? "75%" : "90%"}
      direction={lg ? "row" : "column"}
      alignItems={lg ? "center" : "start"}
    >
      <Grid item lg={6}>
        <Header
          title="FAQ"
          heading="Frequently Asked Questions"
          desc="Haven’t found what you’re looking for?"
          type="page"
          maxWidth={480}
          cta={
            <Link
              path="/contact-us"
              component={
                <Button size="medium" variant="outlined">
                  Contact us
                </Button>
              }
            />
          }
        />
      </Grid>
      <Grid item lg={6}>
        <Box data-aos="fade-up" delay={200}>
          <AccordionGroup expanded={expanded} handleChange={handleChange} />
        </Box>
      </Grid>
    </Grid>
  );
};
