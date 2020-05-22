import React from 'react';
import { signInWithGoogle } from '../../firebase/firebase';

import './sign-in-out.styles.scss';
import { ContainedButtons } from '../../components/action-btn/action-btn.component';

class SignInOut extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
    }
    
    login() {
        signInWithGoogle().then(function(result) {
        
        }).catch(function(err) {
            
        });
    }
    
    render() {
        return(
            <div>
                <h1>Connection</h1>
            </div>
        )
    }
    
}

export default SignInOut;