import React from "react";

import { displayTime } from "../../functions";

export default ({ timer }) => {
  return (
    <div className="top">
      <div className="display sets">
        <span>Sets</span>
        <span>{timer.sets}</span>
      </div>
      <div className="display time">
        <span> {timer.workout < 1 ? "rest" : "workout"}</span>
        <span className={timer.workout < 1 ? "rest" : "workout"}>
          {timer.workout < 1
            ? displayTime(timer.rest)
            : displayTime(timer.workout)}
          <span>min</span>
        </span>
      </div>
      {timer.rest > 0 && (
        <div className="display cycles">
          <span>cycles</span>
          <span> {timer.cycles}</span>
        </div>
      )}
    </div>
  );
};
