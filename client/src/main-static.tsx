import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import AppStatic from "./App-static.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppStatic />
  </StrictMode>,
);