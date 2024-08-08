"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { _logs } from "@/_mock";
import Grid from "@mui/material/Grid";
import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Switch,
  Typography,
} from "@mui/material";
import ScheduledReport from "@/components/ScheduledReport";
import {
  ContentQuantity,
  DataSpan,
} from "@/components/ScheduledReport/ScheduledReport";

export default function HomePage() {
  const [networkSummary, setNetworkSummary] = React.useState(true);
  const [threatSummary, setThreatSummary] = React.useState(true);
  const [contentSummary, setContentSummary] = React.useState(true);
  const [contentQuantity, setContentQuantity] = React.useState("all");
  const [whiteLabel, setWhiteLabel] = React.useState(false);
  const [dataSpan, setDataSpan] = React.useState("30 Days");

  return (
    <Box sx={{ display: "flex" }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={whiteLabel}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setWhiteLabel(event.target.checked);
                }}
              ></Switch>
            }
            label="White Label"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={networkSummary}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setNetworkSummary(event.target.checked);
                }}
              ></Switch>
            }
            label="Include Network Summary"
          />
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Switch
                checked={threatSummary}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setThreatSummary(event.target.checked);
                }}
              ></Switch>
            }
            label="Include Threat Summary"
          />
        </Grid>
        <Grid item xs={6}>
          <FormControlLabel
            control={
              <Switch
                checked={contentSummary}
                inputProps={{ "aria-label": "controlled" }}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setContentSummary(event.target.checked);
                }}
              ></Switch>
            }
            label="Include Content Summary"
          />
        </Grid>
        <Grid item xs={6}>
          {contentSummary && (
            <FormControl>
              <FormLabel id="content-summary">
                How many content categories should be shown?
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="content-summary"
                name="content-summary"
                value={contentQuantity}
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  setContentQuantity((event.target as HTMLInputElement).value);
                }}
              >
                <FormControlLabel value="all" control={<Radio />} label="All" />
                <FormControlLabel value="5" control={<Radio />} label="Top 5" />
                <FormControlLabel
                  value="10"
                  control={<Radio />}
                  label="Top 10"
                />
                <FormControlLabel
                  value="15"
                  control={<Radio />}
                  label="Top 15"
                />
              </RadioGroup>
            </FormControl>
          )}
        </Grid>
        <Grid item xs={12}>
          <FormControl>
            <FormLabel id="data-span">
              What span of data would you like to include in the report?
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="data-span"
              name="data-span"
              value={dataSpan}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                setDataSpan((event.target as HTMLInputElement).value);
              }}
            >
              <FormControlLabel
                value="7 Days"
                control={<Radio />}
                label="7 Days"
              />
              <FormControlLabel
                value="30 Days"
                control={<Radio />}
                label="30 Days"
              />
              <FormControlLabel
                value="60 Days"
                control={<Radio />}
                label="60 Days"
              />
              <FormControlLabel
                value="90 Days"
                control={<Radio />}
                label="90 Days"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography>
            The PDF should be generated using 1240 x 1754 (pixel) headless
            browser dimensions and then printed to A4 with 150 PPI/DPI in order
            to have 1:1 scaling
          </Typography>
          <Typography>
            According to the Playwright API I dont see an option for setting the
            PPI/DPI but you can specify the page size directly. Setting the page
            size as 1240 x 1754 maintains the aspect ratio of A4 and lets print
            utilies scale the design to fit
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              borderRadius: 0,
              flexGrow: 1,
              width: 1240,
              minHeight: 1754,
            }}
          >
            <ScheduledReport
              whiteLabel={whiteLabel}
              networkSummary={networkSummary}
              threatSummary={threatSummary}
              contentSummary={contentSummary}
              contentQuantity={contentQuantity as ContentQuantity}
              dataSpan={dataSpan as DataSpan}
            />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
