import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { spacing } from '@material-ui/system';
import ActionBtn from '../../components/action-btn/action-btn.component';
import firebase, { auth } from '../../firebase/firebase';
import { withRouter } from "react-router";

const useStyles = makeStyles(theme => ({
  root: {
    "&": {
      marginBottom: 40
    },  
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 300
    },
    "btn": {
        width: 300
    }  
  }
}));

const LoginForm = ({history, openFeedback}) => {
    const classes = useStyles();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    
    const handleForm = e => {
        e.preventDefault();

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(result => {
                return result.user.updateProfile({
                    displayName: name
                })
            })
            .then(() => {
                history.push('/');
            })
            .catch(e => {
                setErrors(e.message);
            });
    }

    return (
    <form className={classes.root} noValidate autoComplete="off" onSubmit={e => handleForm(e)}>
      <div>
        <TextField
          label="Name"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          onChange={e => setName(e.target.value)}  
          value={name}
        />
      </div>
      <div>
        <TextField
          label="Email"
          id="outlined-size-small"
          variant="outlined"
          size="small"
          onChange={e => setEmail(e.target.value)}  
          value={email}
        />
      </div>
      <div>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="outlined"
          size="small"
          onChange={e => setPassword(e.target.value)}  
          value={password}  
        />
      </div>
      <div>
        {errors}       
     </div>
      <div>
        <ActionBtn type="submit" className={classes.btn}>
            Register with email  
        </ActionBtn>
      </div>
    </form>
  );
}

export default withRouter(LoginForm);

/* https://github.com/indreklasn/react-fire-auth-example/blob/master/src/Login.js */