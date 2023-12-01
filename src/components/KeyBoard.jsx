import { KeyWord } from "../constants/KeyWord";

export default function KeyBoard() {
  return (
    <>
      <div className="d-flex">
        {KeyWord.map((key, i) => {
          return <button className="btn btn-outline-dark" key={i}>{key.toUpperCase()}</button>;
        })}
      </div>
    </>
  );
}
