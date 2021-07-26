import { makeStyles } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { ThemeProvider } from "@material-ui/core/styles";

function App() {
  const theme = createTheme({
    overrides: {
      MuiTypography: {
        paragraph: {
          color: "red",
        },
      },
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Typography paragraph>This is in place of a p tag</Typography>
      </ThemeProvider>
    </div>
  );
}

export default App;


