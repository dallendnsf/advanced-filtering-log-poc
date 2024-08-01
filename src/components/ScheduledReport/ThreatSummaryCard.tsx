"use client";
import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import {
  Card,
  CardContent,
  CardHeader,
  Paper,
  Typography,
} from "@mui/material";
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
      <Card>
        <CardContent>
          <Typography variant="h6">Blocked Threat Requests</Typography>
          <Grid
            container
            alignItems="center"
            spacing={2}
            padding={theme.spacing(2)}
          >
            <Grid item xs={12}>
              <TopCategoryBarChart
                data={topThreats}
                xDataKey="category"
                seriesDataKey="total_requests"
                layout="vertical"
                seriesColors={[theme.palette.secondary.main]}
              />
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}
