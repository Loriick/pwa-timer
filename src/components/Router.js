import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Settings from "./settings/Settings";
import TimerDisplay from "./timerDisplay/TimerDisplay";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/timer" component={TimerDisplay} />
    </Switch>
  </BrowserRouter>
);

export default Router;
