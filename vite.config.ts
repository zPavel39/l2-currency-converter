import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { VitePWAOptions } from 'vite-plugin-pwa'
import { VitePWA } from 'vite-plugin-pwa'

const vitePWA: Partial<VitePWAOptions> = {
	registerType: 'prompt',
	devOptions: {
		enabled: true,
	},
	workbox: {
		sourcemap: true,
		globDirectory: '/',
		globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
	},
	manifest: {
		name: 'L2Converter',
		short_name: 'L2C',
		description: 'currency converter',
		theme_color: '#ffffff',
		/* icons: [
			{
				src: '/assets/images/chets.webp',
				sizes: '192x192',
				type: 'image/webp',
			},
			{
				src: '/assets/images/chets.webp',
				sizes: '512x512',
				type: 'image/webp',
			},
		], */
	},
}

export default defineConfig({
	plugins: [react(), VitePWA(vitePWA)],
})
