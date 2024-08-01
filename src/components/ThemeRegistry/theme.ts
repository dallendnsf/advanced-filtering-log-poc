import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";

const inter = Inter({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#3527fd",
      light: "#534Ffff",
      dark: "#0f13c1",
    },
    secondary: {
      main: "#ce008e",
      light: "#f306b0",
      dark: "#a50085",
    },
    error: {
      main: "#d32f2f",
      light: "#f44336",
      dark: "#b71c1c",
    },
    background: {
      default: "#ECF1FA",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
