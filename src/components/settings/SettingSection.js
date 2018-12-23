import React from "react";

//import context
import MyContext from "../../Context";

//import components
import { AddButton, MinusButton } from "./ButtonControl";

//import utility function
import { displayTime } from "../../functions";

export default ({ title, minValue, unit, boolean }) => (
  <MyContext.Consumer>
    {props => (
      <div>
        <h3>{title}</h3>
        <div className="btnContainer">
          <MinusButton
            minusUnit={props.minusUnit}
            category={title}
            unit={unit}
            minValue={minValue}
          />
          <div className="displayTimer">
            {displayTime(props.timer[title], boolean)}
          </div>
          <AddButton addUnit={props.addUnit} category={title} unit={unit} />
        </div>
      </div>
    )}
  </MyContext.Consumer>
);
