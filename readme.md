# SaaS CRM Landing Page with Product Inquiry  

A responsive SaaS CRM landing page built using **React**, **Node.js**, **Express**, and **MongoDB**. The project includes a modern landing page, a product inquiry form, and an admin page to manage customer inquiries.

---

## Screenshots

<img width="1920" height="1080" alt="Screenshot (125)" src="https://github.com/user-attachments/assets/816c03fb-2ca7-4443-8e48-d675bfefa54d" />
<img width="1920" height="1080" alt="Screenshot (126)" src="https://github.com/user-attachments/assets/a4c93e58-c0bc-4a64-a14c-cf62a5b1b1e7" />
<img width="1920" height="1080" alt="Screenshot (116)" src="https://github.com/user-attachments/assets/cda2dadf-c2b2-4c81-8d97-02099598bda8" />
<img width="1920" height="1080" alt="Screenshot (117)" src="https://github.com/user-attachments/assets/a3fe7845-f75e-46e3-b547-cecd14632ad1" />
<img width="1920" height="1080" alt="Screenshot (118)" src="https://github.com/user-attachments/assets/7f51be69-f07c-48f4-ac25-777b5000f766" />
<img width="1920" height="1080" alt="Screenshot (119)" src="https://github.com/user-attachments/assets/d3108294-e03a-49b0-bcc1-e94667f502e9" />
<img width="1920" height="1080" alt="Screenshot (120)" src="https://github.com/user-attachments/assets/a327bd2e-c428-4013-a902-5e80b1b9fe25" />
<img width="1920" height="1080" alt="Screenshot (121)" src="https://github.com/user-attachments/assets/9d9c6832-4fd6-4adc-8a4e-76525fd70cec" />
<img width="1920" height="1080" alt="Screenshot (122)" src="https://github.com/user-attachments/assets/70b182a0-2bff-4f47-99d6-99d9ec628c68" />
<img width="1920" height="1080" alt="Screenshot (123)" src="https://github.com/user-attachments/assets/4bc56379-c48f-413f-b6da-e76db5562919" />
<img width="1920" height="1080" alt="Screenshot (124)" src="https://github.com/user-attachments/assets/cd1dcf43-8404-4928-bf2d-44b05be1bb3b" />





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

 
