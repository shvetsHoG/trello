import { useQuery } from '@tanstack/react-query';
import { UserService } from '../services/user.service.ts';

const useProfile = () => {
    const { data, isLoading, isSuccess } = useQuery({
        queryKey: ['profile'],
        queryFn: () => UserService.getProfile(),
        retry: 2
    });

    return { data, isLoading, isSuccess };
};

export default useProfile;
