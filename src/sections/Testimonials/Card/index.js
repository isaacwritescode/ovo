import { CheckCircle, Star } from "@mui/icons-material";
import { Chip, Rating, Stack, Typography } from "@mui/material";

export const Card = ({ name, occupation, review, image }) => {
  return (
    <Stack spacing={3} p={4} borderRadius={2} bgcolor="#fff">
      <Stack direction="row" spacing={2} alignItems="center">
        <img src={image} width="64px" height="64px" alt="" />
        <Stack>
          <Typography variant="h6" fontWeight={600}>{name}</Typography>
          <Typography variant="body2" color="text.secondary">
            {occupation}
          </Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={2} alignItems="center">
        <Rating
          defaultValue={5}
          emptyIcon={<Star style={{ zIndex: -1 }} fontSize="inherit" />}
          readOnly
        />
        <Chip color="primary" icon={<CheckCircle />} label="Verified Buyer" />
      </Stack>
      <Typography variant="body2" fontWeight={400}>{review}</Typography>
    </Stack>
  );
};
