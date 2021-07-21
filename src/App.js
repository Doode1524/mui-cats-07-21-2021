import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";
import Cats from "./Cats";

function App() {
  const theme = createTheme({
    typography: {
      h1: {
        color: "blue",
        fontSize: "4rem",
      },
    },
  });

  const useStyles = makeStyles({
    h1: {
      color: "red",
      marginLeft: "10px",
    },
    h2: {
      color: "blue",
      border: "2px solid red",
    },
  });
  const classes = useStyles();

  return (
    <div>
      <Header />
      <ThemeProvider theme={theme}>
        <Cats />
        <h1 className={classes.h1}>Hello header</h1>
        {/* <Typography variant='h1'>Hello Typography</Typography> */}
      </ThemeProvider>
    </div>
  );
}

export default App;
