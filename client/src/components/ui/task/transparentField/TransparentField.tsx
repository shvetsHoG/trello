import classes from './TransparentField.module.css';
import { forwardRef, InputHTMLAttributes } from 'react';
import classNames from 'classnames';

type TypeTransparentField = InputHTMLAttributes<HTMLInputElement>;

export const TransparentField = forwardRef<
    HTMLInputElement,
    TypeTransparentField
>(({ className, ...props }, ref) => {
    return (
        <input
            type='text'
            className={classNames(classes.wrapper, className)}
            ref={ref}
            {...props}
        />
    );
});

TransparentField.displayName = 'TransparentField';
