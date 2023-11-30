import { Chip, Grid } from "@mui/material";
import { GridFilterItem, GridFilterModel } from "@mui/x-data-grid-pro";
import { columns } from "./columns";

type Props = {
  filterModel?: GridFilterModel;
  deleteFilterItem: (item: GridFilterItem) => void;
};

export default function FilterChipsBar({
  filterModel,
  deleteFilterItem,
}: Props) {
  return (
    <Grid container>
      <Grid item>
        {filterModel?.quickFilterValues &&
        filterModel?.quickFilterValues.length > 0 ? (
          <Chip
            label={`Quick Filter: ${filterModel?.quickFilterValues[0]}`}
            sx={{ mr: 1 }}
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
            />
          );
        })}
      </Grid>
    </Grid>
  );
}

function getChipLabel(item: GridFilterItem) {
  const columnDetails = columns.find((col) => col.field === item.field);

  if (columnDetails) {
    return `${columnDetails.headerName} ${item.operator} ${item.value}`;
  }

  // fallback if we dont find the column
  return `${item.field} ${item.operator} ${item.value}`;
}
