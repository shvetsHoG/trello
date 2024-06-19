import useProfile from './useProfile.ts';
import { useEffect } from 'react';
import { UseFormReset } from 'react-hook-form';
import { TypeUserForm } from '../types/user.types.ts';

export const useInitialState = (reset: UseFormReset<TypeUserForm>) => {
    const { data, isSuccess } = useProfile();

    useEffect(() => {
        if (data && isSuccess) {
            reset({
                email: data.user.email,
                name: data.user.name,
                breakInterval: data.user.breakInterval,
                intervalsCount: data.user.intervalsCount,
                workInterval: data.user.workInterval
            });
        }
    }, [isSuccess]);

    return {};
};
