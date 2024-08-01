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
        sx={{ backgroundColor: "#FFF" }}
        padding={theme.spacing(4)}
      >
        <Grid item xs={12}>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={12}>
              <Typography variant="h5" textAlign="center">
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
