import React from 'react';
import './App.scss';
import {Switch, Route} from "react-router-dom";
import PrimarySearchAppBar from './components/header/PrimarySearchAppBar.component';
import {auth} from './firebase/firebase';

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
      auth.onAuthStateChanged(user => {
          if(user) {
              this.setState({
                  currentUser: user 
              });    
          }
      })
  }
  render() {
      return (
        <div className="App">
          <PrimarySearchAppBar user={this.state.currentUser} />
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
