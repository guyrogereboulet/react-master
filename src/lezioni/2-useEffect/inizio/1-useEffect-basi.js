import React, { useEffect } from "react";

const useEffectBasi = () => {
  const [value, setValue] = React.useState(0);

  const aumenta = () => {
    setValue((oldValue) => oldValue + 1);
  };
  useEffect(() => {
    console.log("Eccomi sono UseEffect");
    document.title = `Hai digitato ${value}`;

    if (value < 1) {
      document.title = `Nuovo messaggio`;
    } else {
      document.title = `Hai digitato ${value}`;
    }
    return () => console.log("CleanUp function");
  }, [value]);

  return (
    <div className="item">
      <h4>
        Value : <span>{value}</span>
      </h4>
      <button className="button" onClick={aumenta}>
        Aumenta
      </button>
    </div>
  );
};

export default useEffectBasi;
