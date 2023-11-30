import * as React from "react";
import Box from "@mui/material/Box";
import AdvancedFilteringLogDataGrid from "@/components/AdvancedFilteringLogDataGrid";
import { _logs } from "@/_mock";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex" }}>
      <AdvancedFilteringLogDataGrid logs={_logs} />
    </Box>
  );
}
