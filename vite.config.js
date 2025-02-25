

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   server:{
//     host: '0.0.0.0',
//     hmr: {
//       overlay: false
//     },
//     fs:{
//       strict: false,
//     },
//   },
//   base: '/InvoiceForm/',
//   resolve: {
//     alias: {
//       '/components': '/src/components',
//     },
//   },

//   css: {
//     postcss: `./postcss.config.js`,
//   }
// });



import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    hmr: {
      overlay: false
    },
    fs: {
      strict: false,
    },
  },
  base: '/InvoiceForm/', // Change this if your GitHub repo name is different
  resolve: {
    alias: {
      '/components': '/src/components',
    },
  },
  css: {
    postcss: './postcss.config.js',
  }
});
