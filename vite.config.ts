import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr';
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from '@vitejs/plugin-react'
export default defineConfig({
  plugins: [react(), tailwindcss(),
     svgr({
      // Correct configuration options
      svgrOptions: {
        exportType: 'named',
        namedExport: 'ReactComponent',
        ref: true,
        svgo: false,
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
