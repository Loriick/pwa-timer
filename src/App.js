import React, { Component } from "react";
import "./styles/App.scss";

//components
import Router from "./components/Router";
import MyContext from "./Context";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSettingInterval: false,
      toggleSetting: this.toggleSetting,
      timer: { workout: 0, rest: 0, sets: 1, cycles: 1 },
      addUnit: this.addUnit,
      minusUnit: this.minusUnit
    };
  }

  toggleSetting = boolean => () => {
    this.setState({
      isSettingInterval: boolean
    });
    console.log(this.state.isSettingInterval);
  };

  addUnit = (category, unit) => () => {
    const timer = { ...this.state.timer };
    timer[category] = timer[category] += unit;
    this.setState({
      timer
    });
    console.log("add");
  };
  //timer[category] = this.state.timer[category]
  minusUnit = (category, unit, minValue) => () => {
    const timer = { ...this.state.timer };
    timer[category] = timer[category] -= unit;
    if (timer[category] < minValue) timer[category] = minValue;
    this.setState({
      timer
    });
    console.log(timer[category], "min-value:", minValue);
  };

  render() {
    return (
      <div className="App">
        <MyContext.Provider value={this.state}>
          <Router />
        </MyContext.Provider>
      </div>
    );
  }
}

export default App;
