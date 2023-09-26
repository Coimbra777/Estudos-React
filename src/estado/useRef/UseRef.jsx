import React from "react";

const UseRef = () => {
  const [comentarios, setComentario] = React.useState([]);
  const [input, setInput] = React.useState("");
  const inputElement = React.useRef();

  function handleClick() {
    setComentario([...comentarios, input]);
    setInput("");
    inputElement.current.focus();
  }

  return (
    <div>
      <ul>
        {comentarios.map((comentario) => (
          <li key={comentario}>{comentario}</li>
        ))}
      </ul>
      <input
        type="text"
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Adicionar</button>
    </div>
  );
};

export default UseRef;
