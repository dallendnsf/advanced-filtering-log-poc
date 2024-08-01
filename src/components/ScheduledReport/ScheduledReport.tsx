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
  WEEK_TOP_THREAT_CATEGORIES,
  WEEK_TOP_CONTENT_CATEGORIES,
} from "@/_mock/";

export type ContentQuantity = "all" | "15" | "10" | "5";
export type DataSpan = "7 Days" | "30 Days" | "60 Days" | "90 Days";

type Props = {
  whiteLabel: boolean;
  threatSummary: boolean;
  contentSummary: boolean;
  contentQuantity: ContentQuantity;
  dataSpan: DataSpan;
};

export default function ScheduledReport({
  whiteLabel,
  threatSummary,
  contentSummary,
  contentQuantity,
  dataSpan,
}: Props) {
  // get the data and pass it down. I will be doing inline modifications for the purposes of mocking.

  let summaryData = MONTH_REQUEST_SUMMARY;
  let topThreats = MONTH_TOP_THREAT_CATEGORIES;
  let topContent = MONTH_TOP_CONTENT_CATEGORIES;

  // date span adjustments
  switch (dataSpan) {
    case "7 Days":
      summaryData = WEEK_REQUEST_SUMMARY;
      topThreats = WEEK_TOP_THREAT_CATEGORIES;
      topContent = WEEK_TOP_CONTENT_CATEGORIES;
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
      break;
    default:
      break;
  }

  // category count adjustments //TODO
  // if (contentQuantity !== "all") {
  //   topContent.splice(Number(contentQuantity));
  // }

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
          topThreats={topThreats}
          topContent={topContent}
        />
        <ScheduledReportFooter whiteLabel={whiteLabel} />
      </Grid>
    </Grid>
  );
}
