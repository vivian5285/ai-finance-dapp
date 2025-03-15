import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174, // 你可以改成其他端口，比如 5174
    strictPort: true,
  },
});
