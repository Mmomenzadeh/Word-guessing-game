export default function GameMode({ setMode, Mode }) {
  return (
    <>
      <div
        className="popup-container"
        style={{ display: Mode.difficulty === "" ? "flex" : "none" }}
      >
        <div className="  p-5 popup ">
          <h2 className="text-white">Choose Difficulty</h2>

          <div className="p-0 m-0 d-flex justify-content-center">
            <button
              className="m-2 btn btn-outline-light"
              onClick={() =>
                setMode({
                  difficulty: "easy",
                  maxAttempts: 5,
                })
              }
            >
              easy
            </button>

            <button
              className="m-2 btn btn-outline-light"
              onClick={() =>
                setMode({
                  difficulty: "medium",
                  maxAttempts: 4,
                })
              }
            >
              medium
            </button>

            <button
              className="m-2 btn btn-outline-light"
              onClick={() =>
                setMode({
                  difficulty: "hard",
                  maxAttempts: 3,
                })
              }
            >
              hard
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
