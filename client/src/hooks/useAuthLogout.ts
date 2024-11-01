import { useNavigate } from 'react-router-dom';
import { isAuthenticated, logout } from '../services/authService';

export const useAuthLogout = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return {
    isAuthenticated: isAuthenticated(),
    handleLogout,
  };
};
