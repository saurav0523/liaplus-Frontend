import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';
import '../../style/style.css'; 

function VerifyEmail() {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleVerify = async () => {
    try {
      const token = localStorage.getItem("verification_token");
      await axios.get(`https://liaplusai-backend-3.onrender.com/auth/verify?email=${email}&token=${token}`);

      localStorage.setItem('verified', "true");
      toast.success('User verified successfully!');
      navigate('/');
    } catch (error) {
      toast.error('Verification failed. Please try again.');
    }
  };

  return (
    <div className="verify-container">
      <div className="verify-card">
        <h2 className="verify-title">Verify Your Email</h2>

        <div className="verify-form">
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="verify-input"
          />
          <button
            onClick={handleVerify}
            className="verify-button"
          >
            Verify Email
          </button>
        </div>
      </div>
    </div>
  );
}

export default VerifyEmail;
