import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Tornando o Vite acessível para todas as interfaces de rede
    watch: {
      usePolling: true, // Habilitando polling para detectar alterações em arquivos
    },
  },
})
 