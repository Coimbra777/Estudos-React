import React from "react";
// const Exemplo = () => {
//   const [contar, setContar] = React.useState(0);
//   function aumentar() {
//     setContar(contar + 1);
//   }

//   function diminuir() {
//     setContar(contar - 1);
//   }
//   return (
//     <div>
//       <button onClick={aumentar}>+</button>
//       <button onClick={diminuir}>-</button>
//       <p>{contar}</p>
//     </div>
//   );
// };

function reducer(state, action) {
  console.log(action);
  if (action === "aumentar") {
    return state + 1;
  }
  if (action === "diminuir") {
    return state - 1;
  }
  return new Error("action não existe");
}

const Exemplo = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);
  return (
    <div>
      <button onClick={() => dispatch("aumentar")}>+</button>
      <button onClick={() => dispatch("diminuir")}>-</button>
      <p>{state}</p>
    </div>
  );
};

export default Exemplo;
