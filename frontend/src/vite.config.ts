import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 你可以改成 5173
    strictPort: true,
    host: true, // 允许外部访问
  },
  define: {
    global: "window", // 解决 "Cannot redefine property: ethereum" 问题
  },
});
