export function CheckWin(
  inputLetter,
  selectedWord,
  attempts,
  Mode
  //   setWrongLetter,
  //   setCorrectLetter
) {
  // console.log(inputLetter, selectedWord);
  let GameStatus = "Allowed";

  if (Mode?.maxAttempts >= attempts) {
    if (inputLetter.user.join("") === selectedWord?.toLowerCase()) {
      GameStatus = "user";
    } else if (inputLetter.robot.join("") === selectedWord?.toLowerCase()) {
      GameStatus = "robot";
    }
  } else {
    GameStatus = "illegal";
  }

  // console.log(GameStatus);

  return GameStatus;
}
