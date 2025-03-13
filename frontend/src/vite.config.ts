import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173, // 默认端口，可以改成你想要的
    open: true, // 启动时自动打开浏览器
    proxy: {
      "/api": {
        target: "http://localhost:5000", // 代理后端 API，修改成你的后端地址
        changeOrigin: true,
        secure: false,
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src", // 方便导入 src 目录下的组件
    },
  },
});
