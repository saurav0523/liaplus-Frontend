import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';
import { User } from '../../types/types';
import toast from 'react-hot-toast';
import '../../style/style.css';
import { useNavigate, Navigate } from 'react-router-dom';
import axios from 'axios';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    setEmailError('');
    setPasswordError('');

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

    setIsLoading(true); 
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
      toast.error(error.response?.data?.message || 'Login failed');
    } finally {
      setIsLoading(false);
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
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="login-input"
          />
          {emailError && <p style={{ color: 'red', margin: 0 }}>{emailError}</p>}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="login-input"
          />
          {passwordError && <p style={{ color: 'red', margin: 0 }}>{passwordError}</p>}

          <button type="submit" className="login-button" disabled={isLoading}>
            {isLoading ? (
              <span
                style={{
                  display: 'inline-block',
                  width: '20px',
                  height: '20px',
                  border: '3px solid #fff',
                  borderTop: '3px solid transparent',
                  borderRadius: '50%',
                  animation: 'spin 1s linear infinite',
                }}
              />
            ) : (
              'Login'
            )}
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
