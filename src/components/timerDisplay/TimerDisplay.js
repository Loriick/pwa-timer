import React, { Component } from "react";
import MyContext from "../../Context";

export default class TimerDisplay extends Component {
  static contextType = MyContext;
  state = {
    timer: { ...this.context.timer },
    isLoop: true
  };

  componentDidMount() {
    this.countDownTime(
      "workout",
      this.state.timer.workout,
      "sets",
      this.state.timer.sets
    );
  }

  countDownTime = (categoryTime, time, categoryRep, rep) => {
    const timer = { ...this.state.timer };
    const second = timer[categoryTime];

    this.countDown = setInterval(() => {
      if (rep > 0) {
        timer[categoryTime] = time -= 1;
        this.setState({ timer });

        if (time <= -1) {
          time = second;
          timer[categoryTime] = time;
          timer[categoryRep] = rep -= 1;
          this.setState({ timer });
        }
      } else {
        this.stopCountDown(this.countDown);
      }
    }, 1000);
  };

  countDownRepition = (category, rep) => {
    const timer = { ...this.state.timer };
    timer[category] = rep -= 1;
    console.log(rep);
    this.setState({ timer });
  };

  stopCountDown = timer => {
    clearInterval(timer);
    return;
  };

  render() {
    console.log(this.state.timer);
    return (
      <>
        <div> time {this.state.timer.workout}</div>
        <div>sets {this.state.timer.sets}</div>
      </>
    );
  }
}
