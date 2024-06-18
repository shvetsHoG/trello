import classes from './Input.module.css';
import { forwardRef } from 'react';
import classNames from 'classnames';
import Span from '../span/Span.tsx';
interface InputProps {
    type?: string;
    color?: string;
    size?: string;
    placeholder?: string;
    label?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, color, size, placeholder, label, ...props }, ref) => {
        return (
            <div className={classes.wrapper}>
                <Span
                    weight={'inherit'}
                    size={size}
                >
                    {label}
                </Span>
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
                    placeholder={placeholder}
                    {...props}
                />
            </div>
        );
    }
);

export default Input;
