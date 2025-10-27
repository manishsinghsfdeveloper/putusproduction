# Putus Production — Full demo frontend

This is a demo-ready frontend for Putus Production (React + Vite + Tailwind + Framer Motion).

## Run locally
cd frontend
npm install
npm run dev

Open http://localhost:5173/putusproduction/

## Deploy
Push to GitHub and use the included GitHub Actions workflow to publish to GitHub Pages.

# Trigger redeploy

## 📂 Folder Structure

<details>
  <summary>🔍 View full folder tree</summary>

```bash
PutusProduction/
├── .github/
│   └── workflows/
│       └── …              # (workflow files)
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── utils/
│   ├── tests/
│   ├── Dockerfile
│   └── README.md
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│   ├── package.json
│   └── README.md
├── node_modules/
├── DEV_GUIDE.md
├── README.md
├── package-lock.json
└── package.json
</details> ```
