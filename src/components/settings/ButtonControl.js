import React from "react";

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
