import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"

export default defineConfig({
  plugins: [react()],
  base: "/tpd-interactive-3/", // IMPORTANT: repo name
})