import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { IAuthForm } from '../../types/user.types.ts';
import { authService } from '../../services/auth.service.ts';
import { toast } from 'sonner';
import { SubmitHandler, useForm } from 'react-hook-form';

const enum LocationEnum {
    login = 'login',
    registration = 'registration'
}

const AuthPage = () => {
    const locationParams = useLocation();
    const location = locationParams.pathname.substring(1);

    const navigate = useNavigate();

    const { register, handleSubmit, reset } = useForm<IAuthForm>({
        mode: 'onChange'
    });

    const { mutate } = useMutation({
        mutationKey: ['auth'],
        mutationFn: (data: IAuthForm) =>
            authService.main(
                location === LocationEnum.registration
                    ? LocationEnum.registration
                    : LocationEnum.login,
                data
            ),
        onSuccess() {
            toast.success('Успешный вход в систему');
            reset();
            navigate('/');
        }
    });

    const onSubmit: SubmitHandler<IAuthForm> = data => {
        mutate(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    {...register('email')}
                />
                <input
                    type='password'
                    {...register('password')}
                />
                <button type={'submit'}>Вход</button>
            </form>
        </div>
    );
};

export default AuthPage;
