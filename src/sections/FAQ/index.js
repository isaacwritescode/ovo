import { Button, Grid, useTheme, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { Link } from "../common/Link";
import { Header } from "../common/Header";
import { AccordionGroup } from "./AccordionGroup";

export const FAQ = () => {
  const theme = useTheme();
  const lg = useMediaQuery(theme.breakpoints.up("lg"));
  const md = useMediaQuery(theme.breakpoints.up("md"));
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
      width={md ? "80%" : "90%"}
      direction={lg ? "row" : "column"}
      alignItems={lg? "center": "start"}
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
        <AccordionGroup expanded={expanded} handleChange={handleChange} />
      </Grid>
    </Grid>
  );
};
