import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';
import { User } from '../types/types';

interface Props {
  children: React.ReactNode;
  allowedRole: 'user' | 'admin';
}

function ProtectedRoute({ children, allowedRole }: Props) {
  const token = localStorage.getItem('token');

  if (!token) {
    return <Navigate to="/" />;
  }

  const decoded = jwtDecode(token) as User;
  const userRole = decoded.role;

  if (userRole !== allowedRole) {
    return <Navigate to={userRole === 'admin' ? '/admin' : '/user'} />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;