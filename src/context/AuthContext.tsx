import { createContext, type ReactNode, useEffect, useState } from 'react';
import type { User } from '../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Props = {
  children?: ReactNode;
};

type IAuthContext = {
  user: User | null;
  setUser: (user: User | null) => void;
};

const initialValue = {
  user: null,
  setUser: () => {},
};

const AuthContext = createContext<IAuthContext>(initialValue);

const AuthProvider = ({ children }: Props) => {
  const [user, setUser] = useState<User | null>(null);
  const { getItem } = useLocalStorage();
  const navigate = useNavigate();

  useEffect(() => {
    const user = getItem('user');
    if (user) {
      setUser(JSON.parse(user));
      navigate('/user');
    }
  }, []);

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
