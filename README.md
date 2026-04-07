# Hashim Ibn Auf - Personal Website

This project is a complete, production-ready personal website for Hashim Ibn Auf, Former Minister of Infrastructure and Transport – Sudan.

## 🧱 Tech Stack

- **Frontend:** React, Tailwind CSS, Motion
- **Backend:** Express (Node.js) - *Note: A Django example is also provided in the `django_backend/` directory.*
- **API:** RESTful endpoints for biography, achievements, news, and media.

## 📂 Project Structure

- `src/`: React frontend source code.
  - `components/`: Reusable UI components.
  - `lib/`: Utility functions.
  - `App.tsx`: Main layout and routing.
- `server.ts`: Express server and API endpoints.
- `django_backend/`: (Optional) Equivalent Django backend implementation.

## ⚙️ Running Locally

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
The app will be available at `http://localhost:3000`.

### 3. Build for Production
```bash
npm run build
npm start
```

## 🎨 Design System

- **Primary Color:** Deep Green (#1B4332)
- **Secondary Color:** Dark Gray / Charcoal (#212529)
- **Accent Color:** Elegant Gold (#C6A75E)
- **Background Color:** Light Gray / Off-white (#F8F9FA)
- **Text Color:** Dark Neutral (#343A40)

## 🔌 API Endpoints

- `GET /api/biography`: Returns the full biography and career timeline.
- `GET /api/achievements`: Returns a list of major projects and contributions.
- `GET /api/news`: Returns the latest news and press releases.
- `GET /api/media`: Returns the photo and video gallery.
- `POST /api/contact`: Submits a contact form message.
