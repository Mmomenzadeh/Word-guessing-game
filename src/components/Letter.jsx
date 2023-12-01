import { useEffect } from "react";
import { ShowPopup } from "../utils/showPopup";
import { CheckWin } from "../utils/CheckWin";

export default function Letter({
  inputLetter,
  index,
  active,
  setPlayable,
  setArrayGuesses,
  setInputLetter,
  playable,
  setRobotTurn,
  selectedWord,
  setAttempts,
  attempts,
  Mode,
  setActive,
  setCorrectLetter,
}) {
  // console.log(inputLetter);

  useEffect(() => {
    if (CheckWin(inputLetter, selectedWord, attempts, Mode) === "Allowed") {
      if (inputLetter?.user.length === 5 && index === 4) {
        setPlayable({ user: false, robot: true });
        setArrayGuesses((perv) => [...perv, inputLetter?.user.join("")]);
        setInputLetter({ user: [], robot: [] });
        ShowPopup(setRobotTurn, inputLetter, setInputLetter, Mode);
        setAttempts((perv) => perv + 1);
        setActive(0);
      }
    } else {
      setPlayable({ user: false, robot: false });
      setRobotTurn({ setPopup: false, setLetter: false });
    }
  }, [inputLetter.user]);

  return (
    <div
      className="Letter p-5 mx-2 btn btn-outline-secondary d-flex justify-content-center align-items-center"
      style={{
        borderBottom: index === active ? "5px solid #ffc107" : "5px solid #000",
      }}
    >
      {playable.user
        ? inputLetter?.user[index]?.toUpperCase()
        : inputLetter?.robot[index]}
    </div>
  );
}
