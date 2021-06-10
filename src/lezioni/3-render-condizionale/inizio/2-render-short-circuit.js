import React, { useState } from "react";

const ShortRender = () => {
  const [parola, setParola] = useState("Sono una parola");

  // Short circuit Evaluation with an (||) operartor
  const esempio = parola || "sono un esempio";
  // Short circuit evaluation with an (&&) operator
  const esempio2 = parola && "sono un esempio";
  return (
    <div>
      <h2>{esempio}</h2>
      {parola && <h4>Ciao sono un componente</h4>}
    </div>
  );
};

export default ShortRender;
