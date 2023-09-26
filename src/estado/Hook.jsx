import React, { useState } from "react";

const Hook = () => {
  const [ativo, setAtivo] = useState(false);
  function handleClick() {
    setAtivo(!ativo);
  }
  return <button onClick={handleClick}>{ativo ? "Ativo" : "Inativo"}</button>;
};

export default Hook;
