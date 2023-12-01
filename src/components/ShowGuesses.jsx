export default function ShowGuesses({ ArrayGuesses }) {
  // console.log(ArrayGuesses);
  return (
    <div className="mt-5 p-5 bg-light text-center" style={{width:"400px" , minHeight:"200px"}}>

      {ArrayGuesses.map((guess, i) => (
        <div className="gass-style" key={i}>
          {guess.toUpperCase()}
        </div>
      ))}
    </div>
  );
}
