export function Robot(
  inputLetter,
  setArrayGuesses,
  setPlayable,
  setInputLetter,
  setRobotTurn
) {
  setRobotTurn({
    setPopup: false,
    setLetter: true,
  });

  setTimeout(() => {
    if (Array.isArray(inputLetter.robot)) {
      setArrayGuesses((perv) => [...perv, inputLetter.robot.join("")]);
    }
    setPlayable({ user: true, robot: false });
    setRobotTurn({
      setPopup: false,
      setLetter: false,
    });
  }, 2000);
}
