import { defineConfig } from 'vite';
import { resolve } from 'path';
import { globSync } from 'glob';

// Find all HTML files in the project
const htmlFiles = globSync('**/*.html', { ignore: ['node_modules/**', 'dist/**'] });
const inputEntries = {};

htmlFiles.forEach((file) => {
  // Use the filename without extension as the key (keep folders to preserve output structure)
  const name = file.replace(/\.html$/, '');
  inputEntries[name] = resolve(__dirname, file);
});

export default defineConfig({
  build: {
    rollupOptions: {
      input: inputEntries
    }
  }
});
