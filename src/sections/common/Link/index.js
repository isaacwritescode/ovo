import { Box } from "@mui/material";
import { HashLink } from "react-router-hash-link";

export const Link = ({ url, path = "/", component }) => {
  component = <Box sx={{ cursor: "pointer" }}>{component}</Box>;

  return url ? (
    <Box onClick={() => window.open(url)}>{component}</Box>
  ) : (
    <HashLink
      to={path}
      scroll={(el) => el.scrollIntoView({ behavior: "smooth", block: "start" })}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      {component}
    </HashLink>
  );
};
