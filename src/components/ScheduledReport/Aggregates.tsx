import { Grid, Paper } from "@mui/material";
import AggregateCard from "./AggregateCard";
import theme from "../ThemeRegistry/theme";
import { DataSpan } from "./ScheduledReport";
import { IRequestSummary } from "@/types/request-summary";

type Props = {
  threatSummary: boolean;
  contentSummary: boolean;
  networkSummary: boolean;
  dataSpan: DataSpan;
  summaryData: IRequestSummary;
  siteCount: number;
};

export default function ScheduledReportAggregates({
  threatSummary,
  contentSummary,
  networkSummary,
  summaryData,
  siteCount,
}: Props) {
  return (
    <Paper
      elevation={0}
      sx={{ borderRadius: 0, borderBottom: 1, padding: theme.spacing(2) }}
    >
      <Grid container>
        <Grid item xs>
          <AggregateCard
            aggregateType="total_requests"
            requestCount={summaryData.total_requests}
          />
        </Grid>

        {threatSummary && (
          <Grid item xs>
            <AggregateCard
              aggregateType="threat_requests"
              requestCount={summaryData.threats_blocked}
            />
          </Grid>
        )}

        {contentSummary && (
          <Grid item xs>
            <AggregateCard
              aggregateType="blocked_requests"
              requestCount={summaryData.content_blocked}
            />
          </Grid>
        )}

        {networkSummary && (
          <Grid item xs>
            <AggregateCard aggregateType="sites" requestCount={siteCount} />
          </Grid>
        )}
      </Grid>
    </Paper>
  );
}
