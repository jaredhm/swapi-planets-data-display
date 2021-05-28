import { LinearProgress, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  linearProgress: {
    left: 0,
    minWidth: "100vw",
    position: "absolute",
    top: 0
  }
})

const LoadingBar = (props) => {
  const classes = useStyles();
  return (
    <LinearProgress
      className={classes.linearProgress}
      {...props}
    />
  );
}

export default LoadingBar;