import * as React from "react";
import Box from "@mui/material/Box";
import OrgIgnoreListDataGrid from "@/components/OrgIgnoreListDataGrid";
import { _ignores } from "@/_mock";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex" }}>
      <OrgIgnoreListDataGrid ignores={_ignores} />
    </Box>
  );
}
