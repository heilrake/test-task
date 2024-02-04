// Hooks
import { useAuth } from '@hooks/useAuth';

export const LoginForm = () => {
  const { login } = useAuth();

  const handleSubmit = (event: React.SyntheticEvent) => {
    event?.preventDefault();
    login({ id: '1', name: 'John Doe', email: 'john.doe@email.com' }); // set mock date user
  };

  return (
    <div className="flex flex-col  items-center  rounded-md p-6 text-white">
      <p className="text-3xl font-bold mb-8">Login </p>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col  mb-8 gap-2">
          <div className="flex justify-between">
            <p className="text-lg font-semibold mr-4">Login:</p>
            <input className="text-black" name="login" type="text" placeholder="admin" />
          </div>
          <div className="flex justify-between">
            <p className="text-lg font-semibold mr-4">Password:</p>
            <input className="text-black" name="password" placeholder="admin" type="password" />
          </div>
        </div>
        <div className="flex flex-col  items-center">
          <button className="rounded-md w-24 p-3 bg-emerald-700 color" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
