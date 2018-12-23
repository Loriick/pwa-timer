import React from "react";

export const AddButton = ({ addUnit, unit, category }) => (
  <div onClick={addUnit(category, unit)}>+</div>
);

export const MinusButton = ({ minusUnit, unit, category, minValue }) => (
  <div onClick={minusUnit(category, unit, minValue)}>-</div>
);
