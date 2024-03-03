import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@app", replacement: path.resolve(__dirname, "src/app") },
      { find: "@modules", replacement: path.resolve(__dirname, "src/modules") },
      { find: "@shared", replacement: path.resolve(__dirname, "src/shared") },
    ],
  },
});
