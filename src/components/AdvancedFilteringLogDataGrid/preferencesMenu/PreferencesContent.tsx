import * as React from "react";
import { styled } from "@mui/material/styles";
import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { ExpandMoreOutlined } from "@mui/icons-material";

const StyledAccordion = styled((props: AccordionProps) => (
  <Accordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));

const StyledAccordionSummary = styled((props: AccordionSummaryProps) => (
  <AccordionSummary expandIcon={<ExpandMoreOutlined />} {...props} />
))(({ theme }) => ({
  backgroundColor: "rgba(0, 0, 0, .03)",
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({}));

export default function PreferencesContent() {
  const [expanded, setExpanded] = React.useState<string | false>();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <Grid container spacing={2} sx={{ pl: 1, pr: 1, pt: 1 }}>
      <Grid item xs={12}>
        <Typography variant="body2">
          You can override the default table configuration by saving the current
          configuration as your preference.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <StyledAccordion
          expanded={expanded === "preferences"}
          onChange={handleChange("preferences")}
        >
          <StyledAccordionSummary
            aria-controls="panel1d-content"
            id="preferences"
          >
            <Typography variant="body2">
              Preference that will be saved
            </Typography>
          </StyledAccordionSummary>
          <StyledAccordionDetails>
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
          </StyledAccordionDetails>
        </StyledAccordion>
      </Grid>
    </Grid>
  );
}
