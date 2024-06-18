import classes from './Settings.module.css';
import { SubmitHandler, useForm } from 'react-hook-form';
import { TypeUserForm } from '../../types/user.types.ts';
import { useInitialState } from '../../hooks/useInitialState.ts';
import { useUpdateSettings } from '../../hooks/useUpdateSettings.ts';
import Input from '../ui/input/Input.tsx';
import Button from '../ui/button/Button.tsx';

const Settings = () => {
    const { register, handleSubmit, reset } = useForm<TypeUserForm>({
        mode: 'onChange'
    });

    useInitialState(reset);
    const { mutate, isPending } = useUpdateSettings();

    const onSubmit: SubmitHandler<TypeUserForm> = data => {
        const { password, ...rest } = data;

        mutate({
            ...rest,
            password: password || undefined
        });
    };

    return (
        <>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className={classes.wrapper}
            >
                <div className={classes.content}>
                    <Input
                        type='text'
                        size={'m'}
                        placeholder={'Email'}
                        label={'Email:'}
                        {...register('email', {
                            required: 'Email is required!'
                        })}
                    ></Input>
                    <Input
                        type='text'
                        size={'m'}
                        placeholder={'Name'}
                        label={'Name:'}
                        {...register('name')}
                    ></Input>
                    <Input
                        type='password'
                        size={'m'}
                        placeholder={'Password'}
                        label={'Password:'}
                        {...register('password')}
                    ></Input>
                    <Input
                        type='text'
                        size={'m'}
                        placeholder={'Work Interval'}
                        label={'Work Interval:'}
                        {...register('workInterval', {
                            valueAsNumber: true
                        })}
                    ></Input>
                    <Input
                        type='text'
                        size={'m'}
                        placeholder={'Break Interval'}
                        label={'Break Interval:'}
                        {...register('breakInterval', {
                            valueAsNumber: true
                        })}
                    ></Input>
                    <Input
                        type='text'
                        size={'m'}
                        placeholder={'Intervals Count'}
                        label={'Intervals Count:'}
                        {...register('intervalsCount', {
                            valueAsNumber: true
                        })}
                    ></Input>
                </div>
                <Button
                    size={'m'}
                    disabled={isPending}
                >
                    Save
                </Button>
            </form>
        </>
    );
};

export default Settings;
