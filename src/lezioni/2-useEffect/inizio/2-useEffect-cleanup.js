import React, { useState, useEffect } from "react";

const CleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);

  const dimensioneFinestra = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Setto AddEventListener");
    window.addEventListener("resize", dimensioneFinestra);
    // return () => {
    //   console.log("Rimuovo addEventlistener");
    //   window.removeEventListener("resize", dimensioneFinestra);
    // };
  }, []);
  return (
    <div
      className="container W-75 col-6 offset-3 bg-white shadow py-4"
      style={{ textAlign: "center" }}
    >
      <h1> {size} </h1>
    </div>
  );
};

export default CleanUp;
