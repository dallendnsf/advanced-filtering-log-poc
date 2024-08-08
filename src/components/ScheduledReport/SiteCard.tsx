import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Card, CardContent, Typography } from "@mui/material";
import { ITopSites } from "@/types/top-sites";
import { AggregateNumberFormatter } from "@/util/aggregate-number-formatter";

type Props = {
  site: ITopSites;
  denominator: number;
};

export default function SiteCard({ site, denominator }: Props) {
  return (
    <>
      <Card>
        <Grid
          container
          alignItems="center"
          spacing={1}
          padding={theme.spacing(2)}
        >
          <Grid item xs={12}>
            <Typography variant="body1">{site.network_name}</Typography>
            {/* <Typography variant="caption">
                {((site.total_requests / denominator) * 100).toFixed(2)}% of
                overall requests
              </Typography> */}
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.primary.main }}
            >
              <strong>{AggregateNumberFormatter(site.total_requests)}</strong>
            </Typography>
            <Typography variant="caption">Total Requests</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography
              variant="subtitle1"
              sx={{ color: theme.palette.secondary.main }}
            >
              <strong>{AggregateNumberFormatter(site.threats_blocked)}</strong>
            </Typography>
            <Typography variant="caption">Blocked Threats</Typography>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="subtitle1">
              <strong>{AggregateNumberFormatter(site.content_blocked)}</strong>
            </Typography>
            <Typography variant="caption">Blocked Content</Typography>
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
