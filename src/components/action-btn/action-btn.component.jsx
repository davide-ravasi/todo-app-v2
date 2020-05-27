import React from 'react';

import './action-btn.styles.scss';

import Button from '@material-ui/core/Button';
import red from '@material-ui/core/colors/red';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
  }
});

export default function ActionBtn(props) {   
    const secondary = red[100]; 
    return (
        <Button variant="contained" color="primary" {...props} >
            {props.children}
        </Button>
    );
}