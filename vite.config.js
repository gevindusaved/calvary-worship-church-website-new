import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base:'/calvary-worship-church-website-new/', //set to '/Calvary-Worship-Church-Website-New/'
  plugins: [react()]
})

//if you prefer hosting at https://username.github.io/calvary-worship-church-website-new

