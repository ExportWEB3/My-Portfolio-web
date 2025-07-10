import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { GlobalUseContextProvider } from "./context/context.tsx";
import "remixicon/fonts/remixicon.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalUseContextProvider>
      <App />
    </GlobalUseContextProvider>
  </StrictMode>
);
