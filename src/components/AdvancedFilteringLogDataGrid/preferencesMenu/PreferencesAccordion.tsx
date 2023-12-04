import * as React from "react";
import { styled } from "@mui/material/styles";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";
import Accordion, { AccordionProps } from "@mui/material/Accordion";
import AccordionSummary, {
  AccordionSummaryProps,
} from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

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
  <AccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: "0.9rem" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: "1px solid rgba(0, 0, 0, .125)",
}));

export default function PreferencesAccordion() {
  const [expanded, setExpanded] = React.useState<string | false>();

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      setExpanded(newExpanded ? panel : false);
    };

  return (
    <StyledAccordion
      expanded={expanded === "preferences"}
      onChange={handleChange("preferences")}
    >
      <StyledAccordionSummary aria-controls="panel1d-content" id="preferences">
        <Typography variant="body2">Preference that will be saved</Typography>
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
  );
}
