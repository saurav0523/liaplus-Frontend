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
  const [isLoading, setIsLoading] = useState(false); 
  const navigate = useNavigate();

  const handleSignup = async () => {
    setEmailError('');
    setPasswordError('');
    setMessage('');

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

    setIsLoading(true); 
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
    } finally {
      setIsLoading(false); 
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2 className="signup-title">Create Your Account</h2>

        <div className="signup-form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="signup-input"
          />
          {emailError && <p style={{ color: 'red', margin: 0 }}>{emailError}</p>}

          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="signup-input"
          />
          {passwordError && <p style={{ color: 'red', margin: 0 }}>{passwordError}</p>}
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
            disabled={isLoading}
          >
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
              'Sign Up'
            )}
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


