import { cp, rm, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const projectRoot = process.cwd();
const buildDirectory = resolve(projectRoot, 'dist');
const publishedPaths = [
	'_astro',
	'about',
	'cv',
	'images',
	'notes',
	'record',
	'research',
	'responsibilities',
	'teaching',
	'favicon.ico',
	'favicon.svg',
	'index.html',
	'.nojekyll',
];

for (const publishedPath of publishedPaths) {
	await rm(resolve(projectRoot, publishedPath), { force: true, recursive: true });
}

await cp(buildDirectory, projectRoot, { recursive: true });
await writeFile(resolve(projectRoot, '.nojekyll'), '');

console.log(`Prepared static GitHub Pages files in ${projectRoot}`);