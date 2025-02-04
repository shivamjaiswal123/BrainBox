import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';
import { useSession } from '../hooks/useSession';
import Spinner from './Spinner';

function ProtectedRoute({ children }: { children: ReactNode }) {
  const { data: session, isLoading: gettingSession } = useSession();
  if (gettingSession) {
    return <Spinner />;
  }

  return <div>{session ? children : <Navigate to="/signin" />}</div>;
}

export default ProtectedRoute;
