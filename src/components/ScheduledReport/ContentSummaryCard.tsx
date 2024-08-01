"use client";
import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Paper, Typography } from "@mui/material";
import TopCategoryBarChart from "./Charts/TopCategoryBarChart";
import { ITopCategories } from "@/types/top-categories";

type Props = {
  topContent: ITopCategories[];
};

export default function ScheduledReportContentSummaryCard({
  topContent,
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
              data={topContent}
              xDataKey="category"
              seriesDataKey="total_requests"
              layout="vertical"
              seriesColors={[theme.palette.common.black]}
            />
          </Grid>
        </Grid>
      </Paper>
    </>
  );
}
