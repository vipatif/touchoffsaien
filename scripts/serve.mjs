import {createServer} from 'node:http';
import {createReadStream, existsSync, statSync} from 'node:fs';
import {resolve, extname, join, normalize, relative} from 'node:path';
import {pathToFileURL} from 'node:url';

const contentTypes = new Map([
  ['.html', 'text/html; charset=utf-8'],
  ['.txt', 'text/plain; charset=utf-8'],
  ['.css', 'text/css; charset=utf-8'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.xml', 'application/xml; charset=utf-8'],
  ['.png', 'image/png'],
  ['.jpg', 'image/jpeg'],
  ['.jpeg', 'image/jpeg'],
  ['.webp', 'image/webp'],
  ['.svg', 'image/svg+xml'],
  ['.mp4', 'video/mp4'],
  ['.woff2', 'font/woff2']
]);

export function chooseRoot(cwd = process.cwd()) {
  const preferred = resolve(cwd, '.next-production');
  const fallback = resolve(cwd, 'out');
  if (existsSync(join(preferred, 'index.html'))) return preferred;
  return fallback;
}

export function resolvePublicPath(root, requestPath) {
  const cleanPath = decodeURIComponent(new URL(requestPath, 'http://localhost').pathname);
  const normalized = normalize(cleanPath).replace(/^(\.\.[/\\])+/, '');
  let candidate = resolve(root, `.${normalized}`);
  if (existsSync(candidate) && statSync(candidate).isDirectory()) candidate = join(candidate, 'index.html');
  if (!existsSync(candidate) && !extname(candidate)) candidate = join(candidate, 'index.html');
  if (!existsSync(candidate)) candidate = join(root, '404.html');
  if (relative(root, candidate).startsWith('..')) return null;
  return candidate;
}

export function parseRange(rangeHeader, size) {
  const match = /^bytes=(\d*)-(\d*)$/.exec(rangeHeader || '');
  if (!match) return null;
  let start = match[1] === '' ? null : Number(match[1]);
  let end = match[2] === '' ? null : Number(match[2]);
  if (start === null && end === null) return null;
  if (start === null) {
    const suffixLength = Math.min(end ?? 0, size);
    start = size - suffixLength;
    end = size - 1;
  } else if (end === null || end >= size) {
    end = size - 1;
  }
  if (!Number.isInteger(start) || !Number.isInteger(end) || start < 0 || end < start || start >= size) return null;
  return {start, end};
}

export function createStaticServer(root = chooseRoot()) {
  return createServer((req, res) => {
    const filePath = resolvePublicPath(root, req.url || '/');
    if (!filePath || !existsSync(filePath)) {
      res.writeHead(404);
      res.end('Not found');
      return;
    }

    const size = statSync(filePath).size;
    const type = contentTypes.get(extname(filePath).toLowerCase()) || 'application/octet-stream';
    const range = parseRange(req.headers.range, size);
    const headers = {'Content-Type': type, 'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache'};

    if (range) {
      res.writeHead(206, {
        ...headers,
        'Content-Length': range.end - range.start + 1,
        'Content-Range': `bytes ${range.start}-${range.end}/${size}`
      });
      createReadStream(filePath, range).pipe(res);
      return;
    }

    res.writeHead(200, {...headers, 'Content-Length': size});
    createReadStream(filePath).pipe(res);
  });
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const port = Number(process.env.PORT || 3000);
  const root = chooseRoot();
  createStaticServer(root).listen(port, () => {
    console.log(`Touch of Saien preview: http://localhost:${port}`);
    console.log(`Serving: ${root}`);
  });
}
