import React from "react";
import { range } from "../../utils";
import { checkGuess } from "../../game-helpers";
import CellType from "../CellType";

function GuessCells({ value, answer }) {
  const result = checkGuess(value, answer);

  return (
    <p className="guess">
      {range(5).map((num) => (
        <CellType
          key={num}
          letter={result ? result[num].letter : undefined}
          status={result ? result[num].status : undefined}
        />
      ))}
    </p>
  );
}

export default GuessCells;
