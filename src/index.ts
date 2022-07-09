#!/usr/bin/env node
import path from 'path';
import fs from 'fs';
import { migrate } from './migrate';

const main = () => {
  const [, , firstArg] = process.argv;

  if (!firstArg) {
    console.error('unknown input.');
    process.exit(1);
  }
  if (firstArg.split('.')[-1] === 'html') {
    console.error('unsupported format.');
    process.exit(1);
  }

  const targetPath = path.resolve(firstArg);
  const outPath = targetPath.split('/').slice(0, -1).join('/') + '/index.md';
  const targetFile = fs.readFileSync(targetPath, 'utf-8');
  const result = migrate(targetFile);

  fs.writeFileSync(outPath, result);
};

main();
