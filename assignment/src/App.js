import React from "react";
import "./App.css";

import { Switch, Route } from "react-router-dom";

import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Section3 from "./components/Section3";
import SpotIt from "./components/SpotIt";
import Statistics from "./components/Statistics";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/section-1">
            <Section1 />
          </Route>
          <Route path="/section-2">
            <Section2 />
          </Route>
          <Route path="/section-3">
            <Section3 />
          </Route>
          <Route path="/spot-it">
            <SpotIt />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
        </Switch>
      </header>
    </div>
  );
}

export default App;
