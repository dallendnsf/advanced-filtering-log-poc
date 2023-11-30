import { Chip, Grid } from "@mui/material";
import {
  GridFilterModel,
  GridSlotsComponentsProps,
  GridToolbarColumnsButton,
  GridToolbarContainer,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
} from "@mui/x-data-grid-pro";

// declare module "@mui/x-data-grid-pro" {
//   interface ToolbarPropsOverrides {
//     queryOptions?: { filterModel: GridFilterModel };
//   }
// }

const TOOLBAR_BUTTON_STYLE = { mr: 1, pl: 2, pr: 2 };

export default function CustomToolbar(
  props: NonNullable<GridSlotsComponentsProps["toolbar"]>
) {
  const { queryOptions } = props;
  console.log("query options", queryOptions);
  console.log("items", queryOptions?.filterModel?.items);
  return (
    <GridToolbarContainer sx={{ p: 1 }}>
      <Grid container justifyContent="space-between">
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
      <Grid container>
        <Grid item>
          {queryOptions.filterModel?.quickFilterValues ? (
            <Chip
              label={`Quick Filter: ${queryOptions.filterModel?.quickFilterValues}`}
            />
          ) : (
            ""
          )}
          {queryOptions.filterModel?.items.map(
            (
              item: {
                field: string;
                operator: string;
                value: string | number | Date;
              },
              index: number
            ) => {
              return (
                <Chip
                  key={`filter_chip_${item.field}_${index}`}
                  label={`${item.field}: ${item.value}`}
                />
              );
            }
          )}
        </Grid>
      </Grid>
    </GridToolbarContainer>
  );
}
