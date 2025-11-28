
# 🔐 Full-Stack Auth Boilerplate  
### React (Vite) + Node.js + Express + MongoDB (Atlas)

This boilerplate provides a clean, professional, mobile-friendly authentication setup with:

- `/login` page  
- `/signup` page  
- Success popup notifications  
- Redirects after login/signup  
- React Router v6  
- Vite frontend  
- Node.js + Express backend  
- MongoDB Atlas integration  

Perfect starting point for SaaS dashboards, apps, personal projects, or scalable production systems.

---

## 🚀 Features

### **Frontend (React + Vite)**
- Separate Login + Signup pages  
- Aesthetic & modern UI (blue/teal theme)  
- Responsive & mobile-friendly  
- React Router navigation  
- Popup notifications using `alert()` (replaceable with modals/toasts)  
- Clean folder structure ready for expansion  
- Fully connected to backend API  

### **Backend (Node.js + Express)**
- `/signup` route (stores user in DB)  
- `/login` route (basic login logic)  
- MongoDB Atlas ready  
- Environment variables (`.env`) supported  
- Simple file structure for easy extension  

---

## 📂 Project Structure



project/
├── backend/
│ ├── server.js
│ ├── userModel.js
│ ├── package.json
│ └── .env.example
│
└── frontend/
├── index.html
├── vite.config.js
├── package.json
└── src/
├── main.jsx
├── App.jsx
├── index.css
└── pages/
├── Login.jsx
└── Signup.jsx


---

# 🛠 Installation & Setup

## 1️⃣ **Clone or download this repository**

```bash
git clone <repo-link>
cd project

⚙️ Backend Setup
cd backend
npm install

Create .env file:
MONGO_URI="your_mongodb_atlas_connection_string"
PORT=5001

Start backend server:
node server.js


Server runs on:

http://localhost:5001

🌐 Frontend Setup
cd frontend
npm install


Start development server:

npm run dev


Frontend runs on:

http://localhost:5173

🔗 API Endpoints Used by Frontend
Signup
POST http://localhost:5001/signup
Body: { name, email, password }

Login
POST http://localhost:5001/login
Body: { email, password }

🔁 Redirect Logic
✔ After Signup

User sees:

Signup successful!


Then auto-redirect to:

/login

✔ After Login

User is redirected to:

/home


(Currently a blank page you can fill later.)

🎨 Customization

You can edit all theme colors inside:

frontend/src/index.css


Look for:

:root {
  --blue: #005f99;
  --teal: #009f9d;
  --bg: #f2fbff;
}


Change any values to customize your brand theme.

🚧 Future Improvements (Optional)

Add JWT authentication

Add protected routes (only allow logged-in users)

Replace alerts with modals (SweetAlert2 / Chakra UI / Material UI)

Use TailwindCSS for faster UI customization

Add token refresh + logout

Add global state (Context API / Redux)

Add animations (Framer Motion)
