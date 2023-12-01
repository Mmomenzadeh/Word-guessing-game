export function ChooseDifficulty(difficulty) {
  if (difficulty === "easy") {
    return 10;
  } else if (difficulty === "medium") {
    return 8;
  } else if (difficulty === "hard") {
    return 6;
  }
}
