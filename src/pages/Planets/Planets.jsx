import {
  Card,
  CardContent,
  CardHeader,
  Container,
  makeStyles,
  Typography
} from "@material-ui/core";
import { LoadingBar } from '../../common';
import useRequestData from "./useRequestData";
import PlanetTable from "./PlanetTable"

const useStyles = makeStyles((theme) => {
  return {
    container: {
      paddingTop: theme.spacing(6)
    }
  };
});

const Planets = () => {
  const classes = useStyles();
  const [loading, planets, error] = useRequestData();

  const renderContent = () => {
    if (loading) {
      return <LoadingBar color="secondary" />
    }

    if (error) {
      return (
        <Card>
          <CardHeader
            title={
              <Typography variant="h6">
                There was an error
              </Typography>
            }
          />
          <CardContent>
            <Typography error>
              {error}
            </Typography>
          </CardContent>
        </Card>
      )
    }

    return (
       <PlanetTable planets={planets} />
    );
  };

  return (
      <Container
        className={classes.container}
        maxWidth="lg"
      >
        {renderContent()}
      </Container>
  )
};

export default Planets;