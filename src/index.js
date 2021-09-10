import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UserProvider from "./context/UserProvider";
import { BrowserRouter } from "react-router-dom";
import UsersLiProvider from "./context/usersLiProvider";

ReactDOM.render(
  <React.StrictMode>
    <UsersLiProvider>
      <UserProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </UserProvider>
    </UsersLiProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
