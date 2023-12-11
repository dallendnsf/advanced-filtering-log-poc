import { GridFilterPanel, GridLogicOperator } from "@mui/x-data-grid-pro";

export default function CustomFilterPanel(props: any) {
  return (
    <GridFilterPanel
      filterFormProps={{
        logicOperatorInputProps: {
          size: "small",
          sx: { mr: 2 },
        },
        columnInputProps: {
          size: "small",
          sx: { mr: 2 },
        },
        operatorInputProps: {
          size: "small",
          sx: { mr: 2 },
        },
        valueInputProps: {
          InputComponentProps: {
            // variant: "outlined", Would love to use outline inputs but there appears to be a bug with outline single select values. The label doesnt align correctly. Even the demo on their documentation is broken
            size: "small",
          },
        },
      }}
    />
  );
}
