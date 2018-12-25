import React, { Component } from "react";
import MyContext from "../../Context";

export default class TimerDisplay extends Component {
  static contextType = MyContext;
  state = {
    timer: { ...this.context.timer }
  };

  componentDidMount() {
    this.timerFunc(this.state.timer.workout);
  }

  timerFunc = seconds => {
    const now = Date.now();
    const then = now + seconds * 1000;

    this.countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      //stop

      /**
       *
       * maintenant quand timer arrive a 0 on verife si il y a un cycle on fait partir alors
       * le rest timer quand le rest time est a zero on verifie s'il reste des cycles si il en reste on
       * fait partir alors on workout et cycle et rep prenne -1
       */
      if (secondsLeft < 0) {
        clearInterval(this.countdown);
        return;
      }

      this.setState(prev => ({
        timer: {
          workout: secondsLeft
        }
      }));
      console.log(secondsLeft);
    }, 1000);
  };

  render() {
    console.log(this.state.timer);
    return <div>{this.state.timer.workout}</div>;
  }
}
