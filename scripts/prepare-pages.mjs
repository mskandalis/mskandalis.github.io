import { cp, mkdir, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const buildDirectory = resolve(projectRoot, 'dist');
const pagesDirectory = resolve(projectRoot, 'docs');

await rm(pagesDirectory, { force: true, recursive: true });
await mkdir(pagesDirectory, { recursive: true });
await cp(buildDirectory, pagesDirectory, { recursive: true });
await writeFile(resolve(pagesDirectory, '.nojekyll'), '');

console.log(`Prepared static GitHub Pages files in ${pagesDirectory}`);