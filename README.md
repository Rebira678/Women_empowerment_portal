# Women Empowerment Portal

A full-stack MERN platform designed to empower African women through mentorship, programs, funding, education, success stories, and personal dashboards.
Includes full authentication (JWT), user actions (book, save, apply), resource management, success stories, and a beautifully styled React frontend with Tailwind CSS.

---

## 📁 Repository Structure

```
Women-Empowerment-Portal/
│
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── resourceController.js
│   │   └── actionController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── user.js
│   │   └── Resource.js
│   └── routes/
│       ├── authRoutes.js
│       ├── resourceRoutes.js
│       └── actionRoutes.js
│
└── frontend/
    ├── index.html
    ├── vite.config.js
    ├── package.json
    ├── vercel.json
    └── src/
        ├── api.js
        ├── App.jsx
        ├── main.jsx
        └── components/
            ├── Register.jsx
            ├── Login.jsx
            └── DashBoard.jsx
```

---

# 🔧 Tech Stack

### **Backend**

- Node.js
- Express
- MongoDB + Mongoose
- JWT Authentication
- bcrypt (password hashing)

### **Frontend**

- React (Vite)
- Bootstrap
- Responsive UI + smooth navigation
- African-themed success stories & design

### **Dev Tools**

- Vercel (Frontend Deployment)
- Render (Backend Deployment)
- Postman API Testing
- MongoDB Atlas / Local MongoDB

---

# 🚀 Features

### 🌐 Frontend Features

- Landing page with inspirational hero section
- Explore page with Training, Funding, Education
- Success Stories (African women achievements)
- Login & Register pages
- Smooth scrolling + responsive layouts
-

### 🔥 Backend Features

- Register / Login / Authentication
- JWT-based protected routes
- Add / Fetch Resources
- User actions: **book, save, apply**
- Get authenticated user profile
- MongoDB models for users and resources

---

## Live Demo

### Frontend (React + Vercel)

https://women-empowerment-portal-nne4.vercel.app

### Backend API (Express + Render)

https://women-empowerment-portal.onrender.com

# ⚙️ Installation and Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-repo.git
cd Women-Empowerment-Portal
```

---

# 🖥️ Backend Setup

### Install dependencies

```bash
cd backend
npm install
```

### Environment variables

Create `.env` inside `backend/`:

```
MONGO_URI=your_mongodb_connection
JWT_SECRET=your_secret_key
PORT=5000
```

### Run backend server

```bash
node server.js
```

Your backend runs at: **[http://localhost:5000](http://localhost:5000)**

---

# 🎨 Frontend Setup (React)

### Install dependencies

```bash
cd frontend
npm install
```

### Start frontend

```bash
npm run dev
```

Frontend runs at: **[http://localhost:5173](http://localhost:5173)**

---

# 🔌 Frontend API Helpers (src/api.js)

The frontend includes helper functions for:

- `registerUser()`
- `loginUser()`
- `getMe()`
- `getResources()`
- `takeAction()`

These communicate with the backend using `fetch`.

---

# 🔐 Authentication Flow

1. User registers
2. User logs in → receives JWT
3. Token stored in `localStorage`
4. Protected routes require Authorization header:

   ```
   Authorization: Bearer <token>
   ```

5. Dashboard loads user-specific data

---

# 🌟 Frontend Pages Overview

### **Landing Page**

Beautiful hero section + CTA button.

### **Explore**

Shows Training, Funding, Education categories.

### **Category Pages**

Each contains multiple programs/resources.

### **Success Stories**

African women achievements.

### **Login / Register**

Minimal authentication UI.

### **Dashboard**

Modern cards showing:

- My Resources
- Recommendations
- Requests

### **Footer**

SDG 5 (Gender Equality) / copyright

---

# 🌍 Deployment

### **Frontend (Vercel)**

`vercel.json` included:

```json
{
  "rewrites": [
    { "source": "/api/:path*", "destination": "http://localhost:5000/:path*" }
  ]
}
```

---

# 🧪 API Endpoints Cheat Sheet

### **Auth**

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/auth/register` | Create new user     |
| POST   | `/api/auth/login`    | Login & receive JWT |
| GET    | `/api/auth/me`       | Get logged-in user  |

### **Resources**

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `/api/resources` | Add a new resource |
| GET    | `/api/resources` | Get all resources  |

### **User Actions**

| Method | Endpoint                               | Description         |
| ------ | -------------------------------------- | ------------------- |
| POST   | `/api/actions/:resourceId/:actionType` | book / save / apply |

---

# 👥 User Model Overview

```js
{
  name: String,
  email: String,
  password: String,
  booked: [ObjectId],
  saved: [ObjectId],
  applied: [ObjectId]
}
```

---

# 📄 License

MIT License – free to use and modify.

---

# 💛 Acknowledgements

This project is built to support **African Women Empowerment**, aligned with **SDG 5 – Gender Equality**.

---
