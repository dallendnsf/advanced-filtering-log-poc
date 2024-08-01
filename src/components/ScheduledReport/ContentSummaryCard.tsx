"use client";
import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Card, CardContent, Paper, Typography } from "@mui/material";
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
      <Card>
        <CardContent>
          <Typography variant="h6">Blocked Content Requests</Typography>
          <Grid
            container
            alignItems="center"
            spacing={2}
            padding={theme.spacing(2)}
          >
            <Grid item xs={12}>
              <TopCategoryBarChart
                data={topContent}
                xDataKey="category"
                seriesDataKey="total_requests"
                layout="vertical"
                seriesColors={[theme.palette.common.black]}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
