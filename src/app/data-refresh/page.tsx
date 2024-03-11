import * as React from "react";
import Box from "@mui/material/Box";
import { _logs } from "@/_mock";
import AdvancedFilteringLogDataGrid from "@/components/AdvancedFilteringLogDataGrid";
import ReportRefresh from "@/components/ReportRefresh";
import Grid from "@mui/material/Grid";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={8}>
        <Grid item xs={12} zIndex={10000}>
          <ReportRefresh />
        </Grid>
        <Grid item xs={12}>
          <AdvancedFilteringLogDataGrid logs={_logs} />
        </Grid>
      </Grid>
    </Box>
  );
}
