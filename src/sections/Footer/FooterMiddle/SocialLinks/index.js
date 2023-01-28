import { Stack } from "@mui/material";
import { cloneElement } from "react";
import { Link } from "../../../common/Link";
import { SOCIAL_LINKS } from "../../constants";

export const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={2}>
      {SOCIAL_LINKS.map(({ platform, icon, url }, idx) => {
        icon = cloneElement(
          icon,
          { color: '#ffffff', size: "28px" }
        );
        return <Link
          key={idx}
          url={url}
          component={icon}
        />
      })}
    </Stack>
  );
};
