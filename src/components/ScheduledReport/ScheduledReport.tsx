"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import ScheduledReportHeader from "./Header";
import ScheduledReportAggregates from "./Aggregates";
import ScheduledReportFooter from "./Footer";
import ScheduledReportContent from "./Content";
import {
  WEEK_REQUEST_SUMMARY,
  MONTH_REQUEST_SUMMARY,
  MONTH_TOP_THREAT_CATEGORIES,
  MONTH_TOP_CONTENT_CATEGORIES,
  MONTH_TOP_THREAT_DOMAINS,
  MONTH_TOP_CONTENT_DOMAINS,
  WEEK_TOP_THREAT_CATEGORIES,
  WEEK_TOP_CONTENT_CATEGORIES,
  WEEK_TOP_THREAT_DOMAINS,
  WEEK_TOP_CONTENT_DOMAINS,
} from "@/_mock/";
import { MONTH_TOP_SITES } from "@/_mock/scheduled-reports/_month_top_sites";
import { WEEK_TOP_SITES } from "@/_mock/scheduled-reports/_week_top_sites";

export type ContentQuantity = "all" | "15" | "10" | "5";
export type DataSpan = "7 Days" | "30 Days" | "60 Days" | "90 Days";

const MAX_DOMAINS = 10;
const MAX_SITES = 6;

type Props = {
  whiteLabel: boolean;
  networkSummary: boolean;
  threatSummary: boolean;
  contentSummary: boolean;
  contentQuantity: ContentQuantity;
  dataSpan: DataSpan;
};

export default function ScheduledReport({
  whiteLabel,
  networkSummary,
  threatSummary,
  contentSummary,
  contentQuantity,
  dataSpan,
}: Props) {
  // get the data and pass it down. I will be doing inline modifications for the purposes of mocking.

  let summaryData = MONTH_REQUEST_SUMMARY;
  let topThreats = MONTH_TOP_THREAT_CATEGORIES;
  let topThreatDomains = MONTH_TOP_THREAT_DOMAINS.slice(0, MAX_DOMAINS);
  let topContent = MONTH_TOP_CONTENT_CATEGORIES;
  let topContentDomains = MONTH_TOP_CONTENT_DOMAINS.slice(0, MAX_DOMAINS);
  let topSites = MONTH_TOP_SITES;

  // date span adjustments
  switch (dataSpan) {
    case "7 Days":
      summaryData = WEEK_REQUEST_SUMMARY;
      topThreats = WEEK_TOP_THREAT_CATEGORIES;
      topThreatDomains = WEEK_TOP_THREAT_DOMAINS.slice(0, MAX_DOMAINS);
      topContent = WEEK_TOP_CONTENT_CATEGORIES;
      topContentDomains = WEEK_TOP_CONTENT_DOMAINS.slice(0, MAX_DOMAINS);
      topSites = WEEK_TOP_SITES;
      break;
    case "60 Days":
      summaryData = {
        total_requests: summaryData.total_requests * 2,
        threats_blocked: summaryData.threats_blocked * 2,
        content_blocked: summaryData.content_blocked * 2,
      };
      topThreats = topThreats.map((t) => ({
        category: t.category,
        total_requests: t.total_requests * 2,
      }));
      topContent = topContent.map((t) => ({
        category: t.category,
        total_requests: t.total_requests * 2,
      }));
      topThreatDomains = topThreatDomains.map((t) => ({
        ...t,
        total_requests: t.total_requests * 2,
      }));
      topContentDomains = topContentDomains.map((t) => ({
        ...t,
        total_requests: t.total_requests * 2,
      }));
      topSites = topSites.map((t) => ({
        ...t,
        total_requests: t.total_requests * 2,
        total_blocked_requests: t.total_blocked_requests * 2,
        threats_blocked: t.threats_blocked * 2,
        content_blocked: t.content_blocked * 2,
      }));

      break;
    case "90 Days":
      summaryData = {
        total_requests: summaryData.total_requests * 3,
        threats_blocked: summaryData.threats_blocked * 3,
        content_blocked: summaryData.content_blocked * 3,
      };
      topThreats = topThreats.map((t) => ({
        category: t.category,
        total_requests: t.total_requests * 3,
      }));
      topContent = topContent.map((t) => ({
        category: t.category,
        total_requests: t.total_requests * 3,
      }));
      topThreatDomains = topThreatDomains.map((t) => ({
        ...t,
        total_requests: t.total_requests * 3,
      }));
      topContentDomains = topContentDomains.map((t) => ({
        ...t,
        total_requests: t.total_requests * 3,
      }));
      topSites = topSites.map((t) => ({
        ...t,
        total_requests: t.total_requests * 3,
        total_blocked_requests: t.total_blocked_requests * 3,
        threats_blocked: t.threats_blocked * 3,
        content_blocked: t.content_blocked * 3,
      }));
      break;
    default:
      break;
  }

  // content quantity adjustment
  if (contentQuantity !== "all") {
    topContent = topContent.filter(
      (c, index) => index < Number(contentQuantity)
    );
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <ScheduledReportHeader whiteLabel={whiteLabel} dataSpan={dataSpan} />
        <ScheduledReportAggregates
          threatSummary={threatSummary}
          contentSummary={contentSummary}
          dataSpan={dataSpan}
          summaryData={summaryData}
        />
        <ScheduledReportContent
          networkSummary={networkSummary}
          topSites={topSites}
          topThreats={topThreats}
          topThreatDomains={topThreatDomains}
          threatSummary={threatSummary}
          topContent={topContent}
          topContentDomains={topContentDomains}
          contentQuantity={contentQuantity}
          contentSummary={contentSummary}
          summaryData={summaryData}
        />
        <ScheduledReportFooter whiteLabel={whiteLabel} />
      </Grid>
    </Grid>
  );
}
