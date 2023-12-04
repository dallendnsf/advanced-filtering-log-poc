import * as React from "react";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { TuneOutlined } from "@mui/icons-material";
import PreferencesContent from "./PreferencesContent";
import { Grid } from "@mui/material";

export default function PreferencesPopover() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Button
        aria-describedby={id}
        onClick={handleClick}
        startIcon={<TuneOutlined />}
        sx={{ mr: 1, pl: 2, pr: 2 }}
      >
        Preferences
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Grid container alignItems="center" sx={{ p: 0.5, maxWidth: 400 }}>
          <PreferencesContent />
        </Grid>
      </Popover>
    </>
  );
}
