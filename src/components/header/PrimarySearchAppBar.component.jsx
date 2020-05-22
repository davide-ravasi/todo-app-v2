import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { withRouter } from "react-router";

import CustomizedInputBase from '../searchInput/searchInput.component';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },  
  title: {
    flexGrow: 1, 
    textAlign: 'left',
    marginLeft: theme.spacing(2),
  },
}));

const ButtonAppBar = ({history}) => {
  const classes = useStyles();

  return (
      <AppBar position="static" className={classes.root}>
        <Container>
            <Toolbar>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <CustomizedInputBase className={classes.search} />
                <Typography variant="h6" className={classes.title}>
                    Todo List
                </Typography>
                <Button color="inherit" onClick={() => history.push('/categories')}>Categories</Button>
                <Button color="inherit" onClick={() => history.push('/sign-in')}>Login</Button>
            </Toolbar>
        </Container>
      </AppBar>
  );
}


export default withRouter(ButtonAppBar);