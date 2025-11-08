import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  root: path.resolve(__dirname, 'src'), // ✅ 指定项目源代码根目录
  plugins: [react()],
  base: './', // 保证构建资源使用相对路径
  build: {
    outDir: path.resolve(__dirname, 'dist'), // 输出目录为 dist
    emptyOutDir: true,
  }
})
