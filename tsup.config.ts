import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/**/*.ts'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format: ['esm'],
  target: 'es2020',
})
