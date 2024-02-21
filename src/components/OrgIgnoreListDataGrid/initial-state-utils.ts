import { GridInitialStatePro } from "@mui/x-data-grid-pro/models/gridStatePro";

export function getDefaultTableState(): GridInitialStatePro {
  return {
    columns: {
      columnVisibilityModel: {},
      dimensions: {
        value: {
          maxWidth: -1,
          minWidth: 240,
          width: 240,
          flex: 1,
        },
        type: {
          maxWidth: -1,
          minWidth: 50,
          width: 104,
        },
        categories: {
          maxWidth: -1,
          minWidth: 50,
          width: 240,
        },
        actions: {
          maxWidth: -1,
          minWidth: 100,
          width: 100,
        },
      },
      orderedFields: ["value", "type", "categories", "actions"],
    },
    filter: {
      filterModel: {
        items: [],
      },
    },
    pagination: {
      paginationModel: {
        page: 0,
        pageSize: 25,
      },
    },
    pinnedColumns: {
      left: [],
      right: ["actions"],
    },
    sorting: {
      sortModel: [
        {
          field: "value",
          sort: "asc",
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
export const ORG_IRGNORE_LIST = "ORG_IRGNORE_LIST";
