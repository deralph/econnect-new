import React, { createContext, useContext, useState } from "react";

const appProvider = createContext();
const [sidebar, setSidebar] = useState(true);

const Context = ({ children }) => {
  return (
    <appProvider.Provider value={{ sidebar, setSidebar }}>
      {children}
    </appProvider.Provider>
  );
};

export const useGlobal = () => useContext(appProvider);

export default Context;
