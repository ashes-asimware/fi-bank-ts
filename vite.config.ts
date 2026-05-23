import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'vite';

const certDir = path.resolve(__dirname, '.cert');
const pfxPath = path.join(certDir, 'localhost.pfx');
const passphrase = process.env.VITE_DEV_CERT_PASSPHRASE ?? 'fi-bank-local';
const localHostName = 'dampoo.bank';

export default defineConfig(({ command }) => {
  if (command !== 'serve') {
    return {};
  }

  if (!fs.existsSync(pfxPath)) {
    throw new Error(
      'Missing local HTTPS certificate. Run "npm run setup:https" first.'
    );
  }

  const https = {
    pfx: fs.readFileSync(pfxPath),
    passphrase,
  };

  return {
    server: {
      host: true,
      allowedHosts: [localHostName, 'localhost'],
      https,
    },
    preview: {
      host: true,
      https,
    },
  };
});
