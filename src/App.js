import { useState } from "react";
import Timer from "./Timer";
import Controls from "./Controls";
import "./styles.css";

function App() {
  const [time, setTime] = useState(1500); // 25 minutes
  const [isRunning, setIsRunning] = useState(false);
  const [mode, setMode] = useState("work");

  return (
    <div className="app">
      <h1>Pomodoro Timer</h1>

      <Timer
        time={time}
        setTime={setTime}
        isRunning={isRunning}
        mode={mode}
        setMode={setMode}
      />

      <Controls
        isRunning={isRunning}
        setIsRunning={setIsRunning}
        setTime={setTime}
      />
    </div>
  );
}

export default App;