import React from "react";

const ExercicioRef = () => {
  const [carrinho, setCarrinho] = React.useState(0);
  const [notificação, setNotificação] = React.useState(null);
  const timeoutRef = React.useRef();

  function handleClick() {
    setCarrinho(carrinho + 1);
    setNotificação("Item adicionado");

    clearTimeout(timeoutRef.current);
    setTimeout(() => {
      timeoutRef.current = setNotificação(null);
    }, 2000);
  }

  return (
    <div>
      <p>{notificação}</p>
      <button onClick={handleClick}>Adicionar ao carrinho {carrinho}</button>
    </div>
  );
};

export default ExercicioRef;
