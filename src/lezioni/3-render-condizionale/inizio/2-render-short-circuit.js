import React, { useState } from "react";

const ShortRender = () => {
  const [parola, setParola] = useState("Sono una parola");
  const [toggle, setToggle] = useState(true);

  // // Short circuit Evaluation with an (||) operartor
  // const esempio = parola || "sono un esempio";
  // // Short circuit evaluation with an (&&) operator
  // const esempio2 = parola && "sono un esempio";
  // // Ternary operator esempio
  // const esempio3 = parola === "Valore" ? "Sono Vero" : "Sono Falso";
  return (
    <div>
      <h2>{parola || "Sono un esempio se non è inserito un valore"}</h2>
      {toggle ? (
        <h2 className="text-success"> Vero </h2>
      ) : (
        <h5 className="text-success"> Falso </h5>
      )}
      <button className="button" onClick={() => setToggle(!toggle)}>
        Cambia
      </button>
    </div>
  );
};

export default ShortRender;
