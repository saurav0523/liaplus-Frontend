import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const fetchToken = async () => {
      const storedToken =  localStorage.getItem('token');
      setToken(storedToken);
    };
    fetchToken();
  }, []);

  const handleLogout = async () => {
     localStorage.removeItem('token');
    setToken(null);
    window.location.href = '/login';
  };

  return (
    <nav>
      <Link to="/login">Login</Link> | <Link to="/signup">Signup</Link>
      {token && <button onClick={handleLogout}>Logout</button>}
    </nav>
  );
}

export default Navbar;
