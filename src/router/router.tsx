// Core
import { Navigate, Route, Routes as Router } from 'react-router-dom';

// Pages
import { LoginPage } from '@pages/LoginPage';
import { UserPage } from '@pages/UserPage';

// Others
import { PrivateRoute } from './PrivateRoute';

export const Routes = () => {
  return (
    <Router>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/user" element={<PrivateRoute element={<UserPage />} />} />
      <Route path="" element={<Navigate to="/user" />} />
    </Router>
  );
};
