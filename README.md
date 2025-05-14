# # Revuhub - Review Aggregator Backend

This is the backend for a review aggregation web application. It provides RESTful endpoints for managing users, products, and reviews, with JWT-based authentication and MongoDB integration using Mongoose.
## 🚀 Features
- ✅ JWT Authentication (Register & Login)
- 🔐 Protected routes for creating products
- 📦 Seed demo data for users, products, and reviews
- 📊 Product review aggregation with service-based ratings
- ⚙️ RESTful structure using Express & TypeScript
- 📁 Organized folder structure with models, routes, controllers, middleware, and utils

## ⚙️ Setup
### 1. Install dependencies:

```bash
npm install
```
### 2. Create a .env file:

#### Example:
MONGODB_URI=mongodb://localhost:27017/review-aggregator

JWT_SECRET= your_jwt_secret

PORT=5000
####  Cloudinary config
CLOUD_NAME = your_cloud_name_here 

API_KEY = your_api_key_here

API_SECRET = your_api_secret_here
### 3. Run the development server:
```bash
npm run dev
````
## 🌱 Seed the Database
```bash
GET http://localhost:5000/api/seed
````

#### This will:

* Clear existing users, products, and reviews

* Create one sample user (john_doe)

* Create 2 sample products

* Populate them with detailed reviews

## 🔐 Authentication Login
```bash
GET http://localhost:5000/api/login
````
### Body
```bash
{
  "username": "Jane Doe",
  "email": "jane@example.com"
}
````
### return
```bash
{
  "token": "your.jwt.token",
  "user": {
    "id": "userId",
    "usename": "Jane Doe",
    "email": "john@example.com",
    "password": "password1",
    "createdAt": "2025-05-14T15:10:50.791Z",
    "updatedAt": "2025-05-14T15:10:50.791Z",
  }
}
```
### Use this token in the Authorization header for protected routes:
```bash
Authorization: Bearer <your.jwt.token>
````
## 📡 API Endpoints

#### Auth Routes
POST&nbsp;&nbsp;&nbsp;  |&nbsp; &nbsp; /api/login&nbsp; &nbsp; |&nbsp; &nbsp; Login and receive a JWT
#### Seed Route
GET&nbsp;&nbsp;&nbsp;  |&nbsp; &nbsp; /api/seed&nbsp; &nbsp; |&nbsp; &nbsp; Seed sample data
#### User Routes
GET&nbsp;&nbsp;&nbsp;  |&nbsp; &nbsp; /api/usert&nbsp; &nbsp; |&nbsp; &nbsp; Get all  user
#### Product Routes
GET&nbsp;&nbsp;&nbsp;  |&nbsp; &nbsp; /api/product&nbsp; &nbsp; |&nbsp; &nbsp; Get all product(Protected)&nbsp;&nbsp; -&nbsp;&nbsp;  (before get all product generate JWT key and add it in the header to get products for  specific user)

GET&nbsp;&nbsp;&nbsp;  |&nbsp; &nbsp; /api/product/:id&nbsp; &nbsp; |&nbsp; &nbsp; Get single product by ID(Protected)&nbsp;&nbsp;

POST&nbsp;&nbsp;&nbsp;  |&nbsp; &nbsp; /api/product/&nbsp; &nbsp; |&nbsp; &nbsp; Create new product by ID(Protected)&nbsp;&nbsp;

PUT&nbsp;&nbsp;&nbsp;  |&nbsp; &nbsp; /api/product/:id&nbsp; &nbsp; |&nbsp; &nbsp; Update product(Protected)&nbsp;&nbsp;

DELETE&nbsp;&nbsp;&nbsp;  |&nbsp; &nbsp; /api/product/:id&nbsp; &nbsp; |&nbsp; &nbsp; Delete product(Protected)&nbsp;&nbsp;

## 🛠️ Tech Stack
* Node.js & Express

* MongoDB with Mongoose

* TypeScript

* JWT Authentication

* Dotenv for environment management