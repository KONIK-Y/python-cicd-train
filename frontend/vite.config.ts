import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { basePath } from './src/constant/constant';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: basePath,
});
