import React from "react";
import Input from "./Input";
import Select from "./Select";
import Radio from "./Radio";

const Components = () => {
  // estados para o input
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");
  // estado para o select
  const [produto, setProduto] = React.useState("");
  // estado para o radio
  const [cor, setCor] = React.useState("");

  return (
    <div>
      <Input
        id="nome"
        label="Nome"
        type="text"
        value={nome}
        setValue={setNome}
      />
      <Input
        id="email"
        label="Email"
        type="text"
        value={email}
        setValue={setEmail}
      />
      <br />
      <br />

      {/* <button>Enviar</button> */}
      <form>
        <Select
          options={["Notebook", "Smartphone", "Tablet"]}
          value={produto}
          setValue={setProduto}
        />
      </form>
      <br />
      <form>
        <Radio
          options={["azul", "verde", "amarelo"]}
          value={cor}
          setValue={setCor}
        />
      </form>
    </div>
  );
};

export default Components;
