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
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");

    return `${minutes}:${seconds}`;
  };

  return (
    <div>
      <h2 style={{ color: mode === "work" ? "green" : "orange" }}>
        {mode === "work" ? "Working" : "Break Time"}
      </h2>
      <h1>{formatTime()}</h1>
    </div>
  );
}

export default Timer;