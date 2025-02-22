import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Define a base apenas se estiver no GitHub Pages
const isGitHubPages = process.env.NODE_ENV === "production";

export default defineConfig({
  plugins: [react()],
  base: isGitHubPages ? "/Maficaliz/" : "/", // Usa "/" quando rodando localmente
});
