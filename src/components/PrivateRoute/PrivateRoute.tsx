import { useContext, type ReactElement } from 'react';
import { AuthContext } from '../../context/AuthContext';
import { Navigate } from 'react-router-dom';

type PrivateRoutePropsType = {
  element: ReactElement;
};

export const PrivateRoute = (props: PrivateRoutePropsType) => {
  const { element } = props;
  const { user } = useContext(AuthContext);

  return user ? element : <Navigate to="/login" />;
};
