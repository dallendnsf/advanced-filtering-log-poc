import { Chip, Grid } from "@mui/material";
import { GridFilterItem, GridFilterModel } from "@mui/x-data-grid-pro";
import { columns } from "./columns";
import { formatOperatorString } from "./custom-filter-operators";

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
      <Grid container alignItems="center" sx={{ pl: 1, pr: 1, pb: 1 }}>
        <Grid item>
          {filterModel?.quickFilterValues &&
          filterModel?.quickFilterValues.length > 0 ? (
            <Chip
              label={`Quick Filter: ${filterModel?.quickFilterValues[0]}`}
              onDelete={() => setQuickFilterValues([])}
              sx={{
                mr: 1,
                "& span": {
                  lineHeight: "1",
                },
              }}
              size="small"
              variant="outlined"
              color="primary"
            />
          ) : (
            ""
          )}
          {filterModel?.items.map((item: GridFilterItem, index: number) => {
            return (
              <Chip
                key={`filter_chip_${item.field}_${index}`}
                label={getChipLabel(item)}
                onDelete={() => deleteFilterItem(item)}
                sx={{
                  mr: 1,
                  "& span": {
                    lineHeight: "1",
                  },
                }}
                size="small"
                variant="outlined"
              />
            );
          })}
        </Grid>
      </Grid>
    );
  }
  return <></>;
}

function getChipLabel(item: GridFilterItem) {
  const columnDetails = columns.find((col) => col.field === item.field);

  const formattedOperator = formatOperatorString(item.operator);

  if (columnDetails) {
    return `${columnDetails.headerName} ${formattedOperator} ${item.value}`;
  }

  // fallback if we dont find the column
  return `${item.field} ${formattedOperator} ${item.value}`;
}
