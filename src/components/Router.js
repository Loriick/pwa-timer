import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Home from "./Home";
import Settings from "./settings/Settings";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/settings" component={Settings} />
    </Switch>
  </BrowserRouter>
);

export default Router;
