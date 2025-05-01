import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../../style/style.css';

function VerifyEmail() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const storedEmail = localStorage.getItem('email');
  const token = localStorage.getItem('verification_token');

  useEffect(() => {
    if (!storedEmail || !token) {
      toast.error('No verification data found. Please sign up again.');
      setTimeout(() => navigate('/'), 2000);
    }
  }, [navigate, storedEmail, token]);

  const handleVerify = async () => {
    if (!email) {
      toast.error('Email is required');
      return;
    }

    if (email !== storedEmail) {
      toast.error('Not verified. Email does not match.');
      setTimeout(() => navigate('/'), 2000);
      return;
    }

    setIsLoading(true);
    try {
      await axios.get(`https://liaplusai-backend-3.onrender.com/auth/verify?email=${email}&token=${token}`);
      localStorage.setItem('verified', "true");
      toast.success('User verified successfully!');
      setTimeout(() => navigate('/'), 1000);
    } catch (error) {
      toast.error('Not verified. Please try again.');
      setTimeout(() => navigate('/'), 5000);
    } finally {
      setIsLoading(false);
    }
  };

  if (!storedEmail || !token) {
    return null;
  }

  return (
    <div className="verify-container">
      <div className="verify-card">
        <h2 className="verify-title">Verify Your Email ID</h2>

        <div className="verify-form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email to verify"
            className="verify-input"
          />
          <button
            onClick={handleVerify}
            className="verify-button"
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
              'Verify Email'
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
