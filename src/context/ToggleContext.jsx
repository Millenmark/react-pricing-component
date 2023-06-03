/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

// Create a new context
const ToggleContext = createContext();

// Create a provider component
const ToggleProvider = ({ children }) => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  const handleToggleActive = () => {
    setIsToggleActive(!isToggleActive);
  };

  // Value object to be provided to consumers
  const value = {
    isToggleActive,
    handleToggleActive,
  };

  return (
    <ToggleContext.Provider value={value}>{children}</ToggleContext.Provider>
  );
};

export { ToggleContext, ToggleProvider };
