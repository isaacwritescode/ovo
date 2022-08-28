import { Stack } from "@mui/material";
import { Link } from "../../../common/Link";
import { SOCIAL_LINKS } from "../../constants";

export const SocialLinks = () => {
  return (
    <Stack direction="row" spacing={2}>
      {SOCIAL_LINKS.map(({ platform, icon, url }, idx) => (
        <Link
          key={idx}
          url={url}
          component={<img src={icon} width={32} height={32} alt={platform} />}
        />
      ))}
    </Stack>
  );
};
