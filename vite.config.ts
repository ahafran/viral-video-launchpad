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
    // Включаем минификацию
    minify: "terser",
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Настраиваем размеры чанков
    rollupOptions: {
      output: {
        manualChunks: {
          // Выделяем React в отдельный чанк
          react: ["react", "react-dom"],
          // Выделяем UI библиотеки
          ui: [
            "@radix-ui/react-dialog",
            "@radix-ui/react-dropdown-menu",
            "@radix-ui/react-toast",
          ],
          // Выделяем роутинг
          router: ["react-router-dom"],
          // Выделяем иконки
          icons: ["lucide-react"],
        },
        // Оптимизируем имена файлов для кэширования
        entryFileNames: "js/[name]-[hash].js",
        chunkFileNames: "js/[name]-[hash].js",
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name?.split(".").at(1);
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType ?? "")) {
            return `images/[name]-[hash][extname]`;
          }
          if (/css/i.test(extType ?? "")) {
            return `css/[name]-[hash][extname]`;
          }
          return `assets/[name]-[hash][extname]`;
        },
      },
    },
    // Оптимизируем размер чанков
    chunkSizeWarningLimit: 1000,
    // Включаем source maps только для dev
    sourcemap: mode === "development",
    // Включаем CSS code splitting
    cssCodeSplit: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5173,
    allowedHosts: true,
    hmr: {
      overlay: false,
    },
  },
  // Оптимизация зависимостей
  optimizeDeps: {
    include: ["react", "react-dom", "react-router-dom", "lucide-react"],
  },
}));
