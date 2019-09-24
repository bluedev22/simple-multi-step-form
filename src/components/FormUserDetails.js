import React, { Fragment } from 'react';
import { AppBar, makeStyles, Typography, TextField, Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 500,
    padding: 10,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  title: {
    flexGrow: 1
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 10
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    maxWidth: 250
  },
  focused: {},

  controlBtns: {
    maxWidth: 400,
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  center: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto'
  },
  button: {
    margin: theme.spacing(2)
  }
}));

function FormUserDetails() {
  const classes = useStyles();
  return (
    <Fragment>
      <AppBar position="static" color="primary" className={classes.root}>
        <Typography variant="h6" className={classes.title} align="center">
          Enter Personal Details
        </Typography>
      </AppBar>

      <TextField
        id="standard-name"
        label="Name"
        margin="normal"
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
      />

      <TextField
        id="standard-name"
        label="Email"
        margin="normal"
        className={`${classes.center} ${classes.textField}`}
        fullWidth={true}
      />

      <div className={classes.controlBtns}>
        <Button variant="contained" className={classes.button}>
          Back
        </Button>

        <Button variant="contained" color="primary" className={classes.button}>
          Next
        </Button>
      </div>
    </Fragment>
  );
}

export default FormUserDetails;