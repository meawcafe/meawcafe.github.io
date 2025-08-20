import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./css/theme.css";
import "./css/responsive.css";
import "./css/animation.css";
import "./css/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
