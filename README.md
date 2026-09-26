# Himanshu Chaurasiya — Full-Stack Developer Portfolio

A full-stack personal portfolio built with React + Vite on the frontend and Node.js + Express + MongoDB on the backend.

## Highlights
- Responsive modern portfolio UI
- About, Skills, Projects, Experience, Education and Contact sections
- Projects loaded from MongoDB through REST API
- Contact form stored in MongoDB
- Resume download button
- GitHub / LinkedIn links
- Mobile navigation
- Project filtering
- Clean component structure

## Tech Stack
Frontend: React, Vite, JavaScript, CSS
Backend: Node.js, Express.js, MongoDB, Mongoose
Other: REST API, Git, AWS, Docker, Terraform, LangGraph, OpenAI/Gemini

## Run locally

### 1. Backend
```bash
cd backend
npm install
copy .env.example .env
npm run seed
npm run dev
```

For PowerShell, `copy` can be replaced with:
```powershell
Copy-Item .env.example .env
```

Backend runs on `http://localhost:5000`.

### 2. Frontend
Open another terminal:
```bash
cd frontend
npm install
copy .env.example .env
npm run dev
```

Frontend runs on the Vite URL, normally `http://localhost:5173`.

### MongoDB
Use local MongoDB or MongoDB Atlas. Put the connection string in `backend/.env`.

### Resume
Place your PDF at:
`frontend/public/Himanshu-Chaurasiya-Resume.pdf`

If the file is absent, the Download Resume button still shows a helpful message rather than breaking the site.
