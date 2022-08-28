import { createTheme } from "@mui/material";
import { blueGrey } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 500,
          color: blueGrey[900],
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
          padding: "16px 32px",
        },
        sizeMedium: {
          padding: "8px 24px",
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
      main: blueGrey[900],
      contrastText: "#ffffff",
    },
    white: {
      main: "#ffffff",
      contrastText: blueGrey[900],
    },
    black: {
      main: blueGrey[900],
      contrastText: "#ffffff",
    },
    text: {
      primary: blueGrey[900],
      secondary: blueGrey[300],
    },
    grey: blueGrey,
  },
});

export default theme;
