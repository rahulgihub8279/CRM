# SaaS CRM Landing Page with Product Inquiry  

A responsive SaaS CRM landing page built using **React**, **Node.js**, **Express**, and **MongoDB**. The project includes a modern landing page, a product inquiry form, and an admin page to manage customer inquiries.

---

## 🚀 Live Demo

  

---

 
## ✨ Features

- Responsive Landing Page
- Hero Section
- Features Section
- Pricing Plans
- Testimonials
- FAQ Section
- Contact Sales / Product Inquiry Form
- Admin Inquiry Dashboard
- Delete Inquiry
- JWT Authentication
- Loading States
- Form Validation
- Clean UI with Tailwind CSS

---

## 🛠 Tech Stack

### Frontend

- React (Vite)
- Tailwind CSS
- Axios
- React Router 

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- bcrypt 
- CORS

---

## 📁 Folder Structure

```
project-root
│
├── frontend
│   ├── src
│   │   ├── components
│   │   ├── pages
|   |   ├── Redux
│   │   ├── assets
│   │   ├── App.jsx
│   │   └── main.jsx
│
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── config
│   └── index.js
│
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/rahulgihub8279/CRM.git
```

Move into the project

```bash
cd crm
```

---

## Backend Setup

```bash
cd backend

npm install

npm run dev
```

Create a `.env` file

```env
PORT=8000

MONGO_URI=your_mongodb_connection

JWT_SECRET=your_secret_key
```

---

## Frontend Setup

```bash
cd frontend

npm install

npm run dev
```

Frontend runs on

```
http://localhost:5173
```

Backend runs on

```
http://localhost:8000
```

---

# API Documentation

## Authentication

### POST /api/user/signup

Create a new admin account.

Request

```json
{
  "name": "Rahul",
  "email": "rahul@gmail.com",
  "password": "password123",
  "role": "admin"
}
```

---

### POST /api/user/login

Login admin.

---

### POST /api/user/logout

Logout admin.

---

# Inquiry APIs

## POST /api/inquiry/create

Create a new inquiry.

Request

```json
{
  "fullName": "John Doe",
  "companyName": "ABC Pvt Ltd",
  "email": "john@example.com",
  "phone": "9876543210",
  "country": "India",
  "industry": "Software",
  "companySize": "11-50",
  "message": "Need CRM Demo"
}
```

Response

```json
{
  "success": true,
  "message": "Inquiry submitted successfully"
}
```

---

## GET /api/inquiry/get

Returns all inquiries.

---

## DELETE /api/inquiry/delete/:id

Deletes an inquiry.

---

# Responsive Design

- Desktop
- Tablet
- Mobile

---

# Future Improvements

- Search inquiries
- Filter by country
- Pagination
- Edit inquiry
- Email notification
- Dark Mode
- Docker
- Unit Testing

---

 

GitHub:
https://github.com/your-github
 
---

 
