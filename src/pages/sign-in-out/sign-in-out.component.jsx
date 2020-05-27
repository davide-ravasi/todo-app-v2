import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase';

import './sign-in-out.styles.scss';

import ActionBtn from '../../components/action-btn/action-btn.component';
import DeleteIcon from '@material-ui/icons/Delete';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

class SignInOut extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            open: false
        }
    }
    
    componentDidMount = () => {
    }
    
    handleClose = () => {
        this.setState({
            open: false
        });
    }
    
    login = () => {
        let that = this;
        signInWithGoogle().then(function(result) {
            that.setState({
                open: true,
                message: 'You\'re now connected with your Google Account'
            });
        }).catch(function(err) {
            console.log("error in connection. please retry :) ");
        });
    }
    
    render() {        
        return(
            <div>
                <h1>Login</h1>                
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