import { Button, Grid, Box } from "@mui/material";
import { useState } from "react";
import { Link } from "../common/Link";
import { Header } from "../common/Header";
import { AccordionGroup } from "./AccordionGroup";

export const FAQ = () => {
  const [expanded, setExpanded] = useState("panel0");
  const handleChange = (panel) => (_, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <Box width={{ xs: "90%", lg: "75%" }} py={16} maxWidth={1400} m="auto">
      <Grid
        container
        spacing={8}
        direction={{ xs: "column", lg: "row" }}
        alignItems={{ xs: "start", lg: "center" }}
        columns={{ xs: 6, lg: 12 }}
      >
        <Grid item xs={6}>
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
        <Grid item xs={6}>
          <Box data-aos="fade-up" delay={200}>
            <AccordionGroup expanded={expanded} handleChange={handleChange} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
