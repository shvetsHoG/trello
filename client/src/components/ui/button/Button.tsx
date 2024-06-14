import classes from './Button.module.css';
import { FC } from 'react';
interface ButtonProps {
    children?: string;
}

const Button: FC<ButtonProps> = ({ children }) => {
    return <button className={classes.btn}>{children}</button>;
};

export default Button;
