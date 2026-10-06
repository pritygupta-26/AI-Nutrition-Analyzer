# AI Nutrition Analyzer

A full-stack AI food nutrition analyzer built with React.js, Node.js, Express.js, Multer, Axios and Google Gemini Vision API.

## Features
- Upload food image
- Image preview
- 5 MB image-size validation
- AI food identification
- Estimated serving size
- Calories, protein, carbohydrates, fat, fiber and sugar
- Health score
- Ingredients
- Potential health benefits
- Nutrition recommendation
- Responsive professional dashboard
- No database
- No authentication
- Images are processed in memory and not permanently stored

## Architecture
React → Axios → Express → Multer memoryStorage → Gemini Vision API → JSON parser → React dashboard

## Setup

### 1. Backend
```bash
cd backend
npm install
copy .env.example .env
```

Open `backend/.env` and add your Gemini API key:
```env
PORT=5000
GEMINI_API_KEY=YOUR_GEMINI_API_KEY
```

Run:
```bash
npm run dev
```

Backend:
http://localhost:5000

### 2. Frontend
Open a second terminal:
```bash
cd frontend
npm install
npm run dev
```

Frontend:
http://localhost:5173

## API
POST `/api/nutrition/analyze`

Content-Type: multipart/form-data

Field:
`image`

## Disclaimer
Nutrition values are AI-generated estimates and can vary according to ingredients, preparation method and serving size. This application is not medical advice.
