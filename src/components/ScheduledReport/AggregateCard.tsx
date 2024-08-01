import { DoDisturbOutlined, WifiTetheringOutlined } from "@mui/icons-material";
import Image from "next/image";
import theme from "../ThemeRegistry/theme";
import { Grid, Typography } from "@mui/material";
import { AggregateNumberFormatter } from "@/util/aggregate-number-formatter";

export type AggregateType =
  | "total_requests"
  | "blocked_requests"
  | "threat_requests";

type Props = {
  aggregateType: AggregateType;
  requestCount: number;
};

const ICON_WIDTH = 80;
const ICON_HEIGHT = 80;

export default function AggregateCard({ aggregateType, requestCount }: Props) {
  const content = getAggregateContent(aggregateType);

  const formattedRequestCount = AggregateNumberFormatter(requestCount);

  return (
    <Grid container alignItems="center" spacing={2}>
      <Grid item xs="auto">
        {content.icon}
      </Grid>
      <Grid item>
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ color: content.color }}
        >
          {formattedRequestCount}
        </Typography>
        <Typography variant="body2">{content.label}</Typography>
      </Grid>
    </Grid>
  );
}

function getAggregateContent(aggregateType: AggregateType) {
  switch (aggregateType) {
    case "total_requests":
      return {
        icon: (
          <WifiTetheringOutlined
            sx={{
              color: theme.palette.primary.main,
              width: ICON_WIDTH,
              height: ICON_HEIGHT,
            }}
          />
        ),
        color: theme.palette.primary.main,
        label: "Total Requests Received",
      };

    case "threat_requests":
      return {
        icon: (
          <Image
            src="/skull_icon.svg"
            width={ICON_WIDTH}
            height={ICON_HEIGHT}
            alt="Threats Icon"
          />
        ),
        color: theme.palette.secondary.main,
        label: "Threats We Blocked",
      };

    case "blocked_requests":
      return {
        icon: (
          <DoDisturbOutlined
            sx={{
              width: ICON_WIDTH,
              height: ICON_HEIGHT,
              color: theme.palette.common.black,
            }}
          />
        ),
        color: theme.palette.common.black,
        label: "Content Requests We Blocked",
      };
  }
}
