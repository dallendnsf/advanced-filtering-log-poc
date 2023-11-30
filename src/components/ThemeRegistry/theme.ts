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
    },
    secondary: {
      main: "#ce008e",
    },
    error: {
      main: "#d32f2f",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
  },
});

export default theme;
