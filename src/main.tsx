import "./styles/General.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter basename="/posts_vite-app/">
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
