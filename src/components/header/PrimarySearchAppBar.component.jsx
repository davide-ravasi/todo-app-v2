import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import { Link } from "react-router-dom";
import { withRouter } from "react-router";

import CustomizedInputBase from '../searchInput/searchInput.component';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link: {
      color: '#fff',
      textDecoration: 'none',
      transition: '0.25s ease-in-out',
      '&:hover': {
          color: '#dedede'
      }
  },  
  title: {
    flexGrow: 1, 
    textAlign: 'left',
    marginLeft: theme.spacing(2),
  },
}));

const ButtonAppBar = ({history, user, logout}) => {
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
                    <Link to="/" className={classes.link} >Todo List</Link>
                </Typography>
                <Typography variant="h6" className={classes.title}>
                    {user && (
                        <span>Connected as : {user.displayName}</span>
                    )}
                </Typography>
                <Button color="inherit" onClick={() => history.push('/categories')} className={classes.link}>Categories</Button>
                {user && (
                    <Button color="inherit" onClick={() => logout()} className={classes.link}>Logout</Button>
                )}
                {!user && (
                    <Button color="inherit" onClick={() => history.push('/sign-in')} className={classes.link}>Login</Button>
                )}
            </Toolbar>
        </Container>
      </AppBar>
  );
}


export default withRouter(ButtonAppBar);