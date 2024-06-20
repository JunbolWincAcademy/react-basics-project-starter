import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-basics-project-starter/', //✅ this was added to correct the wrong index.html issue
  plugins: [react()],
});
//to test
