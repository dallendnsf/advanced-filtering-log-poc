"use client";
import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Card, CardContent, Paper, Typography } from "@mui/material";
import TopCategoryBarChart from "./Charts/TopCategoryBarChart";
import { ITopCategories } from "@/types/top-categories";
import { ITopDomains } from "@/types/top-domains";
import TopDomainsGrid from "./Grids/TopDomainsGrid";
import { IRequestSummary } from "@/types/request-summary";

type Props = {
  topContent: ITopCategories[];
  topContentDomains: ITopDomains[];
  summaryData: IRequestSummary;
};

export default function ScheduledReportContentSummaryCard({
  topContent,
  topContentDomains,
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
            <Typography variant="h6">Blocked Content Requests</Typography>
          </Grid>
          <Grid item xs={12}>
            <TopCategoryBarChart
              data={topContent}
              xDataKey="category"
              seriesDataKey="total_requests"
              layout="vertical"
              seriesColors={[theme.palette.common.black]}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography variant="h6">Blocked Content Domains</Typography>
          </Grid>
          <Grid item xs={12}>
            <TopDomainsGrid
              data={topContentDomains}
              denominator={summaryData.content_blocked}
            />
          </Grid>
        </Grid>
      </Card>
    </>
  );
}
