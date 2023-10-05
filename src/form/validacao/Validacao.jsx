import React from "react";
import Input from "../Input";

const Validacao = () => {
  const [cep, setCep] = React.useState("");
  const [error, setError] = React.useState(null);

  // função para validar
  function validateCep(value) {
    if (value.length === 0) {
      setError("Preencha um valor");
      return false;
    } else if (!/^\d{5}-?\d{3}$/.test(value)) {
      setError("Preencha um CEP válido");
      return false;
    } else {
      setError(null);
      return true;
    }
  }
  // função para validar o foco do elemento
  function handleBlur({ target }) {
    // const regex = /^\d{5}-?\d{3}$/;
    // const validacao = regex.test(target.value);
    // console.log(validacao);
    validateCep(target.value);
  }
  // função para validar quando o usuário digitar
  function handleChange({ target }) {
    if (error) validateCep(target.value);
    setCep(target.value);
  }

  // função para validar botão enviar , event submit
  function handleSubmit(event) {
    event.preventDefault();
    if (validateCep(cep)) {
      console.log("ok");
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
        value={cep}
        // setValue={setCep}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {error && <p>{error}</p>}
      <br />

      <button>Enviar</button>
    </form>
  );
};

export default Validacao;
