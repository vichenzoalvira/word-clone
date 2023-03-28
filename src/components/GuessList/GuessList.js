import React from "react";
import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import GuessCells from "../GuessCells/GuessCells";


function GuessList({ guesses, answer }) {
  return (
    <div className="guess-results">
      {range(NUM_OF_GUESSES_ALLOWED).map((num) => (
        <GuessCells key={num} value={guesses[num]} answer={answer}/>
      ))}
    </div>
  );
}

export default GuessList