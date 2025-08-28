# Putus Production Website

Modern advertising/branding production house website built with React (frontend) + FastAPI (backend).

## Setup

### 1. Clone repository
```bash
git clone <your-repo-url> putusproduction
cd putusproduction
```

### 2. Frontend setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Backend setup
```bash
cd backend
pip install -r requirements.txt
uvicorn main:app --reload
```

### 4. Deployment
- Frontend: GitHub Pages (auto from Actions)
- Backend: Deploy to Hostinger VPS or any server (Docker recommended)

Domain: [https://putusproduction.com](https://putusproduction.com)


### 5. GitHub Pages Deployment
This repo includes a GitHub Actions workflow (`.github/workflows/deploy-frontend.yml`).  
Once you push the repo to GitHub (main branch), the frontend will be automatically built and deployed to **GitHub Pages**.

- Go to your repo Settings → Pages
- Set "Deploy from branch" → `gh-pages` branch (created by the workflow)
- Your site will be live at: `https://<your-username>.github.io/putusproduction`
