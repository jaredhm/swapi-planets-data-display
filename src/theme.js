import { createMuiTheme } from '@material-ui/core/styles';

// Is this even how I normally spell gray/grey? idk
const LIGHT_GRAY = "#eee"

// A custom theme for this app
const theme = createMuiTheme({
  typography: {
    fontFamily:"Arvo, serif"
  },
  overrides: {
    MuiTableCell:{
      root:{
        borderWidth: 1,
        borderSpacing: 0,
        borderCollapse: "collapse",
        borderColor: LIGHT_GRAY,
        borderStyle: "solid"
      }
    }
  },
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: "#f53b3b"
    },
    background: {
      default: LIGHT_GRAY
    },
  },
});

export default theme;