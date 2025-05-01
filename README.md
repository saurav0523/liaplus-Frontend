# ***RBAC Blog System Frontend***

Frontend for a ***Role-Based Access Control (RBAC)*** blog system with user and admin roles.

## ***Project Overview***

Secure blog frontend with:  
- ***JWT*** authentication  
- ***Role-based*** access  
- Pages for login, signup, posts, admin dashboard  

## ***Folder Structure***

Folder Structure
project/
├── src/
│   ├── components/         
│   │   └── Navbar.tsx     
│   ├── pages/             
│   │   ├── Login.tsx      
│   │   ├── Signup.tsx     
│   │   ├── Posts.tsx    
│   │   └── AdminDashboard.tsx 
│   ├── services/         
│   │   └── api.ts        
│   ├── styles/           
│   │   └── global.css     
│   ├── types/            
│   │   └── index.ts      
│   ├── App.tsx           
│   └── main.tsx           
├── vite.config.ts        
├── tsconfig.json          
├── package.json          
└── README.md             


## ***Technologies Used***

- ***Node.js***: v20.11.1  
- ***React***: v18.2.0  
- ***Vite***: v5.2.0  
- ***TypeScript***: v5.2.2  
- ***React Router***: v6.22.3  

## ***Endpoints Integrated***

| Endpoint         | Method | Description        | Authorization | Role Restriction |
|------------------|--------|--------------------|---------------|------------------|
| `/auth/signup`   | POST   | Register user      | No            | No               |
| `/auth/verify`   | GET    | Verify email       | No            | No               |
| `/auth/login`    | POST   | Get ***JWT***      | No            | No               |
| `/posts`         | GET    | View posts         | Yes           | No               |
| `/posts`         | POST   | Create post        | Yes           | Admin only       |
| `/posts/:id`     | PATCH  | Update post        | Yes           | Admin only       |
| `/posts/:id`     | DELETE | Delete post        | Yes           | Admin only       |

## ***Live Deployment***

- ***Frontend***: On ***Netlify*** at [https://jolly-pasca-ce69bc.netlify.app/](https://jolly-pasca-ce69bc.netlify.app/)  
- ***Backend***: On ***Render*** at [https://liaplusai-backend-3.onrender.com](https://liaplusai-backend-3.onrender.com)

## ***Prerequisites***

- ***Node.js***: v20.11.1+  
- ***Backend API***: [https://liaplusai-backend-3.onrender.com](https://liaplusai-backend-3.onrender.com)

## ***Setup Instructions***



 ***Install Dependencies***  
npm install



3. ***Run Project***  
npm run dev

Opens at `http://localhost:5173`

## ***Usage***

- Signup/login at `/signup` or `/login`  
- View posts at `/posts`  
- Admins manage posts at `/admin`

## ***Scripts***

- ***npm run dev***: Start dev server  
- ***npm run build***: Build for production  

## ***Troubleshooting***

- ***401 Unauthorized***: Check ***JWT*** token  
- ***CORS Issues***: Verify backend allows frontend URL  

## ***Contact Information***

- ***Name***: Saurav Gupta  
- ***Email***: [gsaurav641@gmail.com](mailto:gsaurav641@gmail.com)

