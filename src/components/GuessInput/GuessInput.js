import React from "react";

function GuessInput({ gameStatus, handleSubmitGuess }) {
  const [tentativeGuess, setTentativeGuess] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (tentativeGuess.length !== 5) {
      window.alert("Guess must be 5 letters long 🫡");
      return;
    }
    handleSubmitGuess(tentativeGuess);
    setTentativeGuess("");
  }

  return (
    <div>
      <form className="guess-input-wrapper" onSubmit={handleSubmit}>
        <label htmlFor="guess-input">Enter guess</label>
        <input
          required
          disabled={gameStatus !== "playing"}
          minLength={5}
          maxLength={5}
          pattern="[a-zA-Z]{5}"
          type="text"
          id="guess-input"
          value={tentativeGuess}
          onChange={(event) => {
            const nextGuess = event.target.value.toUpperCase();
            setTentativeGuess(nextGuess);
          }}
        />
      </form>
    </div>
  );
}

export default GuessInput;
