// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import {jwtDecode} from 'jwt-decode';
// // import localforage from 'localforage';
// import { User}  from '../../types/types';
// import { toast } from 'react-toastify';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('https://liaplusai-backend-3.onrender.com/auth/login', {
//         email,
//         password,
//       });
//       console.log(response)
//       toast.success("Login Successfully!")
//       const token = response.data.token;
//       localStorage.setItem('token', token);
//       const decoded = jwtDecode(token) as User;
//       if (decoded.role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/user');
//       }
//     } catch (error) {
//       console.log('Login failed', error);
//     }
//   };

//   return (
//     <div>
//       <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <button onClick={handleLogin}>Login</button>
//     </div>
//   );
// }

// export default LoginForm;


// import { useState } from 'react';
// import { Navigate, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { jwtDecode } from 'jwt-decode';
// import { User } from '../../types/types';
// import toast from 'react-hot-toast';
// import '../../style/style.css';

// function LoginForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [titleError, setTitleError] = useState('');
//   const [contentError, setContentError] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const response = await axios.post('https://liaplusai-backend-3.onrender.com/auth/login', {
//         email,
//         password,
//       });
//       toast.success("Login Successfully!");
//       const token = response.data.token;
//       localStorage.setItem('token', token);
//       const decoded = jwtDecode(token) as User;
//       if (decoded.role === 'admin') {
//         navigate('/admin');
//       } else {
//         navigate('/user');
//       }
//     } catch (error: any) {
//       toast.error(error.response.data.message)
//     }
//   };

//   const token = localStorage.getItem("token")
//   if (token) {
//     return <Navigate to="/user" replace />
//   }

//   return (
//     <form className="login-container">
//       <div className="login-card">
//         <h2 className="login-title">Login</h2>

//         <div className="login-form">
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="login-input"
//           />
          
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="login-input"
//           />
//           <button
//             onClick={handleLogin}
//             className="login-button"
//           >
//             Login
//           </button>

//           <p className="account-text">
//             Create a new account?
//             <span onClick={() => navigate("/signup")} className="login-link">Signup</span>
//           </p>

//         </div>
//       </div>
//     </form>
//   );
// }

// export default LoginForm;


import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../types/types';
import toast from 'react-hot-toast';
import '../../style/style.css';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // prevent form reload

    // ✅ Clear old errors
    setEmailError('');
    setPasswordError('');

    // ✅ Frontend Validation
    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.post('https://liaplusai-backend-3.onrender.com/auth/login', {
        email,
        password,
      });
      toast.success('Login Successfully!');
      const token = response.data.token;
      localStorage.setItem('token', token);
      const decoded = jwtDecode(token) as User;
      if (decoded.role === 'admin') {
        navigate('/admin');
      } else {
        navigate('/user');
      }
    } catch (error: any) {
      // ✅ Backend error
      toast.error(error.response?.data?.message || 'Login failed');
    }
  };

  const token = localStorage.getItem('token');
  if (token) {
    return <Navigate to="/user" replace />;
  }

  return (
    <form className="login-container" onSubmit={handleLogin}>
      <div className="login-card">
        <h2 className="login-title">Login</h2>

        <div className="login-form">
          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="login-input"
          />
          {emailError && <p style={{ color: 'red', margin: 0 }}>{emailError}</p>}

          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="login-input"
          />
          {passwordError && <p style={{ color: 'red', margin: 0 }}>{passwordError}</p>}

          <button type="submit" className="login-button">
            Login
          </button>

          <p className="account-text">
            Create a new account?
            <span onClick={() => navigate('/signup')} className="login-link">
              Signup
            </span>
          </p>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
