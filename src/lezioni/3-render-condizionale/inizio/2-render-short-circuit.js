import React, { useState } from "react";

const ShortRender = () => {
  const [parola, setParola] = useState("Sono una parola");
  const esempio = parola || ""
  return (
    <div>
      <h2>short render Component</h2>
    </div>
  );
};

export default ShortRender;
