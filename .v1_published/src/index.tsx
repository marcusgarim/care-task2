import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Website } from "./screens/Website";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Website />
  </StrictMode>,
);
