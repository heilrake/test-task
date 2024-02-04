import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { useAuth } from '../../hooks/useAuth';

export const UserData = () => {
  const { user } = useContext(AuthContext);
  const { logout } = useAuth();

  return (
    <div>
      <p className="text-3xl font-bold mb-2">User information</p>
      <p className=" mb-8">*date from mock</p>
      <div className="text-white mb-8">
        {user && <p>email - {user.email}!</p>}
        {user && <p>name - {user.name}!</p>}
      </div>
      <div className="flex items-center justify-center">
        <button className="rounded-md w-24 p-3 bg-emerald-700 text-white" onClick={() => logout()}>
          logout
        </button>
      </div>
    </div>
  );
};
