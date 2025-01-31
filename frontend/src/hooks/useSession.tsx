import { useQuery } from '@tanstack/react-query';
import { getSession } from '../api/user.api';

export const useSession = () => {
  return useQuery({
    queryKey: ['user-session'],
    queryFn: getSession,
  });
};
