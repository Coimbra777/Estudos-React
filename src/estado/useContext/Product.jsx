import React from "react";
import UserContext from "./UserContext";
import { GlobalContext } from "./GlobalContext";

const Product = () => {
  // const dados = React.useContext(UserContext);
  const global = React.useContext(GlobalContext);
  console.log(global);
  return <div></div>;
};

export default Product;
