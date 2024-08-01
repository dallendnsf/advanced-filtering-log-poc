import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Typography } from "@mui/material";
import ScheduledReportThreatSummaryCard from "./ThreatSummaryCard";

type Props = {};

export default function ScheduledReportContent({}: Props) {
  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ backgroundColor: "#F6F8FC" }}
        padding={theme.spacing(4)}
      >
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={4}>
            <Grid item xs={12}>
              <ScheduledReportThreatSummaryCard />
            </Grid>
            <Grid item xs={12}>
              <ScheduledReportThreatSummaryCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
