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
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
  },
  build: {
    // Минификация и оптимизация
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Code splitting для лучшего кэширования
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          router: ["react-router-dom"],
          ui: ["@radix-ui/react-dialog", "@radix-ui/react-dropdown-menu"],
          utils: ["clsx", "tailwind-merge"],
        },
      },
    },
    // Размер chunks
    chunkSizeWarningLimit: 1000,
    // Сжатие
    reportCompressedSize: true,
    // Sourcemaps только для development
    sourcemap: mode === "development",
  },
  // Предзагрузка модулей
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom"],
  },
}));
