import { Button, Grid } from "@mui/material";
import {
  GridSlotsComponentsProps,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  useGridApiContext,
} from "@mui/x-data-grid-pro";
import FilterChipsBar from "./FilterChipsBar";

// declare module "@mui/x-data-grid-pro" {
//   interface ToolbarPropsOverrides {
//     queryOptions: { filterModel: GridFilterModel } | undefined;
//   }
// }

const TOOLBAR_BUTTON_STYLE = { mr: 1, pl: 2, pr: 2 };

export default function CustomToolbar(
  props: NonNullable<GridSlotsComponentsProps["toolbar"]>
) {
  const { queryOptions, initialState } = props;
  const apiRef = useGridApiContext();
  // console.log("query options", queryOptions);
  // console.log("items", queryOptions?.filterModel?.items);
  return (
    <GridToolbarContainer sx={{ p: 1 }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <GridToolbarColumnsButton sx={TOOLBAR_BUTTON_STYLE} />
          <GridToolbarFilterButton sx={TOOLBAR_BUTTON_STYLE} />
          <GridToolbarDensitySelector sx={TOOLBAR_BUTTON_STYLE} />
          <GridToolbarExport sx={TOOLBAR_BUTTON_STYLE} />
        </Grid>
        <Grid item>
          <GridToolbarQuickFilter variant="outlined" size="small" fullWidth />
        </Grid>
      </Grid>
      <FilterChipsBar
        filterModel={queryOptions?.filterModel}
        deleteFilterItem={apiRef.current.deleteFilterItem}
        setQuickFilterValues={apiRef.current.setQuickFilterValues}
      />
    </GridToolbarContainer>
  );
}
