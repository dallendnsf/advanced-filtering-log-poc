"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import {
  GridFilterModel,
  GridSortModel,
  useGridApiRef,
} from "@mui/x-data-grid-pro";
import { LinearProgress } from "@mui/material";
import { ILog } from "@/types/log";
import { StyledDataGridPro } from "./styles";
import CustomFilterPanel from "./CustomFilterPanel";
import CustomToolbar from "./CustomToolbar";
import CustomPagination from "./CustomPagination";
import { columns, getOrderedFields } from "./columns";

type Props = {
  logs: ILog[];
};

export default function AdvancedFilteringLogDataGrid({ logs }: Props) {
  // set default pinned columns
  const [pinnedColumn, setPinnedColumn] = React.useState({
    left: ["time"],
    right: [],
  });

  // set initial sorting config
  const initialSort: GridSortModel = [{ field: "time", sort: "desc" }];

  // set initial filter confiig
  const initialFilters: GridFilterModel = {
    items: [{ field: "result", operator: "is", value: "Blocked" }],
  };

  const [queryOptions, setQueryOptions] = React.useState({
    filterModel: initialFilters,
  });
  const onFilterChange = React.useCallback((filterModel: GridFilterModel) => {
    setQueryOptions({ filterModel: { ...filterModel } });
  }, []);

  const apiRef = useGridApiRef();

  // TODO: We have a preferred initial state but we want to allow users to override the default state and persist it to local storage. If they ever want to revert back we need to still have reference to the DNSF recommendation
  const dnsfInitialState = {
    columns: {
      orderedFields: [
        ...pinnedColumn.left,
        ...getOrderedFields(pinnedColumn),
        ...pinnedColumn.right,
      ],
    },
    pinnedColumns: { ...pinnedColumn },
    sorting: {
      // set default sorting
      sortModel: initialSort,
    },
    filter: {
      filterModel: initialFilters,
    },
    pagination: { paginationModel: { pageSize: 25 } },
    // TODO: Technical limitations will tell us what the conservative default page size is. It will also inform which alternative options they can choose (if any). 25 for now so I can test pager design
  };

  return (
    <Box sx={{ height: "90vh", width: "100%" }}>
      <StyledDataGridPro
        apiRef={apiRef}
        rows={logs}
        columns={columns}
        density="compact" // Default density is compact due to the amount of data we want to have on screen. User can change later
        sortingOrder={["asc", "desc"]} // Don't allow unsort. One column should always be sorted.
        initialState={dnsfInitialState} // TODO: Check for local storage user preference and set that instead
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
            initialState: dnsfInitialState,
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
