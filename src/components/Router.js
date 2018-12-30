import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Settings from "./settings/Settings";
import TimerDisplay from "./timerDisplay/index";
import Finish from "./Finish";

const Router = () => (
  <HashRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
      <Route path="/timer" component={TimerDisplay} />
      <Route path="/finish" component={Finish} />
    </Switch>
  </HashRouter>
);

export default Router;
