import React from "react";

const Eventos = () => {
  function handleClick(e) {
    console.log(e.target);
  }
  return <button onClick={handleClick}>Clique</button>;
};

export default Eventos;
