RBAC Blog System Frontend
This project implements the frontend for a Role-Based Access Control (RBAC) blog system with user and admin roles.
Project Overview
A secure blog frontend with:

JWT authentication.
Role-based authorization.
Pages for login, signup, posts, and admin dashboard.

Folder Structure
project/
├── src/
│   ├── components/         # Reusable UI components
│   │   └── Navbar.tsx     # Navigation bar
│   ├── pages/             # Page components
│   │   ├── Login.tsx      # Login page
│   │   ├── Signup.tsx     # Signup page
│   │   ├── Posts.tsx      # View posts
│   │   └── AdminDashboard.tsx # Admin dashboard
│   ├── services/          # API logic
│   │   └── api.ts         # API calls
│   ├── styles/            # CSS styles
│   │   └── global.css     # Global styles
│   ├── types/             # TypeScript types
│   │   └── index.ts       # Post types
│   ├── App.tsx            # Main app
│   └── main.tsx           # Entry point
├── vite.config.ts         # Vite config
├── tsconfig.json          # TypeScript config
├── package.json           # Dependencies
└── README.md              # This file

Technologies Used

Node.js: v20.11.1
React: v18.2.0
Vite: v5.2.0
TypeScript: v5.2.2
React Router: v6.22.3

Summary of Endpoints Integrated



Endpoint
Method
Description
Authorization
Role Restriction



/auth/signup
POST
Register user
No
No


/auth/verify
GET
Verify email
No
No


/auth/login
POST
Get JWT
No
No


/posts
GET
View posts
Yes
No


/posts
POST
Create post
Yes
Admin only


/posts/:id
PATCH
Update post
Yes
Admin only


/posts/:id
DELETE
Delete post
Yes
Admin only


Live Deployment

Frontend: Deployed on Netlify ([Insert Netlify URL here]).
Backend: Hosted on Render at https://liaplusai-backend-3.onrender.com.

Prerequisites

Node.js: v20.11.1 or higher
Backend API: Running at https://liaplusai-backend-3.onrender.com.

Setup Instructions

Clone Project:
git clone <repository-url>
cd project


Install Dependencies:
npm install


Run Project:
npm run dev

Opens at http://localhost:5173.


Usage

Signup and login at /signup or /login.
View posts at /posts.
Admins manage posts at /admin.

Scripts

npm run dev: Start dev server.
npm run build: Build for production.

Troubleshooting

401 Unauthorized: Check JWT token.
CORS Issues: Verify backend allows frontend URL.

Contact Information

Name: Saurav Gupta
Email: gsaurav641@gmail.com

