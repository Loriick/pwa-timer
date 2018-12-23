import React from "react";
import MyContext from "../../Context";
//Components
import Interval from "./Interval";
import Navigation from "./Navigation";
import NonStop from "./NonStop";
import { Go } from "./ButtonControl";

export default () => {
  return (
    <div className="settings">
      <Go />
      <div className="card">
        <MyContext.Consumer>
          {props => {
            return props.isSettingInterval ? <Interval /> : <NonStop />;
          }}
        </MyContext.Consumer>
      </div>
      <Navigation />
    </div>
  );
};
