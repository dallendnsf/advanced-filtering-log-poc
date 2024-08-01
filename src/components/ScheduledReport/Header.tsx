import Grid from "@mui/material/Grid";
import Image from "next/image";
import theme from "../ThemeRegistry/theme";
import { Box, Typography } from "@mui/material";
import { DataSpan } from "./ScheduledReport";

type Props = {
  whiteLabel: boolean;
  dataSpan: DataSpan;
};

export default function ScheduledReportHeader({ whiteLabel, dataSpan }: Props) {
  let daySpan = 30;
  switch (dataSpan) {
    case "7 Days":
      daySpan = 7;
      break;
    case "60 Days":
      daySpan = 60;
      break;
    case "90 Days":
      daySpan = 90;
      break;
    default:
      daySpan = 30;
  }

  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ backgroundColor: "#ECF1FA" }}
        padding={theme.spacing(4)}
      >
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={12}>
              <Box
                sx={{
                  width: 280,
                  height: 106,
                  position: "relative",
                }}
              >
                <Image
                  src={whiteLabel ? "/whitelabel_logo.png" : "/dnsf_logo.svg"}
                  fill={true}
                  objectFit="contain"
                  alt="DNSF Logo"
                />
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h4">
                DNS Protection Summary Report
              </Typography>
              <Typography variant="h6">Single Org, Inc.</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6" textAlign="right">
                {new Date(
                  new Date().setDate(new Date().getDate() - daySpan)
                ).toDateString()}{" "}
                - {new Date().toDateString()}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Box sx={{ backgroundColor: "#000", height: theme.spacing(2) }}></Box>
    </>
  );
}
