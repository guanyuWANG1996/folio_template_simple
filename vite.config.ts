import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import handlebars from 'handlebars';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const dataPath = path.resolve(__dirname, 'test-data.json');
    const hbsDevPlugin = {
      name: 'hbs-dev-transform',
      transformIndexHtml: {
        order: 'pre',
        handler(html: string) {
          let context: Record<string, any> = {};
          try {
            context = JSON.parse(fs.readFileSync(dataPath, 'utf-8'));
          } catch {}
          const template = handlebars.compile(html);
          return template(context);
        }
      },
      configureServer(server: any) {
        server.watcher.add(dataPath);
        server.watcher.on('change', (file: string) => {
          if (file === dataPath) {
            server.ws.send({ type: 'full-reload' });
          }
        });
      }
    };
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), hbsDevPlugin],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
