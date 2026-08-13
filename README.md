# 🛒 Amazon Clone - MERN Stack

A full-stack e-commerce web application inspired by Amazon, developed using the MERN stack.

This project is being developed as a learning and portfolio project to understand full-stack web development, REST APIs, authentication, database management, and e-commerce functionality.

---

## 🚀 Project Status

🔄 **Currently under development**

The frontend and backend foundations have been created, and MongoDB Atlas has been successfully connected.

### Completed

- ✅ React frontend using Vite
- ✅ Express.js backend
- ✅ MongoDB Atlas connection
- ✅ Basic Amazon-style Navbar
- ✅ Menu Bar
- ✅ Hero Banner
- ✅ Product Categories
- ✅ Product Cards
- ✅ Product Model
- ✅ Product REST API
- ✅ Environment variable configuration
- ✅ Git and GitHub setup

### Upcoming Features

- 🔄 User Registration
- 🔄 User Login & Authentication
- 🔄 JWT Authentication
- 🔄 Product Search
- 🔄 Product Details Page
- 🔄 Shopping Cart
- 🔄 Wishlist
- 🔄 Checkout
- 🔄 Order Management
- 🔄 User Profile
- 🔄 Admin Dashboard
- 🔄 Product Management
- 🔄 Image Upload
- 🔄 Payment Integration

---

## 🛠️ Technologies Used

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS
- React Router

### Backend

- Node.js
- Express.js
- REST API
- JWT
- bcrypt
- Cookie Parser
- Multer

### Database

- MongoDB
- MongoDB Atlas
- Mongoose

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Nodemon
- Postman

---

## 📂 Project Structure

```text
amazon-clone/
│
├── client/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   │   └── images/
│   │   ├── components/
│   │   │   ├── Navbar/
│   │   │   ├── MenuBar/
│   │   │   ├── Hero/
│   │   │   ├── CategoryCard/
│   │   │   ├── ProductCard/
│   │   │   ├── Footer/
│   │   │   └── Loader/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Cart/
│   │   │   ├── Wishlist/
│   │   │   ├── Checkout/
│   │   │   ├── Orders/
│   │   │   ├── Profile/
│   │   │   └── Admin/
│   │   │
│   │   ├── services/
│   │   ├── hooks/
│   │   ├── redux/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   └── package.json
│
├── server/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   ├── models/
│   │   └── Product.js
│   ├── routes/
│   │   └── productRoutes.js
│   ├── app.js
│   ├── server.js
│   ├── seedProducts.js
│   ├── package.json
│   └── .env
│
├── .gitignore
└── README.md