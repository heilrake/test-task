// Core
import { BrowserRouter } from 'react-router-dom';

// Other
import { AuthProvider } from '@context/AuthContext';
import { Routes } from '@router/router';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
