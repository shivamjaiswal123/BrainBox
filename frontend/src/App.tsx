import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Signup from './pages/Signup';
import NotFound from './components/NotFound';
import Signin from './pages/Signin';
import { Toaster } from 'sonner';
import ProtectedRoute from './components/ProtectedRoute';
import ShareBrainView from './pages/ShareBrainView';
import LandingPage from './pages/LandingPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/:link" element={<ShareBrainView />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Toaster position="top-right" />
    </>
  );
}

export default App;
