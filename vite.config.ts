import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginEslint from 'vite-plugin-eslint';
import publishConfig from './publish.config';

// https://vitejs.dev/config/
export default defineConfig({
    base: publishConfig.path,
    plugins: [
        vue(),
        VitePluginEslint({ cache: false })
    ],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
        ]
    }
});
