import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import InstallPWAButton from "./components/InstallPWAButton.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <InstallPWAButton />
  </>
);
