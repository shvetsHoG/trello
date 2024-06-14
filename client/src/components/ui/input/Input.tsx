import classes from './Input.module.css';
import { forwardRef } from 'react';
interface InputProps {
    type?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
    ({ type, ...props }, ref) => {
        return (
            <input
                className={classes.input}
                type={type || 'text'}
                ref={ref}
                {...props}
            />
        );
    }
);

export default Input;
