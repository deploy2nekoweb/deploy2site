import fs from 'fs/promises';
import * as sass from 'sass';

await fs.cp('src', 'dist', { recursive: true });

const files = await fs.readdir('dist', { recursive: true });
for (const file of files) {
  if (file.endsWith('.scss')) {
    const result = sass.compile(`dist/${file}`);
    await fs.writeFile(`dist/${file.replace(/\.scss$/, '.css')}`, result.css);
    await fs.rm(`dist/${file}`);
  }
}