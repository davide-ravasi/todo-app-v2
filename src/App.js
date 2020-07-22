import React from 'react';
import './App.scss';
import {Switch, Route} from "react-router-dom";
import { withRouter } from "react-router";
import PrimarySearchAppBar from './components/header/PrimarySearchAppBar.component';
import {auth, addUserToDb} from './firebase/firebase';

import HomePage from './pages/homepage/homepage.component';
import Categories from './pages/categories/categories.component';
import SignInOut from './pages/sign-in-out/sign-in-out.component';
import Snackbar from '@material-ui/core/Snackbar';

class App extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
          currentUser: null,
		  open: false,
          message: ''
      }
	  
	  this.handleClose = this.handleClose.bind(this);
	  this.logout = this.logout.bind(this);
  }
  componentDidMount() {   
      auth.onAuthStateChanged(user => {
          if(user) {
              this.setState({
                  currentUser: user 
              });  
			
			 addUserToDb(user); 
          } else {
			  this.setState({
                  currentUser: null 
              }); 
		  }
      });
  }
  logout() {		
    auth.signOut()
        .then(() => {
            // Sign-out successful.
			this.openFeedback(true, 'You\'re now disconnected');
			
            setTimeout(() => {
                this.props.history.push('/');
            }, 1000);
        })
        .catch(function(error) {
            // An error happened
        });
    }
	handleClose() {
        this.setState({
            open: false
        });
    }
    openFeedback(isOpen, msg) {
		this.setState({
			open: isOpen,
			message: msg
		});        
    }
  render() {
      return (
        <div className="App">
          <PrimarySearchAppBar user={this.state.currentUser} logout={() => this.logout()} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/categories" component={Categories} />
			<Route exact path="/sign-in" render={(props) => <SignInOut {...props} openFeedback={(bools, msg) => this.openFeedback(bools, msg)} />} />
          </Switch>

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
      );
  }
}

export default withRouter(App);
