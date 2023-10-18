import React from "react";
import { HOST } from "./config";
import { Server } from "./modules";
import Menu from "./component/Menu/Menu";
import "./App.css";

export const ServerContext = React.createContext<Server>(null!);

const App: React.FC = () => {
  const server = new Server(HOST);

  return (
    <ServerContext.Provider value={server}>
      <div>
        <Menu />
      </div>
    </ServerContext.Provider>
  );
};

export default App;
