import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { session, gettingSession } = useAuth();
  if (gettingSession) {
    return;
  }

  return <div>{session ? children : <Navigate to="/signin" />}</div>;
}

export default ProtectedRoute;
