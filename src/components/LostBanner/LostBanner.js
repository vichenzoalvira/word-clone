import React from "react";
import Banner from "../Banner";

function LostBanner({ answer }) {
  return (
    <Banner status="sad">
      <strong> Game Over 🥀, the answer was: {answer} </strong>
    </Banner>
  );
}

export default LostBanner;
