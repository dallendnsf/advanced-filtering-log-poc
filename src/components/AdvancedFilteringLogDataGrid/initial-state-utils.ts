import { GridInitialStatePro } from "@mui/x-data-grid-pro/models/gridStatePro";
import { columns } from "./columns";

export function getRecommendedTableState(): GridInitialStatePro {
  return {
    columns: {
      columnVisibilityModel: {},
      dimensions: {
        time: {
          maxWidth: -1,
          minWidth: 50,
          width: 148,
        },
        destination: {
          maxWidth: -1,
          minWidth: 240,
          width: 100,
          flex: 1,
        },
        reason: {
          maxWidth: -1,
          minWidth: 240,
          width: 100,
          flex: 1,
        },
        result: {
          maxWidth: -1,
          minWidth: 50,
          width: 104,
        },
        categories: {
          maxWidth: -1,
          minWidth: 50,
          width: 240,
        },
        site: {
          maxWidth: -1,
          minWidth: 50,
          width: 240,
        },
        deployment: {
          maxWidth: -1,
          minWidth: 50,
          width: 240,
        },
        localUserNameOrIpAddress: {
          maxWidth: -1,
          minWidth: 50,
          width: 266,
        },
      },
      orderedFields: columns.map((column) => column.field), // assumes the column definition file is in the desired column order
    },
    filter: {
      filterModel: {
        items: [
          {
            field: "result",
            operator: "is",
            value: "Blocked",
          },
        ],
      },
    },
    pagination: {
      paginationModel: {
        page: 0,
        pageSize: 25,
      },
    },
    pinnedColumns: {
      left: ["time"],
      right: [],
    },
    sorting: {
      sortModel: [
        {
          field: "time",
          sort: "desc",
        },
      ],
    },
  };
}

export function overrideActiveConfigForSave(activeConfig: GridInitialStatePro) {
  let newConfig = { ...activeConfig };

  // It doesnt make sense to persist their current page and causes potential downstream issues. Overriding so that default is always the first page.
  if (newConfig.pagination && newConfig.pagination.paginationModel) {
    newConfig.pagination.paginationModel.page = 0;
  }

  return newConfig;
}

// table name constants. These utilities can used for all tables
export const ADVANCED_FILTERING_LOG = "ADVANCED_FILTERING_LOG";
