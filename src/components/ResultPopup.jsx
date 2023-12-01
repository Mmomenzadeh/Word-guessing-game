import { CheckWin } from "../utils/CheckWin";

export default function ResultPopup({
  inputLetter,
  selectedWord,
  PlayAgain,
  attempts,
  Mode,
}) {
  // console.log(selectedWord);
  return (
    <div className="popup-container" style={{ display: "flex" }}>
      <div className="popup">
        {CheckWin(inputLetter, selectedWord, attempts, Mode) === "illegal" ? (
          <p>You Are Lose</p>
        ) : CheckWin(inputLetter, selectedWord, attempts, Mode) === "user" ? (
          <>
            <p> Your Win</p>
          </>
        ) : (
          <p>robot win , the word was : {selectedWord}</p>
        )}
        <button className="btn btn-outline-light" onClick={PlayAgain}>Play Again</button>
      </div>
    </div>
  );
}
