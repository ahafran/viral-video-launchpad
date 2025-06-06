import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  preloadCriticalResources,
  addResourceHints,
} from "@/utils/preloadCritical";
import { registerSW } from "@/utils/serviceWorker";
import {
  measurePageLoad,
  measureWebVitals,
} from "@/utils/performanceMonitoring";

// Добавляем resource hints как можно раньше
addResourceHints();

// Preload критических ресурсов
preloadCriticalResources();

// Регистрируем Service Worker
registerSW();

// Мониторинг производительности
measurePageLoad();
measureWebVitals();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
