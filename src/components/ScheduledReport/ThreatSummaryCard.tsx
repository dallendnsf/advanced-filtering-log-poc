"use client";
import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Paper, Typography } from "@mui/material";
import TopCategoryBarChart from "./Charts/TopCategoryBarChart";
import { ITopCategories } from "@/types/top-categories";

type Props = {
  topThreats: ITopCategories[];
};

export default function ScheduledReportThreatSummaryCard({
  topThreats,
}: Props) {
  return (
    <>
      <Paper>
        <Grid
          container
          alignItems="center"
          spacing={1}
          padding={theme.spacing(4)}
        >
          <Grid item xs={12}>
            {/* <Typography variant="h5">Content Section Here</Typography> */}
            <TopCategoryBarChart
              data={topThreats}
              xDataKey="category"
              seriesDataKey="total_requests"
              layout="vertical"
              seriesColors={[theme.palette.secondary.main]}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
