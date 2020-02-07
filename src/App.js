import React from 'react';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

import './Components/_reset.scss';


import Nav from './Components/Navigation/Nav'
// Pages
import Home from './Pages/Home'

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/"  component={Home}/>
          {/* <Route exact path="/todo"  />
          <Route exact path="/food" />
          <Route exact path="/contact" /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
