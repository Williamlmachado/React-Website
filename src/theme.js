import { createTheme } from "@material-ui/core";
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

export const theme = createTheme({
  palette: {
    primary: {
      main: grey[50],
    },
  },
  myButton: {
    backgroundColor: "red",
    color: "white",
    border: "1px solid black",
  },
});