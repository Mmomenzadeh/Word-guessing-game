import { CheckWord } from "./CheckWord";
import { RandomWord } from "./RandomWord";

export function ShowPopup(setRobotTurn, inputLetter, setInputLetter, Mode) {
  setRobotTurn({
    setPopup: true,
    setLetter: false,
  });
  setTimeout(() => {
    setRobotTurn({
      setPopup: false,
      setLetter: true,
    });

    setInputLetter({
      user: [],
      robot: RandomWord(CheckWord(inputLetter, Mode)).split(""),
    });
  }, 2000);
}
