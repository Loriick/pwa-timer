import React from "react";

//import context

import SetSetting from "./SettingSection";

const NonStop = () => {
  return (
    <>
      <SetSetting title="workout" minValue={0} unit={5} boolean={true} />
      <SetSetting title="sets" minValue={1} unit={1} boolean={false} />
    </>
  );
};

export default NonStop;
