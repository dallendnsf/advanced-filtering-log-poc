import { Chip, Grid } from "@mui/material";
import { GridFilterItem, GridFilterModel } from "@mui/x-data-grid-pro";
import { columns } from "./columns";

type Props = {
  filterModel?: GridFilterModel;
};

export default function FilterChipsBar({ filterModel }: Props) {
  return (
    <Grid container>
      <Grid item>
        {filterModel?.quickFilterValues ? (
          <Chip
            label={`Quick Filter: ${filterModel?.quickFilterValues}`}
            sx={{ mr: 1 }}
          />
        ) : (
          ""
        )}
        {filterModel?.items.map((item: GridFilterItem, index: number) => {
          return (
            <Chip
              key={`filter_chip_${item.field}_${index}`}
              label={getChipLabel(item)}
              onDelete={() => {
                console.log("Delete Me");
              }}
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
