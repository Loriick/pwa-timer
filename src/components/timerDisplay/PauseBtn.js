import React from "react";

const PauseBtn = ({ func, cssClass, action }) => (
  <div onClick={func} className={`pauseBtn ${cssClass}`}>
    {action}
  </div>
);

export default PauseBtn;
