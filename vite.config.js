import { defineConfig } from "vite";

import path from "path";
// import { path } from 'path'
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "src/assets"),
      "@api": path.resolve(__dirname, "src/components/api"),
      "@atoms": path.resolve(__dirname, "src/components/atoms"),
      "@molecules": path.resolve(__dirname, "src/components/molecules"),
      "@navigation": path.resolve(__dirname, "src/components/navigation"),
      "@organisms": path.resolve(__dirname, "src/components/organisms"),
      "@screens": path.resolve(__dirname, "src/components/screens"),
      "@template": path.resolve(__dirname, "src/components/template"),
      "@src": path.resolve(__dirname, "src/"),
      "@redirection": path.resolve(__dirname, "v/"),
    },
  },
});
