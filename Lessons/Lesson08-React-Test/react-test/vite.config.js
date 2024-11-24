import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // Global test fonksiyonlarını etkinleştirir
    environment: "jsdom", // React bileşenlerini test etmek için JSDOM ortamı kullanılır
    setupFiles: "./vitest.setup.js", // Jest DOM ayarlarını dahil etmek için
  },
});
