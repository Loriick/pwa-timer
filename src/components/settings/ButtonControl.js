import React from "react";
import sportTime from "../../img/icon.png";

export const AddButton = ({ addUnit, unit, category }) => (
  <div className="setBtn" onClick={addUnit(category, unit)}>
    +
  </div>
);

export const MinusButton = ({ minusUnit, unit, category, minValue }) => (
  <div className="setBtn" onClick={minusUnit(category, unit, minValue)}>
    -
  </div>
);

export const Go = () => {
  return (
    <div className="goTimer">
      <img src={sportTime} alt="chrono picto" />
      <p>GO</p>
    </div>
  );
};
