import { Grid, Paper } from "@mui/material";
import AggregateCard from "./AggregateCard";
import theme from "../ThemeRegistry/theme";
import { DataSpan } from "./ScheduledReport";
import { IRequestSummary } from "@/types/request-summary";

type Props = {
  threatSummary: boolean;
  contentSummary: boolean;
  dataSpan: DataSpan;
  summaryData: IRequestSummary;
};

export default function ScheduledReportAggregates({
  threatSummary,
  contentSummary,
  summaryData,
}: Props) {
  return (
    <Paper elevation={0} sx={{ borderRadius: 0, borderBottom: 1 }}>
      <Grid container padding={theme.spacing(4)}>
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
      </Grid>
    </Paper>
  );
}
