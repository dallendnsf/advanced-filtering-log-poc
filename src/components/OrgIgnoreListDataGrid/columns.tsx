import { CATEGORIES } from "@/_mock";
import { Chip } from "@mui/material";
import {
  GridActionsCellItem,
  GridCellParams,
  GridColDef,
  GridFilterInputSingleSelect,
  GridFilterItem,
  GridRenderCellParams,
  GridRowId,
  GridRowModes,
  GridRowModesModel,
} from "@mui/x-data-grid-pro";
import {
  getCustomGridSingleSelectOperators,
  getCustomGridStringOperators,
} from "../AdvancedFilteringLogDataGrid/custom-filter-operators";
import {
  CancelOutlined,
  DeleteOutlined,
  EditOutlined,
  SaveOutlined,
} from "@mui/icons-material";
import { IIgnore } from "@/types/ignore";

type Props = {
  rows: IIgnore[];
  setRows: React.Dispatch<React.SetStateAction<IIgnore[]>>;
  rowModesModel: GridRowModesModel;
  setRowModesModel: React.Dispatch<React.SetStateAction<GridRowModesModel>>;
};

export const getColumns = ({
  rows,
  setRows,
  rowModesModel,
  setRowModesModel,
}: Props) => {
  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } });
  };

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } });
  };

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id));
  };

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true },
    });

    const editedRow = rows.find((row) => row.id === id);
  };

  return [
    {
      field: "value",
      headerName: "Value",
      filterOperators: getCustomGridStringOperators(),
      editable: true,
    },
    {
      field: "type",
      headerName: "Type",
      type: "singleSelect",
      filterOperators: getCustomGridSingleSelectOperators(),
      valueOptions: () => {
        return ["Domain", "Pattern"];
      },
      renderCell: (params: GridRenderCellParams<any, string>) => (
        <Chip
          label={params.value}
          size="small"
          variant="outlined"
          color={params.value === "Domain" ? "primary" : "default"}
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
          label: "includes",
          value: "includes",
          InputComponent: GridFilterInputSingleSelect,
          getApplyFilterFn: (
            filterItem: GridFilterItem,
            column: GridColDef
          ) => {
            if (
              !filterItem.field ||
              !filterItem.value ||
              !filterItem.operator
            ) {
              return null;
            }

            return (params: GridCellParams): boolean => {
              return String(params.value).indexOf(filterItem.value) > -1;
            };
          },
        },
        {
          label: "does not include",
          value: "doesNotInclude",
          InputComponent: GridFilterInputSingleSelect,
          getApplyFilterFn: (
            filterItem: GridFilterItem,
            column: GridColDef
          ) => {
            if (
              !filterItem.field ||
              !filterItem.value ||
              !filterItem.operator
            ) {
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
      field: "actions",
      type: "actions",
      headerName: "Actions",
      width: 100,
      getActions: ({ id }: IIgnore) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit;

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              key="save"
              icon={<SaveOutlined />}
              label="Save"
              sx={{
                color: "primary.main",
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              key="cancel"
              icon={<CancelOutlined />}
              label="Cancel"
              onClick={handleCancelClick(id)}
            />,
          ];
        }

        return [
          <GridActionsCellItem
            key="edit"
            icon={<EditOutlined />}
            label="Edit"
            onClick={handleEditClick(id)}
            color="inherit"
          />,
          <GridActionsCellItem
            key="delete"
            icon={<DeleteOutlined />}
            label="Delete"
            onClick={handleDeleteClick(id)}
            color="inherit"
          />,
        ];
      },
    },
  ];
};
