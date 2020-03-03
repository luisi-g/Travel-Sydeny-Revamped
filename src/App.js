import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './Components/_reset.scss';


import Nav from './Components/Navigation/Nav'
// Pages
import Home from './Pages/Home';
import Explore from './Pages/Explore'

function App() {
  return (
    <div className="App">
      <Router>
      <Nav />
        <Switch>
          <Route exact path="/"  component={Home}/>
          <Route exact path="/explore" component={Explore}  />
          {/* <Route exact path="/food" />
          <Route exact path="/contact" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
