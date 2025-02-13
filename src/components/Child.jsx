import React, { useContext } from "react";
import MyContext from "./MyContext";

const Child = () => {
  const contextValue = useContext(MyContext);

  return <p><h2>{contextValue}</h2></p>;
};

export default Child;