import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import './App.css'
import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

window.data = []

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
