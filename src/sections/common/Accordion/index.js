import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const CustomAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme, expanded }) => ({
  borderTop: `1px solid ${theme.palette.divider}`,

  "&:before": {
    display: "none",
  },
  "& .MuiAccordionDetails-root": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ExpandLessIcon sx={{ fontSize: "1.5rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: "white.main",
  flexDirection: "row",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
}));

export default function Accordion({ title, desc, expanded, onChange }) {
  return (
    <CustomAccordion expanded={expanded} onChange={onChange}>
      <AccordionSummary>
        <Typography variant="h6">{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" color="text.secondary">{desc}</Typography>
      </AccordionDetails>
    </CustomAccordion>
  );
}
