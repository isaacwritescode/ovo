import { Divider, Stack } from "@mui/material";
import Accordion from "../../common/Accordion";
import { FAQ_ITEMS } from "../constants";

export const AccordionGroup = ({ handleChange, expanded }) => {
  return (
    <Stack spacing={2}>
      {FAQ_ITEMS.map(({ title, desc }, idx) => (
        <Accordion
          key={idx}
          title={title}
          desc={desc}
          onChange={handleChange(`panel${idx}`)}
          expanded={expanded === `panel${idx}`}
        />
      ))}
      <Divider />
    </Stack>
  );
};
