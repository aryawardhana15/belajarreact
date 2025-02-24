import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes"; // Sudah benar, cukup ini saja
import "./index.css"; // Import CSS tetap ada

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={Routes} />
  </StrictMode>
);
