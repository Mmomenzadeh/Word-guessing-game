import { useEffect, useState } from "react";
import { Robot } from "../utils/Robot";
import { RandomWord } from "../utils/RandomWord";
import ShowGuesses from "../components/ShowGuesses";
import Word from "../components/Word";
import KeyBoard from "../components/KeyBoard";
import Popup from "../components/Popup";
import ResultPopup from "../components/ResultPopup";
import { CheckWin } from "../utils/CheckWin";
import { WordList } from "../constants/WordList";

let selectedWord = RandomWord(WordList);

// console.log(selectedWord)

export default function Game({ Mode, setMode }) {
  const [correctLetter, setCorrectLetter] = useState([]);
  const [wrongLetter, setWrongLetter] = useState([]);
  const [playable, setPlayable] = useState({
    user: true,
    robot: false,
  });
  const [inputLetter, setInputLetter] = useState({
    user: [],
    robot: [],
  });

  // console.log(correctLetter);

  const [active, setActive] = useState(0);
  const [ArrayGuesses, setArrayGuesses] = useState([]);
  const [RobotTurn, setRobotTurn] = useState({
    setPopup: false,
    setLetter: false,
  });

  const [attempts, setAttempts] = useState(0);

  // console.log(attempts);
  // console.log(Mode.maxAttempts);

  useEffect(() => {
    const handleKeyWord = (event) => {
      const { key, keyCode } = event;

      if (playable.user && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toUpperCase();
        setInputLetter({
          user: [...inputLetter.user, letter],
          robot: [],
        });
        setActive(active + 1);
      }
    };

    window.document.addEventListener("keydown", handleKeyWord);

    return () => window.document.removeEventListener("keydown", handleKeyWord);
  }, [playable.user, inputLetter.user]);

  useEffect(() => {
    if (playable.robot && RobotTurn.setLetter) {
      Robot(
        inputLetter,
        setArrayGuesses,
        setPlayable,
        setInputLetter,
        setRobotTurn
      );
    }
  }, [playable.robot, RobotTurn.setLetter]);

  function PlayAgain() {
    setMode({
      difficulty: "",
      maxAttempts: 0,
    });

    setAttempts(0)
    setInputLetter({
      user: [],
      robot: [],
    });

    setArrayGuesses([]);
    setPlayable({ user: true, robot: false });

    selectedWord = RandomWord(WordList);
  }
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center">
      <ShowGuesses ArrayGuesses={ArrayGuesses} />
      <Word
        inputLetter={inputLetter}
        selectedWord={selectedWord}
        active={active}
        setActive={setActive}
        setArrayGuesses={setArrayGuesses}
        setPlayable={setPlayable}
        setInputLetter={setInputLetter}
        setRobotTurn={setRobotTurn}
        playable={playable}
        setAttempts={setAttempts}
        attempts={attempts}
        Mode={Mode}
        setWrongLetter={setWrongLetter}
        setCorrectLetter={setCorrectLetter}
      />
      <KeyBoard />
      <Popup RobotTurn={RobotTurn} />

      {CheckWin(inputLetter, selectedWord, attempts, Mode) !== "Allowed" && (
        <ResultPopup
          inputLetter={inputLetter}
          selectedWord={selectedWord}
          Mode={Mode}
          attempts={attempts}
          PlayAgain={PlayAgain}
        />
      )}
    </div>
  );
}
