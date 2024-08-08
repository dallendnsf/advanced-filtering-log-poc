import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Typography } from "@mui/material";
import ScheduledReportThreatSummaryCard from "./ThreatSummaryCard";
import { ITopCategories } from "@/types/top-categories";
import ScheduledReportContentSummaryCard from "./ContentSummaryCard";
import { ContentQuantity } from "./ScheduledReport";
import { ITopDomains } from "@/types/top-domains";
import { IRequestSummary } from "@/types/request-summary";
import ActiveSiteSummary from "./ActiveSiteSummary";
import { ITopSites } from "@/types/top-sites";

type Props = {
  networkSummary: boolean;
  topSites: ITopSites[];
  topThreats: ITopCategories[];
  topThreatDomains: ITopDomains[];
  topContent: ITopCategories[];
  topContentDomains: ITopDomains[];
  threatSummary: boolean;
  contentSummary: boolean;
  contentQuantity: ContentQuantity;
  summaryData: IRequestSummary;
};

export default function ScheduledReportContent({
  networkSummary,
  topSites,
  topThreats,
  topThreatDomains,
  topContent,
  topContentDomains,
  threatSummary,
  contentSummary,
  summaryData,
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
            {networkSummary ? (
              <Grid item xs={12}>
                <ActiveSiteSummary
                  topSites={topSites}
                  summaryData={summaryData}
                />
              </Grid>
            ) : (
              ""
            )}

            {threatSummary ? (
              <Grid item xs={12}>
                <ScheduledReportThreatSummaryCard
                  topThreats={topThreats}
                  topThreatDomains={topThreatDomains}
                  summaryData={summaryData}
                />
              </Grid>
            ) : (
              ""
            )}

            {contentSummary ? (
              <Grid item xs={12}>
                <ScheduledReportContentSummaryCard
                  topContent={topContent}
                  topContentDomains={topContentDomains}
                  summaryData={summaryData}
                />
              </Grid>
            ) : (
              ""
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
