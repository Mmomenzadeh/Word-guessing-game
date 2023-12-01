import Letter from "./Letter";

export default function Word({
  inputLetter,
  selectedWord,
  setPlayable,
  active,
  setArrayGuesses,
  setInputLetter,
  playable,
  setRobotTurn,
  setAttempts,
  attempts,
  Mode,
  setActive,
  setCorrectLetter,
  setWrongLetter,
}) {
  return (
    <div className="d-flex justify-content-center letterContainer my-5">
      {selectedWord?.split("").map((letter, index) => {
        return (
          <Letter
            key={index}
            letter={letter}
            inputLetter={inputLetter}
            index={index}
            active={active}
            setArrayGuesses={setArrayGuesses}
            setPlayable={setPlayable}
            setInputLetter={setInputLetter}
            playable={playable}
            setRobotTurn={setRobotTurn}
            selectedWord={selectedWord}
            setAttempts={setAttempts}
            attempts={attempts}
            Mode={Mode}
            setActive={setActive}
          />
        );
      })}
    </div>
  );
}
