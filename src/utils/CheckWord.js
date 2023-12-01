import { RobotGuess } from "../constants/RobotGuess";
import { RandomWord } from "./RandomWord";
import { findWordWithMostLetters } from "./findWordWithMostLetters";

export function CheckWord(inputLetter, Mode) {
  switch (Mode?.difficulty) {
    case "easy":
      const res = RobotGuess.filter((word) => {
        for (const letter of word) {
          if (
            inputLetter.user.includes(letter) &&
            inputLetter.user.join("") !== word
          ) {
            return word;
          }
        }
      });

      return res;

    case "medium":
      return findWordWithMostLetters(inputLetter?.user, RobotGuess);

    case "hard":
      return findWordWithMostLetters(inputLetter?.user, RobotGuess);

    default:
      break;
  }
}
