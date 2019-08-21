import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from "./pages/Home";
import PageNotFound from "./pages/404";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="" component={PageNotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
