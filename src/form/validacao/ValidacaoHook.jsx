import React from "react";
import Input from "../Input";
import UseForm from "../Hooks/UseForm";

const ValidacaoHook = () => {
  const cep = UseForm("cep");
  const email = UseForm("email");

  // função para validar botão enviar , event submit
  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate()) {
      console.log("Enviar");
    } else {
      console.log("erro");
    }
  }
  return (
    <form onSubmit={handleSubmit}>
      <Input
        label="CEP"
        id="cep"
        type="text"
        placeholder="00000-000"
        {...cep}
      />
      <br />
      <br />

      <Input label="Email" id="email" type="email" {...email} />
      <br />
      <br />

      <button>Enviar</button>
    </form>
  );
};

export default ValidacaoHook;
