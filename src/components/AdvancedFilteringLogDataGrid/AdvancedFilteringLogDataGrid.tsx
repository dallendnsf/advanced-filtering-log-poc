"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { GridFilterModel, useGridApiRef } from "@mui/x-data-grid-pro";
import { LinearProgress } from "@mui/material";
import { ILog } from "@/types/log";
import { StyledDataGridPro } from "./styles";
import CustomFilterPanel from "./CustomFilterPanel";
import CustomToolbar from "./CustomToolbar";
import CustomPagination from "./CustomPagination";
import { columns } from "./columns";
import {
  ADVANCED_FILTERING_LOG,
  getDefaultTableState,
} from "./initial-state-utils";
import { useEffect } from "react";
import { useLocalStorage } from "@/hooks/use-local-storage";

type Props = {
  logs: ILog[];
};

export default function AdvancedFilteringLogDataGrid({ logs }: Props) {
  const { state } = useLocalStorage(
    ADVANCED_FILTERING_LOG,
    getDefaultTableState()
  );

  const [queryOptions, setQueryOptions] = React.useState(state.filter);
  const onFilterChange = React.useCallback((filterModel: GridFilterModel) => {
    setQueryOptions({ filterModel: { ...filterModel } });
  }, []);

  const apiRef = useGridApiRef();

  useEffect(() => {
    apiRef.current.restoreState(state);
  }, [apiRef, state]);

  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <StyledDataGridPro
        apiRef={apiRef}
        rows={logs}
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
          toolbar: {
            queryOptions,
            initialState: state,
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
