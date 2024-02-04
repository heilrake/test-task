// Core
import { useContext, type ReactElement } from 'react';
import { Navigate } from 'react-router-dom';

// Other
import { AuthContext } from '@context/AuthContext';

type PrivateRoutePropsType = {
  element: ReactElement;
};

export const PrivateRoute = (props: PrivateRoutePropsType) => {
  const { element } = props;
  const { user } = useContext(AuthContext);

  return user ? element : <Navigate to="/login" />;
};
