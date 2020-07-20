import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase';

import './sign-in-out.styles.scss';
import LoginForm from '../../components/login/login';

import ActionBtn from '../../components/action-btn/action-btn.component';
import Icon from '@material-ui/core/Icon';
import Snackbar from '@material-ui/core/Snackbar';

class SignInOut extends React.Component {
    constructor(props) {
        super(props);
    }
    
    login = () => {
        let that = this;

        signInWithGoogle().then(function(result) {         
            that.props.openFeedback(true, 'You\'re now connected with your Google Account');
        }).catch(function(err) {
            console.log("error in connection. please retry :) ");
        });
    }
    
    render() {        
        return(
            <div>
                <h1>Login</h1>  
                 
                <LoginForm  openFeedback={(bools, msg) => this.props.openFeedback(bools, msg)}/>
                
                <ActionBtn onClick={() => this.login()} color="secondary">
                    <Icon className="fab fa-google"  /> Connect with Google
                </ActionBtn>
            </div>
        )
    }    
}

export default SignInOut;

// https://medium.com/better-programming/dead-simple-auth-with-react-and-firebase-592e40ff43c5