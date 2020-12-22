import React from 'react';
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom"
import MainPage from './components/openingPage/MainPage';
import Profile from './components/mainPage/profile/Profile';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Route exact path="/">{ <Redirect to="/main"></Redirect> }</Route>
        <Route path="/main" component={ MainPage }/>
        <Route exact path="/profile" component={ Profile }/>
      </Router>
    </div>
  );
}

export default App;
