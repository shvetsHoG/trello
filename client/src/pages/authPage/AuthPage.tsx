import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { IAuthForm } from '../../types/user.types.ts';
import { authService } from '../../services/auth.service.ts';
import { toast } from 'sonner';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../components/ui/input/Input.tsx';
import Button from '../../components/ui/button/Button.tsx';
import A from '../../components/ui/link/A.tsx';
import classes from './AuthPage.module.css';
import Span from '../../components/ui/span/Span.tsx';

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
        <div className={classes.wrapper}>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.form}
            >
                <div className={classes.inputWrapper}>
                    <Span>Email:</Span>
                    <Input
                        type='text'
                        {...register('email')}
                    />
                    <Span>Password:</Span>
                    <Input
                        type='password'
                        {...register('password')}
                    />
                </div>
                <div className={classes.btnWrapper}>
                    <Button>
                        {location === LocationEnum.registration
                            ? LocationEnum.registration
                            : LocationEnum.login}
                    </Button>
                </div>
                {location === LocationEnum.registration ? (
                    <A path={`/${LocationEnum.login}`}>
                        Already have an account? Login
                    </A>
                ) : (
                    <A path={`/${LocationEnum.registration}`}>
                        Do not have an account? Register
                    </A>
                )}
            </form>
        </div>
    );
};

export default AuthPage;
