import { USERS } from "@/_mock";
import { Chip } from "@mui/material";
import { GridRenderCellParams } from "@mui/x-data-grid-pro";

//TODO use moment or whatever date/time library we use to apply the proper format based on what the backend sends
//TODO at some point in the future we can enable dateTime range filtering based on a support data range and subscription level. Skipping for now

export const columns = [
  {
    field: "time",
    headerName: "Time",
    width: 148,
    type: "dateTime",
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
    // valueOptions: () => {
    //   return ["Last 15 Minutes", "Last 30 Minutes", "Last 1 Hours"];
    // },
  },
  {
    field: "destination",
    headerName: "Destination",
    flex: 1,
    minWidth: 240,
  },
  {
    field: "reason",
    headerName: "Reason",
    flex: 1,
    minWidth: 240,
  },
  {
    field: "result",
    headerName: "Result",
    width: 104,
    type: "singleSelect",
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
    valueOptions: () => {
      return USERS.map((user) => user.site);
    },
  },
  {
    field: "deployment",
    headerName: "Deployment",
    width: 240,
    type: "singleSelect",
    valueOptions: () => {
      return USERS.map((user) => user.deployment);
    },
  },
  {
    field: "localUserNameOrIpAddress",
    headerName: "Local User Name / IP Address",
    width: 266,
    type: "singleSelect",
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
