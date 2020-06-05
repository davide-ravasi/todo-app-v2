import React from 'react';
import { auth, signInWithGoogle } from '../../firebase/firebase';

import './sign-in-out.styles.scss';
import LoginForm from '../../components/login/login';

import ActionBtn from '../../components/action-btn/action-btn.component';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

class SignInOut extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false
        }
    }
    
    componentDidMount = () => {
        console.log(auth.currentUser);
    }
    
    handleClose = () => {
        this.setState({
            open: false
        });
    }
    
    openFeedback = (isOpen, msg) => {
            this.setState({
                open: true,
                message: 'You\'re now connected with your Google Account'
            });        
    }
    
    login = () => {
        let that = this;
        signInWithGoogle().then(function(result) {         
            that.openFeedback(true, 'You\'re now connected with your Google Account');
        }).catch(function(err) {
            console.log("error in connection. please retry :) ");
        });
    }
    
    render() {        
        return(
            <div>
                <h1>Login</h1>  
                 
                <LoginForm  openFeedback={e => this.openFeedback()}/>
                
                <ActionBtn onClick={() => this.login()} color="secondary">
                    <Icon className="fab fa-google"  /> Connect with Google
                </ActionBtn>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.open}
                    autoHideDuration={5000}
                    onClose={this.handleClose}
                    message={this.state.message}
                />
            </div>
        )
    }    
}

export default SignInOut;

// https://medium.com/better-programming/dead-simple-auth-with-react-and-firebase-592e40ff43c5