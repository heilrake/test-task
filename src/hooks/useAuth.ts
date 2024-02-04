// Core
import { useNavigate } from 'react-router-dom';

// Other
import { type User, useUser } from './useUser';

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const navigate = useNavigate();

  const login = (user: User) => {
    addUser(user);
    navigate('/user');
  };

  const logout = () => {
    removeUser();
  };

  return { user, login, logout };
};
