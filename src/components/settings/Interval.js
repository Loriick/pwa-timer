import React from "react";

import SetSetting from "./SettingSection";

const Interval = () => (
  <>
    <SetSetting title="workout" minValue={0} unit={5} boolean={true} />
    <SetSetting title="rest" minValue={0} unit={5} boolean={true} />
    <SetSetting title="sets" minValue={1} unit={1} boolean={false} />
    <SetSetting title="cycles" minValue={1} unit={1} boolean={false} />
  </>
);

export default Interval;
