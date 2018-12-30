import React from "react";
import MyContext from "../../Context";
//Components
import Interval from "./Interval";
import Navigation from "./Navigation";
import NonStop from "./NonStop";
import { Go } from "./ButtonControl";

export default () => {
  return (
    <MyContext.Consumer>
      {props => (
        <div className="settings">
          <Go path="timer" workout={props.timer.workout} />
          <div className="card">
            {props.isSettingInterval ? <Interval /> : <NonStop />}
          </div>
          <Navigation />
        </div>
      )}
    </MyContext.Consumer>
  );
};
