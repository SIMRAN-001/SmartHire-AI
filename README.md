# 🚀 SmartHire AI

### AI-Powered Interview Preparation & Career Intelligence Platform

SmartHire AI is a full-stack AI-powered SaaS platform designed to help students and job seekers prepare for technical and HR interviews.

Users can upload their resume, receive AI-powered resume analysis, practice personalized interviews, and get intelligent feedback based on their performance.

## 🌐 Live Demo

🔗 **Live Application:** https://fir-1437d.web.app

> The frontend is deployed on Firebase Hosting and the backend is deployed on Render.

---

## ✨ Features

- 📄 AI-powered Resume Analysis
- 🤖 AI-generated Interview Questions
- 🎤 Interactive AI Interview Practice
- 💼 Technical & HR Interview Rounds
- 🧠 AI-powered Answer Evaluation
- 📊 Detailed Interview Performance Reports
- 📈 Question-wise Performance Analysis
- 💳 Credit-based Access System
- 💰 Razorpay Payment Integration
- 🔐 Firebase Google Authentication
- 🔑 JWT-based Authentication
- 🍪 Secure Cookie-based Sessions
- 📁 Resume PDF Upload
- 🎨 Modern Responsive UI
- ✨ Framer Motion Animations
- ☁️ Production Deployment
- 🔄 GitHub Actions CI/CD

---

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- Tailwind CSS
- Redux
- Axios
- React Router
- Framer Motion

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer
- CORS

### AI

- OpenRouter API
- AI Resume Analysis
- AI Interview Question Generation
- AI Interview Answer Evaluation

### Authentication

- Firebase Authentication
- Google Authentication
- JWT
- HTTP-only Cookies

### Payments

- Razorpay

### Database & Cloud

- MongoDB Atlas
- Firebase Hosting
- Render

### Development & Deployment

- Git
- GitHub
- GitHub Actions
- VS Code


## 🔄 How It Works


                    ┌─────────────────────┐
                    │       User          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Google Authentication│
                    │    Firebase Auth     │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │    Upload Resume    │
                    │        PDF          │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   AI Resume         │
                    │     Analysis        │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Skills & Experience │
                    │     Extraction      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Personalized AI     │
                    │ Interview Questions │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │   AI Interview      │
                    │ Technical + HR      │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Answer Evaluation   │
                    │ & AI Feedback       │
                    └──────────┬──────────┘
                               │
                               ▼
                    ┌─────────────────────┐
                    │ Performance Report  │
                    │   & Score Analysis  │
                    └─────────────────────┘




---

## 📂 Project Structure

```text
SmartHire-AI/
├── client/
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── config/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── index.js
│   └── package.json
│
├── .github/
│   └── workflows/
│
└── README.md
```

## ⚙️ Local Setup

### 1. Clone the Repository

git clone https://github.com/SIMRAN-001/SmartHire-AI.git
cd SmartHire-AI



### 2. Install Frontend Dependencies

cd client
npm install


### 3. Install Backend Dependencies

cd ../server
npm install


### 4. Environment Variables

Create a `.env` file inside the `client` folder:

VITE_FIREBASE_APIKEY=your_firebase_api_key
VITE_SERVER_URL=your_backend_url
VITE_RAZORPAY_KEY_ID=your_razorpay_key


Create a `.env` file inside the `server` folder:


PORT=8000
MONGODB_URI=your_mongodb_connection_string
JWTSECRET=your_jwt_secret
OPENROUTER_API_KEY=your_openrouter_api_key
RAZORPAY_KEY_ID=your_razorpay_key
RAZORPAY_KEY_SECRET=your_razorpay_secret


> ⚠️ Never commit `.env` files, API keys, passwords, or secret credentials to GitHub.

### 5. Run the Backend


cd server
npm run dev


### 6. Run the Frontend

Open another terminal:

cd client
npm run dev

The frontend will run on:

http://localhost:5173
