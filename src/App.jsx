import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { Planets } from "./pages";

const App = () => {

  return (
    <div>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            SWAPI Planets
          </Typography>
        </Toolbar>
      </AppBar>
      <Planets />
    </div>
  );
}

export default App;
