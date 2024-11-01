import { useQuery } from '@tanstack/react-query';
import { getUserProfile } from '../services/userService';

const useUserProfile = () => {
  return useQuery({
    queryKey: ['userProfile'],
    queryFn: getUserProfile,
  });
};

export default useUserProfile;
