
export function RandomWord(WordList) {
  const randomWord = WordList[Math.floor(Math.random() * WordList.length)];
  return randomWord;
}
