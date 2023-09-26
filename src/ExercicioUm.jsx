import React from "react";

const ExercicioUm = () => {
  const mario = {
    cliente: "Mario",
    idade: 31,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
      { nome: "Guitarra", preco: "R$ 3500" },
    ],
    ativa: false,
  };

  const Luana = {
    cliente: "Luana",
    idade: 27,
    compras: [
      { nome: "Notebook", preco: "R$ 2500" },
      { nome: "Geladeira", preco: "R$ 3000" },
      { nome: "Smartphone", preco: "R$ 1500" },
    ],
    ativa: true,
  };

  const dados = mario;

  // limpa o array e tranforma string em número
  const total = dados.compras
    .map((item) => Number(item.preco.replace("R$ ", "")))
    .reduce((a, b) => a + b);
  // console.log(total);

  return (
    <div>
      <p>Nome: {dados.cliente}</p>
      <p>Idade: {dados.idade} anos</p>
      <p>
        Situação:{" "}
        <span style={{ color: dados.ativa ? "green" : "red" }}>
          {dados.ativa ? "Ativa" : "Inativo"}
        </span>
      </p>
      <p>Total gasto: R${total}</p>
      {total > 10000 && <p>Você está gastando muito</p>}
    </div>
  );
};

export default ExercicioUm;
