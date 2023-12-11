import { USERS, CATEGORIES } from "@/_mock";
import { Chip } from "@mui/material";
import {
  GridCellParams,
  GridColDef,
  GridFilterInputSingleSelect,
  GridFilterItem,
  GridRenderCellParams,
} from "@mui/x-data-grid-pro";
import {
  getCustomGridSingleSelectOperators,
  getCustomGridStringOperators,
} from "./custom-filter-operators";

export const columns = [
  {
    field: "time",
    headerName: "Time",
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueFormatter: (params: { value: string | number | Date }) => {
      return new Date(params?.value).toLocaleString(undefined, {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
      });
    },
    filterable: false, // TODO: Decide what we are able to support and enable the filter. There is likely to be a default filter for this field.
    valueOptions: () => {
      return [
        "Last Minute",
        "Last 5 Minutes",
        "Last 10 Minutes",
        "Last 15 Minutes",
        "Last 30 Minutes",
        "Last Hour",
        "Last 2 Hours",
        "Last 4 Hours",
        "Last 8 Hours",
        "Last 12 Hours",
        "Last 24 Hours",
        "Last 2 Days",
        "Last 3 Days",
        "Last 6 Days",
        "Last 9 Days",
      ];
    },
  },
  {
    field: "destination",
    headerName: "Destination",
    filterOperators: getCustomGridStringOperators(),
  },
  {
    field: "reason",
    headerName: "Reason",
    filterOperators: getCustomGridStringOperators(),
  },
  {
    field: "result",
    headerName: "Result",
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return ["Blocked", "Allowed"];
    },
    renderCell: (params: GridRenderCellParams<any, string>) => (
      <Chip
        label={params.value}
        size="small"
        variant="outlined"
        color={params.value === "Allowed" ? "primary" : "error"}
        sx={{
          "& span": {
            lineHeight: "1",
          },
        }}
      />
    ),
  },
  {
    field: "categories",
    headerName: "Categories & Applications",
    type: "singleSelect",
    filterOperators: [
      {
        label: "Includes",
        value: "includes",
        InputComponent: GridFilterInputSingleSelect,
        getApplyFilterFn: (filterItem: GridFilterItem, column: GridColDef) => {
          if (!filterItem.field || !filterItem.value || !filterItem.operator) {
            return null;
          }

          return (params: GridCellParams): boolean => {
            return String(params.value).indexOf(filterItem.value) > -1;
          };
        },
      },
      {
        label: "Does Not Include",
        value: "doesNotInclude",
        InputComponent: GridFilterInputSingleSelect,
        getApplyFilterFn: (filterItem: GridFilterItem, column: GridColDef) => {
          if (!filterItem.field || !filterItem.value || !filterItem.operator) {
            return null;
          }

          return (params: GridCellParams): boolean => {
            return String(params.value).indexOf(filterItem.value) == -1;
          };
        },
      },
    ],
    valueOptions: () => {
      return CATEGORIES.map((category) => category).sort(); // TODO: Retrieve all unique content categories, threat categories, and Applications. this is just mocked for the PoC
    },
    renderCell: (params: GridRenderCellParams<any, string[]>) => {
      return params.value ? params.value.join(", ") : params.value;
    },
  },
  {
    field: "site",
    headerName: "Site",
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.site).sort(); // TODO: Retrieve all unique sites. this is just mocked for the PoC
    },
  },
  {
    field: "deployment",
    headerName: "Deployment",
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.deployment).sort(); // TODO: Retrieve all unique deployments. this is just mocked for the PoC
    },
  },
  {
    field: "localUserNameOrIpAddress",
    headerName: "Local User Name / IP Address",
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.userName).sort(); // TODO: Retrieve all unique users/IPs. this is just mocked for the PoC
    },
  },
];
