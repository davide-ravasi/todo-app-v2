import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {Switch, Route} from "react-router-dom";
import PrimarySearchAppBar from './components/header/PrimarySearchAppBar.component';
import {auth, firebase, signInWithGoogle} from './firebase/firebase';

import HomePage from './pages/homepage/homepage.component';
import Categories from './pages/categories/categories.component';
import SignInOut from './pages/sign-in-out/sign-in-out.component';

class App extends React.Component {
  constructor() {
      super();
      
      this.state = {
          currentUser: null
      }
  }
  componentWillMount() {
      console.log(auth);
      
      auth.onAuthStateChanged(userAuth => {
          console.log(userAuth);
          
      })
  }
  render() {
      return (
        <div className="App">
          <PrimarySearchAppBar />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/categories" component={Categories} />
            <Route path="/sign-in" component={SignInOut} />
          </Switch>
        </div>
      );
  }
}

export default App;
