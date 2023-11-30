import { Chip, Grid } from "@mui/material";
import { GridFilterItem, GridFilterModel } from "@mui/x-data-grid-pro";
import { columns } from "./columns";

type Props = {
  filterModel?: GridFilterModel;
  deleteFilterItem: (item: GridFilterItem) => void;
  setQuickFilterValues: (values: any[]) => void;
};

export default function FilterChipsBar({
  filterModel,
  deleteFilterItem,
  setQuickFilterValues,
}: Props) {
  if (filterModel && filterModel.items) {
    return (
      <Grid container alignItems="center">
        <Grid item>
          {filterModel?.quickFilterValues &&
          filterModel?.quickFilterValues.length > 0 ? (
            <Chip
              label={`Quick Filter: ${filterModel?.quickFilterValues[0]}`}
              onDelete={() => setQuickFilterValues([])}
              sx={{ mr: 1 }}
              size="small"
              variant="outlined"
              color="primary"
            />
          ) : (
            ""
          )}
          {filterModel?.items.map((item: GridFilterItem, index: number) => {
            console.log(item);
            return (
              <Chip
                key={`filter_chip_${item.field}_${index}`}
                label={getChipLabel(item)}
                onDelete={() => deleteFilterItem(item)}
                sx={{ mr: 1 }}
                size="small"
                variant="outlined"
                color="secondary"
              />
            );
          })}
        </Grid>
      </Grid>
    );
  }
}

function getChipLabel(item: GridFilterItem) {
  const columnDetails = columns.find((col) => col.field === item.field);

  if (columnDetails) {
    return `${columnDetails.headerName} ${item.operator} ${item.value}`;
  }

  // fallback if we dont find the column
  return `${item.field} ${item.operator} ${item.value}`;
}
