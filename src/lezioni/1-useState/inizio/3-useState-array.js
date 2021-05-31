import React, { useState } from "react";
import { data } from "../../../data";

const ArrayState = () => {
  const [persona, setPersona] = useState(data);
  const removeItem = (id) => {
    let newPersona = persona.filter((el) => el.id !== id);
    setPersona(newPersona);
  };

  return (
    <>
      {persona.map((el) => {
        const { id, name } = el;
        return (
          <div key={id}>
            <h5>{name}</h5>
            <button
              onClick={() => {
                removeItem(id);
              }}
            >
              {" "}
              X
            </button>
          </div>
        );
      })}
    </>
  );
};

export default ArrayState;
