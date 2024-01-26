import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import legacy from '@vitejs/plugin-legacy';
import { fileURLToPath, URL } from 'url';

// https://vitejs.dev/config/
export default defineConfig({
	base: './',
	lintOnSave: false,
	plugins: [
		vue(),
		eslintPlugin({
			include: ['src/**/*.js', 'src/**/*.vue', 'src/*.js', 'src/*.vue'],
		}),
		legacy({
			targets: ['defaults', 'not IE 11'],
		}),
		AutoImport({
			resolvers: [ElementPlusResolver()],
		}),
		Components({
			resolvers: [ElementPlusResolver()],
		}),
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@demo': fileURLToPath(new URL('./src/view/demo', import.meta.url)),
		},
	},
	server: {
		// host: '43.143.225.216',
		host: '127.0.0.1',
		port: '5173',
		https: false,
		// proxy: {
		//   '/api': {
		//     target: 'https://api.vvhan.com',
		//     changeOrigin: true,
		//     // rewrite: (path) => path.replace(/^\/api/, ''),
		//   }
		// },
	},
});
