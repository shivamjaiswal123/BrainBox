import { useQuery } from '@tanstack/react-query';
import { getSharedBrainContent } from '../api/brain.api';

export const useSharedBrainContent = (link: string) => {
  return useQuery({
    queryKey: ['shared-brain-content', link],
    queryFn: () => getSharedBrainContent(link),
    enabled: !!link, // Prevents running if link is empty
  });
};
