import React from "react";
import { displayTime } from "../../functions";

const TotalTime = ({ totaltime }) => (
  <div className="totalTime">
    <p>Total Time</p>
    <span>
      {displayTime(totaltime())} <span>min</span>
    </span>
  </div>
);

export default TotalTime;
