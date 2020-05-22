import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px',
    display: 'flex',
    alignItems: 'center',
    width: 250,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  }
}));

const CustomizedInputBase = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search Elements"
        inputProps={{ 'aria-label': 'search elements' }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default CustomizedInputBase;
