import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const componentName = process.argv[2];

if (!componentName) {
  console.error('Please provide a component name.');
  process.exit(1);
}

const componentDirectory = path.join(__dirname, componentName);

// Create directory
fs.mkdirSync(componentDirectory);

// Create component files
fs.writeFileSync(path.join(componentDirectory, `${componentName}.tsx`), '');
fs.writeFileSync(path.join(componentDirectory, `${componentName}.css`), '');
fs.writeFileSync(path.join(componentDirectory, 'index.ts'), `export { default } from './${componentName}';`);

console.log(`Component "${componentName}" created successfully.`);
