import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Typography } from "@mui/material";
import ScheduledReportThreatSummaryCard from "./ThreatSummaryCard";
import { ITopCategories } from "@/types/top-categories";
import ScheduledReportContentSummaryCard from "./ContentSummaryCard";

type Props = {
  topThreats: ITopCategories[];
  topContent: ITopCategories[];
};

export default function ScheduledReportContent({
  topThreats,
  topContent,
}: Props) {
  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ backgroundColor: "#F6F8FC" }}
        padding={theme.spacing(2)}
      >
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12}>
              <ScheduledReportThreatSummaryCard topThreats={topThreats} />
            </Grid>
            <Grid item xs={12}>
              <ScheduledReportContentSummaryCard topContent={topContent} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
