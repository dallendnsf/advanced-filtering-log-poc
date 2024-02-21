"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  GridFilterModel,
  GridRowModesModel,
  useGridApiRef,
} from "@mui/x-data-grid-pro";
import { LinearProgress } from "@mui/material";
import { StyledDataGridPro } from "../AdvancedFilteringLogDataGrid/styles";
import CustomFilterPanel from "../AdvancedFilteringLogDataGrid/CustomFilterPanel";
import CustomToolbar from "../AdvancedFilteringLogDataGrid/CustomToolbar";
import CustomPagination from "../AdvancedFilteringLogDataGrid/CustomPagination";
import { getColumns } from "./columns";
import { ORG_IRGNORE_LIST, getDefaultTableState } from "./initial-state-utils";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { IIgnore } from "@/types/ignore";

type Props = {
  ignores: IIgnore[];
};

export default function AdvancedFilteringLogDataGrid({ ignores }: Props) {
  const { state } = useLocalStorage(ORG_IRGNORE_LIST, getDefaultTableState());
  const [rows, setRows] = React.useState(ignores);
  const [rowModesModel, setRowModesModel] = React.useState<GridRowModesModel>(
    {}
  );

  console.log(state);

  const columns = getColumns({
    rows,
    setRows,
    rowModesModel,
    setRowModesModel,
  });

  const [queryOptions, setQueryOptions] = React.useState(state.filter);
  const onFilterChange = React.useCallback((filterModel: GridFilterModel) => {
    setQueryOptions({ filterModel: { ...filterModel } });
  }, []);

  const apiRef = useGridApiRef();

  useEffect(() => {
    apiRef.current.restoreState(state);
  }, [apiRef, state]);

  const [isFilterActive, setFilterActive] = React.useState(false);
  const [filterButtonEl, setFilterButtonEl] = React.useState(null);
  const [columnsButtonEl, setColumnsButtonEl] = React.useState(null);

  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <StyledDataGridPro
        apiRef={apiRef}
        rows={rows}
        columns={columns}
        density="compact"
        sortingOrder={["asc", "desc"]} // Don't allow unsort
        initialState={state} // TODO: Check for local storage user preference and set that instead
        disableRowSelectionOnClick
        pagination
        onFilterModelChange={onFilterChange}
        slots={{
          toolbar: CustomToolbar,
          pagination: CustomPagination,
          loadingOverlay: LinearProgress,
          filterPanel: CustomFilterPanel,
          // TODO: noRowsOverlay: CustomNoRowsOverlay,
        }}
        slotProps={{
          panel: {
            anchorEl: isFilterActive ? filterButtonEl : columnsButtonEl,
          },
          toolbar: {
            queryOptions,
            initialState: state,
            setColumnsButtonEl,
            setFilterButtonEl,
            setFilterActive,
          },
        }}
        getRowClassName={(
          params // This is how we enable the alternating row highlighting that is defined in the styled table
        ) => (params.indexRelativeToCurrentPage % 2 === 0 ? "even" : "odd")}
        loading={false} // TODO: Make this based on async data request and not static
      />
    </Box>
  );
}
