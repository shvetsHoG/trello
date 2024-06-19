import classes from './Button.module.css';
import { FC } from 'react';
import classNames from 'classnames';
interface ButtonProps {
    children?: string;
    size?: string;
    type?: string;
    disabled?: boolean;
    onClick?: () => void;
}

const Button: FC<ButtonProps> = ({ children, size, type, ...props }) => {
    return (
        <button
            className={classNames(
                classes.btn,
                {
                    [classes.small]: size === 's',
                    [classes.medium]: size === 'm',
                    [classes.large]: size === 'l'
                },
                {
                    [classes.black]: type === 'black',
                    [classes.default]: type === 'default',
                    [classes.filled]: type === 'filled'
                }
            )}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
