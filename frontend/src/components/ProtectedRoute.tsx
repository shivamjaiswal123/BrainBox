import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSession } from '../hooks/useSession';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { data: session, isLoading: gettingSession } = useSession();
  if (gettingSession) {
    return;
  }

  return <div>{session ? children : <Navigate to="/signin" />}</div>;
}

export default ProtectedRoute;
