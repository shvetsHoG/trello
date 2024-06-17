import classes from './Input.module.css';
import { forwardRef } from 'react';
import classNames from 'classnames';
interface InputProps {
    type?: string;
    color?: string;
    size?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, color, size, ...props }, ref) => {
        return (
            <input
                className={classNames(
                    classes.input,
                    {
                        [classes.darkPink]: color === 'dark',
                        [classes.softPink]: color === 'soft',
                        [classes.black]: color === 'black'
                    },
                    {
                        [classes.small]: size === 's',
                        [classes.medium]: size === 'm',
                        [classes.large]: size === 'l'
                    }
                )}
                type={type || 'text'}
                ref={ref}
                {...props}
            />
        );
    }
);

export default Input;
