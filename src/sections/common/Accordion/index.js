import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { AddCircle, AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";

const CustomAccordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square sx={{
    "&.Mui-expanded": {
      bgcolor: "#ffffff10",
      borderRadius: 4
    }, bgcolor: "transparent",
    borderRadius: 0
  }} {...props} />
))(({ theme, expanded }) => ({
  "&:before": {
    display: "none",
  },
  "& .MuiAccordionDetails-root": {
    color: "white.main",
    marginLeft: theme.spacing(1),
  },
}));

const AccordionSummary = styled(({ expanded, ...props }) => (
  <MuiAccordionSummary
    expandIcon={expanded ? <RemoveCircleOutline sx={{
      fontSize: "1.5rem",
      color: "white.main",
    }} /> : <AddCircleOutline sx={{
      fontSize: "1.5rem",
      color: "white.main",
    }} />}
    {...props}
  />
))(({ theme }) => ({
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
      <AccordionSummary expanded={expanded}>
        <Typography variant="h6" sx={{
          color: "white.main",
        }}>{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="body1" color="#ffffff80">{desc}</Typography>
      </AccordionDetails>
    </CustomAccordion>
  );
}
