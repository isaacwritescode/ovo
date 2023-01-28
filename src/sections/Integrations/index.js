import { Stack, Typography, Box, Grid } from "@mui/material";
import { INTEGRATIONS } from "./constants";

export const Integrations = () => {
  return <Box width="100%" bgcolor="#f2f3f5" position="relative">
    <Box width={{ lg: "80%", sm: "75%" }} m="auto" pt={12}>
      <Grid container>
        <Grid item xs={6}>
          <Typography variant="h3">Integrations?<br /><Box display="inline" fontWeight={600}>We've got you covered</Box> </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" color="text.secondary">Whether you have 5,000 Shopify customers waiting for a discount or 50,000 subscribers anticipating your Black Friday promotions. BlueReceipt is the platform built for a lifetime of success</Typography>
        </Grid>
      </Grid>
    </Box>
    <Box sx={{ overflowX: "hidden" }} py={12}>
      <Stack spacing={3}>
        <Stack direction="row" spacing={3} sx={{ width: 2400 }}>
          {INTEGRATIONS.slice(0, 4).map((({ title, desc }, idx) =>
            <Stack key={idx} p={4} spacing={4} direction="row" sx={{ border: "1px solid #ddd", borderRadius: 4 }}>
              <img src={`/media/images/icons/${title.replaceAll(" ", "-")}.svg`} width={56} height={56} alt={`${title}-icon`} />
              <Stack >
                <Typography variant="h6" textTransform="capitalize" fontWeight={600}>{title}</Typography>
                <Typography variant="body2" color="text.secondary">{desc}</Typography>
              </Stack>
            </Stack>))}
        </Stack>
        <Stack direction="row" spacing={3} sx={{ width: 2400 }}>
          {INTEGRATIONS.slice(4).map((({ title, desc }, idx) =>
            <Stack key={idx} p={4} spacing={4} direction="row" sx={{ border: "1px solid #ddd", borderRadius: 4 }}>
              <img src={`/media/images/icons/${title.replaceAll(" ", "-")}.svg`} width={56} height={56} alt={`${title}-icon`} />
              <Stack >
                <Typography variant="h6" textTransform="capitalize" fontWeight={600}>{title}</Typography>
                <Typography variant="body2" color="text.secondary">{desc}</Typography>
              </Stack>
            </Stack>))}
        </Stack>
      </Stack>
    </Box>

  </Box >;
}