import React from "react";
import sportTime from "../../img/icon.png";
import { Link } from "react-router-dom";

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

export const Go = ({ path }) => {
  return (
    <Link to={`/${path}`} className="goTimer">
      <img src={sportTime} alt="chrono picto" />
      <p>GO</p>
    </Link>
  );
};
