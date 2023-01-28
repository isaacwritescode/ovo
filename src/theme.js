import { createTheme } from "@mui/material";
import { grey } from "@mui/material/colors";

const theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          fontWeight: 400,
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
          fontSize: "56px",
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
        outlined:{
          borderColor: "#00000030"
        },
        disabled: {
          color: "#000000",
        },
        sizeLarge: {
          padding: "10px 28px",
        },
        sizeMedium: {
          padding: "6px 20px",
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        label: {
          marginTop: -2,
          fontWeight: 400,
        },
      },
    },
  },
  typography: {
    fontFamily: "NeurialGrotesk-Private",
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
    blue: {
      main: "#2097F6",
      contrastText: "#ffffff",
    },
    turquoise: {
      main: "#4dcdcb",
      contrastText: "#6e97bf",
    },
    black: {
      main: "#000000",
      contrastText: "#ffffff",
    },
    orange: {
      main: "#F5883A",
      contrastText: "#ffffff",
    },
    green: {
      main: "#52CC99",
      contrastText: "#ffffff",
    },
    indigo: {
      main: "#6666FF",
      contrastText: "#ffffff",
    },
    red: {
      main: "#EF466F",
      light: "#f26b8c",
      extraLight: "#F6C4D1",
      contrastText: "#ffffff",
    },
    purple: {
      main: "#B15FFC",
      contrastText: "#ffffff",
    },
    skyBlue: {
      main: "#35C0FC",
      contrastText: "#ffffff",
    },
    text: {
      primary: "#000000",
      secondary: "#AAB1C1",
    },
    gradient: {
      orangePink: "linear-gradient(90deg, #C98530 3.95%, #F02864 100.2%)",
    },
    grey,
  },
  breakpoints: {
    values: {
      xs: 0,
      thin: 372,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
});

export default theme;
