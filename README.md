# Putus Production — Demo site (multi-page)

This archive contains a ready-to-upload React + Vite + Tailwind project for Putus Production.
It is intentionally unique and does NOT copy text or images from other companies.

## How to run locally

```bash
cd frontend
npm install
npm run dev
```

Open http://localhost:3000/putusproduction/

## Build for production
```bash
cd frontend
npm run build
```

## Deploy to GitHub Pages
Ensure your repo uses the `vite.config.ts` base '/putusproduction/' and push to GitHub.
Add/update GitHub Actions workflow to build frontend and publish `frontend/dist` to `gh-pages` branch.
