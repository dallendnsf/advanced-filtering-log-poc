import Grid from "@mui/material/Grid";
import theme from "../ThemeRegistry/theme";
import { Typography } from "@mui/material";

type Props = {
  whiteLabel: boolean;
};

export default function ScheduledReportFooter({ whiteLabel }: Props) {
  if (whiteLabel) {
    return <></>;
  }

  return (
    <>
      <Grid
        container
        alignItems="center"
        sx={{ backgroundColor: "#F6F8FC" }}
        padding={theme.spacing(2)}
      >
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={0}>
            <Grid item xs={12}>
              <Typography variant="h6" textAlign="center">
                Powered By DNSFilter
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1" textAlign="center">
                © DNSFilter, Inc. All rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}
