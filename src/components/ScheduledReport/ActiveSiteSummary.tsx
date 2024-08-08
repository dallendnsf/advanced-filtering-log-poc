import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Card, CardContent, Typography } from "@mui/material";
import { ITopSites } from "@/types/top-sites";
import { IRequestSummary } from "@/types/request-summary";
import SiteCard from "./SiteCard";

type Props = {
  topSites: ITopSites[];
  summaryData: IRequestSummary;
};

export default function ActiveSiteSummary({ topSites, summaryData }: Props) {
  return (
    <>
      <Grid container alignItems="center" spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h5">Top Active Sites</Typography>
        </Grid>
        {topSites.map((ts, index) => {
          if (index < 6) {
            return (
              <Grid key={ts.network_name} item xs={4}>
                <SiteCard site={ts} denominator={summaryData.total_requests} />
              </Grid>
            );
          }
        })}
      </Grid>
    </>
  );
}
