import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "pp-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-toast",
          ],
          router: ["react-router-dom"],
          icons: ["lucide-react"],
        },
      },
    },
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
  },
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "lucide-react"],
  },
}));
