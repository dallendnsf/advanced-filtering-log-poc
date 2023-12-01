import { USERS } from "@/_mock";
import { Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid-pro";
import {
  getCustomGridSingleSelectOperators,
  getCustomGridStringOperators,
} from "./customer-filter-operators";

//TODO use moment or whatever date/time library we use to apply the proper format based on what the backend sends
//TODO at some point in the future we can enable dateTime range filtering based on a support data range and subscription level. Skipping for now

export const columns = [
  {
    field: "time",
    headerName: "Time",
    width: 148,
    // type: "dateTime",
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
    // filterable: false,
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
    flex: 1,
    minWidth: 240,
    filterOperators: getCustomGridStringOperators(),
  },
  {
    field: "reason",
    headerName: "Reason",
    flex: 1,
    minWidth: 240,
    filterOperators: getCustomGridStringOperators(),
  },
  {
    field: "result",
    headerName: "Result",
    width: 104,
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
    field: "site",
    headerName: "Site",
    width: 240,
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.site);
    },
  },
  {
    field: "deployment",
    headerName: "Deployment",
    width: 240,
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.deployment);
    },
  },
  {
    field: "localUserNameOrIpAddress",
    headerName: "Local User Name / IP Address",
    width: 266,
    type: "singleSelect",
    filterOperators: getCustomGridSingleSelectOperators(),
    valueOptions: () => {
      return USERS.map((user) => user.userName);
    },
  },
];

// assumes that columns are defined in their intended order above which is good practice
export function getOrderedFields(pinnedColumn: {
  left: string[];
  right: string[];
}) {
  const orderedFields: string[] = columns
    .filter(
      (column) =>
        !pinnedColumn.left.includes(column.field) &&
        !pinnedColumn.right.includes(column.field)
    )
    .map((column) => column.field);

  return orderedFields;
}
