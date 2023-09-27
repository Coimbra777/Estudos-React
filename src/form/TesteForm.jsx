import React from "react";

const TesteForm = () => {
  // estado para cada campo
  const [nome, setNome] = React.useState("");
  const [email, setEmail] = React.useState("");

  //objeto com valores dos campos
  const [form, setForm] = React.useState({
    nome: "",
    email: "",
  });

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
  }

  function handleChange({ target }) {
    const { id, value } = target;
    setForm({ ...form, [id]: value });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome</label>
      <input
        id="nome"
        type="text"
        value={form.nome}
        // onChange={(event) => setNome(event.target.value)}
        onChange={handleChange}
      />
      {/* {form.nome} */}
      <br />
      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={form.email}
        // onChange={(event) => setEmail(event.target.value)}
        onChange={handleChange}
      />
      <br />
      <button>Enviar</button>
    </form>
  );
};

export default TesteForm;
