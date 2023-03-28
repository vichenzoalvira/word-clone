import React from "react";
import Banner from "../Banner";

function WonBanner({ numOfGuesses }) {
  return (
    <Banner status="happy">
      <strong> Congratulations, You Win 🥳!</strong>
      <p>
        It took you{" "}
        {numOfGuesses === 1
          ? `${numOfGuesses} guess`
          : `${numOfGuesses} guesses`}{" "}
        to guess the word.
      </p>
    </Banner>
  );
}

export default WonBanner;
