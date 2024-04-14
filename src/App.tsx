import { createContext, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";

// const UserContext = createContext(null);

const App: React.FC = () => {
  return (
    // <UserContext.Provider value={null}>
      <Header />
    // </UserContext.Provider>
  );
};

export default App;
