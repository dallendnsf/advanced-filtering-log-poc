"use client";
import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Card, CardContent, Typography } from "@mui/material";
import TopCategoryBarChart from "./Charts/TopCategoryBarChart";
import { ITopCategories } from "@/types/top-categories";
import { ITopDomains } from "@/types/top-domains";
import TopDomainsGrid from "./Grids/TopDomainsGrid";
import { IRequestSummary } from "@/types/request-summary";

type Props = {
  topThreats: ITopCategories[];
  topThreatDomains: ITopDomains[];
  summaryData: IRequestSummary;
};

export default function ScheduledReportThreatSummaryCard({
  topThreats,
  topThreatDomains,
  summaryData,
}: Props) {
  return (
    <>
      <Card>
        <Grid
          container
          alignItems="center"
          spacing={3}
          padding={theme.spacing(2)}
        >
          <Grid item xs={12}>
            <Typography variant="h5">Threat Summary</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">
              Blocked Requests By Threat Category
            </Typography>
            <Typography variant="body1">
              The blocked threats count and the sum of the bar chart figures may
              differ. Requests with more than one category may be represented
              multiple times.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <TopCategoryBarChart
              data={topThreats}
              xDataKey="category"
              seriesDataKey="total_requests"
              layout="vertical"
              seriesColors={[theme.palette.secondary.main]}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Top 10 Blocked Threat Domains</Typography>
          </Grid>
          <Grid item xs={12}>
            <TopDomainsGrid
              data={topThreatDomains}
              denominator={summaryData.threats_blocked}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
