"use client";
import * as React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { ArrowDropDownOutlined, RefreshOutlined } from "@mui/icons-material";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Paper from "@mui/material/Paper";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import LoadingButton from "@mui/lab/LoadingButton";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

const options: { selectedLabel?: string; menuLabel: string; value: number }[] =
  [
    { menuLabel: "Auto Refresh", value: 1 },
    { menuLabel: "Disable Auto Refresh", selectedLabel: "Refresh", value: 0 },
  ];

export default function ReportRefresh() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(1);
  const [loading, setLoading] = React.useState(false);
  const [auto, setAuto] = React.useState(0);
  const [counter, setCounter] = React.useState(0);

  const handleClick = () => {
    setLoading(true);
  };

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    setLoading(true);
    setAuto(options[index].value * 60 * 1000);
  };

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  // fake timeout to simulate fetching data
  React.useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);

        if (auto > 0) {
          setCounter(options[selectedIndex].value * 60);
        }
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  // setting the auto refresh timer if auto refresh is enabled
  React.useEffect(() => {
    if (auto > 0 && !loading) {
      const timer = setTimeout(() => {
        setLoading(true);
      }, auto);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading, auto]);

  // countdown for auto fresh label
  React.useEffect(() => {
    if (auto > 0 && !loading && counter > 0) {
      const timer = setTimeout(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [loading, auto, counter]);

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item>
        {auto > 0 && !loading ? (
          <Typography variant="caption">
            Next update in {counter} seconds
          </Typography>
        ) : (
          ""
        )}
        {loading ? <Typography variant="caption">Updating...</Typography> : ""}
      </Grid>
      <Grid item>
        <ButtonGroup
          variant="outlined"
          color="primary"
          size="small"
          ref={anchorRef}
          aria-label="Button group with a nested menu"
        >
          <LoadingButton
            onClick={handleClick}
            startIcon={<RefreshOutlined />}
            loading={loading}
            loadingPosition="start"
          >
            <span>
              {options[selectedIndex].selectedLabel ??
                options[selectedIndex].menuLabel}
            </span>
          </LoadingButton>
          <Button
            size="small"
            aria-controls={open ? "split-button-menu" : undefined}
            aria-expanded={open ? "true" : undefined}
            aria-label="select merge strategy"
            aria-haspopup="menu"
            disabled={loading}
            onClick={handleToggle}
          >
            <ArrowDropDownOutlined />
          </Button>
        </ButtonGroup>
        <Popper
          sx={{
            zIndex: 1,
          }}
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList id="split-button-menu" autoFocusItem>
                    {options.map((option, index) => (
                      <MenuItem
                        key={option.menuLabel}
                        selected={index === selectedIndex}
                        onClick={(event) => handleMenuItemClick(event, index)}
                      >
                        {option.menuLabel}
                      </MenuItem>
                    ))}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </Grid>
    </Grid>
  );
}
