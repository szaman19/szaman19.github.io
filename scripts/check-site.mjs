import { readdir, readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = path.resolve('_site');
async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  return (await Promise.all(entries.map(entry => entry.isDirectory()
    ? walk(path.join(dir, entry.name)) : path.join(dir, entry.name)))).flat();
}
const files = await walk(root);
let checked = 0;
for (const file of files.filter(file => file.endsWith('.html'))) {
  const html = await readFile(file, 'utf8');
  assert(html.includes('<html lang="en">'), `Missing language: ${file}`);
  assert(!html.includes('<script'), `Unexpected client JavaScript: ${file}`);
  assert(!/\{\{|\{%/.test(html), `Unrendered template: ${file}`);
  for (const match of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    const url = match[1];
    if (/^(?:[a-z]+:|\/\/)/i.test(url)) continue;
    const [pathname, fragment] = url.split('#');
    const target = pathname.startsWith('/')
      ? path.join(root, decodeURIComponent(pathname))
      : pathname ? path.resolve(path.dirname(file), decodeURIComponent(pathname)) : file;
    let destination = target;
    try {
      if ((await stat(destination)).isDirectory()) destination = path.join(destination, 'index.html');
      await stat(destination);
    } catch { assert.fail(`Broken link ${url} in ${path.relative(root, file)}`); }
    if (fragment && destination.endsWith('.html')) {
      const content = await readFile(destination, 'utf8');
      assert(content.includes(`id="${fragment}"`), `Missing anchor ${url} in ${file}`);
    }
    checked++;
  }
}
assert(files.includes(path.join(root, 'CV-Updated.pdf')), 'Missing CV');
assert(files.includes(path.join(root, 'feed.xml')), 'Missing feed');
console.log(`Checked ${files.filter(file => file.endsWith('.html')).length} HTML pages and ${checked} local links.`);
