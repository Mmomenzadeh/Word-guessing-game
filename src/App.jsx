import { useState } from "react";
import Game from "./screen/Game";
import GameMode from "./components/GameMode";

function App() {
  const [Mode, setMode] = useState({
    difficulty: "",
    maxAttempts: 0,
  });

  return (
    <>
      <GameMode setMode={setMode} Mode={Mode} />
      <Game setMode={setMode} Mode={Mode} />
    </>
  );
}

export default App;
