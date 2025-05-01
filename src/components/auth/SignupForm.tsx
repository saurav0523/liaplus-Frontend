// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import localforage from 'localforage';

// function SignupForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState<'user' | 'admin'>('user');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       const response=await axios.post('https://liaplusai-backend-3.onrender.com/auth/signup', {
//         email,
//         password,
//         role,
//       });
//       setMessage('Please check your email to verify your account.');
//       localforage.setItem("email",response.data.user.email);
//       localforage.setItem("token",response.data.user.verification_token);
//       setTimeout(() => navigate('/verify'), 1000);
//     } catch (error) {
//       setMessage('Error signing up. Try again.');
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
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={role === 'user'}
//             onChange={() => setRole('user')}
//           />
//           User
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={role === 'admin'}
//             onChange={() => setRole('admin')}
//           />
//           Admin
//         </label>
//       </div>
//       <button onClick={handleSignup}>Signup</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default SignupForm;


// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import localforage from 'localforage';

// function SignupForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState<'user' | 'admin'>('user');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('https://liaplusai-backend-3.onrender.com/auth/signup', {
//         email,
//         password,
//         role,
//       });

//       // ✅ Store email & token in localforage
//       localStorage.setItem('email', response.data.user.email);
//       localStorage.setItem('verification_token', response.data.user.verification_token);

//       setMessage('Please check your email to verify your account.');

//       // ✅ Redirect after 1 sec
//       () => navigate('/verify')
//     } catch (error) {
//       console.error('Signup error:', error);
//       setMessage('Error signing up. Try again.');
//     }
//   };

//   return (
//     <div>
//       <input
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         placeholder="Email"
//       />
//       <input
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         placeholder="Password"
//       />
//       <div>
//         <label>
//           <input
//             type="checkbox"
//             checked={role === 'user'}
//             onChange={() => setRole('user')}
//           />
//           User
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             checked={role === 'admin'}
//             onChange={() => setRole('admin')}
//           />
//           Admin
//         </label>
//       </div>
//       <button onClick={handleSignup}>Signup</button>
//       {message && <p>{message}</p>}
//     </div>
//   );
// }

// export default SignupForm;

// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import '../../style/style.css';
// import toast from 'react-hot-toast';

// function SignupForm() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [role, setRole] = useState<'user' | 'admin'>('user');
//   const [message, setMessage] = useState('');
//   const navigate = useNavigate();

//   const handleSignup = async () => {
//     try {
//       const response = await axios.post('https://liaplusai-backend-3.onrender.com/auth/signup', {
//         email,
//         password,
//         role,
//       });
//       toast.success("User Created Successfully!");

//       localStorage.setItem('email', response.data.user.email);
//       localStorage.setItem('verification_token', response.data.user.verification_token);

//       setMessage('Please check your email to verify your account.');
//       setTimeout(() => navigate('/verify'), 1000);
//     } catch (error) {
//       console.error('Signup error:', error);
//       setMessage('Error signing up. Try again.');
//     }
//   };

//   return (
//     <div className="signup-container">
//       <div className="signup-card">
//         <h2 className="signup-title">Create Your Account</h2>

//         <div className="signup-form">
//           <input
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email"
//             className="signup-input"
//           />
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             placeholder="Password"
//             className="signup-input"
//           />

//           <div className="role-selection">
//             <label>
//               <input
//                 type="radio"
//                 checked={role === 'user'}
//                 onChange={() => setRole('user')}
//               />
//               <span>User</span>
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 checked={role === 'admin'}
//                 onChange={() => setRole('admin')}
//               />
//               <span>Admin</span>
//             </label>
//           </div>

//           <button
//             onClick={handleSignup}
//             className="signup-button"
//           >
//             Sign Up
//           </button>

//           <p className="account-text">
//             Already have an account?
//             <span
//               className="login-link"
//               onClick={() => navigate('/')}
//             >
//               Login
//             </span>
//           </p>
//         </div>

//         {message && (
//           <p className="signup-message">{message}</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default SignupForm;


import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../style/style.css';
import toast from 'react-hot-toast';

function SignupForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState<'user' | 'admin'>('user');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const navigate = useNavigate();

  const handleSignup = async () => {
    // ✅ Clear old errors
    setEmailError('');
    setPasswordError('');
    setMessage('');

    // ✅ Frontend Validation
    let isValid = true;
    if (!email) {
      setEmailError('Email is required');
      isValid = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setEmailError('Invalid email format');
      isValid = false;
    }

    if (!password) {
      setPasswordError('Password is required');
      isValid = false;
    } else if (password.length < 8) {
      setPasswordError('Password must be at least 8 characters');
      isValid = false;
    }

    if (!isValid) return;

    try {
      const response = await axios.post('https://liaplusai-backend-3.onrender.com/auth/signup', {
        email,
        password,
        role,
      });

      toast.success('User Created Successfully!');

      localStorage.setItem('email', response.data.user.email);
      localStorage.setItem('verification_token', response.data.user.verification_token);

      setMessage('Please check your email to verify your account.');
      setTimeout(() => navigate('/verify'), 1000);
    } catch (error: any) {
      console.error('Signup error:', error);
      toast.error(error.response?.data?.message || 'Error signing up. Try again.');
      setMessage('Error signing up. Try again.');
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>

        <div className="signup-form">
          {/* Email */}
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="signup-input"
          />
          {emailError && <p style={{ color: 'red', margin: 0 }}>{emailError}</p>}

          {/* Password */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="signup-input"
          />
          {passwordError && <p style={{ color: 'red', margin: 0 }}>{passwordError}</p>}

          {/* Role Selection */}
          <div className="role-selection">
            <label>
              <input
                type="radio"
                checked={role === 'user'}
                onChange={() => setRole('user')}
              />
              <span>User</span>
            </label>
            <label>
              <input
                type="radio"
                checked={role === 'admin'}
                onChange={() => setRole('admin')}
              />
              <span>Admin</span>
            </label>
          </div>

          <button
            onClick={handleSignup}
            className="signup-button"
          >
            Sign Up
          </button>

          <p className="account-text">
            Already have an account?
            <span
              className="login-link"
              onClick={() => navigate('/')}
            >
              Login
            </span>
          </p>
        </div>

        {message && (
          <p className="signup-message">{message}</p>
        )}
      </div>
    </div>
  );
}

export default SignupForm;

