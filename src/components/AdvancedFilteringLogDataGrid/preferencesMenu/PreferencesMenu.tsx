import * as React from "react";
import Popover from "@mui/material/Popover";
import { TuneOutlined } from "@mui/icons-material";
import PreferencesContent from "./PreferencesContent";
import { Alert, Button, Grid, Snackbar } from "@mui/material";
import {
  ADVANCED_FILTERING_LOG,
  getDefaultTableState,
  overrideActiveConfigForSave,
} from "../initial-state-utils";
import { useGridApiContext } from "@mui/x-data-grid-pro";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { RestartAltOutlined, SaveOutlined } from "@mui/icons-material";

export default function PreferencesPopover() {
  // state and hooks
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );
  const [saveVisible, setSaveVisibile] = React.useState(false);
  const [defaultVisible, setDefaultVisibile] = React.useState(false);

  const apiRef = useGridApiContext();
  const { update, reset } = useLocalStorage(
    ADVANCED_FILTERING_LOG,
    getDefaultTableState()
  );

  // event handlers
  const handleSavePreferences = () => {
    update(overrideActiveConfigForSave(apiRef.current.exportState()));
    setSaveVisibile(true);
    handleClosePreferences();
  };

  const handleDefaultPreferences = () => {
    reset();
    apiRef.current.restoreState(getDefaultTableState());
    setDefaultVisibile(true);
    handleClosePreferences();
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

  const handleOpenPreferences = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClosePreferences = () => {
    setAnchorEl(null);
  };

  const POPOVER_ID = "preferences-popover";

  return (
    <>
      <Button
        aria-describedby={POPOVER_ID}
        onClick={handleOpenPreferences}
        startIcon={<TuneOutlined />}
        sx={{ mr: 1, pl: 2, pr: 2 }}
      >
        Save View
      </Button>
      <Popover
        id={POPOVER_ID}
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClosePreferences}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Grid
          container
          alignItems="center"
          sx={{ p: 0.5, maxWidth: 400 }}
          spacing={2}
        >
          <Grid item xs={12}>
            <PreferencesContent />
          </Grid>

          <Grid item xs={6}>
            <Button
              onClick={() => handleSavePreferences()}
              startIcon={<SaveOutlined />}
              sx={{ mr: 1, pl: 2, pr: 2 }}
            >
              Save
            </Button>
          </Grid>
          <Grid item xs={6} textAlign="end">
            <Button
              onClick={() => handleDefaultPreferences()}
              startIcon={<RestartAltOutlined />}
              sx={{ pl: 2, pr: 2 }}
            >
              Use Default
            </Button>
          </Grid>
        </Grid>
      </Popover>
      <Snackbar
        open={saveVisible}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" color="info">
          Table Preferences Saved!
        </Alert>
      </Snackbar>
      <Snackbar
        open={defaultVisible}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} severity="success" color="info">
          Default configuration restored!
        </Alert>
      </Snackbar>
    </>
  );
}
