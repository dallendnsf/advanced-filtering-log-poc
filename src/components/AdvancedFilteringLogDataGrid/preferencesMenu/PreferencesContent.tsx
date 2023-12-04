import * as React from "react";
import Typography from "@mui/material/Typography";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import {
  ADVANCED_FILTERING_LOG,
  getDefaultTableState,
  overrideActiveConfigForSave,
} from "../initial-state-utils";
import { useGridApiContext } from "@mui/x-data-grid-pro";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { RestartAltOutlined, SaveOutlined } from "@mui/icons-material";
import PreferencesAccordion from "./PreferencesAccordion";

export default function PreferencesContent() {
  const apiRef = useGridApiContext();
  const { update, reset } = useLocalStorage(
    ADVANCED_FILTERING_LOG,
    getDefaultTableState()
  );

  const [saveVisible, setSaveVisibile] = React.useState(false);
  const [defaultVisible, setDefaultVisibile] = React.useState(false);

  const handleSave = () => {
    update(overrideActiveConfigForSave(apiRef.current.exportState()));
    setSaveVisibile(true);
  };

  const handleDefault = () => {
    reset();
    apiRef.current.restoreState(getDefaultTableState());
    setDefaultVisibile(true);
  };

  const handleSnackbarClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }

    setSaveVisibile(false);
    setDefaultVisibile(false);
  };

  return (
    <Grid item>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
            <Grid item xs={12}>
              <Typography variant="body2">
                You can override the default table configuration by saving the
                current configuration as your preference.
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <PreferencesAccordion />
            </Grid>
          </Grid>
        </Grid>

        <Grid item xs={6}>
          <Button
            onClick={() => handleSave()}
            startIcon={<SaveOutlined />}
            sx={{ mr: 1, pl: 2, pr: 2 }}
          >
            Save
          </Button>
          <Snackbar
            open={saveVisible}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
          >
            <Alert
              onClose={handleSnackbarClose}
              severity="success"
              color="info"
            >
              Table Preferences Saved!
            </Alert>
          </Snackbar>
        </Grid>
        <Grid item xs={6} textAlign="end">
          <Button
            onClick={() => handleDefault()}
            startIcon={<RestartAltOutlined />}
            sx={{ pl: 2, pr: 2 }}
          >
            Use Default
          </Button>
          <Snackbar
            open={defaultVisible}
            autoHideDuration={3000}
            onClose={handleSnackbarClose}
            color="info"
          >
            <Alert
              onClose={handleSnackbarClose}
              severity="success"
              color="info"
            >
              Default configuration restored!
            </Alert>
          </Snackbar>
        </Grid>
      </Grid>
    </Grid>
  );
}
