import { getMuiTheme } from "material-ui/styles";
import { grey900 } from "material-ui/styles/colors";
import { black, cyan300, cyan700, white } from "material-ui/styles/colors";

export const LightTheme = getMuiTheme({
  palette: {
    canvasColor: white,
    primary1Color: cyan700,
    textColor: black,
  },
});

export const DarkTheme = getMuiTheme({
  palette: {
    canvasColor: grey900,
    primary1Color: cyan300,
    textColor: white,
  },
});
