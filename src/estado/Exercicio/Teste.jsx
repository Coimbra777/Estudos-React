import React from "react";
import Produto from "./Produto";

const Teste = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);
  async function handleClick(event) {
    setCarregando(true);

    setTimeout(async () => {
      const response = await fetch(
        `https://ranekapi.origamid.dev/json/api/produto/${event.target.innerText}`
      );

      // tranforma p/ json
      const json = await response.json();
      setDados(json);
      setCarregando(false);
    }, 1000);
  }

  return (
    <div>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        Notebook
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        smartphone
      </button>
      <button style={{ margin: ".5rem" }} onClick={handleClick}>
        tablet
      </button>
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && <Produto dados={dados} />}
    </div>
  );
};

export default Teste;
