function Controls({ isRunning, setIsRunning, setTime }) {
  return (
    <div>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={() => setTime(1500)}>Reset</button>
    </div>
  );
}

export default Controls;