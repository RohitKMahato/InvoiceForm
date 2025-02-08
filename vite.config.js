// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   resolve: {
//     alias: {
//       '/components': '/src/components',
//     },
//   },
// });






// export default {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//   },
// };












import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/InvoiceForm/',
  resolve: {
    alias: {
      '/components': '/src/components',
    },
  },
  server: {
    hmr: {
      overlay: false, // Disable HMR overlay
    },
  },
  css: {
    postcss: `./postcss.config.js`,
  }
});

