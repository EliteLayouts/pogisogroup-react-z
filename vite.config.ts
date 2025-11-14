import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  base: "/",
  build: {
    outDir: "dist",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "next/link": path.resolve(__dirname, "src/lib/link-shim.tsx"),
    },
  },
  server: {
    port: 3000,
  },
});
