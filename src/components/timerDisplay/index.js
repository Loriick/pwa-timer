import React, { Component } from "react";
import MyContext from "../../Context";
import { Link } from "react-router-dom";

import Top from "./Top";
import TotalTime from "./TotalTime";
import PauseBtn from "./PauseBtn";

export default class TimerDisplay extends Component {
  static contextType = MyContext;
  state = {
    timer: { ...this.context.timer },
    isPaused: false
  };

  componentDidMount() {
    this.timerFunc(this.state.timer);
  }
  componentWillUnmount() {
    clearInterval(this.countDown);
  }

  componentDidUpdate() {
    this.toggleBoolean = () => {
      this.setState(prevState => ({ isPaused: !prevState.isPaused }));
      this.pauseTime();
      console.log(this.state.isPaused);
    };
  }

  timerFunc = state => {
    const timer = { ...state };
    let { workout, rest, sets, cycles } = timer;
    let category = "workout";

    this.countDown = setInterval(() => {
      if (cycles <= 0 || sets <= 0) {
        clearInterval(this.countDown);
        this.props.history.push("/finish");
        return;
      }
      if (this.state.isPaused) {
        clearInterval(this.countDown);
      }

      if (rest > 0) {
        switch (category) {
          case "workout":
            workout -= 1;
            workout = workout < 1 ? 0 : workout;
            category = workout < 1 ? "rest" : "workout";
            break;
          case "rest":
            rest -= 1;
            rest = rest < 1 ? 0 : rest;
            category = rest < 1 ? "workout" : "rest";
            break;

          default:
            return;
        }

        if (rest < 1) {
          sets--;
          if (sets < 1) {
            cycles--;
            sets = this.context.timer.sets;
          }
          workout = this.context.timer.workout;
          rest = this.context.timer.rest;
        }
      } else {
        workout--;
        workout = workout < 1 ? 0 : workout;

        if (workout < 1) {
          sets--;
          workout = this.context.timer.workout;
        }
      }
      this.setState({
        timer: {
          workout,
          rest,
          sets,
          cycles
        }
      });
    }, 1000);
  };

  pauseTime = () => {
    this.setState({
      isPaused: true
    });
  };
  resumeTime = () => {
    this.setState({ isPaused: false });
    console.log(this.state.isPaused);
    this.timerFunc(this.state.timer);
  };

  totaltime = () => {
    const { workout, rest, sets, cycles } = this.context.timer;
    return (workout + rest) * sets * cycles;
  };

  render() {
    return (
      <div className="timerDisplay">
        <Top timer={this.state.timer} isPaused={this.state.isPaused} />
        <TotalTime totaltime={this.totaltime} />
        <div className="pauseBtnContainer">
          {!this.state.isPaused ? (
            <PauseBtn
              func={this.pauseTime}
              cssClass="isPaused"
              action="Pause"
            />
          ) : (
            <PauseBtn
              func={this.resumeTime}
              cssClass="isPlayed"
              action="Resume"
            />
          )}
        </div>
        <Link className="settingsBtn" to="/settings">
          Settings
        </Link>
      </div>
    );
  }
}
