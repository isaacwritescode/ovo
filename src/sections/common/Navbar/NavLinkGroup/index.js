import { Stack, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { Link } from "../../Link";

export const NavLinkGroup = ({ links }) => {
  const { pathname } = useLocation();
  return (
    <Stack direction="row" spacing={4}>
      {links.map(({ title, url, path }, idx) => (
        <Link
          key={idx}
          url={url}
          path={path}
          component={
            <Typography
              variant="body2"
              textTransform="capitalize"
              sx={{
                position: "relative",
                color:
                  pathname === "/" + path ? "text.primary" : "text.secondary",
                "&:after": {
                  position: "absolute",
                  bgcolor: "black.main",
                  bottom: "-4px",
                  content: "''",
                  display: "block",
                  height: "2px",
                  left: 0,
                  transition: "width 0.3s ease 0s, opacity 0.3s ease 0s",
                  width: 0,
                },
                "&:hover": {
                  color: "black.main",
                  "&:after": { width: "100%" },
                },
              }}
            >
              {title}
            </Typography>
          }
        />
      ))}
    </Stack>
  );
};
