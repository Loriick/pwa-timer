export const displayTime = (sec, bool) => {
  if (bool === false) {
    return sec;
  }
  let minutes = sec;
  let seconds = sec;

  minutes = Math.floor(sec / 60);
  minutes = minutes < 10 ? "0" + minutes : minutes;

  seconds = sec % 60;
  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
};

let countdown;

export const timerFunc = seconds => {
  const now = Date.now();
  const then = now + seconds * 1000;
  //displayTime(seconds, bool);
  console.log(now, then);
  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    //stop
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    console.log(secondsLeft);
  }, 1000);
};
