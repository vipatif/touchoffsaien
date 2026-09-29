import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtempSync, mkdirSync, writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {chooseRoot, parseRange, resolvePublicPath} from '../scripts/serve.mjs';

test('production export is preferred for preview', () => {
  const root = mkdtempSync(join(tmpdir(), 'saien-serve-'));
  mkdirSync(join(root, '.next-production'));
  mkdirSync(join(root, 'out'));
  writeFileSync(join(root, '.next-production', 'index.html'), 'fresh');
  writeFileSync(join(root, 'out', 'index.html'), 'old');
  assert.equal(chooseRoot(root), join(root, '.next-production'));
});

test('routes resolve to static export files without escaping root', () => {
  const root = mkdtempSync(join(tmpdir(), 'saien-path-'));
  mkdirSync(join(root, 'visit'), {recursive: true});
  writeFileSync(join(root, 'visit', 'index.html'), 'visit');
  writeFileSync(join(root, '404.html'), 'missing');
  assert.equal(resolvePublicPath(root, '/visit/'), join(root, 'visit', 'index.html'));
  assert.equal(resolvePublicPath(root, '/missing'), join(root, '404.html'));
  assert.equal(resolvePublicPath(root, '/../secret'), join(root, '404.html'));
});

test('byte ranges support video seeking including suffix ranges', () => {
  assert.deepEqual(parseRange('bytes=10-19', 100), {start: 10, end: 19});
  assert.deepEqual(parseRange('bytes=90-', 100), {start: 90, end: 99});
  assert.deepEqual(parseRange('bytes=-25', 100), {start: 75, end: 99});
  assert.equal(parseRange('bytes=120-140', 100), null);
});
