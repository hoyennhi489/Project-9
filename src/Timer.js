import { useEffect } from "react";

function Timer({ time, setTime, isRunning, mode, setMode }) {
  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, setTime]);

  useEffect(() => {
    if (time === 0) {
      if (mode === "work") {
        setMode("break");
        setTime(300);
      } else {
        setMode("work");
        setTime(1500);
      }
    }
  }, [time, mode, setMode, setTime]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2>{mode === "work" ? "Working" : "Break Time"}</h2>
      <h1>{formatTime()}</h1>
    </div>
  );
}

export default Timer;