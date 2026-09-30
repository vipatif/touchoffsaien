import {existsSync} from 'node:fs';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';
import {chooseRoot, createStaticServer} from './serve.mjs';

function ensureBuild() {
  if (existsSync(join(process.cwd(), '.next-production', 'index.html'))) return;

  const nextBin = join(
    process.cwd(),
    'node_modules',
    '.bin',
    process.platform === 'win32' ? 'next.cmd' : 'next'
  );

  const result = spawnSync(nextBin, ['build'], {
    stdio: 'inherit',
    shell: process.platform === 'win32'
  });

  if (result.status !== 0) {
    process.exit(result.status || 1);
  }
}

ensureBuild();

const port = Number(process.env.PORT || 3000);
const root = chooseRoot();

createStaticServer(root).listen(port, () => {
  console.log(`Touch of Saien preview: http://localhost:${port}`);
  console.log(`Serving: ${root}`);
});
