import { defineConfig, loadEnv } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { cloudflare } from "@cloudflare/vite-plugin";

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '')
    return {
      define: {
        // Provide an explicit app-level constant derived from an env var.
        __REACT_APP_BASE__: JSON.stringify(env.REACT_APP_BASE),
      },
      // Example: use an env var to set the dev server port conditionally.
      server: {
        port: env.APP_PORT ? Number(env.APP_PORT) : 5173,
      },
      plugins: [tailwindcss(), react(), cloudflare()]
    }
  }
)