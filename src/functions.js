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
