import React from 'react';
import './App.scss';
import {Switch, Route} from "react-router-dom";
import { withRouter } from "react-router";
import PrimarySearchAppBar from './components/header/PrimarySearchAppBar.component';
import {auth} from './firebase/firebase';

import HomePage from './pages/homepage/homepage.component';
import Categories from './pages/categories/categories.component';
import SignInOut from './pages/sign-in-out/sign-in-out.component';

class App extends React.Component {
  constructor(props) {
      super(props);
      
      this.state = {
          currentUser: null
      }
  }
  componentWillMount() {      
      auth.onAuthStateChanged(user => {
          if(user) {
              this.setState({
                  currentUser: user 
              });    
          } else {
			  this.setState({
                  currentUser: null 
              }); 
		  }
      });
  }
    signOut(props) {
        auth.signOut()
        .then(function() {
            // Sign-out successful.
            setTimeout(function() {
                props.history.push('/');
            }, 1000);
        })
        .catch(function(error) {
            // An error happened
        });
    }
  render() {
      return (
        <div className="App">
          <PrimarySearchAppBar user={this.state.currentUser} signOut={() => this.signOut(this.props)} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/categories" component={Categories} />
            <Route path="/sign-in" component={SignInOut} />
          </Switch>
        </div>
      );
  }
}

export default withRouter(App);
