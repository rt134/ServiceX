import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(4),
    borderColor: "white",
    color: "white",
    // size: 
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function ButtonSizes() {
  const classes = useStyles();

  return (
    <div>
      <div>
      <Button variant="outlined" size="large" color="#fff" className={classes.margin}>
          GET STARTED
        </Button>
      </div>

    </div>
  );
}
