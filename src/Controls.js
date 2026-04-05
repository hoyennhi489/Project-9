function Controls({ isRunning, setIsRunning, setTime }) {
  const handleReset = () => {
    setIsRunning(false);
    setTime(1500);
  };

  return (
    <div>
      <button onClick={() => setIsRunning(true)}>Start</button>
      <button onClick={() => setIsRunning(false)}>Pause</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default Controls;