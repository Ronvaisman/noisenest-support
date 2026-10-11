# NoiseNest Support and Legal Site

The public support, privacy, legal, accessibility, and sound-provenance site for NoiseNest.

Production: <https://ronvaisman.github.io/noisenest-support/>

## Prerequisites

- Node.js `>=22.13.0`

## Quick Start

```bash
npm install
npm run dev
npm run build
npm test
```

`npm run build` produces a static export in `out/`. GitHub Actions deploys that directory to GitHub Pages whenever `main` changes. All routes are static and the site intentionally has no account, form, analytics, advertising, or tracking integration.

## Public-content boundary

This repository contains only the public website and public artwork. NoiseNest application source, production records, credentials, and signing material belong in the private application repository. Approved release audio is distributed separately through the app's Cloudflare-hosted audio service; this site describes that delivery and its privacy implications.
