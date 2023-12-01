export function findWordWithMostLetters(inputLetter, RobotGuess) {
  // console.log(inputLetter);
  let maxCount = 0;
  let resultWord = [];

  for (const word of RobotGuess) {
    let count = 0;

    for (const letter of word) {
      if (inputLetter.includes(letter)) {
        count++;
      }
    }

    if (count > maxCount) {
      maxCount = count;
      resultWord.push(word);
    }
  }

  // console.log(resultWord);
  return resultWord;
}
