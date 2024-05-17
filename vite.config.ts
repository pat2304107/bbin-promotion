import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import VitePluginEslint from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';
import publishConfig from './publish.config';

const date = new Date();
const VITE_APP_VERSION = `${date.getFullYear().toString().padStart(4, '0')}${(date.getMonth() + 1).toString().padStart(2, '0')}${date.getDate().toString().padStart(2, '0')}${date.getHours().toString().padStart(2, '0')}${date.getMinutes().toString().padStart(2, '0')}${date.getSeconds().toString().padStart(2, '0')}`;

// https://vitejs.dev/config/
export default defineConfig({
    base: publishConfig.path,
    plugins: [
        vue(),
        VitePluginEslint({ cache: false }),
        createHtmlPlugin({
            minify: {
                collapseWhitespace: true,
                keepClosingSlash: true,
                removeComments: true,
                removeRedundantAttributes: true,
                removeScriptTypeAttributes: true,
                removeStyleLinkTypeAttributes: true,
                useShortDoctype: true,
                minifyCSS: true,
                ignoreCustomComments: [/^\s+VITE_APP_VERSION/]
            },
            inject: {
                data: {
                    VITE_GTM_ID: publishConfig.gtm,
                    VITE_APP_VERSION,
                    injectScript: '<script>let count=0;const trackResourceTimeout=()=>{if((count+=1)>=10){let e=document.getElementById("app");e?.hasChildNodes()||window.dataLayer?.push({event:"error_log",error:"必要資源加載逾時_10秒"}),count=0}else setTimeout(trackResourceTimeout,1e3)};setTimeout(trackResourceTimeout,1e3);</script>'
                }
            }
        })
    ],
    resolve: {
        alias: [
            { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) }
        ]
    }
});
