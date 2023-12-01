import { USERS } from "@/_mock";
import { Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import {
  getCustomGridSingleSelectOperators,
  getCustomGridStringOperators,
} from "./customer-filter-operators";

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
    filterable: false,
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
    filterOperators: getCustomGridStringOperators(),
  },
  {
    field: "site",
    headerName: "Site",
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.site);
    },
  },
  {
    field: "deployment",
    headerName: "Deployment",
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.deployment);
    },
  },
  {
    field: "localUserNameOrIpAddress",
    headerName: "Local User Name / IP Address",
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.userName);
    },
  },
];
