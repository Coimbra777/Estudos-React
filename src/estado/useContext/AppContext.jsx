import React from "react";
import UserContext from "./UserContext";
import Product from "./Product";
import { GlobalStorage } from "./GlobalContext";

const AppContext = () => {
  return (
    // <UserContext.Provider value={{ nome: "Maria" }}>
    //   <Product />
    // </UserContext.Provider>
    <GlobalStorage>
      <Product />
    </GlobalStorage>
  );
};

export default AppContext;
