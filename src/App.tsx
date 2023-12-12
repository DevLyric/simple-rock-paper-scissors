import { useEffect, useState } from "react";

function App() {
  const [randomIndex, setRandomIndex] = useState<number | undefined>(undefined);
  const [yourChoice, setYourChoice] = useState("");
  const [machineChoice, setMachineChoice] = useState("");
  const [points, setPoints] = useState(0);
  const [machinePoints, setMachinePoints] = useState(0);
  const [draw, setDraw] = useState(0);
  const [start, setStart] = useState(false);
  const symbols = ["rock", "paper", "scissors"];

  const handleSelectSymbol = (symbol: string) => {
    setStart(true);
    const randomIndex: number = Math.floor(Math.random() * symbols.length);
    setRandomIndex(randomIndex);
    setYourChoice(symbol);
    setMachineChoice(symbols[randomIndex]);
  };

  useEffect(() => {
    if (start) {
      if (
        (yourChoice === "rock" && machineChoice === "scissors") ||
        (yourChoice === "scissors" && machineChoice === "paper") ||
        (yourChoice === "paper" && machineChoice === "rock")
      ) {
        setPoints((currentPoints) => currentPoints + 1);
      } else if (
        (machineChoice === "rock" && yourChoice === "scissors") ||
        (machineChoice === "scissors" && yourChoice === "paper") ||
        (machineChoice === "paper" && yourChoice === "rock")
      ) {
        setMachinePoints((currentMachinePoints) => currentMachinePoints + 1);
      } else if (yourChoice === machineChoice) {
        setDraw((currentDraw) => currentDraw + 1);
      }

      console.log(machineChoice);
    }
  }, [randomIndex, yourChoice]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className="flex items-center gap-5">
        {symbols.map((symbol) => (
          <button key={symbol} onClick={() => handleSelectSymbol(symbol)}>
            {symbol}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-5 my-8">
        <p>Your points: {points}</p>
        <div className="flex items-center gap-3">
          <p>Machine choice: {machineChoice}</p>/
          <p>Machine points: {machinePoints}</p>
        </div>
        <p>Draw: {draw}</p>
      </div>
      <button
        onClick={() => {
          setPoints(0);
          setMachinePoints(0);
        }}
      >
        RESTART
      </button>
    </div>
  );
}

export default App;
