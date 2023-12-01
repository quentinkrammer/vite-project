import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "primereact/resources/themes/bootstrap4-light-blue/theme.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

export const three = 3;

if (import.meta.env.MODE !== "test")
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </React.StrictMode>
  );
