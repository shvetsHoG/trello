import { useQuery } from '@tanstack/react-query';
import { UserService } from '../services/user.service.ts';

const UseProfile = () => {
    const { data, isLoading } = useQuery({
        queryKey: ['profile'],
        queryFn: () => UserService.getProfile(),
        retry: 2
    });

    return { data, isLoading };
};

export default UseProfile;
