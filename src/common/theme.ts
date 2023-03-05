import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#008e9a",
      light: "#acdcde",
      dark: "#064147",
    },
    text: {
      primary: "#dcdcd4",
      secondary: "#4a4a4a",
      disabled: "#3a3a3a",
    },
    background: {
      default: "#1d1d1d",
      paper: "#181818",
    },
  },
});

export default theme;
