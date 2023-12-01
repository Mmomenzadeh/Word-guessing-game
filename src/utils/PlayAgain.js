import { WordList } from "../constants/WordList";
import { RandomWord } from "./RandomWord";

export function PlayAgain(
  setInputLetter,
  setArrayGuesses,
  setPlayable,
  selectedWord
) {
  setInputLetter({
    user: [],
    robot: [],
  });

  setArrayGuesses([]);
  setPlayable({ user: true, robot: false });

  selectedWord = RandomWord(WordList);
}
