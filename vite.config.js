import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.(googleapis|gstatic)\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 31536000,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: 'Ascend',
        short_name: 'Ascend',
        id: 'ca.ascensionproject.ascend',
        description: 'A practice path for presence, embodiment, and conscious living.',
        theme_color: '#0c1018',
        background_color: '#0c1018',
        display: 'standalone',
        orientation: 'portrait',
        dir: 'ltr',
        lang: 'en',
        scope: '/',
        start_url: '/',
        categories: ['health', 'lifestyle', 'education'],
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
          { src: '/icon-512-maskable.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
        ],
        screenshots: [
          {
            src: '/screenshots/character.png',
            sizes: '1125x2296',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Character — presence level, stats, and cultivation profile',
          },
          {
            src: '/screenshots/quest.png',
            sizes: '1125x2296',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Quest — chapters, class paths, and the path of the Warrior, Healer, Sage',
          },
          {
            src: '/screenshots/map.png',
            sizes: '1125x2296',
            type: 'image/png',
            form_factor: 'narrow',
            label: 'Map — reveal the living world through presence and anchored practice',
          },
        ],
      },
    }),
  ],
})
