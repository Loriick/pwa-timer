import React from "react";
import MyContext from "../../Context";

const Navigation = () => (
  <MyContext.Consumer>
    {nav => (
      <ul>
        <li onClick={nav.toggleSetting(false)}>Non Stop</li>
        <li onClick={nav.toggleSetting(true)}>Interval</li>
      </ul>
    )}
  </MyContext.Consumer>
);

export default Navigation;
