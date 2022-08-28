import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: "#000000",
        },
        h1: {
          letterSpacing: "-5px",
          lineHeight: 1.2,
          fontSize: "72px",
        },
        h2: {
          letterSpacing: "-4px",
          lineHeight: 1.1,
        },
        h3: {
          letterSpacing: "-3px",
        },
        h4: {
          letterSpacing: "-2px",
        },
        h5: {
          letterSpacing: "-1px",
          lineHeight: 1.3,
        },
        h6: {
          letterSpacing: "-0.5px",
          lineHeight: 1.3,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 100,
          textTransform: "none",
          letterSpacing: "-0.5px",
          boxShadow: "none",
          fontWeight: 600,
          "&:hover": {
            boxShadow: "none",
          },
        },
        outlined: {
          borderColor: blueGrey[100],
        },
        sizeLarge: {
          padding: "14px 28px",
        },
        sizeMedium: {
          padding: "6px 20px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          fontWeight: 500,
        },
      },
    },
  },
  typography: {
    fontFamily: "Gilroy-Private",
  },
  palette: {
    mode: "light",
    primary: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    white: {
      main: "#ffffff",
      contrastText: "#000000",
    },
    black: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: blueGrey[300],
    },
    gradient: {
      orangePink: "linear-gradient(90deg, #C98530 3.95%, #F02864 100.2%)",
    },
    grey: blueGrey,
  },
});

export default theme;
