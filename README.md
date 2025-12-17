# 🗂️ Task Management System (MERN Stack)

A full-stack **Task Management System** built using the **MERN stack** with **JWT-based authentication** and **role-based authorization**.

This application supports two roles:

* **Admin**
* **Normal User**

Each role has different permissions for managing tasks.

---

## 🚀 Features

### 🔐 Authentication & Authorization

* User Registration
* User Login
* JWT-based authentication
* Role-based access control (Admin / User)

### 👤 User Role

* Create tasks
* View **only their own tasks**
* Update **only their own tasks**
* Delete **only their own tasks**

### 👮 Admin Role

* Create tasks
* View **all users’ tasks**
* Update **any task**
* Delete **any task**
* View task owner details (name & email)

---

## 🛠️ Tech Stack

### Frontend

* React (Vite)
* Axios
* React Router DOM
* Plain CSS (custom styling)

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (jsonwebtoken)
* bcryptjs

---

## 📁 Project Structure

```
Sample_project/
├── backend/
│   ├── controllers/
│   │   ├── authController.js
│   │   └── taskController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   └── Task.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   └── taskRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── Login.jsx
│   │   │   ├── Register.jsx
│   │   │   ├── UserDashboard.jsx
│   │   │   └── AdminDashboard.jsx
│   │   ├── styles/
│   │   ├── utils/
│   │   │   └── axiosInstance.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   └── package.json
```

---

## ⚙️ Environment Variables

Create a `.env` file inside the **backend** folder:

```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=your_secret_key
```

---

## ▶️ How to Run the Project

### 1️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

Server runs at:

```
http://localhost:5000
```

---

### 2️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

Frontend runs at:

```
http://localhost:5173
```

---

## 🔗 API Endpoints

### Auth Routes

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

### Task Routes

| Method | Endpoint       | Access                  |
| ------ | -------------- | ----------------------- |
| POST   | /api/tasks     | Admin & User            |
| GET    | /api/tasks     | Admin (all), User (own) |
| PUT    | /api/tasks/:id | Admin & Owner           |
| DELETE | /api/tasks/:id | Admin & Owner           |

---

## 🔐 Security

* Passwords are hashed using **bcrypt**
* JWT token validation using middleware
* Role-based task ownership checks enforced on backend

---

## 🎯 Project Highlights

* Clean MVC backend structure
* Secure JWT authentication
* Role-based dashboards
* Custom CSS UI (no UI frameworks)
* RESTful API design

---

## 📸 Screenshots

*(Add screenshots here if you want)*

---

## 👨‍💻 Author

**Your Name**
GitHub: [https://github.com/yourusername](https://github.com/yourusername)

---

## 📜 License

This project is for educational purposes.
