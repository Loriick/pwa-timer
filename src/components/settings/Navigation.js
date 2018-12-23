import React from "react";
import MyContext from "../../Context";

const Navigation = () => (
  <MyContext.Consumer>
    {nav => (
      <div className="navigation">
        {console.log(nav.isSettingInterval)}
        <ul>
          <li
            onClick={nav.toggleSetting(false)}
            className={!nav.isSettingInterval ? "active" : ""}
          >
            <span>Non Stop</span>
          </li>
          <li
            onClick={nav.toggleSetting(true)}
            className={nav.isSettingInterval ? "active" : ""}
          >
            Interval
          </li>
        </ul>
      </div>
    )}
  </MyContext.Consumer>
);

export default Navigation;
