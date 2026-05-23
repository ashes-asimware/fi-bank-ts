# fi-bank-ts

FI sample app to test UI

## Local HTTPS setup (Windows)

This app can run locally over HTTPS with a trusted self-signed certificate.

1. Install dependencies:

```bash
npm install
```

2. Generate and trust a local certificate for `dampoo.bank` (and `localhost`) in your current user certificate store:

```bash
npm run setup:https
```

The setup script also tries to add this mapping in your hosts file:

```text
127.0.0.1 dampoo.bank
```

If that step warns about permissions, re-run the command in an elevated terminal or add the line manually to `C:\Windows\System32\drivers\etc\hosts`.

3. Start the app:

```bash
npm run dev
```

Then open `https://localhost:5173/`.

Primary local URL:

`https://dampoo.bank:5173/`
