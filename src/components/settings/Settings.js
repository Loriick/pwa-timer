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
      <Go path="timer" />
      <div className="card">
        <MyContext.Consumer>
          {props => (props.isSettingInterval ? <Interval /> : <NonStop />)}
        </MyContext.Consumer>
      </div>
      <Navigation />
    </div>
  );
};
