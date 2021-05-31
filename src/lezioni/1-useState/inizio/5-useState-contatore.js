import React, { useState } from "react";

const CounterComponent = () => {
  const [contatore, setContatore] = useState(0);

  const addNumbers = () => {
    // setContatore(contatore + 1);

    //   setContatore((value) => {
    //     if (value + 1 === 5) {
    //       return value;
    //     }
    //     return value + 1;
    //   });

    setTimeout(() => {
      setContatore((value) => {
        return value + 1;
      });
    }, 2000);
  };

  const removeNumbers = () => {
    setContatore(contatore - 1);
  };

  const reset = () => {
    setContatore(0);
  };
  return (
    <div className="bg-white shadow rounded py-5 w-75 col-6 offset-3">
      <h3>{contatore}</h3>

      <div className="d-flex justify-content-between">
        <button onClick={removeNumbers} className="button my-2">
          Diminuisci
        </button>
        <button onClick={addNumbers} className="button my-2">
          Aumenta
        </button>
      </div>
      <button onClick={reset} className="button reset-button my-2">
        Resetta
      </button>
    </div>
  );
};

export default CounterComponent;
