import { Grid } from "@mui/material";
import {
  GridSlotsComponentsProps,
  GridToolbarColumnsButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarQuickFilter,
  useGridApiContext,
} from "@mui/x-data-grid-pro";
import FilterChipsBar from "./FilterChipsBar";
import React from "react";
import PreferencesMenu from "./preferencesMenu/PreferencesMenu";

const TOOLBAR_BUTTON_STYLE = { mr: 1, pl: 2, pr: 2 };

export default function CustomToolbar(
  props: NonNullable<GridSlotsComponentsProps["toolbar"]>
) {
  const {
    queryOptions,
    setColumnsButtonEl,
    setFilterButtonEl,
    setFilterActive,
  } = props;
  const apiRef = useGridApiContext();

  return (
    <>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        sx={{ p: 1 }}
      >
        <Grid item>
          <GridToolbarColumnsButton
            sx={TOOLBAR_BUTTON_STYLE}
            ref={setColumnsButtonEl}
            onClick={() => {
              setFilterActive(false);
            }}
          />
          <GridToolbarFilterButton
            sx={TOOLBAR_BUTTON_STYLE}
            ref={setFilterButtonEl}
            componentsProps={{
              button: {
                onClick: () => {
                  setFilterActive(true);
                },
              },
            }}
          />
          <GridToolbarDensitySelector sx={TOOLBAR_BUTTON_STYLE} />
          <GridToolbarExport sx={TOOLBAR_BUTTON_STYLE} />
          <PreferencesMenu />
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
    </>
  );
}
