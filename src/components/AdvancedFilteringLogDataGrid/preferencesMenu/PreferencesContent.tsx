import * as React from "react";
import Typography from "@mui/material/Typography";
import {
  Grid,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import {
  ADVANCED_FILTERING_LOG,
  getRecommendedTableState,
  overrideActiveConfigForSave,
} from "../initial-state-utils";
import { useGridApiContext } from "@mui/x-data-grid-pro";
import { useLocalStorage } from "@/hooks/use-local-storage";
import { RestartAlt, SaveOutlined } from "@mui/icons-material";

export default function PreferencesForm() {
  const apiRef = useGridApiContext();
  const { update, reset } = useLocalStorage(
    ADVANCED_FILTERING_LOG,
    getRecommendedTableState()
  );

  const handleSave = () => {
    update(overrideActiveConfigForSave(apiRef.current.exportState()));
  };

  const handleUseRecommended = () => {
    reset();
    apiRef.current.restoreState(getRecommendedTableState());
  };

  return (
    <Grid item>
      <Grid container spacing={2}>
        <Grid item>
          <Typography variant="body2">
            You can override the default configuration for how the table will
            load using the active configuration. We will save the following
            settings:
          </Typography>
          <ul>
            <li>
              <Typography variant="body2">Active Filters</Typography>
            </li>
            <li>
              <Typography variant="body2">Columns</Typography>
              <ul>
                <li>
                  <Typography variant="body2">Visibility</Typography>
                </li>
                <li>
                  <Typography variant="body2">Order</Typography>
                </li>
                <li>
                  <Typography variant="body2">Width</Typography>
                </li>
                <li>
                  <Typography variant="body2">Sort</Typography>
                </li>
                <li>
                  <Typography variant="body2">Pinned</Typography>
                </li>
              </ul>
            </li>
            <li>
              <Typography variant="body2">Page Size</Typography>
            </li>
          </ul>
        </Grid>
        <Grid item xs={12}>
          <MenuList>
            <MenuItem onClick={() => handleSave()}>
              <ListItemIcon color="primary">
                <SaveOutlined />
              </ListItemIcon>
              <ListItemText
                color="primary"
                primary="Save Active Configuration"
              />
            </MenuItem>
            <MenuItem onClick={() => handleUseRecommended()}>
              <ListItemIcon>
                <RestartAlt />
              </ListItemIcon>
              <ListItemText primary="Use Recommended Settings" />
            </MenuItem>
          </MenuList>
        </Grid>
      </Grid>
    </Grid>
  );
}
