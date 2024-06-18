import { useLocation, useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { IAuthForm } from '../../types/user.types.ts';
import { authService } from '../../services/auth.service.ts';
import { toast, Toaster } from 'sonner';
import { SubmitHandler, useForm } from 'react-hook-form';
import Input from '../../components/ui/input/Input.tsx';
import Button from '../../components/ui/button/Button.tsx';
import A from '../../components/ui/link/A.tsx';
import classes from './AuthPage.module.css';
import { setAuth } from '../../store/reducers/AuthSlice.ts';
import { useDispatch } from 'react-redux';

const enum LocationEnum {
    login = 'login',
    registration = 'registration'
}

const AuthPage = () => {
    const locationParams = useLocation();
    const location = locationParams.pathname.substring(1);

    const navigate = useNavigate();
    const dispatch = useDispatch();

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
            toast.success('Success auth');
            dispatch(setAuth(true));
            reset();
            navigate('/');
        },
        onError() {
            toast.error('Wrong password or email');
            reset();
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
                    <Input
                        type='text'
                        size={'m'}
                        label={'Email:'}
                        {...register('email')}
                    />
                    <Input
                        type='password'
                        size={'m'}
                        label={'Password:'}
                        {...register('password')}
                    />
                </div>
                <div className={classes.btnWrapper}>
                    <Button
                        size={'m'}
                        type={'default'}
                    >
                        {location === LocationEnum.registration
                            ? LocationEnum.registration
                            : LocationEnum.login}
                    </Button>
                </div>
                {location === LocationEnum.registration ? (
                    <A
                        size={'m'}
                        path={`/${LocationEnum.login}`}
                    >
                        Already have an account? Login
                    </A>
                ) : (
                    <A
                        size={'m'}
                        path={`/${LocationEnum.registration}`}
                    >
                        Do not have an account? Register
                    </A>
                )}
            </form>
            <Toaster
                richColors
                position='top-center'
            />
        </div>
    );
};

export default AuthPage;
